import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../../helpers/cookies";

const GuardRoute = ({ children }: any) => {
  const token = getToken();

  return token ? children : <Navigate to="/" replace />;
};

export default GuardRoute;
