// User entity - demonstrates interface over type pattern
export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  createdAt: Date
}

export type UserRole = 'admin' | 'user' | 'guest'

// Value object for user creation
export interface CreateUserInput {
  name: string
  email: string
  role?: UserRole
}

// Partial update input
export type UpdateUserInput = Partial<CreateUserInput>

// User with computed/derived fields
export interface UserWithStats extends User {
  loginCount: number
  lastLogin: Date | null
}