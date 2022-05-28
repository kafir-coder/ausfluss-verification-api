import { TokenHandlerRedisAdapter } from "../../infra/token/token-handler-redis-adapter";
import { VerifyCode } from "../../usecases/impl/verify-code.impl";

export const makeVerifyCode = () => new VerifyCode(new TokenHandlerRedisAdapter())
