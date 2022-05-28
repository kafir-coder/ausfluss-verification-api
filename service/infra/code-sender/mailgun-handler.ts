import Mailgun from 'mailgun-js'
import { MAILGUN_API_KEY, MAILGUN_DOMAIN } from '../../utils/env'
export const MailgunHandler = {
    client: null as unknown as Mailgun.Mailgun,
    connect() {
        this.client = new Mailgun({
            apiKey: MAILGUN_API_KEY,
            domain: MAILGUN_DOMAIN
        })
    }
}