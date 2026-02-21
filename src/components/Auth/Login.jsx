import { useFormik } from "formik";
import { loginSchema } from "../../utils/authValidation";
import SpinnerLoading from "../SpinnerLoading";
import { loginUser } from "../../services/authService";

const Login = ({ login }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values, submitProps) => {
      await loginUser(values.email, values.password);
      submitProps.setSubmitting(false);
    },
  });
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-2">ورود</h2>
      <p className="text-gray-400 mb-8 text-sm">وارد حساب کاربری خود شوید</p>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
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

        <div className="text-right">
          <button
            type="button"
            className="text-xs text-gray-300 hover:text-white"
          >
            رمز عبور را فراموش کرده‌اید؟
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 transition py-2 rounded-lg font-semibold"
        >
          {formik.isSubmitting ? <SpinnerLoading /> : "ورود"}
        </button>
      </form>
    </div>
  );
};

export default Login;
