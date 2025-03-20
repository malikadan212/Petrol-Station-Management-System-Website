// app/employee/page.js
"use client";
import AuthForm from "@/components/AuthForm";
import { useRouter } from "next/navigation";

export default function EmployeeLogin() {
  const router = useRouter();
  
  return (
    <div className="relative w-full h-screen">
      {/* Background Video Section */}
      <div className="relative w-full h-full">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="gradient-glow"></div>
      </div>
      
      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/50" />
      
      {/* Auth Form Container */}
      <div className="absolute inset-0 flex justify-center sm:justify-end items-center p-6 sm:p-12 md:p-24">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <AuthForm isEmployeeLogin={true} />
        </div>
      </div>
    </div>
  );
}