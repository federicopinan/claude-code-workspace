# Código Reference

Patrones de arquitectura y código para aplicaciones mantenibles.

## Principios de Arquitectura

### Clean Architecture Layers
```
┌─────────────────────────────────────┐
│            UI / Views               │
│    (Components, Pages, Controllers) │
├─────────────────────────────────────┤
│         Application / Use Cases      │
│          (Services, Commands)       │
├─────────────────────────────────────┤
│              Domain                 │
│         (Entities, Value Objects)   │
├─────────────────────────────────────┤
│          Infrastructure              │
│    (DB, External APIs, I/O)         │
└─────────────────────────────────────┘
```

**Regla**: Las dependencias van hacia adentro. UI depende de Application, Application de Domain, etc.

### Atomic Design
```
Atoms     → Button, Input, Label, Icon
Molecules  → FormField, SearchBar, CardHeader
Organisms  → Navbar, ProductList, CommentSection
Templates  → PageLayout, DashboardLayout
Pages      → HomePage, ProfilePage, CheckoutPage
```

### Container/Presentational Pattern
```typescript
// Container (lógica, estado)
function UserListContainer() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers().then(setUsers).finally(() => setLoading(false))
  }, [])

  return <UserList users={users} loading={loading} />
}

// Presentational (solo presentación)
function UserList({ users, loading }: Props) {
  if (loading) return <Skeleton />
  return users.map(user => <UserCard key={user.id} user={user} />)
}
```

## TypeScript Patterns

### Interfaces vs Types
```typescript
// Preferir interfaces para objetos extensibles
interface User {
  id: string
  name: string
  email: string
}

// Types para uniones o computed
type Status = 'pending' | 'active' | 'inactive'
type UserOrAdmin = User | Admin
```

### Generics con Constraints
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
```

### Utility Types
```typescript
// Comunes
Partial<T>           // todas las props opcionales
Required<T>         // todas las props requeridas
Pick<T, K>          // seleccionar props
Omit<T, K>          // remover props
Record<K, V>        // objeto con keys específicas
NonNullable<T>       // no null ni undefined
ReturnType<F>       // tipo de retorno de función
```

## React Patterns

### Component Structure
```typescript
import { useState, useCallback } from 'react'

interface Props {
  title: string
  onSubmit: (data: FormData) => void
}

// 1. Logic hooks
function useForm(initial: FormData) {
  const [values, setValues] = useState(initial)
  const update = useCallback((field: string, value: string) => {
    setValues(prev => ({ ...prev, [field]: value }))
  }, [])
  return { values, update }
}

// 2. Component
export function MyForm({ title, onSubmit }: Props) {
  const { values, update } = useForm({ field1: '', field2: '' })

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(values)
  }, [values, onSubmit])

  return (
    <form onSubmit={handleSubmit}>
      <input value={values.field1} onChange={e => update('field1', e.target.value)} />
    </form>
  )
}
```

### Custom Hooks
```typescript
// Nombres: use + lo que hace
function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debounced
}

function useAsync<T>(fn: () => Promise<T>) {
  const [state, setState] = useState<AsyncState<T>>({
    loading: false,
    data: null,
    error: null
  })

  const execute = useCallback(async () => {
    setState({ loading: true, data: null, error: null })
    try {
      const data = await fn()
      setState({ loading: false, data, error: null })
    } catch (error) {
      setState({ loading: false, data: null, error })
    }
  }, [fn])

  return { ...state, execute }
}
```

## API Patterns

### RESTful Design
```typescript
// Recursos
GET    /users          → listar usuarios
POST   /users          → crear usuario
GET    /users/:id      → obtener usuario
PATCH  /users/:id      → actualizar usuario
DELETE /users/:id      → eliminar usuario

// Nested resources
GET    /users/:id/orders     → órdenes del usuario
POST   /users/:id/orders     → crear orden para usuario
```

### Error Response Format
```typescript
interface ApiError {
  code: string      // Error code para debugging
  message: string  // Mensaje para usuario
  details?: Record<string, string[]>  // Validation errors
}

const errorResponse = {
  code: 'VALIDATION_ERROR',
  message: 'Datos inválidos',
  details: {
    email: ['Formato de email inválido'],
    password: ['Mínimo 8 caracteres']
  }
}
```

### Status Codes
```
200 OK           → Success con data
201 Created      → Recurso creado
204 No Content   → Success sin response body
400 Bad Request  → Validation error
401 Unauthorized → No authenticated
403 Forbidden    → No permission
404 Not Found    → Recurso no existe
409 Conflict     → Conflicto de estado
422 Unprocessable Entity → Semantic validation error
429 Too Many Requests → Rate limited
500 Internal Server Error → Error inesperado
```

## Testing Patterns

### Unit Tests
```typescript
describe('useForm', () => {
  it('should update field value', () => {
    const { result } = renderHook(() => useForm({ name: '' }))
    act(() => result.current.update('name', 'John'))
    expect(result.current.values.name).toBe('John')
  })
})
```

### Integration Tests
```typescript
describe('UserList', () => {
  it('should render users from API', async () => {
    server.use([
      rest.get('/api/users', (req, res, ctx) => {
        return res(ctx.json([{ id: '1', name: 'John' }]))
      })
    ])

    render(<UserList />)

    await waitFor(() => {
      expect(screen.getByText('John')).toBeInTheDocument()
    })
  })
})
```

## State Management

### Local State (useState)
```typescript
// Para estado simple y aislado
const [count, setCount] = useState(0)
```

### Shared State (Zustand)
```typescript
// Store para estado global
interface AuthStore {
  user: User | null
  login: (user: User) => void
  logout: () => void
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null })
}))
```

### Server State (SWR/React Query)
```typescript
// Para datos del servidor
const { data, error, isLoading } = useSWR('/api/users', fetcher)
```

## Git Conventions

### Commit Messages
```
feat: add user authentication
fix: resolve login redirect loop
docs: update README with setup instructions
refactor: extract validation logic
test: add tests for useForm hook
chore: upgrade dependencies
```

### Branch Naming
```
feature/user-authentication
fix/login-redirect-loop
hotfix/security-patch
refactor/extract-validation
```

---

**Architecture**: Clean, Hexagonal, Event-Driven
**State**: Zustand (client), React Query (server)