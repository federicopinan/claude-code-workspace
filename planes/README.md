# Planes de Implementación

Los planes convierten una intención de trabajo en una secuencia verificable de pasos. Usalos para tareas medianas o grandes que necesitan orden antes de tocar código.

## Cuándo usar esta carpeta

- `/crear-plan [descripción]` para un plan manual.
- `/sdd-ff [nombre]` cuando el flujo SDD genera tareas listas para aplicar.
- Cualquier cambio donde quieras dejar trazabilidad de alcance, pasos y verificación.

## Forma recomendada

```markdown
# <nombre-del-cambio>

## Objetivo
<Qué se busca lograr y para quién.>

## Alcance
- Incluye: <puntos concretos>
- No incluye: <límites explícitos>

## Pasos
1. <Acción verificable>
2. <Acción verificable>

## Verificación
- [ ] <Comando o revisión esperada>
```

## Convención de nombres

```text
planes/YYYY-MM-DD-nombre-del-cambio.md
```
