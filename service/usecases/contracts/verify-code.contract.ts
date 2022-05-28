
export interface VerifyCodeUsecase {
    verifyCode(verifyParams: VerifyCodeUsecaseRequest): Promise<VerifyCodeUsecaseResponse | Error>
};

export type VerifyCodeUsecaseRequest = {
    contact: string
    code: number
    token: string
};

export type VerifyCodeUsecaseResponse = {
    verified: boolean
};
