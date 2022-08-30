const SchoolReport = require("./SchoolReport");

describe(SchoolReport, () => {
	it("returns results given 1 green test score with 1 entry", () => {
		const schoolReport = new SchoolReport();

		schoolReport.add_scores("Green")

		expect(schoolReport.generate_report()).toBe("Test 1: \nGreen: 1");
	})

	it("returns results given 1 amber test score with 1 entry", () => {
		const schoolReport = new SchoolReport();

		schoolReport.add_scores("Amber")

		expect(schoolReport.generate_report()).toBe("Test 1: \nAmber: 1");
	})
})
