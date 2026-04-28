"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { Users, Search, Filter, MoreHorizontal, UserCheck, UserPlus, UserMinus } from "lucide-react";

const CUSTOMERS = [
  { id: "1", name: "Rajesh Kumar", email: "rajesh@example.com", phone: "+91 98765 43210", status: "Active", joined: "24 Apr 2026", spent: "$420.00" },
  { id: "2", name: "Meera Shah", email: "meera@example.com", phone: "+91 87654 32109", status: "Active", joined: "20 Apr 2026", spent: "$1,250.00" },
  { id: "3", name: "Amit Verma", email: "amit@example.com", phone: "+91 76543 21098", status: "Inactive", joined: "15 Apr 2026", spent: "$85.00" },
  { id: "4", name: "Priya Desai", email: "priya@example.com", phone: "+91 65432 10987", status: "Active", joined: "12 Apr 2026", spent: "$320.00" },
  { id: "5", name: "Sanjay Mehta", email: "sanjay@example.com", phone: "+91 54321 09876", status: "Active", joined: "05 Apr 2026", spent: "$590.00" },
  { id: "6", name: "Saloni Patel", email: "saloni@example.com", phone: "+91 33443 34434", status: "Active", joined: "01 Apr 2026", spent: "$2,400.00" },
];

export default function AdminUsersPage() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-black text-foreground mb-2 tracking-tight">Customer Management</h1>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Manage your customer base and their accounts.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-grow sm:flex-grow-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-12 pr-6 py-3 bg-white border border-brand-green/10 rounded-2xl text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-brand-green/30 transition-all soft-shadow w-full sm:w-64"
              />
            </div>
            <button className="bg-brand-green text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-brand-green/20 flex items-center justify-center gap-2">
              <UserPlus className="w-4 h-4" /> Add
            </button>
          </div>
        </div>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          { label: "Total Customers", value: "1,248", icon: Users, color: "text-brand-green", bg: "bg-brand-green/10" },
          { label: "Active Now", value: "482", icon: UserCheck, color: "text-brand-light-green", bg: "bg-brand-light-green/10" },
          { label: "Banned / Inactive", value: "12", icon: UserMinus, color: "text-red-500", bg: "bg-red-50" },
        ].map((stat, idx) => (
          <StaggerItem key={idx}>
            <div className="bg-white p-8 rounded-[2.5rem] border border-brand-green/5 soft-shadow flex items-center gap-6">
              <div className={`p-5 rounded-2xl ${stat.bg}`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                <h3 className="text-3xl font-black text-foreground tracking-tighter">{stat.value}</h3>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.2}>
        <div className="bg-white rounded-[3rem] border border-brand-green/5 soft-shadow overflow-hidden">
          <div className="p-8 border-b border-brand-green/5 flex justify-between items-center bg-white/50">
            <h3 className="text-sm font-black text-foreground uppercase tracking-widest">Customer List</h3>
            <button className="text-gray-400 hover:text-brand-green transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-beige/30 text-[9px] md:text-[10px]">
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Customer</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Phone & Email</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Joined</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Total Spent</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-400"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-green/5">
                {CUSTOMERS.map((user) => (
                  <tr key={user.id} className="hover:bg-brand-beige/10 transition-colors group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-brand-green/5 rounded-xl flex items-center justify-center text-brand-green font-black text-xs">
                          {user.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">{user.name}</p>
                          <p className="text-[10px] text-gray-400 font-bold">ID: #{user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-sm font-medium text-gray-500">
                      <div>{user.phone}</div>
                      <div className="text-[10px] opacity-70 font-bold uppercase tracking-wider">{user.email}</div>
                    </td>
                    <td className="p-6">
                      <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${
                        user.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-6 text-sm font-bold text-gray-500">{user.joined}</td>
                    <td className="p-6 text-sm font-black text-brand-green text-right">{user.spent}</td>
                    <td className="p-6 text-right">
                      <button className="p-2 hover:bg-white rounded-lg transition-all text-gray-400 hover:text-brand-green">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-8 border-t border-brand-green/5 flex justify-center">
            <button className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] hover:text-brand-green transition-colors">
              View All 1,248 Customers
            </button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
