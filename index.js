const http = require('http');

const requestHandler = (request, response) => {
  console.log(request.url);

  const html = `
  <html>
    <body>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      <div class="container text-center mt-5 pt-5">
        <h1>Hello World!</h1>
        <p>This is a basic webserver!</p>
      </div>
    </body>
  </html>
  `

  response.end(html);
}

const server = http.createServer(requestHandler);

const port = process.env.PORT || 8080;

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});

// Exit the process when signal is received (For docker)
process.on('SIGINT', () => {
  process.exit();
});