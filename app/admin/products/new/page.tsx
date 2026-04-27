"use client";

import React from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowLeft, Upload, Save, X, Leaf } from "lucide-react";
import Link from "next/link";

export default function AddProductPage() {
  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto w-full">
      <FadeIn>
        <div className="flex items-center gap-6 mb-12">
          <Link href="/admin/products" className="w-12 h-12 bg-white rounded-2xl soft-shadow flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-3xl font-black text-foreground tracking-tight">Add New Product</h1>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Marketplace / Inventory / Create</p>
          </div>
        </div>

        <div className="space-y-10">
          <div className="bg-white p-10 rounded-[3rem] soft-shadow border border-brand-green/5">
            <h2 className="text-lg font-black text-foreground mb-10 flex items-center gap-3 uppercase tracking-widest">
              <span className="w-8 h-8 bg-brand-green text-white rounded-xl flex items-center justify-center text-xs">1</span>
              Product Essence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Product Title</label>
                <Input placeholder="e.g. Fresh Organic Neem Sticks" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Detailed Description</label>
                <textarea 
                  className="w-full min-h-[160px] rounded-[2rem] border border-brand-green/10 bg-brand-beige/30 px-6 py-5 text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-brand-green/5 focus:border-brand-green transition-all"
                  placeholder="Describe the harvest location, benefits, and usage instructions..."
                ></textarea>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Category</label>
                <select className="w-full h-14 rounded-2xl border border-brand-green/10 bg-white px-6 text-sm font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green transition-all appearance-none shadow-sm cursor-pointer">
                  <option>Select Category</option>
                  <option>Fresh Datun Sticks</option>
                  <option>Herbal Powders</option>
                  <option>Oral Care Kits</option>
                  <option>Accessories</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Unit Price ($)</label>
                <Input type="number" placeholder="0.00" />
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] soft-shadow border border-brand-green/5">
            <h2 className="text-lg font-black text-foreground mb-10 flex items-center gap-3 uppercase tracking-widest">
              <span className="w-8 h-8 bg-brand-light-green text-white rounded-xl flex items-center justify-center text-xs">2</span>
              Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Package Size</label>
                <Input placeholder="e.g. 10 sticks" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Weight</label>
                <Input placeholder="e.g. 250g" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Shelf Life</label>
                <Input placeholder="e.g. 15 days" />
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] soft-shadow border border-brand-green/5">
            <h2 className="text-lg font-black text-foreground mb-10 flex items-center gap-3 uppercase tracking-widest">
              <span className="w-8 h-8 bg-amber-400 text-white rounded-xl flex items-center justify-center text-xs">3</span>
              Visual Assets
            </h2>
            <div className="border-4 border-dashed border-brand-green/5 rounded-[2.5rem] p-16 text-center hover:border-brand-green/20 hover:bg-brand-green/5 transition-all cursor-pointer group bg-brand-beige/20">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform soft-shadow">
                <Upload className="w-10 h-10 text-brand-green" />
              </div>
              <h3 className="text-foreground font-black text-xl mb-2">Upload Product Images</h3>
              <p className="text-sm text-gray-400 font-bold">Drag and drop high-res PNG or JPG (max 5MB)</p>
            </div>
          </div>

          <div className="flex justify-end gap-6 pt-6">
            <Link href="/admin/products">
              <Button variant="ghost" className="px-10">Discard</Button>
            </Link>
            <Button variant="primary" className="gap-3 px-12 py-6 text-lg rounded-3xl">
              <Save className="w-5 h-5" /> Publish Product
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
