# Security Reference

Guías de seguridad para desarrollo de aplicaciones web y desktop.

## Archivos de Referencia

### Application Security
- `web-security.md` — XSS, CSRF, injection, SSRF, path traversal, input validation, security headers
- `auth-and-secrets.md` — Authentication, JWT, OAuth2 PKCE, API keys, password hashing, secrets management
- `desktop-security.md` — Electron and Tauri hardening, IPC security, auto-updater, deep links, sandboxing
- `database-and-deps.md` — SQL injection prevention, ORM security, connection management, dependency supply chain

## Quick Reference

### The Non-Negotiables

```
✗ NEVER concatenate user input into SQL, HTML, shell commands, or URLs
✗ NEVER use eval(), Function(), innerHTML with untrusted data
✗ NEVER store secrets in code, localStorage, or client-accessible locations
✗ NEVER disable CORS, CSP, or same-origin protections without justification
✗ NEVER use MD5/SHA1 for passwords — use Argon2id or bcrypt
✗ NEVER use Math.random() for security tokens — use crypto.randomBytes()
✗ NEVER trust client-side validation alone

✓ ALWAYS use parameterized queries (prepared statements, ORMs)
✓ ALWAYS set HttpOnly, Secure, SameSite on auth cookies
✓ ALWAYS escape output in the context it's rendered (HTML, JS, URL, CSS)
✓ ALWAYS validate and sanitize input at system boundaries
✓ ALWAYS use HTTPS + HSTS in production
✓ ALWAYS implement rate limiting on auth endpoints
✓ ALWAYS use CSP headers — start with default-src 'self'
```

## OWASP Top 10

1. Injection (SQL, NoSQL, OS, LDAP)
2. Broken Authentication
3. Sensitive Data Exposure
4. XML External Entities (XXE)
5. Broken Access Control
6. Security Misconfiguration
7. XSS (Cross-Site Scripting)
8. Insecure Deserialization
9. Using Components with Known Vulnerabilities
10. Insufficient Logging & Monitoring

## Vulnerability Response

| Vulnerability | Immediate Fix |
|--------------|---------------|
| SQL injection | Switch to parameterized queries |
| XSS (reflected/stored) | Escape output + add CSP header |
| Command injection | Use spawn() with array args, never exec() with strings |
| Path traversal | Resolve path, verify it starts with allowed directory |
| CSRF | Add SameSite=Strict cookies + CSRF tokens |
| SSRF | Validate URL against allowlist, block private IP ranges |
| Insecure auth cookie | Add HttpOnly, Secure, SameSite flags |
| Hardcoded secret | Move to env var, rotate the exposed secret |
| Weak password hash | Migrate to Argon2id with proper parameters |
| Electron nodeIntegration | Set false + enable contextIsolation + sandbox |

## Security Headers

```
Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none'; style-src 'self' 'unsafe-inline'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## Rate Limiting

```typescript
// All auth endpoints MUST have rate limiting
const rateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  standardHeaders: true,
  legacyHeaders: false,
}
```

---

**Source**: `~/.claude/skills/security/SKILL.md`