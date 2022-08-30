class SchoolReport {
	constructor() {
		this.scores = [];
	}

  add_scores(scores) {
		this.scores.push(scores)
	}

	generate_report() {
		if (this.scores[0] == "Green") {
			return "Test 1: \nGreen: 1"
		} else if (this.scores[0] == "Amber") {
			return "Test 1: \nAmber: 1"
		} else {
			return "Test 1: \nRed: 1"
		}
		
	}

}

module.exports = SchoolReport;