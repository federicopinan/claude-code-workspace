# Diseño UI/UX Reference

Patrones de diseño para interfaces de alta calidad.

## Principios

### Core Design Principles
1. **Conciso** — Cada elemento tiene razón de ser
2. **Consistente** — Patrones predecibles en toda la app
3. **Accesible** — WCAG 2.1 AA mínimo
4. **Responsive** — Mobile-first, funciona en todos los breakpoints
5. **Rápido** — Perceptible en < 100ms

### Visual Hierarchy
```
1. Títulos (H1) → Qué es esta página
2. Subtítulos (H2) → Qué secciones hay
3. Contenido (H3, p) → Qué hay en cada sección
4. Acciones (buttons) → Qué puedo hacer
5. Meta (timestamps, badges) → Contexto adicional
```

## Componentes Base

### Color System
```css
/* Semantic tokens */
--color-primary: #3B82F6;      /* Acciones principales */
--color-primary-hover: #2563EB;
--color-secondary: #64748B;     /* Acciones secundarias */
--color-danger: #EF4444;        /* Destructive actions */
--color-success: #22C55E;       /* Confirmaciones */
--color-warning: #F59E0B;       /* Alertas */

/* Neutrals */
--color-bg: #FFFFFF;
--color-bg-muted: #F8FAFC;
--color-border: #E2E8F0;
--color-text: #0F172A;
--color-text-muted: #64748B;
```

### Spacing Scale
```css
/* 4px base unit */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
```

### Typography
```css
--font-sans: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;

--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
```

## Patrones Comunes

### Navigation
- **Sidebar**: Para apps con múltiples secciones (ej: admin panels)
- **Top bar**: Para apps simples o landing pages
- **Tabs**: Para cambiar entre vistas dentro de una página

### Forms
- Labels siempre visibles (no placeholder-only)
- Error messages inline, cerca del campo
- Submit disabled hasta que el form sea válido
- Loading state en botón durante submit

### Cards
```
┌─────────────────────────────┐
│ ┌─────┐                     │
│ │ IMG │ Title               │
│ └─────┘ Subtitle            │
│                             │
│ Description text...         │
│                             │
│ [Action] [Action]           │
└─────────────────────────────┘
```

### Empty States
Siempre mostrar estado vacío con:
- Icono ilustrativo
- Mensaje claro qué hacer
- CTA para agregar algo

### Loading States
- Skeletons para contenido
- Spinner para acciones
- Progress bar para uploads/procesos largos

## shadcn/ui

Componentes recomendados:
- `Button` — Variants: default, secondary, outline, ghost, destructive
- `Card` — Header, content, footer
- `Input` — Con label y error state
- `Select` — Dropdown con search
- `Dialog` — Modal overlay
- `Toast` — Notifications
- `Badge` — Labels y status

## Accesibilidad

### Checklist
- [ ] Contraste mínimo 4.5:1 para texto normal
- [ ] Focus visible en todos los interactivos
- [ ] Labels en todos los inputs
- [ ] Alt text en imágenes
- [ ] Aria labels donde corresponde
- [ ] Keyboard navigation funciona
- [ ] Skip to content link

### Testing
```bash
# Lighthouse accessibility score
npx lighthouse --only-categories=accessibility
```

---

**Tools**: shadcn/ui, Tailwind CSS, Radix UI primitives