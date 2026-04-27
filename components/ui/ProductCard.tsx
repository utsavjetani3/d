"use client";

import React from "react";
import { Star, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  id: string | number;
  title: string;
  category: string;
  price: string;
  rating: number;
  benefit?: string;
  image?: string;
}

export const ProductCard = ({ id, title, category, price, rating, benefit }: ProductCardProps) => {
  return (
    <div className="bg-white p-6 rounded-[2rem] soft-shadow hover:scale-[1.03] transition-all duration-500 cursor-pointer group flex flex-col border border-brand-green/5">
      <div className="w-full aspect-square bg-brand-beige rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
        <Leaf className="w-16 h-16 text-brand-green/20 group-hover:rotate-12 transition-transform duration-700" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-brand-mint text-brand-green text-[10px] font-bold rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
      
      <div className="flex-grow">
        <div className="flex items-center gap-1 text-amber-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < Math.floor(rating) ? "fill-current" : ""}`} />
          ))}
          <span className="text-[10px] text-gray-400 font-bold ml-1">{rating}</span>
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-brand-green transition-colors">
          {title}
        </h3>
        
        <p className="text-xs font-medium text-brand-green mb-4 italic">
          {benefit || "Natural Oral Protection"}
        </p>
      </div>
      
      <div className="mt-4 pt-4 border-t border-brand-green/5 flex items-center justify-between">
        <span className="text-2xl font-black text-brand-green">{price}</span>
        <Link href={`/datasets/${id}`} className="w-10 h-10 bg-brand-beige rounded-full flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};
