import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = ({ children, title }) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }

  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900 text-white"
      }`}
    >
      <div className="w-full max-w-xs shadow-md border-none rounded-xl shadow-blue-700 p-5">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter yout details
        </p>
        {children}
        <Navigation type={title} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "Register") {
    return (
      <p className="text-sm mt-3 text-center">
        have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-3 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
