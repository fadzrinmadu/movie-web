import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../../helpers/cookies";

const GuestOnlyRoute = ({ children }: any) => {
  const token = getToken();

  return !token ? children : <Navigate to="/movies" replace />;
};

export default GuestOnlyRoute;
