import Cookies from 'js-cookie';

export function get(key) {
  return Cookies.get(key);
}

export function set(key, value, options) {
  if (typeof value === 'string') {
    Cookies.set(key, value, options);
  } else {
    Cookies.set(key, JSON.stringify(value), options);
  }
}

export function remove(key) {
  return Cookies.remove(key);
}
