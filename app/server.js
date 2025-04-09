const express = require('express');
const os = require('os');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Paper.Social!',
    hostname: os.hostname(),
    platform: os.platform(),
    uptime: os.uptime(),
    cloudProvider: process.env.CLOUD_PROVIDER || 'local'
  });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Paper.Social app listening on port ${port}`);
});
