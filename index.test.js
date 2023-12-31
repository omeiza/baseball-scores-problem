import getTotalScore from "./index";

describe("Interprete baseball scoreboard", () => {
	/**
	 * Test Case 1
	 * input = "5 2 C D +"
	 * expected value = 30
	 */
	test("Gets total score of baseball board: '5 2 C D +' to equal 30 😊", () => {
		expect(getTotalScore("5 2 C D +")).toBe(30);
	});

	/**
	 * Test Case 2
	 * input = "5 -2 4 C D 9 + +"
	 * expected value = 27
	 */
	test("Gets total score of baseball board: '5 -2 4 C D 9 + +' to equal 27 😊", () => {
		expect(getTotalScore("5 -2 4 C D 9 + +")).toBe(27);
	});

	/**
	 * Test Case 3
	 * input = "1"
	 * expected value = 1
	 */
	test("Gets total score of baseball board: '1' to equal 1 😊", () => {
		expect(getTotalScore("1")).toBe(1);
	});
});

