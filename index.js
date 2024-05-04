const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Brainfuck = require('brainfuck-js');

const app = express();
const brainfuck = new Brainfuck();

app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const { script } = req.body;
  try {
    const output = brainfuck.execute(script).output;
    res.json({ output });
  } catch (error) {
    res.status(500).json({ error: 'Failed to execute script' });
  }
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));