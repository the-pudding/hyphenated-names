const fs = require('fs');
const d3 = require('d3');
const request = require('request');
const cheerio = require('cheerio');

const IN_PATH = './output/wnba/';
const OUT_PATH = './output/wnba';
const names = [];
const abcs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function getNames(letter) {
	const file = fs.readFileSync(`${IN_PATH}names-${letter}.html`, 'utf-8');
	const $ = cheerio.load(file)

	$('#content p')
		.each((i, el) => {
			const name = $(el)
				.find('a')
				.text()
			let dates = $(el)
				.text()
			dates = dates.split('\n')[2]
			let startDate = null;
			if (dates != undefined){
				startDate = dates.substring(0,4)
			}
			if (name && dates != undefined) names.push({name, dates, startDate})
		});
		console.log(names)
		return names;
}

function init() {
	abcs.map(getNames)

	const allNames = [].concat(...names).map(d => ({
		...d
	}));

	const csv = d3.csvFormat(allNames);
	fs.writeFileSync(`${OUT_PATH}/names.csv`, csv)
}

init();
