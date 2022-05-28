
export interface SendCodeUsecase {
    sendCode(sendParams: SendCodeUsecaseRequest): Promise<SendCodeUsecaseResponse | Error>
};

export type SendCodeUsecaseRequest = {
    contact: string
};

export type SendCodeUsecaseResponse = {
    token: string
    expiresIn: string
};
