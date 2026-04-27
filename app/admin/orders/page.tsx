"use client";

import React from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Search, Eye, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

const ORDERS = [
  { id: "ORD-7234", customer: "Alex Rivers", dataset: "Medical LLM Corpus", date: "Oct 24, 2023", amount: "$299", status: "Completed" },
  { id: "ORD-7235", customer: "Sarah Jenkins", dataset: "Crypto Tick Data", date: "Oct 23, 2023", amount: "$149", status: "Completed" },
  { id: "ORD-7236", customer: "Michael Chen", dataset: "E-commerce Trends", date: "Oct 22, 2023", amount: "$49", status: "Pending" },
  { id: "ORD-7237", customer: "Elena Rodriguez", dataset: "Weather Patterns", date: "Oct 22, 2023", amount: "$75", status: "Failed" },
  { id: "ORD-7238", customer: "David Smith", dataset: "Satellite Imagery", date: "Oct 21, 2023", amount: "$350", status: "Completed" },
  { id: "ORD-7239", customer: "Lisa Wong", dataset: "Medical LLM Corpus", date: "Oct 20, 2023", amount: "$299", status: "Completed" },
];

export default function AdminOrdersPage() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto w-full">
      <FadeIn>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Orders</h1>
            <p className="text-gray-400 text-sm">Monitor all dataset transactions and customer purchases.</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" /> Export CSV
          </Button>
        </div>

        <div className="glass-card border-white/5 overflow-hidden">
          <div className="p-4 border-b border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search by Order ID or Customer..." 
                className="w-full pl-9 pr-4 py-2 bg-black/20 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-xs uppercase tracking-wider text-gray-500 bg-white/5">
                  <th className="p-4 font-medium">Order ID</th>
                  <th className="p-4 font-medium">Customer</th>
                  <th className="p-4 font-medium">Dataset</th>
                  <th className="p-4 font-medium">Date</th>
                  <th className="p-4 font-medium">Amount</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {ORDERS.map((order) => (
                  <tr key={order.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 font-mono text-sm text-brand-highlight">{order.id}</td>
                    <td className="p-4">
                      <div className="text-sm font-medium text-white">{order.customer}</div>
                    </td>
                    <td className="p-4 text-sm text-gray-300">{order.dataset}</td>
                    <td className="p-4 text-sm text-gray-400">{order.date}</td>
                    <td className="p-4 text-sm font-bold text-white">{order.amount}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        order.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                        order.status === 'Pending' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 
                        'bg-red-500/10 text-red-400 border-red-500/20'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-white/5 flex items-center justify-between text-sm text-gray-400">
            <span>Showing 6 of 142 orders</span>
            <div className="flex gap-1">
              <Button variant="outline" size="sm" disabled>Prev</Button>
              <Button variant="outline" size="sm" className="bg-white/10 text-white">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
