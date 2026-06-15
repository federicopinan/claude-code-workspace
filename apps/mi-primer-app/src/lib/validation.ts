// Validation utilities using Zod

import { z } from 'zod'

// User validation schema
export const userSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be at most 100 characters'),
  email: z.string().email('Invalid email format'),
  role: z.enum(['admin', 'user', 'guest']).default('user'),
})

// Type inference from schema
export type UserSchema = z.infer<typeof userSchema>

// Form validation helper
export function validateUser(data: unknown) {
  return userSchema.safeParse(data)
}

// Async validation example (e.g., checking email uniqueness)
export async function validateUserAsync(data: unknown) {
  // Simulate async validation
  await new Promise((resolve) => setTimeout(resolve, 100))

  const result = userSchema.safeParse(data)
  if (!result.success) {
    return result
  }

  // Add async checks here (e.g., API call to check email uniqueness)
  return result
}
