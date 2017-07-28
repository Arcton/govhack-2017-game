function sumPropertyValues(dest, source) {
  if (source == null) {
    return;
  }
  Object.entries(source).forEach(([property, value]) => {
    if (dest[property] == null) {
      dest[property] = value; // eslint-disable-line no-param-reassign
    } else {
      dest[property] += value; // eslint-disable-line no-param-reassign
    }
  });
}

export { sumPropertyValues };
