"use client";

import { Search, Filter, Leaf, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";

const ALL_PRODUCTS = [
  { id: 1, title: "Fresh Organic Neem Sticks", category: "Traditional", price: "$12.99", rating: 4.9, benefit: "Sustainably harvested" },
  { id: 2, title: "Herbal Gum Care Bundle", category: "Care Kit", price: "$24.99", rating: 5.0, benefit: "Complete oral protection" },
  { id: 3, title: "Neem & Mint Tooth Powder", category: "Powder", price: "$15.99", rating: 4.8, benefit: "Fluoride-free formula" },
  { id: 4, title: "Dried Neem Bark Strips", category: "Raw", price: "$9.99", rating: 4.7, benefit: "Authentic chewable bark" },
  { id: 5, title: "Bamboo Datun Holder", category: "Accessory", price: "$19.99", rating: 4.9, benefit: "Eco-friendly storage" },
  { id: 6, title: "Neem Infused Mouthwash", category: "Liquid", price: "$14.99", rating: 4.6, benefit: "Refreshing natural rinse" },
];

export default function DatasetsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      <FadeIn>
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green text-[10px] font-black uppercase tracking-[0.2em] mb-2 rounded-full">
            Natural Care
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3 tracking-tight">Our Products</h1>
          <p className="text-gray-500 text-lg max-w-2xl font-medium leading-relaxed">
            Pure, herbal oral care solutions inspired by centuries of Ayurvedic tradition.
          </p>
        </div>
      </FadeIn>

      <div className="flex flex-col gap-8">
        {/* Main Content */}
        <div className="flex-grow">
          <FadeIn delay={0.1} className="mb-10 max-w-2xl">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-brand-green transition-colors" />
              <input
                type="text"
                className="w-full pl-16 pr-6 py-4 bg-white border border-brand-green/5 rounded-2xl text-foreground placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-brand-green/5 transition-all font-medium soft-shadow text-sm"
                placeholder="Search for Neem, Datun, or Herbal care..."
              />
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {ALL_PRODUCTS.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard {...product} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}
