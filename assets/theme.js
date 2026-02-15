/*
  Dark-mode demo — production-grade toggle.
  - Persists choice in localStorage
  - Defaults to system preference
  - Uses <html data-theme="..."> so CSS is stable
*/

const STORAGE_KEY = 'theme';

export function getSystemTheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function getSavedTheme() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'dark' || v === 'light' ? v : null;
  } catch {
    return null;
  }
}

export function applyTheme(theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

export function setTheme(theme) {
  applyTheme(theme);
  try { localStorage.setItem(STORAGE_KEY, theme); } catch {}
}

export function getActiveTheme() {
  return document.documentElement.dataset.theme || getSystemTheme();
}

export function toggleTheme() {
  const next = getActiveTheme() === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

export function bindThemeToggle({ button }) {
  const syncLabel = () => {
    const t = getActiveTheme();
    button.setAttribute('aria-pressed', String(t === 'dark'));
    button.textContent = t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  };

  button.addEventListener('click', () => {
    toggleTheme();
    syncLabel();
  });

  // If user didn't explicitly choose, adapt to OS changes.
  const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
  mq?.addEventListener?.('change', () => {
    if (!getSavedTheme()) {
      applyTheme(getSystemTheme());
      syncLabel();
    }
  });

  syncLabel();
}

export function initThemeEarly() {
  const theme = getSavedTheme() || getSystemTheme();
  applyTheme(theme);
}
