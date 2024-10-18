// Create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a new comment
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  res.json(comment);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

