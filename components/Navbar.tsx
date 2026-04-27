"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Leaf, Search, ShoppingCart, User, Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/store";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Animations based on scroll
  const navWidth = useTransform(scrollY, [0, 50], ["100%", "90%"]);
  const navTop = useTransform(scrollY, [0, 50], ["0px", "20px"]);
  const navRadius = useTransform(scrollY, [0, 50], ["0px", "24px"]);
  const navShadow = useTransform(scrollY, [0, 50], ["none", "0 20px 40px rgba(0,0,0,0.08)"]);
  const navBg = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.8)"]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Products", href: "/datasets" },
    { name: "Benefits", href: "/benefits" },
    { name: "Our Story", href: "/about" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-[100] px-4 pointer-events-none">
      <motion.nav
        style={{
          width: navWidth,
          top: navTop,
          borderRadius: navRadius,
          boxShadow: navShadow,
          backgroundColor: navBg,
        }}
        className="pointer-events-auto backdrop-blur-xl border border-brand-green/5 relative overflow-hidden group"
      >
        {/* Subtle Gradient Line at top */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-green/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3 group/logo">
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="p-2.5 bg-brand-green rounded-[1.2rem] shadow-lg shadow-brand-green/20"
                >
                  <Leaf className="text-white w-6 h-6" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="font-black text-xl md:text-2xl tracking-tighter text-brand-green leading-none">
                    NEEM DATUN
                  </span>
                  <span className="text-[9px] font-black text-gray-400 tracking-[0.25em] uppercase leading-none mt-1.5 flex items-center gap-1.5">
                    <Globe className="w-2.5 h-2.5 opacity-50" />
                    લીમડા નું દાતણ
                  </span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-10">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      className="relative group/link py-2"
                    >
                      <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${isActive ? "text-brand-green" : "text-gray-500 hover:text-brand-green"}`}>
                        {link.name}
                      </span>
                      {isActive ? (
                        <motion.div 
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-green rounded-full"
                        />
                      ) : (
                        <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-green rounded-full group-hover/link:w-full transition-all duration-300" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Actions Section */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center bg-gray-50/50 rounded-2xl p-1 border border-gray-100">
                <button className="p-3 text-gray-400 hover:text-brand-green transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <div className="w-[1px] h-6 bg-gray-200 mx-0.5"></div>
                <Link href="/cart" className="relative p-3 text-gray-400 hover:text-brand-green transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-1 right-1 bg-brand-green text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-lg border-2 border-white"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </Link>
                <div className="w-[1px] h-6 bg-gray-200 mx-0.5"></div>
                <Link href="/profile" className="p-3 text-gray-400 hover:text-brand-green transition-colors">
                  <User className="w-5 h-5" />
                </Link>
              </div>

              <Link href="/auth/login" className="relative group/btn">
                <div className="absolute inset-0 bg-brand-green blur-lg opacity-0 group-hover/btn:opacity-20 transition-opacity"></div>
                <div className="relative bg-brand-green text-white px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-300 shadow-xl shadow-brand-green/20">
                  Login
                </div>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-3">
              <Link href="/cart" className="relative p-3 text-gray-400 bg-gray-50 rounded-xl">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-green text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 text-gray-500 bg-gray-50 rounded-xl active:scale-90 transition-transform"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-brand-green/5"
        >
          <div className="px-6 pt-6 pb-10 space-y-4">
            <Link 
              href="/profile" 
              onClick={() => setIsOpen(false)}
              className={`block font-black text-xl tracking-tight transition-colors ${pathname === "/profile" ? "text-brand-green" : "text-gray-400"}`}
            >
              Profile
            </Link>
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`block font-black text-xl tracking-tight transition-colors ${pathname === link.href ? "text-brand-green" : "text-gray-400"}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-brand-green/5">
              <Link 
                href="/auth/login" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center bg-brand-green text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-brand-green/20"
              >
                Login / Sign Up
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
}
