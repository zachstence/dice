/**
 * Compares two numbers for equality within a given decimal precision.
 *
 * @param a - First number
 * @param b - Second number
 * @param precision - Number of decimal places to compare (e.g. 2 means 0.01 precision)
 * @returns true if numbers are equal within the given precision
 */
export const almostEqual = (a: number, b: number, precision: number): boolean => {
	const tolerance = Math.pow(10, -precision);
	return Math.abs(a - b) <= tolerance;
};
