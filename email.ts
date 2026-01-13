import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: Number(process.env.SMTP_PORT!),
  secure: false,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});

export async function sendVerificationEmail(to: string, token: string) {
  const url = `${process.env.BASE_URL}/auth/verify/${token}`;
  await transporter.sendMail({
    from: process.env.EMAIL_FROM!,
    to,
    subject: 'Verify your email - HORLAKS COUTURE',
    html: `<p>Welcome to HORLAKS COUTURE!</p>
           <p>Please verify your email by clicking <a href="${url}">this link</a>.</p>`,
  });
}

export async function sendOrderStatusEmail(to: string, orderId: string, status: string) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM!,
    to,
    subject: `Order ${orderId} update - HORLAKS COUTURE`,
    html: `<p>Your order <b>${orderId}</b> status is now: <b>${status}</b>.</p>`,
  });
}
