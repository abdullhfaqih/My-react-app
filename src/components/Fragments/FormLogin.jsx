import { login } from "../../services/auth.service";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { useEffect, useRef, useState } from "react";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="username"
        htmlfor="usernmae"
        type="text"
        placeholder="jhon doe"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        label="password"
        htmlfor="password"
        type="password"
        name="password"
        placeholder="******"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-600 text-center mt-2">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
