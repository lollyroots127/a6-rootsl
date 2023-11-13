'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));	

let htmlTop = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Laura Roots</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, noarchive, nofollow" />
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png"> 
    <link rel="icon" type="image/png" sizes="512x512" href="android-chrome-512x512.png"> 
    <link rel="icon" type="image/png" sizes="192x192" href="android-chrome-192x192.png"> 
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png"> 
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"> 
    <link rel="manifest" href="site.webmanifest">
</head>
<body>
    <header>
        <img id="logo" src="android-chrome-192x192.png">
        <h1>Laura Roots</h1>
    </header>
    <nav>
        <a href="index.html">Home</a>
        <a href="contact.html">Contact</a>
        <a href="gallery.html">Gallery</a>
    </nav>
    <main>
    <section>
`

let htmlBottom = `
   </section>
  </main>
   <footer>
   <p>&copy; 2023 Laura Roots</p>
   </footer>
  </body>
  </html>
`

app.post("/review", (req, res) => {
    const user = req.body.name;
    const emailAddress = req.body.email;
    const notes = req.body.message;
    const device = req.body.device;
    const contactYesNo = req.body.contact;
    const likes = req.body.likes;
    res.send(`
      ${htmlTop}
      <h2>Response</h2>
      <article>
      <p>Hello ${user}.</p>
      <p>Thank you for visiting our website on your ${device}.
      We are glad you liked ${likes}. Thank you for leaving this message:</p>
      <p>${notes}</p>
      <p>
      You said: "${contactYesNo}" to being contacted further.
      If requested, we will contact you at ${emailAddress}.</p>
      </article>
      ${htmlBottom}`
      );
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

