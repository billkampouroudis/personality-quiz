const formMessages = {
  en: {
    required: "This field is required",
    maxLength: (length) =>
      `This field must have less than ${length} characters`,
    minLength: (length) =>
      `This field must have more than ${length} characters`,
    email: "Enter a correct email address",
    workEmail: "Enter a correct work email address",
    phone: "Enter a correct phone number",
    password: {
      length: (length) => `Password must contain at least ${length} characters`,
    },
    numeric: "Enter a number",
    url: "The URL entered is invalid. Please enter a valid website URL",
  },
};

export default formMessages;
