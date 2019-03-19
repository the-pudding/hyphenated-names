const fs = require('fs');
const d3 = require('d3');
const _ = require('lodash');

const OUT_PATH = './output/'
const CON_IN = './output/congress/names.csv'
const MLB_IN = './output/mlb/names.csv'
const MLS_IN = './output/mls/names.csv'
const NBA_IN = './output/nba/names.csv'
const NFL_IN = './output/nfl/names.csv'
const NHL_IN = './output/nhl/names.csv'
const NWLS_IN = './output/nwls/names.csv'
const WNBA_IN = './output/wnba/names.csv'

const files = [CON_IN, MLB_IN, MLS_IN, NBA_IN, NFL_IN, NHL_IN, NWLS_IN, WNBA_IN]
let combinedNames = []

function processCSV(filename) {
	let raw = fs.readFileSync(filename, 'utf-8')
	let csv = d3.csvParse(raw)
	let newdb = _.unionBy(combinedNames, csv, 'name')
	combinedNames = newdb
}

function init() {
	_.each(files, filename => processCSV(filename))

	const all = d3.csvFormat(combinedNames);
	fs.writeFileSync(`${OUT_PATH}/allCombinedNames.csv`, all)
}

init();
