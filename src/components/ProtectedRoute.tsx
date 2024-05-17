import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./AuthProvider";

export const ProtectedRoute = ({ children }: any) => {
  const context = useAuth();
  useEffect(() => {
    console.log("context is ", context);
  }, []);

  if (context?.loading) {
    return <p>Loading.... </p>;
  }

  if (context?.user) {
    console.log("context is ", context);
    // User is not logged in, redirect to login page
    return children;
  }

  return <Navigate to={"/"}></Navigate>;
};
