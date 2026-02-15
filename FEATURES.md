# Features

## Thème "production-grade"

- **Anti-flash (FOUC)** : un script inline initialise `data-theme` dans `<head>` avant le rendu.
- **Persistance** : le choix utilisateur est sauvegardé via `localStorage`.
- **Préférence système** : par défaut, le thème suit `prefers-color-scheme`.
- **Changement OS en direct** : si l’utilisateur n’a pas choisi explicitement, le thème suit les changements du système.
- **Accessibilité** : bouton avec `aria-pressed` + libellé clair.
- **Mouvements** : respect de `prefers-reduced-motion`.

## Débogage

Un panneau affiche l’état : `activeTheme`, `savedTheme`, `systemTheme`.
