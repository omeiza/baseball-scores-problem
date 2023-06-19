/**
 * You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past
 * rounds may affect future rounds scores.
 *
 * At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith
 * operation you must apply to the record and is one of the following:
 *
 * 1. An integer x - Record a new score of x.
 * 2. "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
 * 3. "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
 * 4. "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will be a previous score.
 *
 * Return the sum of all the scores on the record.
 */

function getTotalScore(ops) {
	let result = 0;
	const split = ops.split(" ");

	if (1 <= split.length <= 1000) {
		const cache = [];
		for (let i = 0; i < split.length; i++) {
			if (!isNaN(split[i])) {
				cache.push(parseInt(split[i]));
			} else {
				if (split[i] === "+") cache.push(cache[cache.length - 1] + cache[cache.length - 2]);
				if (split[i] === "D") cache.push(cache[cache.length - 1] * 2);
				if (split[i] === "C") cache.pop();
			}
		}

		if (cache.length > 0) {
			result = cache.reduce(function(accumulator, a) {
				return accumulator + a;
			}, 0);
		}
	}

	return result;
}

console.log(getTotalScore("5 2 C D +"));