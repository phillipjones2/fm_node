const logger = require('./logger'),
			Point = require('./Point');

logger.info('Hello World!');

var pt = new Point(4,6);
pt.print();

const http = require('http'),
			port = 3000;

const requestHandler = (request, response) => {
	console.log(request.url);
	response.end('Hello Node.js Server!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
		if (err) {
			return console.log('bad', err);
		}
		console.log('server is listening on ' + port + 'new new');
});
