/**
 * Command Parser
 *
 * Turns natural language commands into HTTP requests.
 */

var express = require('express');
var router = express.Router();
var SEARCH_ENGINE = 'https://duckduckgo.com?q=';

router.post('/', function (request, response) {
  // If no command text provided, respond with an error.
  if (!request.body.text) {
    response.status(400).json({
      'error': 'Empty command'
    });
    return;
  }

  // Turn command text into a search URL
  var searchUrl = SEARCH_ENGINE + encodeURIComponent(request.body.text);

  // Tell the client to GET the search URL, with text to show the user
  var responseBody = {
    'method': 'GET',
    'url': searchUrl,
    'text': 'OK, searching DuckDuckGo for "' + request.body.text +'"...'
  }

  response.status(200).json(responseBody);
});

module.exports = router;
