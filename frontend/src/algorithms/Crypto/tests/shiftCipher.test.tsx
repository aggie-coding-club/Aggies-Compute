import {shiftCipher} from '../shiftCipher';

test('shift_cipher_1', () => {
    let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    let message: string = "hello";
    let shift: number = 1;

    let result: string = shiftCipher(message, shift, alphabet);
    let expected: string = "ifmmp";

    expect(result === expected);
})



