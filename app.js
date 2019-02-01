const express = require('express');
const app = express();
const port = 8081;

// Serve static resources
app.use(express.static('static'));

app.listen(port, () => console.log(`Listening on port ${port}!`));
