"use client";

import React, { useState } from "react";
import { 
  User, Package, MapPin, Settings, LogOut, 
  Edit2, Camera, ChevronRight, Plus, 
  Shield, Bell, ExternalLink, ArrowRight, Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type Section = "profile" | "orders" | "addresses" | "settings";

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState<Section>("profile");
  const [isEditing, setIsEditing] = useState(false);

  const menuItems = [
    { id: "profile", label: "My Profile", icon: User },
    { id: "orders", label: "Orders", icon: Package },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFB] pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <FadeIn direction="right" className="bg-white rounded-[2.5rem] p-8 soft-shadow border border-brand-green/5">
              <div className="flex flex-col items-center text-center mb-10">
                <div className="relative group mb-6">
                  <div className="w-24 h-24 rounded-full bg-brand-beige border-4 border-white shadow-xl overflow-hidden flex items-center justify-center">
                    <User className="w-10 h-10 text-brand-green/40" />
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-brand-green text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-xl font-black text-foreground mb-1">Utsav Patel</h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Premium Member</p>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id as Section)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group ${
                      activeSection === item.id 
                        ? "bg-brand-green text-white shadow-lg shadow-brand-green/20" 
                        : "text-gray-500 hover:bg-brand-beige hover:text-brand-green"
                    }`}
                  >
                    <div className="flex items-center gap-4 font-black text-sm uppercase tracking-widest">
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </div>
                    <ChevronRight className={`w-4 h-4 opacity-30 transition-transform ${activeSection === item.id ? "rotate-90 opacity-100" : "group-hover:translate-x-1"}`} />
                  </button>
                ))}
                
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-red-400 font-black text-sm uppercase tracking-widest hover:bg-red-50 transition-colors">
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              </nav>
            </FadeIn>
          </aside>

          {/* Main Content Area */}
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              {activeSection === "profile" && (
                <ProfileSection key="profile" isEditing={isEditing} setIsEditing={setIsEditing} />
              )}
              {activeSection === "orders" && <OrdersSection key="orders" />}
              {activeSection === "addresses" && <AddressesSection key="addresses" />}
              {activeSection === "settings" && <SettingsSection key="settings" />}
            </AnimatePresence>
          </main>
          
        </div>
      </div>
    </div>
  );
}

function ProfileSection({ isEditing, setIsEditing }: { isEditing: boolean, setIsEditing: (v: boolean) => void }) {
  return (
    <FadeIn direction="left" className="space-y-8">
      <div className="bg-white rounded-[2.5rem] p-10 soft-shadow border border-brand-green/5">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black text-foreground tracking-tighter mb-1">My Profile</h2>
            <p className="text-gray-400 font-bold text-sm">Manage your personal information</p>
          </div>
          <Button 
            variant={isEditing ? "outline" : "natural"} 
            onClick={() => setIsEditing(!isEditing)}
            className="gap-2"
          >
            {isEditing ? "Cancel" : <><Edit2 className="w-4 h-4" /> Edit Profile</>}
          </Button>
        </div>

        {isEditing ? (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
              <Input defaultValue="Utsav Patel" className="rounded-xl" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <Input defaultValue="utsav@example.com" type="email" className="rounded-xl" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
              <Input defaultValue="+91 8200685406" className="rounded-xl" />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Default Address</label>
              <Input defaultValue="123 Traditional St, Gujarat" className="rounded-xl" />
            </div>
            <div className="md:col-span-2 pt-4">
              <Button 
                onClick={() => setIsEditing(false)}
                className="w-full py-6 rounded-2xl bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] shadow-xl shadow-brand-green/20"
              >
                Save Changes
              </Button>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { label: "Full Name", value: "Utsav Patel" },
              { label: "Email", value: "utsav@example.com" },
              { label: "Phone", value: "+91 8200685406" },
              { label: "Location", value: "Gujarat, India" },
            ].map((info, i) => (
              <div key={i} className="p-6 bg-brand-beige rounded-2xl border border-brand-green/5">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-2">{info.label}</p>
                <p className="text-lg font-black text-foreground">{info.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Member Since", value: "Oct 2023", icon: Shield },
          { label: "Total Orders", value: "12", icon: Package },
          { label: "Rewards", value: "450 pts", icon: Sparkles },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] soft-shadow border border-brand-green/5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-brand-mint flex items-center justify-center text-brand-green">
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
              <p className="text-xl font-black text-foreground tracking-tighter">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

function OrdersSection() {
  const orders = [
    { id: "ORD-7721", date: "24 Apr 2024", status: "Delivered", price: "$45.00", items: "3 items" },
    { id: "ORD-6612", date: "12 Apr 2024", status: "Delivered", price: "$12.99", items: "1 item" },
    { id: "ORD-5503", date: "02 Mar 2024", status: "Pending", price: "$32.50", items: "2 items" },
  ];

  return (
    <FadeIn direction="left" className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-black text-foreground tracking-tighter">Order History</h2>
        <span className="px-4 py-2 bg-brand-beige text-brand-green text-xs font-black rounded-full uppercase tracking-widest">
          3 Recent Orders
        </span>
      </div>

      {orders.map((order, i) => (
        <div key={i} className="bg-white p-8 rounded-[2rem] soft-shadow border border-brand-green/5 flex flex-col md:flex-row items-center justify-between gap-6 hover:translate-y-[-4px] transition-transform duration-300">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-brand-mint rounded-2xl flex items-center justify-center text-brand-green">
              <Package className="w-8 h-8" />
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-2">{order.id}</p>
              <h4 className="text-lg font-black text-foreground">{order.items}</h4>
              <p className="text-xs font-bold text-gray-400">{order.date}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-end">
            <div className="text-right">
              <p className="text-2xl font-black text-brand-green tracking-tighter">{order.price}</p>
              <span className={`text-[10px] font-black uppercase tracking-widest ${order.status === "Delivered" ? "text-green-500" : "text-amber-400"}`}>
                ● {order.status}
              </span>
            </div>
            <button className="p-4 bg-brand-beige text-brand-green rounded-xl hover:bg-brand-green hover:text-white transition-all">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </FadeIn>
  );
}

function AddressesSection() {
  const addresses = [
    { type: "Home", address: "123 Traditional St, Neem Valley, Gujarat, 380001", phone: "+91 82006 85406" },
    { type: "Office", address: "456 Herbal Plaza, Corporate Hub, Mumbai, 400001", phone: "+91 82006 85406" },
  ];

  return (
    <FadeIn direction="left" className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-black text-foreground tracking-tighter">Saved Addresses</h2>
        <Button variant="natural" className="gap-2">
          <Plus className="w-4 h-4" /> Add New
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {addresses.map((addr, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] soft-shadow border border-brand-green/5 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-beige rounded-bl-[4rem] -mr-10 -mt-10 transition-all group-hover:scale-110" />
            <MapPin className="w-8 h-8 text-brand-green/20 mb-6" />
            
            <h4 className="text-lg font-black text-foreground mb-4 uppercase tracking-tighter flex items-center gap-3">
              {addr.type}
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
            </h4>
            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
              {addr.address}
            </p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{addr.phone}</p>
            
            <div className="mt-8 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-xs font-black text-brand-green uppercase tracking-widest hover:underline">Edit</button>
              <button className="text-xs font-black text-red-400 uppercase tracking-widest hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

function SettingsSection() {
  return (
    <FadeIn direction="left" className="space-y-8">
      <h2 className="text-3xl font-black text-foreground tracking-tighter">Account Settings</h2>

      <div className="bg-white rounded-[2.5rem] p-10 soft-shadow border border-brand-green/5 space-y-12">
        {/* Security */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-mint flex items-center justify-center text-brand-green">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black text-foreground tracking-tight">Security & Password</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Current Password</label>
              <Input type="password" placeholder="••••••••" className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">New Password</label>
              <Input type="password" placeholder="••••••••" className="rounded-xl" />
            </div>
            <div className="md:col-span-2">
              <Button className="w-full md:w-auto px-10 rounded-xl">Update Password</Button>
            </div>
          </div>
        </section>

        <div className="h-[1px] bg-gray-100" />

        {/* Notifications */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand-beige flex items-center justify-center text-brand-green">
              <Bell className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-black text-foreground tracking-tight">Notification Settings</h3>
          </div>
          
          <div className="space-y-4">
            {[
              "Order Updates via SMS",
              "New Product Launches",
              "Exclusive Traditional Wisdom Tips",
            ].map((text, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-[#F9F9F6] rounded-2xl border border-brand-green/5">
                <span className="text-sm font-bold text-gray-600">{text}</span>
                <div className="w-12 h-6 bg-brand-green/20 rounded-full relative cursor-pointer">
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-brand-green rounded-full transition-all ${i === 0 ? "translate-x-6" : ""}`} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </FadeIn>
  );
}
