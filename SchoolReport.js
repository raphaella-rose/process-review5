class SchoolReport {
	constructor() {
		this.scores = [];
	}

  add_scores(scores) {
		this.scores.push(scores)
	}

	generate_report() {
		
		return `Test 1: \n${this.scores[0]}: 1`
	}

}

module.exports = SchoolReport;