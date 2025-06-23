import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function AuthUser() {
  const navigate = useNavigate();

  let baseURL = `https://apidev.successpilot.ai/api/v1`;
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    return tokenString;
  };

  const getUser = () => {
    const encoded_token = localStorage.getItem("token");
    if (encoded_token) {
      return jwtDecode(encoded_token);
    }
    return encoded_token;
    // console.log(userString);
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveToken = (user, token) => {
    localStorage.setItem("token", token);
    const decoded_user = jwtDecode(token);
    // console.log("decodeddd",decoded_user)
    setToken(token);
    setUser(decoded_user);
    if (decoded_user.isplanActive === false) {
      navigate("/");
      // navigate("/profile/subscription-plan");
    } else {
      navigate("/");
    }
  };

  const http = axios.create({
    baseURL: baseURL,
    headers: {
      "Content-type": "application/json",
      accessToken: `Bearer ${token}`,
    },
  });

  const logout = () => {
    localStorage.clear();
    navigate("/auth/signin");
  };
  const errorHandle = (err) => {
    console.log(err);
    if (
      err.message === "Network Error" ||
      err.response.data.status === 0 ||
      err.response.data.status === 3
    ) {
      logout();
    }
  };
  return {
    setToken: saveToken,
    token,
    user,
    getToken,
    http,
    logout,
    errorHandle
  };
}
