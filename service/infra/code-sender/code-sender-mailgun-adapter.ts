import { CodeSender } from "../../usecases/contracts/code-sender.contract";
import { MailgunHandler } from "./mailgun-handler";

export class CodeSenderMailgunAdapter implements CodeSender {
    async send(email: string, content: string): Promise<void> {
        MailgunHandler.client.messages().send({
            to: email,
            from: "caio.tony@ausfluss.net",
            html: content,
            subject: 'verification code'
        })
    }
}
