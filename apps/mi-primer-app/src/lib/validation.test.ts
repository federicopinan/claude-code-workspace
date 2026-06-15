import { describe, expect, it } from 'vitest'

import { validateUser } from './validation'

describe('validateUser', () => {
  it('accepts valid user input and applies the default role', () => {
    const result = validateUser({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
    })

    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data).toEqual({
        name: 'Ada Lovelace',
        email: 'ada@example.com',
        role: 'user',
      })
    }
  })

  it('rejects invalid email addresses', () => {
    const result = validateUser({
      name: 'Ada Lovelace',
      email: 'not-an-email',
    })

    expect(result.success).toBe(false)
  })
})
