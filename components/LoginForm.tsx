import { Props } from "@/types/components/loginTypes";
import React, { useState } from "react";

const LoginForm = ({ onSubmit, loading, error }: Props) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(user?.email, user?.password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((curr) => ({ ...curr, [name]: value }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Enter Email"
          value={user?.email}
          onChange={handleChange}
        />

        <input
          name="password"
          placeholder="Enter Password"
          type="password"
          value={user?.password}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>

        {error && <p role="alert"> {error} </p>}
      </form>
    </>
  );
};

export default LoginForm;

// We are testing here:

// 1️⃣ Renders inputs
// 2️⃣ Renders button
// 3️⃣ Conditional loading state
// 4️⃣ Conditional error message
// 5️⃣ User typing
// 6️⃣ Submit action

// This covers:

// Props rendering

// Conditional rendering

// User interactions
