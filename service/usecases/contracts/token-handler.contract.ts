export interface TokenHandler {
    generate(contact: string): Promise<{token: string, code: number}>
    exists(param: {contact: string, token: string, code: number}): Promise<boolean>
}