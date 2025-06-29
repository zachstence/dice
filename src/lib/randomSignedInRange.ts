/**
 * Returns a random number with a random sign (positive or negative),
 * where the absolute value is between the given positive bounds.
 *
 * For example, `getNum(1, 5)` might return a number in [-5, -1] or [1, 5].
 *
 * @param {number} min - The lower bound of the absolute value (must be > 0).
 * @param {number} max - The upper bound of the absolute value (must be > 0).
 * @returns {number} A random number where `abs(result)` is between `min` and `max`, and `result` is either positive or negative.
 * @throws Will throw an error if `min` or `max` is not a positive number.
 */
export const randomSignedInRange = (min: number, max: number): number => {
	if (min < 0 || max < 0) throw new Error('Bounds must be positive');
	if (min > max) [min, max] = [max, min];

	const absValue = Math.random() * (max - min) + min;
	const sign = Math.random() < 0.5 ? -1 : 1;

	return sign * absValue;
};
