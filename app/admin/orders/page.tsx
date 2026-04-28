"use client";

import React from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { Search, Eye, Filter, Download, ShoppingBag, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";

const ORDERS = [
  { id: "ORD-7234", customer: "Alex Rivers", item: "Organic Neem Sticks", date: "24 Apr 2026", amount: "$299.00", status: "Completed" },
  { id: "ORD-7235", customer: "Sarah Jenkins", item: "Gum Care Bundle", date: "23 Apr 2026", amount: "$149.00", status: "Processing" },
  { id: "ORD-7236", customer: "Michael Chen", item: "Tooth Powder", date: "22 Apr 2026", amount: "$49.00", status: "Shipped" },
  { id: "ORD-7237", customer: "Elena Rodriguez", item: "Dried Bark", date: "22 Apr 2026", amount: "$75.00", status: "Cancelled" },
  { id: "ORD-7238", customer: "David Smith", item: "Datun Holder", date: "21 Apr 2026", amount: "$350.00", status: "Completed" },
];

export default function AdminOrdersPage() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-black text-foreground mb-2 tracking-tight">Order Management</h1>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Track and manage customer transactions.</p>
          </div>
          <button className="bg-white hover:bg-brand-beige text-brand-green px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest border border-brand-green/10 transition-all soft-shadow flex items-center gap-2">
            <Download className="w-4 h-4" /> Export Report
          </button>
        </div>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          { label: "Total Orders", value: "2,480", icon: ShoppingBag, color: "text-brand-green", bg: "bg-brand-green/10" },
          { label: "Pending", value: "14", icon: Filter, color: "text-amber-500", bg: "bg-amber-500/10" },
          { label: "Completed", value: "2,420", icon: Download, color: "text-brand-light-green", bg: "bg-brand-light-green/10" },
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
          <div className="p-6 border-b border-brand-green/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-brand-beige/20">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
              <input 
                type="text" 
                placeholder="Search orders..." 
                className="w-full pl-12 pr-6 py-3 bg-white border border-brand-green/5 rounded-2xl text-sm text-foreground focus:outline-none focus:ring-4 focus:ring-brand-green/5 transition-all shadow-sm"
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <select className="bg-white border border-brand-green/5 rounded-2xl text-xs font-black uppercase tracking-widest text-gray-500 px-6 py-3 focus:outline-none focus:ring-4 focus:ring-brand-green/5 appearance-none grow md:grow-0 cursor-pointer shadow-sm">
                <option>All Status</option>
                <option>Completed</option>
                <option>Processing</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-brand-green/5 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400 bg-white">
                  <th className="p-8 font-black">Order ID</th>
                  <th className="p-8 font-black">Customer</th>
                  <th className="p-8 font-black">Item</th>
                  <th className="p-8 font-black">Date</th>
                  <th className="p-8 font-black text-right">Amount</th>
                  <th className="p-8 font-black">Status</th>
                  <th className="p-8 font-black text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {ORDERS.map((order) => (
                  <tr key={order.id} className="border-b border-brand-green/5 hover:bg-brand-beige/30 transition-colors group">
                    <td className="p-8 font-mono text-sm font-bold text-brand-green">{order.id}</td>
                    <td className="p-8 text-sm font-bold text-foreground">{order.customer}</td>
                    <td className="p-8 text-sm text-gray-500 font-medium">{order.item}</td>
                    <td className="p-8 text-sm text-gray-400 font-bold">{order.date}</td>
                    <td className="p-8 text-sm font-black text-foreground text-right">{order.amount}</td>
                    <td className="p-8">
                      <span className={`inline-flex items-center px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        order.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                        order.status === 'Processing' ? 'bg-amber-100 text-amber-600' : 
                        'bg-red-100 text-red-600'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-8 text-right">
                      <button className="p-3 text-gray-400 hover:text-brand-green hover:bg-white rounded-xl transition-all soft-shadow-hover">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
