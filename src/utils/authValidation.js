import * as yup from "yup";

const messages = {
  required: "This field is required.",
  email: "Enter a valid email address.",
  passwordMin: "The password must be at least 6 characters long.",
  nameMin: "The name must be at least 3 characters long.",
  nameMax: "The name cannot exceed 15 characters.",
  passwordMatch: '"Passwords do not match"',
};

// Login schema
export const loginSchema = yup.object({
  email: yup.string().trim().required(messages.required).email(messages.email),
  password: yup
    .string()
    .required(messages.required)
    .min(6, messages.passwordMin),
});

// Register schema
export const registerSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required(messages.required)
    .min(3, messages.nameMin)
    .max(15, messages.nameMax),
  email: yup.string().trim().required(messages.required).email(messages.email),
  password: yup
    .string()
    .required(messages.required)
    .min(6, messages.passwordMin),
});
