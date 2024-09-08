export const isObject = (value) => {
  return typeof value === "object" && value !== null;
};

export const isEmptyObject = (value) => {
  return isObject(value) && Object.keys(value).length === 0;
};

export const isArray = (item) => {
  return Array.isArray(item);
};

export const isEmptyArray = (item) => {
  return isArray(item) && item.length === 0;
};

export const isFalsy = (value) => {
  return (
    value === undefined ||
    value === null ||
    value == 0 || // eslint-disable-line eqeqeq
    value < 0 ||
    String(value).trim() === "" ||
    value === false ||
    value === "false" ||
    (typeof value === "number" && Number.isNaN(value)) ||
    isEmptyObject(value) ||
    isEmptyArray(value)
  );
};

export const isTruthy = (value) => !isFalsy(value);
