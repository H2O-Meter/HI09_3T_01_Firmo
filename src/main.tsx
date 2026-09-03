// Ensure window.fetch is writable and robust across browser sandboxes
try {
  const originalFetch = window.fetch ? window.fetch.bind(window) : undefined;
  let currentFetch = originalFetch;
  Object.defineProperty(window, 'fetch', {
    get() {
      return currentFetch;
    },
    set(fn) {
      currentFetch = fn;
    },
    configurable: true,
    enumerable: true,
  });
} catch (_) {
  // Silent fallback
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
