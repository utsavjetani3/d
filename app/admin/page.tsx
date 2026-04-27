"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { ArrowUpRight, DollarSign, Users, ShoppingBasket, Activity, Leaf } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 6000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 7000 },
  { name: 'Jun', sales: 8500 },
  { name: 'Jul', sales: 11000 },
];

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto w-full">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-black text-foreground mb-2 tracking-tight">Daily Overview</h1>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Marketplace performance for Neem products.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white hover:bg-brand-beige text-gray-500 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest border border-brand-green/10 transition-all soft-shadow">
              Report.PDF
            </button>
            <button className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-brand-green/20">
              Download CSV
            </button>
          </div>
        </div>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {[
          { label: "Gross Revenue", value: "$12,840", change: "+12.4%", icon: DollarSign, color: "text-brand-green", bg: "bg-brand-green/10" },
          { label: "Orders Fulfilled", value: "842", change: "+18.2%", icon: ShoppingBasket, color: "text-brand-light-green", bg: "bg-brand-light-green/10" },
          { label: "New Customers", value: "1,204", change: "+4.1%", icon: Users, color: "text-amber-500", bg: "bg-amber-500/10" },
          { label: "Conversion", value: "4.82%", change: "+0.8%", icon: Activity, color: "text-brand-green", bg: "bg-brand-green/5" },
        ].map((stat, idx) => (
          <StaggerItem key={idx}>
            <div className="bg-white p-8 rounded-[2.5rem] border border-brand-green/5 soft-shadow group hover:border-brand-green/20 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="text-[10px] font-black text-brand-green bg-brand-green/5 px-2 py-1 rounded-lg">
                  {stat.change}
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-black text-foreground mb-2 tracking-tighter">{stat.value}</h3>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <FadeIn delay={0.2} className="lg:col-span-2">
          <div className="bg-white p-8 rounded-[3rem] border border-brand-green/5 soft-shadow h-[450px]">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-sm font-black text-foreground uppercase tracking-widest">Sales Velocity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Units</span>
                </div>
              </div>
            </div>
            <div className="w-full h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#4CAF50" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#00000005" vertical={false} />
                  <XAxis dataKey="name" stroke="#00000020" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="#00000020" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', fontSize: '12px' }}
                  />
                  <Area type="monotone" dataKey="sales" stroke="#4CAF50" strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="lg:col-span-1">
          <div className="bg-white p-8 rounded-[3rem] border border-brand-green/5 soft-shadow h-[450px] flex flex-col">
            <h3 className="text-sm font-black text-foreground uppercase tracking-widest mb-8">Recent Activity</h3>
            <div className="flex-grow overflow-auto space-y-4 pr-2">
              {[
                { item: "Organic Neem Sticks", user: "Rajesh K.", price: "$12.99", status: "Fulfilled" },
                { item: "Gum Care Bundle", user: "Meera S.", price: "$24.99", status: "Processing" },
                { item: "Tooth Powder", user: "Amit V.", price: "$15.99", status: "Fulfilled" },
                { item: "Neem Mouthwash", user: "Priya D.", price: "$14.99", status: "Shipped" },
                { item: "Dried Bark", user: "Sanjay M.", price: "$9.99", status: "Fulfilled" },
              ].map((sale, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-2xl hover:bg-brand-beige transition-all border border-transparent hover:border-brand-green/10">
                  <div className="max-w-[140px]">
                    <p className="text-sm font-bold text-foreground truncate">{sale.item}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest truncate">{sale.user}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-brand-green">{sale.price}</p>
                    <p className={`text-[8px] font-black uppercase tracking-widest ${sale.status === 'Fulfilled' ? 'text-green-500' : 'text-amber-500'}`}>{sale.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
