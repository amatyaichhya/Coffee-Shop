const toCamel = (s: string | undefined | null): string | undefined => {
  return s?.replace(/([-_][a-z])/gi, $1 => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

const isObject = (o: any): boolean => {
  return o === Object(o) && !Array.isArray(o) && typeof o !== 'function';
};

const keysToCamel = function (o: any): any {
  if (isObject(o)) {
    const n: Record<string, any> = {};

    Object.keys(o).forEach(k => {
      const camelKey = toCamel(k);
      if (camelKey) {
        n[camelKey] = keysToCamel(o[k]);
      }
    });

    return n;
  } else if (Array.isArray(o)) {
    return o.map(i => {
      return keysToCamel(i);
    });
  }

  return o;
};

const capitalizeFirstLetterInWords = (str: string) =>
  str
    ? str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.substring(1))
        .join(' ')
    : str;

export {toCamel, keysToCamel, capitalizeFirstLetterInWords};
