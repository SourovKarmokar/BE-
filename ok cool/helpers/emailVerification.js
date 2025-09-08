const nodemailer = require("nodemailer");
function emailVerification(email) {
  // Create a test account or replace with real credentials.
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sourovkarmokar020@gmail.com",
      pass: "slpsrzauynavzlng",
    },
  });

  // Wrap in an async IIFE so we can use await.
  (async () => {
    const info = await transporter.sendMail({
      from: '"Ok Cool" <sourovkarmokar020@gmail.com>',
      to: email,
      subject: "Hello ✔",
      text: "Hello world?", // plain‑text body
      html: "<b>Hello world?</b>", // HTML body
    });

    console.log("Message sent:", info.messageId);
  })();
}

module.exports = emailVerification;
