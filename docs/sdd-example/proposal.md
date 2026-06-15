# Proposal — Add Audit Log

## Intent

Add an audit log so administrators can review important user and system actions.

## Problem

The app currently has no durable record of sensitive actions. When something changes, administrators cannot answer who did it, when it happened, or what entity was affected.

## Scope

### Included

- Record create/update/delete events for protected resources.
- Store actor, action, target, timestamp and metadata.
- Provide an admin-only read path.

### Not included

- Real-time streaming of audit events.
- Export to external SIEM tools.
- Long-term retention policy automation.

## Approach

Create a small audit logging module with a typed event contract. Application services emit audit events after successful mutations. Admin UI reads from a paginated endpoint.

## Tradeoffs

- Synchronous writes are simpler and ensure consistency, but add latency to mutations.
- Async queueing would scale better, but adds infrastructure this template does not need yet.

## Success Criteria

- Sensitive mutations create one audit event.
- Non-admin users cannot read audit events.
- Tests cover event creation and authorization.
