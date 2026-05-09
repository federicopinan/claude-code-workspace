# Skill Registry

Skills disponibles en este workspace SaaS.

## Project Standards (auto-resolved)

### TypeScript / React
```typescript
// Interfaces over types for extensibility
interface User { name: string }

// PascalCase for components, camelCase for functions
function UserCard() {}

// Test files: *.test.ts, *.spec.ts
```

### shadcn/ui
```bash
npx shadcn@latest add button card input dialog
```

### Seguridad
```typescript
// Nunca concatenar user input en SQL, HTML, shell
// Siempre validar en system boundaries
// HttpOnly + Secure + SameSite en cookies de auth
```

## User Skills (trigger conditions)

| Context | Skill | Action |
|---------|-------|--------|
| Security review | `security` | Review code for vulnerabilities |
| Vercel deploy | `vercel:*` | Deploy, env vars, functions |
| Frontend design | `frontend-design` | High-quality UI interfaces |
| Go testing | `go-testing` | Tests en Go, Bubbletea TUI |
| Creating new skills | `skill-creator` | Create AI agent skills |

## Compact Rules

### Security (injected in security-relevant code)
- Validate at boundaries: external input is hostile
- Parameterized queries only (no string concatenation)
- HttpOnly + Secure + SameSite cookies
- CSP headers minimum: `default-src 'self'`
- No eval(), no innerHTML with untrusted data
- Rate limiting en auth endpoints
- Use crypto.randomBytes() not Math.random() for tokens
- Argon2id/bcrypt for passwords, never MD5/SHA1

### Frontend Design (injected in UI code)
- Mobile-first responsive design
- Semantic HTML, accessibility WCAG 2.1 AA
- CSS tokens for consistency (--color-primary, --space-4, etc.)
- Skeleton loading states
- Error messages inline near inputs
- Empty states with CTAs

### API Design (injected in API routes)
- RESTful: GET/POST/PATCH/DELETE
- Versioned from start: /api/v1/
- Structured errors: { code, message, details }
- 401/403/404 for auth/permissions/not found
- Rate limiting on public endpoints

## SDD Skills

| Phase | Skill |
|-------|-------|
| Explore | `sdd-explore` |
| Propose | `sdd-propose` |
| Spec | `sdd-spec` |
| Design | `sdd-design` |
| Tasks | `sdd-tasks` |
| Apply | `sdd-apply` |
| Verify | `sdd-verify` |
| Archive | `sdd-archive` |

---

Actualizado: 2026-04-21