/**
 * Utilidades para manipulación del DOM.
 */

export function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

export function qsa(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

export function createElement(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);

  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "className") el.className = value;
    else if (key === "innerHTML") el.innerHTML = value;
    else el.setAttribute(key, value);
  });

  children.forEach((child) => {
    if (typeof child === "string") el.appendChild(document.createTextNode(child));
    else el.appendChild(child);
  });

  return el;
}
