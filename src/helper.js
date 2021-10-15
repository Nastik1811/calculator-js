export const BIN_OPERATIONS = {
    ADD: '+',
    SUB: '-',
    MUL: '*',
    DIV: '/',
    MOD: 'mod',
    POWER: 'xy',
    Y_SQRT: 'ysqrt',
}

export const UNARY_OPERATIONS = {
    NEG: 'neg',
    POWER_OF_TWO: '2nd',
    SQUARE: 'x2',
    SQRT: 'sqrt',
    LN: 'ln',
    LG: 'lg',
    TENX: '10x',
    EX: 'ex',
    REVERSE: '1/x',
}

export function isBinary(operator) {
    return Object.values(BIN_OPERATIONS).includes(operator)
}

export function isUnary(operator) {
    return Object.values(UNARY_OPERATIONS).includes(operator)
}
