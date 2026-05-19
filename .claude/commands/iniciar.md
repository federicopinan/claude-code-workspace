# Iniciar Sesión

Inicializa el contexto del proyecto cargando información del workspace.

## Qué hace

1. Lee el contexto del proyecto desde `contexto/`
2. Carga el skill registry desde `.agent/skill-registry.md`
3. Detecta el stack tecnológico (package.json, tsconfig.json, etc.)
4. Prepara el ambiente para desarrollo sistemático con SDD

## Archivos de contexto cargados

- `contexto/info-personal.md` — Tu rol y responsabilidades
- `contexto/info-negocio.md` — Organización y modelo de negocio
- `contexto/estrategia.md` — Prioridades y objetivos estratégicos
- `contexto/datos-actuales.md` — Métricas y KPIs actuales
- `contexto/proyectos.md` — Estado de proyectos

## Después de iniciar

Podés usar los comandos SDD:

| Comando | Descripción |
|---------|-------------|
| `/sdd-new [nombre]` | Iniciar un nuevo cambio con workflow completo |
| `/sdd-explore [tema]` | Investigar una idea sin compromiso |
| `/sdd-ff [nombre]` | Fast-forward: proposal → specs → design → tasks |
| `/sdd-init` | Reinicializar contexto SDD del proyecto |