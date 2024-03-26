import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendVerificationEmail(email, token, organization) {
  try {
    await transporter.sendMail({
      from: "no-reply@webDev2776.com",
      to: email,
      subject: "Your Verification Code",
      html: `<h1>Hello,</h1><br /><br /><p>Your verification code for ${organization} is: <strong>${token}</strong>. It will expire in 10 minutes. <a href="http://localhost:3000/register/new?inEmail=${email}&inOrg=${organization}&inCode=${token}">Enter Code</a></p><br /><p>Thank You for trusting <span style="color: red; font-weight: bold;">SMRT</span><span> eVote</span></p>`,
    });
  } catch (error) {
    console.log(error);
    return { error: "Error sending email." };
  }
}
