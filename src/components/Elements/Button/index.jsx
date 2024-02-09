const Button = ({
  children,
  classname = "bg-black",
  type,
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
