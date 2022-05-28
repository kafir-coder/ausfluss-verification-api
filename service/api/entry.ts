import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import { makeSendCode } from './factories/sendCode';
import { SendCodeUsecaseRequest } from '../usecases/contracts/send-code.contract';
import { ok } from './http-utils';
import { RedisHandler } from '../infra/token/redis-handler';
import { MailgunHandler } from '../infra/code-sender/mailgun-handler';
import { makeVerifyCode } from './factories/verify-coder';
import { VerifyCodeUsecaseRequest } from '../usecases/contracts/verify-code.contract';

dotenv.config({
    encoding: 'utf-8'
})
const PORT = process.env.PORT;

const app = express()
const router = express.Router()

app.use(express.json())

router.post("/api/v1/send-email", async (req: Request, res: Response) => {
    const service = makeSendCode()
    const { contact } = req.body as SendCodeUsecaseRequest
    const response = await service.sendCode({
        contact,
    })
    res.json(ok(response))
})

router.post("/api/v1/verify-code", async (req: Request, res: Response) => {
    const service = makeVerifyCode()
    const {contact, code, token} = req.body as VerifyCodeUsecaseRequest
    const response = await service.verifyCode({
        contact,
        code,
        token
    })
    res.json(ok(response))
})

app.use(router)

app.listen(PORT, async () => {
    await RedisHandler.connect()
    await MailgunHandler.connect()
    console.log("service listenning on port", PORT);
})