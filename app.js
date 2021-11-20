var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8573ccffc1fe63",
      pass: "bfae400a83dd1d"
    }
  });

  message = {
    from: "from-example@email.com",
    to: "to-example@email.com",
    subject: "Subject",
    text: "Hello SMTP Email"
}

 
transporter.sendMail(message, **function**(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
} 