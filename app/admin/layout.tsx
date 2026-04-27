import { LayoutDashboard, ShoppingBasket, Users, Settings, LogOut, PieChart, ShoppingBag, Leaf } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FDFCF9]">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-72 bg-white border-r border-brand-green/5 flex-shrink-0 soft-shadow z-20">
        <div className="p-8 h-full flex flex-col">
          <div className="mb-12">
            <Link href="/" className="flex items-center gap-3 mb-10 group">
              <div className="p-2 bg-brand-green rounded-xl group-hover:rotate-12 transition-transform">
                <Leaf className="text-white w-5 h-5" />
              </div>
              <span className="font-black text-lg text-brand-green tracking-tight uppercase">Admin Console</span>
            </Link>
            
            <nav className="space-y-4">
              <Link href="/admin" className="flex items-center gap-4 text-gray-400 hover:text-brand-green bg-transparent hover:bg-brand-green/5 px-4 py-4 rounded-2xl transition-all group font-bold text-sm uppercase tracking-widest">
                <LayoutDashboard className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Overview</span>
              </Link>
              <Link href="/admin/products" className="flex items-center gap-4 text-gray-400 hover:text-brand-green bg-transparent hover:bg-brand-green/5 px-4 py-4 rounded-2xl transition-all group font-bold text-sm uppercase tracking-widest">
                <ShoppingBasket className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Inventory</span>
              </Link>
              <Link href="/admin/orders" className="flex items-center gap-4 text-gray-400 hover:text-brand-green bg-transparent hover:bg-brand-green/5 px-4 py-4 rounded-2xl transition-all group font-bold text-sm uppercase tracking-widest">
                <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Orders</span>
              </Link>
              <Link href="/admin/users" className="flex items-center gap-4 text-gray-400 hover:text-brand-green bg-transparent hover:bg-brand-green/5 px-4 py-4 rounded-2xl transition-all group font-bold text-sm uppercase tracking-widest">
                <Users className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Customers</span>
              </Link>
            </nav>
          </div>

          <div className="mt-auto pt-8 border-t border-brand-green/5">
            <nav className="space-y-4">
              <Link href="/admin/settings" className="flex items-center gap-4 text-gray-400 hover:text-brand-green px-4 py-2 transition-colors font-bold text-xs uppercase tracking-widest">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>
              <button className="w-full flex items-center gap-4 text-red-400 hover:text-red-500 hover:bg-red-50 px-4 py-4 rounded-2xl transition-all font-bold text-xs uppercase tracking-widest">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow relative z-10 overflow-y-auto">
        <header className="h-24 bg-white/50 backdrop-blur-md border-b border-brand-green/5 px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Dashboard / Overview</div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-black text-foreground leading-none">Utsav Admin</p>
              <p className="text-[10px] font-bold text-brand-green uppercase tracking-widest mt-1">Superuser</p>
            </div>
            <div className="w-12 h-12 bg-brand-beige rounded-2xl border border-brand-green/10 flex items-center justify-center text-brand-green font-black">
              UA
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
