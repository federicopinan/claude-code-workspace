# Tasks — Add Audit Log

## Implementation

- [ ] Define `AuditEventInput` and `AuditLogger` interface.
- [ ] Add persistence adapter for audit events.
- [ ] Emit audit events after successful protected mutations.
- [ ] Add admin-only audit log read endpoint.
- [ ] Add pagination to audit log reads.

## Tests

- [ ] Unit test valid audit event creation.
- [ ] Unit test failed mutation does not emit an audit event.
- [ ] Authorization test: admin can read audit events.
- [ ] Authorization test: non-admin receives forbidden response.

## Documentation

- [ ] Document which actions are audited.
- [ ] Document metadata rules and sensitive-data exclusions.

## Verification

- [ ] `npm run typecheck`
- [ ] `npm test`
- [ ] Manual review confirms events do not contain secrets.
