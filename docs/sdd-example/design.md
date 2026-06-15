# Design — Add Audit Log

## Architecture

Audit logging belongs in the application layer because it records business events after successful use cases. Persistence stays behind an interface so tests can use an in-memory adapter.

```text
UI/API route → Application service → AuditLogger port → Database adapter
```

## Event Contract

```typescript
interface AuditEventInput {
  actorId: string
  action: 'create' | 'update' | 'delete'
  targetType: string
  targetId: string
  metadata?: Record<string, unknown>
}
```

## Data Model

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | Generated server-side |
| `actorId` | string | Authenticated user id |
| `action` | string | Controlled action value |
| `targetType` | string | Resource name |
| `targetId` | string | Resource id |
| `metadata` | json | Non-sensitive contextual data |
| `createdAt` | datetime | Server timestamp |

## Security

- Validate event input at the application boundary.
- Never store secrets, tokens or raw credentials in metadata.
- Require admin authorization before reading events.
- Keep events append-only in normal application code.

## Verification

- Unit tests for event creation.
- Authorization tests for audit log reads.
- Typecheck to ensure event contract remains explicit.
