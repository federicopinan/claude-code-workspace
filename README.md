# Workspace Template — Development Environment

Template reutilizable para desarrollar aplicaciones con Claude Code, contexto persistente y Spec-Driven Development (SDD).

## Empezar

```bash
# Clonar el template
git clone https://github.com/federicopinan/claude-code-workspace.git mi-proyecto
cd mi-proyecto

# Instalar dependencias y validar estructura
npm run setup

# Iniciar Claude con contexto
claude --dangerously-skip-permissions /iniciar
```

## Estructura

```
apps/              # Aplicaciones individuales
packages/          # Paquetes compartidos (UI, utils, types)
referencia/        # Patrones de referencia
  diseno/          # UI/UX patterns
  codigo/          # Arquitectura y código
  seguridad/       # OWASP, headers, vulnerabilidades
contexto/          # Contexto del proyecto actual
skills/            # Skills disponibles para este workspace
infraestructura/   # Terraform, Docker, CI/CD
planes/            # Planes de implementación
salidas/           # Entregables y reportes
scripts/           # Automatización
```

## Comandos del Template

| Comando | Qué valida o ejecuta |
|---------|----------------------|
| `npm run setup` | Instala dependencias y valida la estructura del template |
| `npm run check` | Ejecuta validación estructural, lint/typecheck y tests |
| `npm run check:template` | Verifica archivos críticos, carpetas esperadas y branding limpio |
| `npm run format:check` | Verifica formato con Prettier |
| `npm run format` | Formatea el ejemplo con Prettier |
| `npm run new:app -- mi-app` | Crea una app nueva desde `apps/mi-primer-app` |

## Stack Sugerido

| Capa     | Tecnología                                   |
| -------- | -------------------------------------------- |
| Frontend | Next.js 16 + React 19 + shadcn/ui + Tailwind |
| Estado   | Zustand (client) + React Query (server)      |
| Backend  | Next.js API Routes / Hono                    |
| ORM      | Drizzle / Prisma                             |
| Auth     | Clerk / NextAuth                             |
| DB       | PostgreSQL (Vercel Postgres / Neon)          |
| Deploy   | Vercel                                       |

## Workflow SDD

```
proposal → specs → design → tasks → apply → verify → archive
```

Para iniciar un nuevo cambio:

```
/sdd-new mi-nuevo-feature
```

Ver un ejemplo completo en [`docs/sdd-example/`](./docs/sdd-example/).

## Convenciones

- TypeScript strict mode
- Conventional commits (`feat:`, `fix:`, `docs:`, etc.)
- Tests cerca del código: `Component.test.tsx`
- Coverage mínimo: 80%
- Validar el template con `npm run check` antes de publicarlo

## Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Vercel Docs](https://vercel.com/docs)
- [Documentación SDD](./CLAUDE.md)

---

**Última actualización**: 2026-05-18
