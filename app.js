const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const randomBits = Math.floor(Math.random() * 256).toString(2).padStart(8, '0');

  res.send(`
    <html>
    <head><title>BitFlip Demo</title></head>
    <body style="font-family: monospace; text-align: center; padding: 50px;">
      <h1>BitFlip Demo</h1>
      <h2>Losowe bity:</h2>
      <div style="font-size: 2em; margin: 20px;">${randomBits}</div>
      <button onclick="location.reload()">Nowe bity</button>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`BitFlip Demo działa na http://localhost:${PORT}`);
});