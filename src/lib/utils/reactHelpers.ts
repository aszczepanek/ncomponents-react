export function toClassNames(obj: {[key: string]: boolean}): string {
  return Object.keys(obj).filter(x => obj[x]).join(' ');
}