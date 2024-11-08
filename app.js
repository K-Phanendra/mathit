// ARITHMETIC OPERATION

// Addition
export function add(...args) {
    return args.reduce((a, b) => a + b, 0);
}
// Subtraction
export function sub(...args) {
    return args.reduce((a, b) => a - b, 0);
}
// Multiplication
export function mul(...args) {
    return args.reduce((a, b) => a * b, 0);
}
// Division
export function div(...args) {
    return args.reduce((a, b) => a / b, 0);
}
// Module
export function mod(...args) {
    return args.reduce((a, b) => a % b, 0);
}
// exponentiation
export function expo(...args) {
    return args.reduce((a, b) => Math.pow(a,b));
}