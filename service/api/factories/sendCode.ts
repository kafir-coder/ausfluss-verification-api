import { CodeSenderMailgunAdapter } from "../../infra/code-sender/code-sender-mailgun-adapter";
import { TokenHandlerRedisAdapter } from "../../infra/token/token-handler-redis-adapter";
import { CodeSender } from "../../usecases/contracts/code-sender.contract";
import { SendCode } from "../../usecases/impl/send-code.impl"

export const makeSendCode = () => new SendCode(new CodeSenderMailgunAdapter(), new TokenHandlerRedisAdapter());