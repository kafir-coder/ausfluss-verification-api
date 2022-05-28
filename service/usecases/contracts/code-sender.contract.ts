export interface CodeSender {
    send(email: string, content: string): Promise<void>
}