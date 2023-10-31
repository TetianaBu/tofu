import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function PUT(req, res) {
  console.log(req.body, "req.body;");
  console.log(req);
  if (req.method === "PUT") {
    const { name, email, message } = req.body;
    console.log("Received data:", { name, email, message });
    const msg = `Name: ${name}\r\n Email: ${email}\r\n Message: ${message}`;
    const data = {
      to: "tetianataker@gmail.com",
      from: { email },
      subject: `${name.toUpperCase()} sent you a message from Contact Form`,
      text: `Email => ${email}`,
      html: msg.replace(/\r\n/g, "<br>"),
    };

    try {
      console.log(data, "inside");
      await sgMail.send(data);
      res.status(200).json({
        message: "Your message was sent successfully.",
      });
    } catch (err) {
      res.status(500).json({
        message: `There was an error sending your message. ${err}`,
      });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
