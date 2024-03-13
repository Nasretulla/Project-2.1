import { json, useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./context/authContext";
import "./App.css";
import { useCallback, useEffect, useState } from "react";

function App() {
  const router = useRoutes(routes);
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [token, settoken] = useState(false);
  const [userInfos, setUserInfos] = useState({});

  const login = useCallback((userInfos, token) => {
    settoken(token);
    setIsloggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  }, []);

  const logout = useCallback(() => {
    settoken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  }, []);

  useEffect(() => {
    const localStorgeData = JSON.parse(localStorage.getItem("user"));
    if (localStorgeData) {
      fetch(`https://project-2-1-seg8.onrender.com/v1/auth/me`, {
        headers: { Authorization: `Bearer ${localStorgeData.token}` },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsloggedIn(true);
          setUserInfos(userData);
        });
    } else {
      setIsloggedIn(false);
    }
  }, [logout, login, token]);

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          token,
          userInfos,
          login,
          logout,
        }}
      >
        {router}
      </AuthContext.Provider>
    </>
  );
}

export default App;
