# Usage

## Run

- Ouvre `index.html`.

## Intégration dans un autre projet

1) Copie `assets/theme.js` et adapte le `STORAGE_KEY` si besoin.

2) Ajoute une init avant paint (dans `<head>`), par exemple :

```html
<script>
  (function(){
    try {
      var saved = localStorage.getItem('theme');
      var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = (saved === 'dark' || saved === 'light') ? saved : (systemDark ? 'dark' : 'light');
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (e) {}
  })();
</script>
```

3) Branche un bouton :

```js
import { bindThemeToggle } from './theme.js';
bindThemeToggle({ button: document.querySelector('#themeToggle') });
```
