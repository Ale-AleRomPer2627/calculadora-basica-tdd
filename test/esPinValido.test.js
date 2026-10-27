
import { describe, expect, test } from 'vitest';     //ABRP2627
import { esPinValido } from '../src/esPinValido.js';

describe('esPinValido', () => {

    test('debe retornar false para un PIN vacío', () => {
        expect(esPinValido('')).toBe(false);
    });

    test('debe retornar false para un PIN con menos de 4 dígitos', () => {
        expect(esPinValido('123')).toBe(false);
    });

    test('debe retornar false para un PIN con más de 6 dígitos', () => {
        expect(esPinValido('1234567')).toBe(false);
    });

    test('debe retornar false para un PIN null o undefined', () => {
        expect(esPinValido(null)).toBe(false);
        expect(esPinValido(undefined)).toBe(false);
    });

    test('debe retornar false para un PIN con caracteres no numéricos', () => {
        expect(esPinValido('12a4')).toBe(false);
    });

    test('debe retornar false para un PIN con espacios', () => {
        expect(esPinValido('12 34')).toBe(false);
    });

    test('debe retornar false para un PIN con caracteres especiales', () => {
        expect(esPinValido('12@4')).toBe(false);
    });

    test('debe retornar false para un PIN de 5 dígitos', () => {
        expect(esPinValido('12345')).toBe(false);
    });

    test('debe retornar false cuando todos los dígitos son iguales', () => {
        expect(esPinValido('1111')).toBe(false);
        expect(esPinValido('888888')).toBe(false);
        expect(esPinValido('33333')).toBe(false);
    });

    test('debe retornar true para un PIN válido de 4 dígitos', () => {
        expect(esPinValido('1234')).toBe(true);
    });

    test('debe retornar true para un PIN válido de 6 dígitos', () => {
        expect(esPinValido('123456')).toBe(true);
    });

});
