import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const connectedUser = useLoaderData();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  console.log(connectedUser);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <div className="custom-loader"></div>;
  }

  if (connectedUser?.role !== "admin") {
    navigate("/");
  }

  return <>{children}</>;
};
