import { describe, it, expect } from 'vitest'
import { fibonacci } from '../src/fibonacci.js'

describe('fibonacci', () => {
    it('fibonacci de 1', () => {
        expect(fibonacci(1)).toBe(1)
    })
    it('fibonacci de 0', () => {
        expect(fibonacci(0)).toBe(0)
    })
    it('fibonacci de 2', () => {
        expect(fibonacci(2)).toBe(1)
    })
    it('fibonacci de 6', () => {
        expect(fibonacci(6)).toBe(8)
    })
    it('fibonacci de 3', () => {
        expect(fibonacci(3)).toBe(2)
    })

    it('fibonacci de un número negativo', () => {
        expect(() => fibonacci(-1))
            .toThrow(new RangeError('solo números enteros ≥ 0'))
    })
})