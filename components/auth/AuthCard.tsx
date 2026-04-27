"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, ArrowLeft } from "lucide-react";

interface AuthCardProps {
  initialType?: "login" | "register";
}

export default function AuthCard({ initialType = "login" }: AuthCardProps) {
  const [type, setType] = useState<"login" | "register">(initialType);

  useEffect(() => {
    setType(initialType);
  }, [initialType]);

  const isLogin = type === "login";

  return (
    <div className="relative min-h-[calc(100vh-96px)] w-full flex flex-col items-center justify-center py-5 bg-[#f0f0eb] box-border font-poppins overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={type}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`w-[480px] max-w-[90vw] max-h-[calc(100vh-136px)] bg-white rounded-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col
            ${isLogin ? "p-[28px_36px]" : "p-[22px_32px]"}`}
        >
          {/* Header */}
          <div className={`text-center ${isLogin ? "mb-[14px]" : "mb-[10px]"}`}>
            {isLogin ? (
              <div className="flex flex-col items-center">
                <div className="w-[48px] h-[48px] bg-[#2E7D32] rounded-xl mb-2 flex items-center justify-center">
                  <Leaf className="text-white w-6 h-6" />
                </div>
                <h2 className="text-[20px] font-black tracking-tighter text-[#2E7D32] leading-none uppercase">
                  NEEM DATUN
                </h2>
                <p className="text-[12px] font-bold text-gray-400 tracking-[0.2em] uppercase mt-1">
                  લીમડા નું દાતણ
                </p>
                <h1 className="text-[13px] text-gray-400 font-bold mt-2">Sign in to your account</h1>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <h2 className="text-[24px] font-black text-[#2E7D32] tracking-tight leading-none mb-1">Create Account</h2>
                <p className="text-[13px] text-gray-500 font-bold">Join Neem Datun community</p>
              </div>
            )}
          </div>

          <form className="flex flex-col overflow-hidden" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="mb-[10px]">
                <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-[6px] ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full h-[44px] px-4 bg-white border border-gray-200 rounded-[10px] focus:outline-none focus:border-[#4CAF50] transition-all font-semibold text-[13px]"
                />
              </div>
            )}

            <div className={isLogin ? "mb-[14px]" : "mb-[10px]"}>
              <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-[6px] ml-1">
                {isLogin ? "NUMBER" : "PHONE NUMBER"}
              </label>
              <div className="flex gap-2">
                <div className="h-[44px] w-[60px] bg-white border border-gray-200 rounded-[10px] flex items-center justify-center font-black text-[#2E7D32] text-[13px] shrink-0">
                  +91
                </div>
                <input 
                  type="tel" 
                  placeholder="10-digit number" 
                  maxLength={10}
                  className="flex-grow h-[44px] px-4 bg-white border border-gray-200 rounded-[10px] focus:outline-none focus:border-[#4CAF50] transition-all font-semibold text-[13px] tracking-widest"
                />
              </div>
            </div>

            <div className={`flex flex-col ${isLogin ? "gap-3 pt-2" : "gap-[10px] pt-1"}`}>
              <button className="w-full h-[46px] bg-gradient-to-r from-[#81C784] to-[#4CAF50] text-white font-black rounded-[12px] text-[14px] tracking-widest uppercase shadow-sm hover:opacity-90 transition-opacity">
                SEND OTP
              </button>
              
              {!isLogin && (
                <button className="w-full h-[46px] bg-[#2E7D32] text-white font-black rounded-[12px] text-[14px] tracking-widest uppercase shadow-md hover:opacity-90 transition-opacity">
                  CREATE ACCOUNT
                </button>
              )}
            </div>
          </form>

          <div className={`text-center flex flex-col items-center ${isLogin ? "mt-[14px] gap-[14px]" : "mt-[12px] gap-[8px]"}`}>
            <button 
              onClick={() => setType(isLogin ? "register" : "login")}
              className="text-[13px] font-bold text-gray-400 hover:text-[#2E7D32] transition-colors"
            >
              {isLogin ? (
                <>Don't have account? <span className="text-[#4CAF50] font-black uppercase ml-1">Create Account</span></>
              ) : (
                <>Already have an account? <span className="text-[#4CAF50] font-black uppercase ml-1">Sign In</span></>
              )}
            </button>
            
            <Link href="/" className="inline-flex items-center gap-2 text-[11px] font-black text-gray-400 hover:text-[#2E7D32] transition-colors uppercase tracking-[0.2em]">
              <ArrowLeft className="w-3 h-3" /> BACK TO HOME
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
}
