/* eslint-disable guard-for-in */
import { isObject, isTruthy } from "../misc/is";
import validator from "./validator";

// The validation of these is handled somewhere else
const ignoredRules = [
  // The FileUploadArea handles file validation itself: app/javascript/components/common/partners/inputs/FileUploadArea/FileUploadArea.js
  "allowedFileTypes",
  "maxFiles",
  "maxSize",
];

/**
 * Runs the validation for the given field
 * @param {object} field
 * @returns {object} A new field object that contains an error message if the validation failed
 */
export const validateOne = (field) => {
  const _field = { ...field };

  if (typeof _field.value === "string") {
    _field.value = _field.value.trim();
  }

  for (const ruleKey in field.rules) {
    let result = {};

    if (isTruthy(field.rules[ruleKey]) && !ignoredRules.includes(ruleKey)) {
      result = validator[ruleKey](field.value, field.rules[ruleKey]);
    }

    if (result.error) {
      return {
        ..._field,
        errorMessage: result.error,
      };
    }
  }

  return { ..._field, errorMessage: "" };
};

/**
 * Runs the validation for all given fields
 * @param {object} fields The new object of fields that contains the new values
 * @param {object} ignoredFields A list of field names that we don't want to be validated
 */
export const validateAll = (fields, ignoredFields = []) => {
  const resultFields = { ...fields };

  for (const fieldName in fields) {
    // We don't want to validate the ignored fields
    if (ignoredFields.includes(fieldName)) {
      resultFields[fieldName] = {
        ...fields[fieldName],
        errorMessage: "",
      };
    } else {
      resultFields[fieldName] = validateOne(fields[fieldName]);
    }
  }
  return resultFields;
};

/**
 * Checks if there are errors in the given form fields
 * @param {object} fields
 * @returns {boolean} True if there is at least one error
 */
export const formHasError = (fields = {}) => {
  for (const fieldKey in fields) {
    if (fields[fieldKey].errorMessage) {
      return true;
    }
  }
  return false;
};

/**
 * Updates the given field value in the fields object.
 * @param {string} value the new value of the field
 * @param {object} field The field we want to set it's value
 * @param {object} fields All fields
 * @returns {object} The new fields object that contains error messages if the validation failed
 */
export const getFieldsAfterChange = (value, field, fields) => {
  let _field = { ...field, value };

  if (field.errorMessage) {
    _field = validateOne(_field);
  }

  return { ...fields, [_field.name]: _field };
};

/**
 * Validates the given field after losing focus and sets an error message if needed.
 * @param {object} field
 * @param {object} fields
 * @returns {object} The new fields object that contains error messages if the validation failed
 */
export const getFieldsAfterBlur = (field, fields) => ({
  ...fields,
  [field.name]: validateOne(field),
});

/**
 * @param {object} field
 * @param {File} file
 * @param {object} error
 * @param {object} fields
 * @returns {object} The new fields object that contains error messages if the validation failed
 */
export const getFieldsAfterFileSelected = (
  field,
  file,
  error = {},
  fields = {}
) => {
  let _field = {
    ...field,
    value: file,
    errorMessage: (isObject(error) ? error.message : error) || "",
  };

  if (!error) {
    _field = validateOne(_field);
  }

  return { ...fields, [_field.name]: _field };
};
