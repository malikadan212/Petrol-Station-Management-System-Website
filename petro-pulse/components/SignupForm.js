"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function SignupForm({ onSwitch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword || password !== confirmPassword) {
      setError(true);
      setTimeout(() => setError(false), 800);
      return;
    }

    onSwitch();
  };

  return (
    <div className="relative z-10 flex items-center justify-center sm:justify-end h-full p-4 sm:p-8 w-full">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 text-white"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Create an Account</h2>
        <p className="text-gray-200 mb-6 sm:mb-8">Sign up to get started</p>

        <form onSubmit={handleSubmit} className={`space-y-5 ${error ? "animate-glitch" : ""}`}>
          <div>
            <label className="block mb-1 text-sm text-gray-200">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-transparent text-white placeholder-gray-300 border-b border-gray-300 focus:outline-none w-full text-base"
            />
          </div>

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

          <div>
            <label className="block mb-1 text-sm text-gray-200">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="bg-transparent text-white placeholder-gray-300 border-b border-gray-300 focus:outline-none w-full text-base"
            />
          </div>

          <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md transition mb-4 text-lg sm:text-xl">
            Sign Up
          </button>

          <p className="mt-6 text-center text-gray-300">
            Already have an account?{" "}
            <button onClick={onSwitch} className="text-blue-400 hover:underline">
              Sign In
            </button>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
