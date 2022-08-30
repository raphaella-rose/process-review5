class SchoolReport {
	constructor() {
		this.scores = [];
	}

  add_scores(scores) {
		this.scores = scores.split(",");
	}

	generate_report() {
		let counter = 0;
		for (let i = 0; i < this.scores.length; i++) {
			counter++
		}

		return `Test 1: \n${this.scores[0]}: ${counter}`
	}

}

module.exports = SchoolReport;