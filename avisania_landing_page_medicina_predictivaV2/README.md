# Avisania Lab — Landing Page

Landing page institucional de **Avisania Lab**, consultora de medicina predictiva de alto valor. Construida como SPA con React + Vite y pre-renderizada a HTML estático en el build para máxima legibilidad por IAs y crawlers.

## Páginas

| Ruta | Componente | Contenido |
|---|---|---|
| `/` | `App.jsx` | Home: hero con video, pilares estratégicos, servicios, propuesta de valor |
| `/proyectos` | `Proyectos.jsx` | Portfolio de proyectos I+D+i con métricas animadas |
| `/quienes-somos` | `QuienesSomos.jsx` | Equipo, historia y visión de la compañía |

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** con paleta personalizada (navy, silver, teal, sky, orange)
- **React Router 7** para navegación SPA
- **Lucide React** para iconografía
- **Spline** para elementos 3D
- **react-snap** para pre-render estático en build

## Tipografías

- `Space Grotesk` — textos de interfaz
- `Cormorant Garamond` — titulares editoriales
- `Material Symbols Outlined` — iconos de sistema

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción (incluye pre-render estático)
npm run build

# Previsualizar el build
npm run preview
```

## Build y pre-render

El script `postbuild` ejecuta `react-snap` automáticamente tras `vite build`. Genera un `index.html` con HTML completo para cada ruta:

```
dist/
├── index.html              ← /
├── proyectos/
│   └── index.html          ← /proyectos
└── quienes-somos/
    └── index.html          ← /quienes-somos
```

Esto permite que IAs, crawlers y motores de búsqueda lean el contenido sin ejecutar JavaScript.

### Por qué `build.target: 'es2019'`

react-snap usa una versión de Chromium que no soporta optional chaining (`?.`) ni nullish coalescing (`??`) de ES2020. El target `es2019` en `vite.config.js` hace que esbuild transpile esas expresiones a sintaxis compatible.

## Estructura del proyecto

```
src/
├── main.jsx          # Entry point con soporte hydrate/createRoot
├── App.jsx           # Página home
├── Proyectos.jsx     # Página de proyectos
├── QuienesSomos.jsx  # Página quiénes somos
├── Footer.jsx        # Footer compartido
└── index.css         # Estilos globales y animaciones
```
