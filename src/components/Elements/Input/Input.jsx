import { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder, name }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
      className="text-sm border border-blue-600 rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
    />
  );
});

export default Input;
