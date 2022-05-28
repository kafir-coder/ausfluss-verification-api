import { TokenHandler } from "../contracts/token-handler.contract";
import { VerifyCodeUsecase, VerifyCodeUsecaseRequest, VerifyCodeUsecaseResponse } from "../contracts/verify-code.contract";

export class VerifyCode implements VerifyCodeUsecase {
    constructor(
        private readonly codeVerifier: TokenHandler
    ) {}
    async verifyCode(verifyParams: VerifyCodeUsecaseRequest): Promise<VerifyCodeUsecaseResponse | Error> {
        try {
            const { contact, code, token } = verifyParams;

            const isVerified = await this.codeVerifier.exists({contact, token, code})
            
            return {
                verified: isVerified
            }
        } catch (error: any) {
            return error
        }
    }
}