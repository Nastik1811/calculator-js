export const BIN_OPERATIONS = {
    ADD: '+',
    SUB: '-',
    MUL: '*',
    DIV: '/',
    MOD: '%',
    POWER_OF_Y: 'x^y',
    Y_SQRT: 'ysqrt',
}

export const UNARY_OPERATIONS = {
    NEG: '+/-',
    POWER_OF_TWO: '2^x',
    SQUARE: 'x^2',
    SQRT: 'sqrt',
    LN: 'ln',
    LG: 'lg',
    TENX: '10x',
    EX: 'e^x',
    REVERSE: '1/x',
}

export function isBinary(operator) {
    return Object.values(BIN_OPERATIONS).includes(operator)
}

export function isUnary(operator) {
    return Object.values(UNARY_OPERATIONS).includes(operator)
}
