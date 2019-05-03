# Hyphenated last names in US pro sports

Node scripts to gather and clean data for an article on the rise of double-barrelled last names in US professional sports.

## Setup

#### Dependencies

- [node](https://nodejs.org/en/)
- [cheerio](https://cheerio.js.org/)
- [d3](https://d3js.org/)
- [request](https://www.npmjs.com/package/request)
- [fs](https://nodejs.org/api/fs.html)
- [lodash](https://lodash.com/)

#### Install

Clone the repo and run `npm i`

## Reproduce

### WNBA

#### `npm run wnba-get-names-html`

Pulls down html pages of alphabetized WNBA players from [Basketball Reference](https://www.basketball-reference.com/wnba/players/) and saves into the `output/wnba` folder as `names-{letter}.html`

#### `npm run wnba-get-names-list`

Compiles and formats all WNBA player names and saves into `output/wnba` as `names.csv` 

### NBA

#### `npm run nba-get-names-html`

Pulls down html pages of alphabetized NBA players from [Basketball Reference](https://www.basketball-reference.com/players/) and saves into the `output/nba` folder as `names-{letter}.html`

#### `npm run nba-get-names-list`

Compiles and formats all NBA player names and saves into `output/nba` as `names.csv` 

### NFL

#### `npm run nfl-get-names-html`

Pulls down html pages of alphabetized NFL players from [Football Reference](https://www.pro-football-reference.com/players/) and saves into the `output/nfl` folder as `names-{letter}.html`

#### `npm run nfl-get-names-list`

Compiles and formats all NFL player names and saves into `output/nfl` as `names.csv` 

### MLB

#### `npm run mlb-get-names-html`

Pulls down html pages of alphabetized MLB players from [Baseball Reference](https://www.baseball-reference.com/players/) and saves into the `output/mlb` folder as `names-{letter}.html`

#### `npm run mlb-get-names-list`

Compiles and formats all MLB player names and saves into `output/mlb` as `names.csv` 

### NHL

#### `npm run nhl-get-names-html`

Pulls down html pages of alphabetized NHL players from [Hockey Reference](https://www.hockey-reference.com/players/) and saves into the `output/nhl` folder as `names-{letter}.html`

#### `npm run nhl-get-names-list`

Compiles and formats all NHL player names and saves into `output/nhl` as `names.csv`

### MLS

#### `npm run mls-get-names-list`

Compiles previously downloaded MLS player names from `output/mls/csvs` and saves into `output/nwsl` as `names-no-years.csv` 

#### `npm run mls-format-years`

Formats all MLS player names and saves into `output/mls` as `names.csv` 

### NWSL

#### `npm run nwsl-get-names-html`

Pulls down html pages of alphabetized NWSL players from [NWSL](http://www.nwslsoccer.com/stats?season=2016#players) and saves into the `output/nhl` folder as `season-{season}.html`

#### `npm run nwsl-get-names-list`

Compiles all NWSL player names and saves into `output/nwsl` as `names-no-years.csv` 

#### `npm run nwls-format-years`

Formats all NWSL player names and saves into `output/nwsl` as `names.csv` 

### Congress

#### `npm run congress-get-names-html`

Pulls down html pages of alphabetized US congressional members from [congress.gov](https://www.congress.gov/members?pageSize=250&page=1) and saves into the `output/congress` folder as `names-{page}.html`

#### `npm run congress-get-names-list`

Compiles and formats all congressional names and saves into `output/congress` as `names.csv`

### Combining

#### `npm run combine-all-names`

Compiles names from all leagues and saves into `output` as:
- `allCombinedNames.csv` which includes names from Congress
- `hyphensCombinedNames.csv` which includes only last names with hyphens
- `sportsCombinedNames.csv` which includes all sports names without Congress


## Notes

Korean names, where the last name appears before the first name, were later manually untagged as hyphenated names. 


