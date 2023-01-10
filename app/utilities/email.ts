import { createTransport } from 'nodemailer';



export const sendEmail = async (
    to: string | string[],
    subject: string,
    message: string
) => {
    try {
        const { EMAIL_PASSWORD } = process.env;
        const transport = createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'quentin.schowalter81@ethereal.email',
                pass: EMAIL_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            },
        });
        console.log("password" + EMAIL_PASSWORD);
        await transport.sendMail({
            to,
            subject,
            text: message,
            from: "rahul.mane@coditas.com"
        });

        return true;
    } catch (e) {
        throw e;
    }
}