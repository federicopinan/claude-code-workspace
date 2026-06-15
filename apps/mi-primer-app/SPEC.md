# Mi Primer App

Aplicación de ejemplo que demuestra la estructura y convenciones del workspace.

## Propósito

Esta app sirve como referencia para nuevas aplicaciones. Muestra:

- Estructura de carpetas (src/components, src/hooks, src/lib, src/types)
- Patrones de componentes React con TypeScript
- Hooks custom y estado local
- Tipos compartidos

## Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: shadcn/ui + Tailwind CSS
- **Estado**: Zustand
- **Forms**: React Hook Form + Zod
- **Testing**: Vitest + Playwright

## Convenciones

Ver `referencia/codigo/README.md` para patrones de:

- Clean Architecture
- Atomic Design
- Container/Presentational pattern
- TypeScript interfaces vs types

## Estructura

```
apps/mi-primer-app/
├── src/
│   ├── components/     # Componentes UI (atoms, molecules, organisms)
│   ├── hooks/          # Custom hooks
│   ├── lib/             # Utilidades y configuración
│   └── types/           # Tipos TypeScript
├── tests/               # Tests de integración y e2e
├── SPEC.md              # Esta especificación
└── package.json
```

## SDD Workflow

Esta app fue creada siguiendo el workflow SDD:

1. **Explore** → Investigación de requisitos
2. **Propose** → Propuesta arquitectónica
3. **Spec** → Especificación de comportamiento
4. **Design** → Diseño técnico detallado
5. **Tasks** → Descomposición en tareas
6. **Apply** → Implementación
7. **Verify** → Verificación contra specs
8. **Archive** → Archivado del cambio

Para nuevos cambios, usar `/sdd-new [nombre-del-cambio]` para iniciar el workflow completo.
