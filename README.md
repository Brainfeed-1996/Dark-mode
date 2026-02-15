# Dark-mode (industrial demo)

![HTML](https://img.shields.io/badge/HTML-✓-e34f26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-✓-1572b6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ESM-f7df1e?logo=javascript&logoColor=000)
![License: MIT](https://img.shields.io/badge/License-MIT-green)

Un mini-projet volontairement simple… mais **implémenté proprement** :
- initialisation *avant paint* (anti flash)
- persistance via `localStorage`
- fallback sur la préférence système (`prefers-color-scheme`)
- accessibilité (ARIA)
- support des changements de thème OS en live

## Documentation

- [FEATURES.md](./FEATURES.md)
- [ARCHITECTURE.md](./ARCHITECTURE.md)
- [USAGE.md](./USAGE.md)

## Quick start

Ouvre `index.html` dans un navigateur moderne.

## Why this repo exists

Ce repo sert de référence pour intégrer un dark-mode **robuste** dans des projets front:
- architecture CSS variables (`--color-*`)
- API JS minimaliste (`applyTheme`, `toggleTheme`, `bindThemeToggle`)
- compatibilité progressive
