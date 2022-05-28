import { TOKEN_EXPIRES } from "../../utils/env";
import { CodeSender } from "../contracts/code-sender.contract";
import { SendCodeUsecase, SendCodeUsecaseRequest, SendCodeUsecaseResponse } from "../contracts/send-code.contract";
import { TokenHandler } from "../contracts/token-handler.contract";

export class SendCode implements SendCodeUsecase {
    constructor (
        private readonly codeSender: CodeSender,
        private readonly tokenGenerator: TokenHandler
    ) {}
    async sendCode(sendParams: SendCodeUsecaseRequest): Promise<SendCodeUsecaseResponse | Error> {
        try {
            const { contact } = sendParams;
            const {token, code} = await this.tokenGenerator.generate(contact)
            await this.codeSender.send(contact, `The verification code is ${code}`)
            return {
                token: token,
                expiresIn: `${TOKEN_EXPIRES} seconds`,
            }   
        } catch (error: any) {
            return error
        }
    }
}