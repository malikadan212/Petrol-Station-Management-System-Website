// components/AuthForm.js
"use client";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthForm({ 
  isAdminLogin = false, 
  isEmployeeLogin = false,
  isCustomerLogin = false 
}) {
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {isLogin ? (
        <LoginForm
          onSwitch={() => setIsLogin(false)}
          isAdminLogin={isAdminLogin}
          isEmployeeLogin={isEmployeeLogin}
          isCustomerLogin={isCustomerLogin}
        />
      ) : (
        <SignupForm onSwitch={() => setIsLogin(true)} />
      )}
    </div>
  );
}