import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;