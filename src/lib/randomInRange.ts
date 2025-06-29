/**
 * Returns a random number between the given bounds.
 *
 * For example, `randomInRange(1, 5)` might return 1.23, 4.99, etc.
 *
 * @param {number} min - The lower bound of the range.
 * @param {number} max - The upper bound of the range.
 * @returns {number} A random number in the range [min, max).
 * @throws Will throw an error if `min` is greater than `max`.
 */
export const randomInRange = (min: number, max: number): number => {
	if (min > max) throw new Error('Min cannot be greater than max');

	return Math.random() * (max - min) + min;
};
