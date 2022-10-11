import React, { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  // const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1>AuthPage</h1>

      <LoginForm setUser={setUser} />
      <SignUpForm setUser={setUser} />
    </main>
  );
}
