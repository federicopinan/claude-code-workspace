# Spec — Add Audit Log

## Requirement: Audit sensitive mutations

The system SHALL persist an audit event after each successful protected resource mutation.

### Scenario: User updates a protected resource

Given an authenticated user updates a protected resource
When the update succeeds
Then the system records an audit event with actor, action, target, timestamp and metadata

### Scenario: Mutation fails validation

Given an authenticated user submits an invalid mutation
When validation fails
Then the system does not record an audit event

## Requirement: Restrict audit log access

The system SHALL only allow administrators to read audit events.

### Scenario: Admin requests audit events

Given an authenticated admin
When they request the audit log
Then the system returns a paginated list of events

### Scenario: Non-admin requests audit events

Given an authenticated non-admin user
When they request the audit log
Then the system returns a forbidden response

## Requirement: Preserve event integrity

The system SHALL treat audit events as append-only records.

### Scenario: Event exists

Given an audit event has been created
When normal application flows execute
Then the event is not updated or deleted
