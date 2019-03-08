const fs = require('fs');
const d3 = require('d3');
const request = require('request');

const OUT_PATH = './output/nfl'
const abcs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

async function getNamesHTML(letter) {
	const uppercase = letter.toUpperCase()
	const url = `https://www.pro-football-reference.com/players/${uppercase}/`
	console.log(url)

	return new Promise((resolve, reject) => {
		request(url, (err, response, body) => {
			fs.writeFileSync(`${OUT_PATH}/names-${letter}.html`, body);
		})
	})
}

function init() {
  abcs.map(getNamesHTML)
}

init();
