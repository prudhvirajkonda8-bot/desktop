import { describe, it } from 'node:test'
import assert from 'node:assert'
import { range } from '../../src/lib/range'

describe('range', () => {
  it('generates a range with only stop specified', () => {
    assert.deepStrictEqual(range(4), [0, 1, 2, 3])
  })

  it('generates an empty range when stop is 0', () => {
    assert.deepStrictEqual(range(0), [])
  })

  it('generates a range with start and stop', () => {
    assert.deepStrictEqual(range(1, 5), [1, 2, 3, 4])
  })

  it('generates a range with a step', () => {
    assert.deepStrictEqual(range(0, 20, 5), [0, 5, 10, 15])
  })

  it('generates a descending range with negative step', () => {
    assert.deepStrictEqual(range(0, -4, -1), [0, -1, -2, -3])
  })

  it('generates an empty range when start exceeds stop with positive step', () => {
    assert.deepStrictEqual(range(5, 2, 1), [])
  })

  it('handles null stop by treating start as stop', () => {
    assert.deepStrictEqual(range(3, null), [0, 1, 2])
  })
})
