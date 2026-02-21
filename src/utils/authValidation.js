// validation/authValidation.js
import * as yup from "yup";

// اعتبارسنجی ایمیل
export const emailValidation = yup
  .string()
  .required("ایمیل الزامی است")
  .email("فرمت ایمیل صحیح نیست")
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    "ایمیل معتبر نیست",
  );

// اعتبارسنجی رمز عبور
export const passwordValidation = yup
  .string()
  .required("رمز عبور الزامی است")
  .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "رمز عبور باید شامل حروف بزرگ، کوچک، عدد و کاراکتر خاص باشد",
  );

// اعتبارسنجی تکرار رمز عبور
export const confirmPasswordValidation = (passwordRef) =>
  yup
    .string()
    .required("تکرار رمز عبور الزامی است")
    .oneOf([yup.ref(passwordRef)], "رمز عبور و تکرار آن مطابقت ندارند");

// اعتبارسنجی نام کاربری
export const usernameValidation = yup
  .string()
  .required("نام کاربری الزامی است")
  .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد")
  .max(30, "نام کاربری باید حداکثر ۳۰ کاراکتر باشد");

// اسکیما لاگین
export const loginSchema = yup.object().shape({
  email: emailValidation,
  password: yup.string().required("رمز عبور الزامی است"),
  rememberMe: yup.boolean(),
});

// اسکیما ثبت‌نام
export const registerSchema = yup.object().shape({
  username: usernameValidation,
  email: emailValidation,
  password: passwordValidation,
});

// اسکیما فراموشی رمز عبور
export const forgotPasswordSchema = yup.object().shape({
  email: emailValidation,
});
