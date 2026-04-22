"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login functionality
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/home.jpeg"
          alt="Children smiling"
          fill
          className="object-cover"
        />
        <div className="relative z-20 p-12 text-white">
          <div className="mb-40">
          <Link href={"/"}>
        <div className="flex flex-row items-center gap-2 md:gap-4">
          <Image
            src="/logo.png"
            alt="PCMS Logo"
            width={40}
            height={40}
            className="h-8 md:h-10 w-auto"
          />
          <div className="text-xs md:text-sm">
            <p className="text-primary text-[10px] md:text-xs">Partnership</p>
            <p className="text-primary text-[10px] md:text-xs">Coordination &</p>
            <p className="text-primary text-[10px] md:text-xs">Monitoring System</p>
          </div>
        </div>
        </Link>
          </div>
          <h1 className="text-4xl font-normal mb-4">
            Let's create<br />
            something<br />
            amazing Work<br />
            with Us.
          </h1>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
            <p className="mt-2 text-sm text-gray-600">
              Or sign in using your email address
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  placeholder="tonynguyens@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-primary hover:text-primary-dark"
                >
                  Forgot password?
                </Link>
                
              </div>
              <div className="text-sm">
              <Link
                href="/apply-for-partnership"
                className="font-medium text-primary hover:text-primary-dark"
              >
                Apply for partnership
              </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Sign in
              </button>
            </div>

            <div className="flex items-center justify-end space-x-2 text-sm">
              <Link
                href="/apply-for-partnership"
                className="font-medium text-primary hover:text-primary-dark"
              >
                Apply for partnership
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}