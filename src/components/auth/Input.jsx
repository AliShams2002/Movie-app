import { motion } from "framer-motion";

const Input = ({
  lable,
  type,
  id,
  value,
  className,
  placeholder,
  formik,
  itemVariants,
  touched,
  errors,
  children,
}) => {
  return (
    <motion.div variants={itemVariants} className="relative">
      <label id={id} className="block text-xs text-gray-400 mb-1.5 mr-1">
        {lable}
      </label>
      <div className="relative">
        <input
          type={type}
          name={id}
          id={id}
          value={value}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={placeholder}
          className={className}
        />
        {children}
      </div>

      {/* Name error message */}
      {touched && errors && (
        <div className="error text-xs text-red-400">{errors}</div>
      )}
    </motion.div>
  );
};

export default Input;
