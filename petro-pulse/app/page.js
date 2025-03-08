"use client";
import AuthForm from "@/components/AuthForm";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="relative w-full h-full">
        <video src="/video.mp4" autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="gradient-glow"></div> 
      </div>

      <div className="fixed inset-0 bg-black/50" />

      <div className="absolute inset-0 flex justify-end items-center p-24">
        <AuthForm /> 
      </div>
    </div>
  );
}
