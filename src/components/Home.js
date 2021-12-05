import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const todos = () => {
    if (localStorage.getItem("token")) {
      navigate("/todo");
    } else {
      alert("you have to login first");
    }
  };

  useEffect(() => {
    console.log(loggedIn);
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <div>
      <h1>home</h1>
      {!loggedIn ? (
        <>
          <button>
            <Link to="login" style={{ color: "black", textDecoration: "none" }}>
              Login
            </Link>
          </button>
          <button>
            <Link
              to="signUp"
              style={{ color: "black", textDecoration: "none" }}
            >
              Sign up
            </Link>
          </button>
          <button onClick={todos}>Todos</button>
        </>
      ) : (
        <>
          <button onClick={todos}>Todos</button>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("role");
              setLoggedIn(false);
            }}
          >
            Log out
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
