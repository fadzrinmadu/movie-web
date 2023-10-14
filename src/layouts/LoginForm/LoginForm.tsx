import React from "react";
import CustomInput from "../../components/CustomInput";

import "./style.scss";
import useHooks from "./hooks";

const LoginForm = () => {
  const {
    data: { formData },
    method: { handleSubmit, handleInputChange },
  } = useHooks();

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <CustomInput
            label="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <CustomInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
