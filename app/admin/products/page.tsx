"use client";

import { FadeIn } from "@/components/motion/FadeIn";
import { Plus, Search, Edit2, Trash2, Eye, Leaf } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const INITIAL_PRODUCTS = [
  { id: "1", name: "Fresh Organic Neem Sticks", category: "Traditional", price: 12.99, status: "Active", sales: 1240 },
  { id: "2", name: "Herbal Gum Care Bundle", category: "Care Kit", price: 24.99, status: "Active", sales: 842 },
  { id: "3", name: "Neem & Mint Tooth Powder", category: "Powder", price: 15.99, status: "Active", sales: 2150 },
  { id: "4", name: "Dried Neem Bark Strips", category: "Raw", price: 9.99, status: "Draft", sales: 0 },
  { id: "5", name: "Bamboo Datun Holder", category: "Accessory", price: 19.99, status: "Active", sales: 450 },
];

export default function AdminProductsPage() {
  const [products] = useState(INITIAL_PRODUCTS);

  return (
    <div className="max-w-7xl mx-auto w-full">
      <FadeIn>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-black text-foreground mb-2 tracking-tight">Product Inventory</h1>
            <p className="text-gray-400 text-sm font-black uppercase tracking-widest">Manage your herbal collection and pricing.</p>
          </div>
          <Link href="/admin/products/new">
            <Button className="gap-3 px-8">
              <Plus className="w-5 h-5" /> Add Product
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-[3rem] border border-brand-green/5 soft-shadow overflow-hidden">
          <div className="p-6 border-b border-brand-green/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-brand-beige/20">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
              <input 
                type="text" 
                placeholder="Search collection..." 
                className="w-full pl-12 pr-6 py-3 bg-white border border-brand-green/5 rounded-2xl text-sm text-foreground focus:outline-none focus:ring-4 focus:ring-brand-green/5 transition-all shadow-sm"
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <select className="bg-white border border-brand-green/5 rounded-2xl text-xs font-black uppercase tracking-widest text-gray-500 px-6 py-3 focus:outline-none focus:ring-4 focus:ring-brand-green/5 appearance-none grow md:grow-0 cursor-pointer shadow-sm">
                <option>All Categories</option>
                <option>Traditional</option>
                <option>Care Kits</option>
                <option>Powder</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-brand-green/5 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400 bg-white">
                  <th className="p-8 font-black">Product</th>
                  <th className="p-8 font-black">Category</th>
                  <th className="p-8 font-black">Price</th>
                  <th className="p-8 font-black">Sales</th>
                  <th className="p-8 font-black">Status</th>
                  <th className="p-8 font-black text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-brand-green/5 hover:bg-brand-beige/30 transition-colors group">
                    <td className="p-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-brand-beige rounded-xl flex items-center justify-center text-brand-green">
                          <Leaf className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-black text-foreground group-hover:text-brand-green transition-colors">{product.name}</div>
                          <div className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">ID: PRD-{product.id}04</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-8">
                      <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-widest">{product.category}</span>
                    </td>
                    <td className="p-8 text-lg font-black text-foreground">${product.price}</td>
                    <td className="p-8 text-sm font-bold text-gray-400">{product.sales}</td>
                    <td className="p-8">
                      <span className={`inline-flex items-center px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        product.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="p-8 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button className="p-3 text-gray-400 hover:text-brand-green hover:bg-white rounded-xl transition-all soft-shadow-hover">
                          <Eye className="w-5 h-5" />
                        </button>
                        <button className="p-3 text-gray-400 hover:text-brand-green hover:bg-white rounded-xl transition-all soft-shadow-hover">
                          <Edit2 className="w-5 h-5" />
                        </button>
                      </div>
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
