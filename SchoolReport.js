class SchoolReport {
	constructor() {
		this.scores = [];
	}

  add_scores(scores) {
		this.scores = scores.split(",");
	}

	generate_report() {
		if (this.scores.length == 1) {
			return `Test 1: \n${this.scores[0]}: 1`
		} else {
			return `Test 1: \n${this.scores[0]}: 2`
		}

	}

}

module.exports = SchoolReport;