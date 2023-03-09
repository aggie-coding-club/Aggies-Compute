import {affineCipher_Encrypt} from '../affineCipher';
import {affineCipher_Decrypt} from '../affineCipher';

test('affinecipher_Encrypt_1', () => {
    let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    let message: string = "howdy";
    let a: number = 9;
    let b: number = 10

    let result: string = affineCipher_Encrypt(message, a, b, alphabet)
    let expected: string = "vgals";

    expect(result === expected);
})

test('affinecipher_Decrypt_1', () => {
    let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    let message: string = "vgals";
    let a: number = 9;
    let b: number = 10;

    let result: string = affineCipher_Decrypt(message, a, b, alphabet)
    let expected: string = "howdy";

    expect(result === expected);
})

test('affinecipher_Encrypt_2', () => {
    let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    let message: string = "this is a test";
    let a: number = 25;
    let b: number = 19;

    let result: string = affineCipher_Encrypt(message, a, b, alphabet)
    let expected: string = "amlb lb t apba";

    expect(result === expected);
})

test('affinecipher_Decrypt_2', () => {
    let alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    let message: string = "amlb lb t apba";
    let a: number = 25;
    let b: number = 19;

    let result: string = affineCipher_Encrypt(message, a, b, alphabet)
    let expected: string = "this is a test";

    expect(result === expected);
})