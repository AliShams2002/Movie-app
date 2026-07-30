import { useFormik } from "formik";
import { registerSchema } from "../../utils/authValidation";
import SpinnerLoading from "../common/SpinnerLoading";
import { registerUser } from "../../services/authService";

const Register = ({ register }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, submitProps) => {
      await registerUser(values.email, values.password, values.username);
      submitProps.setSubmitting(false);
    },
  });

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-2">ایجاد حساب کاربری</h2>
      <p className="text-gray-400 mb-8 text-sm">برای شروع ثبت نام کنید</p>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
        <div className="w-full space-y-1">
          <label
            htmlFor="username"
            className="text-sm text-gray-200 mb-1 block"
          >
            نام کاربری
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder="Ali#352"
            className="w-full bg-transparent border border-white/20 rounded-md px-3 py-2 focus:outline-none focus:border-red-500"
          />

          {formik.touched.username && formik.errors.username && (
            <div className="error text-xs text-red-400">
              {formik.errors.username}
            </div>
          )}
        </div>
        <div className="w-full space-y-1">
          <label htmlFor="email" className="text-sm text-gray-200 mb-1 block">
            ایمیل
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="example@gmail.com"
            className="w-full bg-transparent border border-white/20 rounded-md px-3 py-2 focus:outline-none focus:border-red-500"
          />

          {formik.touched.email && formik.errors.email && (
            <div className="error text-xs text-red-400">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="w-full space-y-1">
          <label
            htmlFor="password"
            className="text-sm text-gray-200 mb-1 block"
          >
            رمز عبور
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="رمز عبور خود را وارد نمایید"
            className="w-full bg-transparent border border-white/20 rounded-md px-3 py-2 focus:outline-none focus:border-red-500"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error text-xs text-red-400">
              {formik.errors.password}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 transition py-2 rounded-lg font-semibold"
        >
          {formik.isSubmitting ? <SpinnerLoading /> : "ثبت نام"}
        </button>
      </form>
    </div>
  );
};

export default Register;
