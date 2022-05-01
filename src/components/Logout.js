import React from "react";
import { logout } from "../services/AuthService";

export default function Logout() {
  logout();
  return <div>You are now logged out.</div>;
}
