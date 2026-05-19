# Workspace Template — Nexum SaaS Development Environment

Template para desarrollo sistemático de aplicaciones SaaS usando Spec-Driven Development (SDD).

## Empezar

```bash
# Clonar el template
git clone https://github.com/federicopinan/claude-code-workspace.git mi-proyecto
cd mi-proyecto

# Instalar dependencias
npm install

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
planas/            # Planes de implementación
salidas/           # Entregables y reportes
scripts/           # Automatización
```

## Stack Sugerido

| Capa | Tecnología |
|------|------------|
| Frontend | Next.js 16 + React 19 + shadcn/ui + Tailwind |
| Estado | Zustand (client) + React Query (server) |
| Backend | Next.js API Routes / Hono |
| ORM | Drizzle / Prisma |
| Auth | Clerk / NextAuth |
| DB | PostgreSQL (Vercel Postgres / Neon) |
| Deploy | Vercel |

## Workflow SDD

```
proposal → specs → design → tasks → apply → verify → archive
```

Para iniciar un nuevo cambio:

```
/sdd-new mi-nuevo-feature
```

## Convenciones

- TypeScript strict mode
- Conventional commits (`feat:`, `fix:`, `docs:`, etc.)
- Tests cerca del código: `Component.test.tsx`
- Coverage mínimo: 80%

## Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Vercel Docs](https://vercel.com/docs)
- [Documentación SDD](./CLAUDE.md)

---

**Última actualización**: 2026-05-18