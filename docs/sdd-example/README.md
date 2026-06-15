# SDD Example — Add Audit Log

Este ejemplo muestra cómo se ve un cambio completo antes de implementar. El objetivo es que el agente no improvise: primero entiende el problema, después baja el cambio a specs, diseño y tareas verificables.

## Flujo

1. [`proposal.md`](./proposal.md) — intención, alcance y tradeoffs.
2. [`spec.md`](./spec.md) — requisitos observables y escenarios.
3. [`design.md`](./design.md) — arquitectura técnica y decisiones.
4. [`tasks.md`](./tasks.md) — checklist de implementación y verificación.

## Cómo usarlo

Copiá esta carpeta para un nuevo cambio y reemplazá el ejemplo por tu feature real:

```bash
cp -R docs/sdd-example docs/sdd-mi-cambio
```

Después avanzá fase por fase o usá `/sdd-ff mi-cambio` cuando el alcance sea claro.
