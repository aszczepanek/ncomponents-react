export const selectUtils = {
  formatItemDisplay
}

export type ItemDisplayFn<T> = (item: T) => string;

function formatItemDisplay(item: any, display?: any): string {
  if (typeof display !== 'function') {
    if (typeof item === 'string') return item;
    if (typeof item === 'number') return item.toString();
  }

  if (display) {
    if (typeof display === 'string') {
      return (item[display] || '?').toString();
    }
    else if (typeof display === 'function') {
      try {
        return (display(item) || '?').toString();
      }
      catch (e) {
        console.error(e);
        return 'Display function error';
      }
    }
    else {
      return 'Invalid display parameter';
    }
  }
  else {
    return (item['label'] || '?').toString();
  }
}