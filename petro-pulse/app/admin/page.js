// app/admin/page.js
"use client";
import AuthForm from "@/components/AuthForm";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  
  // Custom handler function to pass to AuthForm
  const handleAdminLogin = (email, password) => {
    // Here you would add the actual admin verification logic
    // For now, we'll just redirect to the admin dashboard
    
    /*
    // Admin verification logic (commented as requested)
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    
    if (response.ok) {
      router.push('/admin/dashboard');
    } else {
      alert('Invalid admin credentials');
    }
    */
    
    // For now, just redirect to the admin dashboard
    router.push('/admin/dashboard');
  };

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
          <AuthForm isAdminLogin={true} onAdminLogin={handleAdminLogin} />
        </div>
      </div>
    </div>
  );
}