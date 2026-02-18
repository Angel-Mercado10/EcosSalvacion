/**
 * Estado global reactivo simple.
 */

let _state = {};
const _subscribers = [];

export function getState() {
  return structuredClone(_state);
}

export function setState(partial) {
  _state = { ..._state, ...partial };
  _subscribers.forEach((fn) => fn(getState()));
}

export function subscribe(fn) {
  _subscribers.push(fn);
  return () => {
    const idx = _subscribers.indexOf(fn);
    if (idx > -1) _subscribers.splice(idx, 1);
  };
}
