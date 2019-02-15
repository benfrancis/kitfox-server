/**
 * Kitfox Server
 *
 * A voice assistant for the web.
 */
const express = require('express');
const bodyParser = require('body-parser');
const commandParser = require('./command_parser');

const app = express();

const PORT = 8082;

// Use JSON parser
app.use(bodyParser.json());

// Parse commands
app.use('/commands', commandParser);

// Serve static resources
app.use(express.static('static'));

// Start the HTTP server listening
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
