"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { Settings, User, Bell, Shield, CreditCard, HelpCircle, Save, Globe, Smartphone } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-black text-foreground mb-2 tracking-tight">Admin Settings</h1>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Configure your console and management preferences.</p>
          </div>
          <button className="bg-brand-green text-white px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-brand-green/20 flex items-center gap-3 hover:scale-105 active:scale-95">
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <FadeIn direction="right" className="md:col-span-1">
          <nav className="flex flex-col gap-2">
            {[
              { label: "Profile", icon: User, active: true },
              { label: "Notifications", icon: Bell, active: false },
              { label: "Security", icon: Shield, active: false },
              { label: "Payments", icon: CreditCard, active: false },
              { label: "General", icon: Globe, active: false },
              { label: "Devices", icon: Smartphone, active: false },
            ].map((item, idx) => (
              <button 
                key={idx}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-xs uppercase tracking-widest ${
                  item.active ? "bg-brand-green text-white shadow-lg shadow-brand-green/20" : "text-gray-400 hover:bg-white hover:text-brand-green"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </FadeIn>

        <FadeIn direction="left" className="md:col-span-3">
          <div className="bg-white p-10 rounded-[3rem] border border-brand-green/5 soft-shadow space-y-12">
            {/* Profile Section */}
            <section>
              <h3 className="text-sm font-black text-foreground uppercase tracking-widest mb-8 border-b border-brand-green/5 pb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Admin Name</label>
                  <input type="text" defaultValue="Saloni Patel" className="w-full px-6 py-4 bg-brand-beige/20 border border-brand-green/5 rounded-2xl focus:outline-none focus:border-brand-green/30 text-sm font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" defaultValue="saloni@neemdatun.com" className="w-full px-6 py-4 bg-brand-beige/20 border border-brand-green/5 rounded-2xl focus:outline-none focus:border-brand-green/30 text-sm font-bold" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                  <div className="flex gap-4">
                    <div className="px-6 py-4 bg-brand-beige/20 border border-brand-green/5 rounded-2xl text-sm font-bold text-gray-400">+91</div>
                    <input type="tel" defaultValue="3344334434" className="flex-grow px-6 py-4 bg-brand-beige/20 border border-brand-green/5 rounded-2xl focus:outline-none focus:border-brand-green/30 text-sm font-bold" />
                  </div>
                </div>
              </div>
            </section>

            {/* Notification Section */}
            <section>
              <h3 className="text-sm font-black text-foreground uppercase tracking-widest mb-8 border-b border-brand-green/5 pb-4">Preferences</h3>
              <div className="space-y-6">
                {[
                  { label: "Email Notifications", desc: "Receive sales reports and system updates via email.", checked: true },
                  { label: "SMS Alerts", desc: "Get critical system alerts on your phone.", checked: false },
                  { label: "Auto-Fulfillment", desc: "Enable automated processing for digital goods.", checked: true },
                ].map((toggle, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="max-w-md">
                      <p className="text-sm font-bold text-foreground">{toggle.label}</p>
                      <p className="text-xs text-gray-400 font-medium">{toggle.desc}</p>
                    </div>
                    <div className={`w-14 h-8 rounded-full relative transition-colors cursor-pointer ${toggle.checked ? 'bg-brand-green' : 'bg-gray-200'}`}>
                      <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${toggle.checked ? 'left-7' : 'left-1'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Help Section */}
            <div className="bg-brand-beige/20 p-8 rounded-3xl border border-brand-green/5 flex items-center gap-6">
              <div className="p-4 bg-white rounded-2xl">
                <HelpCircle className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <p className="text-sm font-black text-foreground uppercase tracking-tight">Need Support?</p>
                <p className="text-xs text-gray-400 font-medium">Contact our developer team for any technical issues with the console.</p>
              </div>
              <button className="ml-auto text-[10px] font-black text-brand-green uppercase tracking-widest border-b-2 border-brand-green/20 hover:border-brand-green transition-all">
                Submit Ticket
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
