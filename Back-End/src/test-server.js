const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from test server');
});

app.listen(8080, () => {
  console.log('Test server running on http://localhost:8080');
});
