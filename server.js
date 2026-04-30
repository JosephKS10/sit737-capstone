const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({ message: 'Cloud-Native REST API running on GKE', status: 'healthy' });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.get('/api/info', (req, res) => {
  res.json({
    app: 'sit737-capstone-api',
    version: '1.0.0',
    student: 'Joseph',
    platform: 'GKE'
  });
});

app.listen(PORT, () => console.log(`API listening on ${PORT}`));