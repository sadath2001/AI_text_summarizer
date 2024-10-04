const express = require('express');
const summarizeText = require('./summarize.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/summarize', (req, res) => {
  // to hand
  const text = req.body.text_to_summarize;
  summarizeText(text).then(response => {
    res.send(response);
  })
    .catch(error => {
      console.log(error.message);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
