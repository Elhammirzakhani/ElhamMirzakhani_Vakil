import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.tsx';
import { buildStructuredData } from './seo/structuredData';

/** Used at build time to pre-render the page into static HTML for search engines. */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

export function structuredData() {
  return JSON.stringify(buildStructuredData());
}
