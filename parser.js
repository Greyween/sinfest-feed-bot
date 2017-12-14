const http = require('http');
const htmlParser = require('htmlparser2');

const HOSTNAME = 'www.sinfest.net'

function parseIndexPage(cb) {
	const parser = new htmlParser.Parser({
		onopentag: (name, attr) => {
			if (name === 'img' && 
					attr.src.indexOf('btphp') !== -1) {
				console.log(`Parsed url: ${attr.src}`);
				cb(`${HOSTNAME}/${attr.src}`);
			}
		}
	}, {
		decodeEntities: true
	});

	const options = {
		hostname: HOSTNAME,
		path: '/index.php',
		method: 'GET',
		headers: {
			'user-agent': 'Mozilla/5.0'
		}		
	}

	http.get(options, (res) => {
		res.on('data', (chunk) => {
			parser.write(chunk);
		});

		res.on('end', () => {
			parser.end();
		});

		res.on('error', (err) => {
			console.error(err);
		});
	});
}

parseIndexPage((url) => console.log(url));

module.exports = parseIndexPage;