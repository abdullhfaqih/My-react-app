import { useEffect, useState } from "react";
import { getUserToken } from "../services/auth.service";

const useLogin = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUserToken(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
};

export default useLogin;
