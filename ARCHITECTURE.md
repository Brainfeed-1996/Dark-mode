# Architecture

## Structure

```
Dark-mode/
├── index.html
├── assets/
│   ├── style.css        # design tokens + styles
│   └── theme.js         # API thème (ESM)
├── FEATURES.md
├── ARCHITECTURE.md
├── USAGE.md
└── README.md
```

## Design tokens

Le thème repose sur des variables CSS :
- `--color-bg`, `--color-fg`, `--color-surface`, `--color-muted`

Le switch se fait via `:root[data-theme="dark"]`.

## API JavaScript

`assets/theme.js` expose :
- `getSystemTheme()`
- `getSavedTheme()`
- `applyTheme(theme)`
- `setTheme(theme)`
- `toggleTheme()`
- `bindThemeToggle({button})`

L’objectif : une surface API petite et testable, réutilisable dans d’autres repos.
