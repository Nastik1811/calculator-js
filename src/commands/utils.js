export const ACCURACY = 10 ** 7

export function round(result) {
    return Math.round(result * ACCURACY) / ACCURACY
}
