const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.use('/', express.static('public'));

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
