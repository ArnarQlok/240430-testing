import React, { useState } from "react";

function Login({ userName }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div>
      <h1>{isLoggedIn ? `Hello, ${userName}!` : "Hello, stranger!"}</h1>
      <button data-testid="login-button" onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
