import getTotalScore from "./index";

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

