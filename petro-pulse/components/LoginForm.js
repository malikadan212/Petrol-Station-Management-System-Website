"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [error, setError] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  if (!email || !password) {
    setError(true);
    setTimeout(() => setError(false), 800);
  }
};

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative z-10 flex items-center justify-end h-full p-8">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-2">Welcome to Petro-Pulse</h2>
          <p className="text-gray-200 mb-8">Sign in to your account to continue</p>

          <form onSubmit={handleSubmit} className={`space-y-6 transition-all ${error ? "animate-glitch" : ""}`}
          >

            {/* Email Field */}
            <div>
              <label className="block mb-1 text-sm text-gray-200">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent text-white placeholder-gray-300 border-b border-gray-300 focus:outline-none w-full"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block mb-1 text-sm text-gray-200">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-transparent text-white placeholder-gray-300 border-b border-gray-300 focus:outline-none w-full"
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md transition mb-4 text-xl"
            >
              Sign In
            </button>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="mr-2" />
                <span>Remember me</span>
              </div>
              <a href="#" className="hover:underline text-blue-400">
                Forgot password?
              </a>
            </div>

            {/* Social Sign-In */}
            <div className="mt-6 text-center">
              <p className="text-gray-200">or sign in with</p>
              <div className="flex justify-center space-x-4 mt-3">
                <a href="#" className="text-white hover:text-blue-400">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="text-white hover:text-blue-400">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            {/* Sign Up Prompt */}
            <p className="mt-6 text-center text-gray-300">
              Don't have an account?{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
