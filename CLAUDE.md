# CLAUDE.md — SaaS / App Development Workspace

Plantilla reusable para proyectos SaaS y aplicaciones. Diseñada para desarrollo sistemático con Spec-Driven Development (SDD).

---

## Estructura del Workspace

```
.
├── apps/                    # Aplicaciones individuales (frontend, backend, etc.)
│   └── {app-name}/
│       ├── src/            # Código fuente
│       ├── tests/          # Tests
│       └── SPEC.md         # Especificación propia de la app
├── packages/               # Paquetes compartidos (UI, utils, types, etc.)
├── docs/                   # Documentación técnica
├── infraestructura/        # Terraform, Docker, Kubernetes, CI/CD
├── planes/                 # Planes de implementación (creados con /crear-plan)
├── salidas/               # Entregables, reportes, análisis
├── referencia/             # Patrones y templates reutilizables
│   ├── diseno/             # Patrones de diseño UI/UX
│   ├── codigo/             # Patrones de arquitectura y código
│   └── seguridad/         # Guías de seguridad
├── contexto/               # Contexto del proyecto actual
└── scripts/                # Scripts de automatización
```

---

## Stack Sugerido

### Frontend
- **Framework**: Next.js 16 (App Router) con React 19
- **UI**: shadcn/ui + Tailwind CSS
- **Estado**: Zustand o Jotai
- **Forms**: React Hook Form + Zod
- **Testing**: Vitest + Playwright

### Backend
- **Runtime**: Node.js ( Bun o Deno como alternativa)
- **Framework**: Next.js API Routes o Hono
- **ORM**: Drizzle o Prisma
- **Auth**: Clerk o Auth.js (NextAuth)
- **Base de datos**: PostgreSQL (Vercel Postgres o Neon)
- **Cache**: Vercel KV (Upstash Redis)

### Infraestructura
- **Deploy**: Vercel
- **Domains**: Vercel DNS
- **Monitoreo**: Sentry + Vercel Analytics
- **CI/CD**: GitHub Actions

---

## Comandos

| Comando | Descripción |
|---------|-------------|
| `npm run setup` | Instala dependencias y valida el template |
| `npm run check` | Ejecuta validación estructural, lint/typecheck y tests |
| `npm run check:template` | Verifica estructura, archivos críticos y branding limpio |
| `npm run format:check` | Verifica formato con Prettier |
| `npm run format` | Formatea el ejemplo con Prettier |
| `npm run new:app -- [nombre]` | Crea una app desde `apps/mi-primer-app` |
| `/iniciar` | Inicializar sesión con contexto |
| `/crear-plan [pedido]` | Crear plan de implementación detallado |
| `/implementar [ruta]` | Ejecutar plan existente |
| `/sdd-init` | Inicializar contexto SDD para el proyecto |
| `/sdd-new [cambio]` | Nuevo cambio con workflow completo SDD |
| `/sdd-continue [cambio]` | Continuar fase pendiente de un cambio |
| `/sdd-ff [cambio]` | Fast-forward: proposal → specs → design → tasks |

---

## Skills Disponibles

Cuando trabajar en estas áreas, las skills se cargan automáticamente:

| Área | Skill | Trigger |
|------|-------|---------|
| **Seguridad** | `security` | Auth, API endpoints, form handling, DB queries, file uploads, desktop apps |
| **Vercel** | `vercel-*` | Deploy, environment variables, Next.js, Edge Functions, storage |
| **Go Testing** | `go-testing` | Tests en Go, Bubbletea TUI testing |
| **Frontend Design** | `frontend-design` | Crear interfaces de alto diseño |
| **Crear Skills** | `skill-creator` | Crear nuevas skills para el workspace |

---

## Workflow SDD (Spec-Driven Development)

```
proposal → specs → design → tasks → apply → verify → archive
```

### Flujo:
1. **Explorar**: Investigar la idea, leer código existente, comparar enfoques
2. **Proponer**: Crear propuesta arquitectónica con decisiones y tradeoffs
3. **Especificar**: Escribir specs con requisitos y escenarios
4. **Diseñar**: Documentar arquitectura técnica detallada
5. **Tareas**: Descomponer en checklist de implementación
6. **Aplicar**: Implementar código siguiendo specs y design
7. **Verificar**: Validar que la implementación matchea los specs
8. **Archivar**: Cerrar el cambio y persistir estado final

### Comandos SDD:
- `/sdd-new [nombre]` → empezar cambio completo
- `/sdd-continue [nombre]` → continuar siguiente fase
- `/sdd-ff [nombre]` → automático sin pausas

Ejemplo completo de artefactos SDD: `docs/sdd-example/`.

---

## Convenciones de Código

### TypeScript
- Strict mode habilitado
- Interfaces sobre types para extensibilidad
- `PascalCase` para componentes y clases
- `camelCase` para funciones y variables
- `kebab-case` para archivos y carpetas

### Git
- Conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`
- Branch naming: `feature/`, `fix/`, `hotfix/`, `refactor/`

### Testing
- Tests cerca del código: `Component.test.tsx` junto a `Component.tsx`
- Test files: `*.test.ts`, `*.spec.ts`
- Coverage mínimo: 80%

---

## Patrones de Referencia

### Arquitectura
- **Clean Architecture**: Domain → Application → Infrastructure → UI
- **Atomic Design**: Atoms → Molecules → Organisms → Templates → Pages
- **Container/Presentational**:分离 lógica de presentación

### API Design
- RESTful con errores estructurados
- Versioning desde el inicio (`/api/v1/`)
- Rate limiting en todos los endpoints públicos

### Auth Flow
- OAuth2 con PKCE para SSO
- JWT con refresh tokens (no storing passwords)
- HttpOnly + Secure + SameSite cookies para tokens

---

## Seguridad

Ver `referencia/seguridad/README.md` para guía completa.

### Principios Clave:
1. **Validar en boundaries** — toda input es hostil hasta probar lo contrario
2. **Defense in depth** — nunca depender de un solo control
3. **Least privilege** — mínimo acceso necesario
4. **Fail closed** — errores deniegan acceso, no lo otorgan
5. **Nunca confiar en el cliente** — validación server-side siempre

### OWASP Top 10 siempre en mente:
- Injection
- Broken Auth
- Sensitive Data Exposure
- SQL Injection
- XSS
- CSRF
- etc.

---

## Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Vercel Docs](https://vercel.com/docs)
- [Security Skill](../.claude/skills/security/SKILL.md)

---

**Última actualización**: 2026-04-21
