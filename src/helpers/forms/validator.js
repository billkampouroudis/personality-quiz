import { isTruthy } from "../misc/is";

export const defaultMinLength = 1;
export const defaultMaxLength = 100;
export const defaultMaxFileSize = 20; // Mb

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// eslint-disable-next-line no-useless-escape
export const phoneRegex =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
export const lettersOnlyRegex = /^[a-zA-Z]+$/;
export const password = {
  length: 8,
};
export const urlRegex =
  /^(?:https?:\/\/)?(?:[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*\.)?[a-zA-Z0-9][a-zA-Z0-9-]*\.[a-zA-Z]{2,}(?:\/[^?#]*)?$/;

// eslint-disable-next-line no-undef
const formMessages = require("./messages").default;

const getLocale = () => {
  // Here we can add the logic to get the locale from the URL if we add multiple locales in the future.

  // const supportedLocales = Object.keys(formMessages);
  // const candidateLocale = window.location.pathname.split("/")[1]; // example 'el'
  // const locale = supportedLocales.includes(candidateLocale) ? candidateLocale : "en";

  return "en";
};

const Validator = {
  required: (inputValue) => {
    if (isTruthy(inputValue)) {
      return {};
    }
    return { error: formMessages[getLocale()].required };
  },
  minLength: (inputValue, min = defaultMinLength) => {
    if (!inputValue || inputValue.length > min) {
      return {};
    }
    return {
      error: formMessages[getLocale()].minLength(min),
    };
  },
  maxLength: (inputValue, max = defaultMaxLength) => {
    if (!inputValue || inputValue.length < max) {
      return {};
    }
    return { error: formMessages[getLocale()].maxLength(max) };
  },
  email: (inputValue) => {
    if (!inputValue || emailRegex.test(inputValue)) {
      return {};
    }
    return { error: formMessages[getLocale()].email };
  },
  phone: (inputValue) => {
    // If no value is provided, we consider it valid.
    // If "required" rule is also applied, it will be handled by the "required" rule.
    if (!inputValue || phoneRegex.test(inputValue)) {
      return {};
    }
    return { error: formMessages[getLocale()].phone };
  },
  password: (inputValue) => {
    if (inputValue.length < password.length) {
      return { error: formMessages[getLocale()].password.length(8) };
    }
    return {};
  },
  numeric: (inputValue) => {
    if (!inputValue || Number(inputValue)) {
      return {};
    }
    return { error: formMessages[getLocale()].numeric };
  },
  url: (inputValue) => {
    const domain = inputValue.replace(/(https?:\/\/)?(www\.)?/, "");
    const isValid = urlRegex.test(domain);

    if (!inputValue || isValid) {
      return {};
    }
    return { error: formMessages[getLocale()].url };
  },
};
export default Validator;
