// components/LoginForm.js
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRouter } from "next/navigation";

export default function LoginForm({ onSwitch, isAdminLogin = false, isEmployeeLogin = false, isCustomerLogin = false })  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
      setTimeout(() => setError(false), 800);
      return;
    }

    setIsLoading(true);

    try {
      // Handle different login types
      if (isAdminLogin) {
        // Admin login logic
        /*
        const response = await fetch('/api/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        
        if (response.ok) {
          router.push('/admin/dashboard');
        } else {
          setError(true);
          setTimeout(() => setError(false), 800);
        }
        */
        
        // For now, just redirect
        router.push('/admin/dashboard');
      } else if (isEmployeeLogin) {
        // Employee login logic
        /*
        const response = await fetch('/api/employee/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        
        if (response.ok) {
          router.push('/employee/dashboard');
        } else {
          setError(true);
          setTimeout(() => setError(false), 800);
        }
        */
        
        // For now, just redirect
        router.push('/employee/dashboard');
      } else if(isCustomerLogin){
        // Regular user login logic
        // Your existing login logic...
        
        // For now, just redirect to a hypothetical user dashboard
        router.push('/customer/dashboard');
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(true);
      setTimeout(() => setError(false), 800);
    } finally {
      setIsLoading(false);
    }
  };

  // Determine the title and subtitle based on login type
  let title = "Welcome to Petro-Pulse";
  let subtitle = "Sign in to your account to continue";
  
  if (isAdminLogin) {
    title = "Admin Portal";
    subtitle = "Sign in to access the administration dashboard";
  } else if (isEmployeeLogin) {
    title = "Employee Portal";
    subtitle = "Sign in to access your employee dashboard";
  }

  return (
    <div className="relative z-10 flex items-center justify-center sm:justify-end h-full p-4 sm:p-8 w-full">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 text-white"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h2>
        <p className="text-gray-200 mb-6 sm:mb-8">{subtitle}</p>

        <form onSubmit={handleSubmit} className={`space-y-5 ${error ? "animate-glitch" : ""}`}>
          <div>
            <label className="block mb-1 text-sm text-gray-200">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent text-white placeholder-gray-300 border-b border-gray-300 focus:outline-none w-full text-base"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-200">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-transparent text-white placeholder-gray-300 border-b border-gray-300 focus:outline-none w-full text-base"
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md transition mb-4 text-lg sm:text-xl"
          >
            {isLoading ? "Signing In..." : 
              isAdminLogin ? "Sign In" : 
              isEmployeeLogin ? "Sign In" : 
              isCustomerLogin ? "Sign In" : 
              "Sign In"}
          </button>

          {/* Remember Me & Forgot Password */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="mr-2" />
              <span>Remember me</span>
            </div>
            <a href="#" className="hover:underline text-blue-400 mt-2 sm:mt-0">
              Forgot password?
            </a>
          </div>

          {/* Social Sign-In - Only show for regular users */}
          {!isAdminLogin && !isEmployeeLogin && (
            <div className="mt-6 text-center">
              <p className="text-gray-200">or sign in with </p>
              <div className="flex justify-center space-x-4 mt-3 text-xl">
                <a href="#" className="text-white hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white hover:text-blue-400"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white hover:text-blue-400"><i className="fab fa-google"></i></a>
                <a href="#" className="text-white hover:text-blue-400"><i className="fab fa-github"></i></a>
              </div>
            </div>
          )}

          {/* Only show sign up option for regular users */}
          {!isAdminLogin && !isEmployeeLogin && (
            <p className="mt-6 text-center text-gray-300">
              Don&apos;t have an account?{" "}
              <button onClick={onSwitch} className="text-blue-400 hover:underline">
                Sign Up
              </button>
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
}