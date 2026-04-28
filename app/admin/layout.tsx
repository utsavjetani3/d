"use client";

import { LayoutDashboard, ShoppingBasket, Users, Settings, LogOut, PieChart, ShoppingBag, Leaf, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useUser } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useUser();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FDFCF9] overflow-x-hidden">
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[40] md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Admin Sidebar */}
      <aside className={`fixed md:sticky top-0 left-0 h-screen w-64 md:w-72 bg-white border-r border-brand-green/5 flex-shrink-0 soft-shadow z-[50] transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-10">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="p-2 bg-brand-green rounded-xl group-hover:rotate-12 transition-transform">
                  <Leaf className="text-white w-5 h-5" />
                </div>
                <span className="font-black text-lg text-brand-green tracking-tight uppercase">Admin Console</span>
              </Link>
              <button className="md:hidden p-2 text-gray-400" onClick={() => setIsSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="space-y-4">
              <Link href="/admin" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-4 text-gray-400 hover:text-brand-green bg-transparent hover:bg-brand-green/5 px-4 py-4 rounded-2xl transition-all group font-bold text-sm uppercase tracking-widest">
                <LayoutDashboard className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Overview</span>
              </Link>
              <Link href="/admin/products" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-4 text-gray-400 hover:text-brand-green bg-transparent hover:bg-brand-green/5 px-4 py-4 rounded-2xl transition-all group font-bold text-sm uppercase tracking-widest">
                <ShoppingBasket className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Inventory</span>
              </Link>
              <Link href="/admin/orders" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-4 text-gray-400 hover:text-brand-green bg-transparent hover:bg-brand-green/5 px-4 py-4 rounded-2xl transition-all group font-bold text-sm uppercase tracking-widest">
                <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Orders</span>
              </Link>
              <Link href="/admin/users" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-4 text-gray-400 hover:text-brand-green bg-transparent hover:bg-brand-green/5 px-4 py-4 rounded-2xl transition-all group font-bold text-sm uppercase tracking-widest">
                <Users className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Customers</span>
              </Link>
            </nav>
          </div>

          <div className="mt-auto pt-8 border-t border-brand-green/5">
            <nav className="space-y-4 mb-12 md:mb-0">
              <Link href="/admin/settings" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-4 text-gray-400 hover:text-brand-green px-4 py-2 transition-colors font-bold text-xs uppercase tracking-widest">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-4 text-red-400 hover:text-red-500 hover:bg-red-50 px-4 py-4 rounded-2xl transition-all font-bold text-xs uppercase tracking-widest"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow relative z-10 overflow-y-auto">
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/2 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-light-green/2 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        
        <header className="h-20 md:h-24 bg-white/50 backdrop-blur-md border-b border-brand-green/5 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-2 md:gap-4">
            <button className="md:hidden p-2 text-gray-400 hover:text-brand-green transition-colors" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
            <div className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hidden sm:block">Console / Dashboard</div>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="text-right hidden xs:block">
              <p className="text-[11px] md:text-sm font-black text-foreground leading-none">{user?.name || "Admin"}</p>
              <p className="text-[8px] md:text-[10px] font-bold text-brand-green uppercase tracking-widest mt-1">{user?.isAdmin ? "Superuser" : "Staff"}</p>
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-beige rounded-xl md:rounded-2xl border border-brand-green/10 flex items-center justify-center text-brand-green font-black text-xs md:text-base">
              {user?.name?.substring(0, 2).toUpperCase() || "AD"}
            </div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
