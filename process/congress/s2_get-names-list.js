const fs = require('fs');
const d3 = require('d3');
const request = require('request');
const cheerio = require('cheerio');

const IN_PATH = './output/congress/';
const OUT_PATH = './output/congress';
const names = [];
const pages = d3.range(1, 11)

function getNames(page) {
	const file = fs.readFileSync(`${IN_PATH}names-${page}.html`, 'utf-8');
	const $ = cheerio.load(file)

	$('#main ol .expanded')
		.each((i, el) => {
			let name = $(el)
				.find('span a')
				.text()
			let firstName = name.split(',')[1].trim()
			let lastName = name.split(',')[0].trim()
			lastName = lastName.replace('Representative ', '')
			lastName = lastName.replace('Senator ', '')
			name = firstName.concat(' ', lastName)
			let stats = $(el)
				.find('.quick-search-member .member-image-exists')
				.children()
				.last()
			let dates = stats
				.find('span ul li')
				.text()
				// .trim()
			// dates = dates.slice((dates.length - 9), dates.length)
			// let startDate = dates.split('-')[0];
			// let endDate = dates.split('-')[1];
			// const league = 'nfl'
			if (name) names.push({name, dates})
		});
		return names;
}

function init() {
	pages.map(getNames)
	const allNames = [].concat(...names).map(d => ({
		...d
	}));

	const csv = d3.csvFormat(allNames);
	fs.writeFileSync(`${OUT_PATH}/names.csv`, csv)
}

init();
