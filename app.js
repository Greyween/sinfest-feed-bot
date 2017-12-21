const http = require('http');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;
const url = `https://telegram.me/${process.env.TELEGRAM_CHANNEL}`;

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(`This is SinfestBot on <a href="${url}">${url}</a>`);
});

server.listen(port, () => {
	`Server listening at http://${host}:${port}`;
});