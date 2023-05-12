import {shiftCipher} from '../shiftCipher';

test('shift_cipher_1', () => {
    let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    let message: string = "hello";
    let shift: number = 1;

    let result: string = shiftCipher(message, shift, alphabet);
    let expected: string = "ifmmp";

    expect(result === expected);
})

test('shift_cipher_2', () => {
    let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    let message: string = "aggies";
    let shift: number = 15;

    let result: string = shiftCipher(message, shift, alphabet);
    let expected: string = "pvvxth";

    expect(result === expected);
})

test('shift_cipher_3', () => {
    let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    let message: string = "calculator";
    let shift: number = 50;

    let result: string = shiftCipher(message, shift, alphabet);
    let expected: string = "ayjasjyrmp";

    expect(result === expected);
})

test('shift_cipher_4', () => {
    let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    let message: string = "hey how are you";
    let shift: number = -9;

    let result: string = shiftCipher(message, shift, alphabet);
    let expected: string = "yvp yfn riv pfl";

    expect(result === expected);
})

test('shift_cipher_5', () => {
    let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    let message: string = "abcdefghijklmnopqrstuvwxyz";
    let shift: number = 25;

    let result: string = shiftCipher(message, shift, alphabet);
    let expected: string = "zabcdefghijklmnopqrstuvwxy";

    expect(result === expected);
})

