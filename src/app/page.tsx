"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  CheckSquare,
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  Info,
  Shield,
  User,
  Smartphone
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole === "admin") {
      router.push("/admin-dashboard");
    } else if (userRole === "employee") {
      router.push("/employee-dashboard");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email === "admin@example.com") {
      localStorage.setItem("userRole", "admin");
      router.push("/admin-dashboard");
    } else {
      localStorage.setItem("userRole", "employee");
      router.push("/employee-dashboard");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-background transition-colors duration-200 p-4 sm:p-6 lg:p-8">
      
      {/* Spacer Atas untuk membantu memposisikan konten di tengah secara vertikal */}
      <div className="flex-grow flex flex-col justify-center items-center">
        
        {/* Main Layout Container: Baris di Desktop, Kolom di Mobile */}
        <div className="w-full max-w-md lg:max-w-4xl flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
          
          {/* KIRI: Login Card */}
          <div className="w-full max-w-md bg-card dark:bg-card rounded-xl shadow-xl overflow-hidden border border-border order-1">
            <div className="p-8 pb-0 text-center">
              <div className="inline-flex items-center justify-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-blue-500/30">
                  <CheckSquare size={24} />
                </div>
                <span className="text-2xl font-extrabold tracking-tight text-foreground">
                  AbsenYuk!
                </span>
              </div>
              <p className="text-muted-foreground text-sm font-medium">
                Please sign in to continue.
              </p>
            </div>

            <div className="p-8 pt-6">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-foreground/80" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                      <Mail size={20} />
                    </span>
                    <input
                      className="block w-full pl-10 pr-3 py-3 rounded-lg border border-input bg-muted/50 text-foreground placeholder-muted-foreground focus:border-primary focus:ring-primary focus:ring-1 transition-shadow outline-none"
                      id="email"
                      placeholder="admin@example.com"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-foreground/80" htmlFor="password">
                    Password
                  </label>
                  <div className="relative group">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                      <Lock size={20} />
                    </span>
                    <input
                      className="block w-full pl-10 pr-10 py-3 rounded-lg border border-input bg-muted/50 text-foreground placeholder-muted-foreground focus:border-primary focus:ring-primary focus:ring-1 transition-shadow outline-none"
                      id="password"
                      placeholder="••••••••"
                      required
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground cursor-pointer"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <div className="flex justify-end mt-1">
                    <a className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors" href="#">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <button
                  className="mt-2 w-full flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-blue-600/20 transition-all duration-200 hover:shadow-blue-600/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? <span>Signing In...</span> : (
                    <>
                      <span>Sign In</span>
                      <LogIn size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* KANAN: Login Information (Demo) */}
          <div className="w-full max-w-md order-2">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-blue-800 dark:text-blue-300">
                <Info size={20} />
                <h3 className="font-bold text-base">Demo Account Access</h3>
              </div>

              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-white/60 dark:bg-black/20 border border-blue-100 dark:border-blue-900/40">
                  <div className="flex items-center gap-2 mb-2 text-blue-900 dark:text-blue-100">
                    <Shield size={16} />
                    <span className="font-bold text-sm">Administrator</span>
                  </div>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    User: <code className="bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded font-mono">admin@example.com</code>
                  </p>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">
                    Pass: <code className="bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded font-mono">123</code>
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-white/60 dark:bg-black/20 border border-blue-100 dark:border-blue-900/40">
                  <div className="flex items-center gap-2 mb-2 text-blue-900 dark:text-blue-100">
                    <User size={16} />
                    <span className="font-bold text-sm">Employee</span>
                  </div>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    User: <code className="bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded font-mono">employee@example.com</code>
                  </p>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">
                    Pass: <code className="bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded font-mono">123</code>
                  </p>
                </div>

                <div className="flex gap-2 text-xs text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Smartphone size={18} className="shrink-0" />
                  <p className="leading-relaxed">
                    <strong>Pro-tip:</strong> Use a smartphone view for the Employee dashboard to experience mobile-first features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER: Sekarang berada di luar container utama, otomatis di tengah bawah */}
      <div className="w-full py-8 text-center mt-auto">
        <p className="text-muted-foreground text-xs">
          © 2024 AbsenYuk! Inc. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a className="text-xs text-muted-foreground hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="text-xs text-muted-foreground hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[80px]" />
      </div>
    </div>
  );
}