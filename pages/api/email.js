import ConnectDB from "../../middleware/_db";
import { SMTPClient } from "emailjs";

const handler = async (req, res) => {
  const { method, body } = req;

  const client = new SMTPClient({
    user: process.env.NEXT_EMAIL,
    password: process.env.NEXT_PASSWORD,
    host: "smtp.gmail.com",
    ssl: true,
  });
  if (method == "POST") {
    client.send({
      text: `Just for testing purpose`,
      from: process.env.NEXT_EMAIL,
      to: body.email,
      subject: "testing emailjs",
    });
    res.status(200).end(JSON.stringify({ message: "Send Mail" }));
  }
};
export default ConnectDB(handler);
