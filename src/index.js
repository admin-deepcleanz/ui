import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

// Suppress benign ResizeObserver notification that CRA's overlay misreports as an error
window.addEventListener('error', (e) => {
  if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
    e.stopImmediatePropagation();
  }
});

// ✅ Restore original path after 404 redirect from GitHub Pages
if (sessionStorage.redirect) {
  const redirectPath = sessionStorage.redirect;
  delete sessionStorage.redirect;
  window.history.replaceState(null, '', redirectPath);
}


ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
