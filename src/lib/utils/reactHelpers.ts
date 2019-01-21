export function toClassNames(obj: {[key: string]: boolean}): string {
  return Object.keys(obj).filter(x => obj[x]).join(' ');
}

export function getBodyPortal() {
  const id = 'ncomponents-react-body-portal';

  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('div');
    el.id = id;
    // el.style.position = 'absolute';
    // el.style.top = '0px';
    // el.style.left = '0px';
    // el.style.width = '100vh';
    document.body.appendChild(el);
  }

  return el;
}