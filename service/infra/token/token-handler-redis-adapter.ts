import { TokenHandler } from "../../usecases/contracts/token-handler.contract";
import { TOKEN_EXPIRES } from "../../utils/env";
import { RedisHandler } from "./redis-handler";
import crypto from 'crypto'
export class TokenHandlerRedisAdapter implements TokenHandler {
    async generate(contact: string): Promise<{token: string, code: number}> {
        const token = crypto.randomUUID();
        const code = Math.floor(Math.random()*999999);
        
        await RedisHandler.client.set(contact, `${token}_${code}`, {
            EX: TOKEN_EXPIRES as unknown as number
        })

        return {token, code}; 
    }
    async exists(param: {contact: string, token: string, code: number}): Promise<boolean> {
        const {contact, token, code} = param;
        const result = RedisHandler.client.get(contact);
        return await result ===  `${token}_${code}`;
    }
    
}
