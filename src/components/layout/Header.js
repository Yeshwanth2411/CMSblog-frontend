import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import brandLogo from "../../images/blog-icon.png"

export default function Header() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="brand">
          <Link to="/">
            <img src={brandLogo} alt="Brand Logo" />
            <h1>Blogging is fun</h1>
          </Link>
        </div>
        {userData.user ? (
          <div className="links">
          <Link to="/posts">Posts</Link>
            <button onClick={logout}>Log out</button>
          </div>
        ) : (
            <>
              <button onClick={register}>Register</button>
              <button onClick={login}>Log in</button>
            </>
          )}
      </div>
    </header>
  );
}
