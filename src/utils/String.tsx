export const removeDuplicateSlashes = (str: string) => {
  return str.replace(/\/+/g, '/');
};
