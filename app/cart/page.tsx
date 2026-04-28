"use client";

import React from "react";
import { useCart } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import { Trash2, ShoppingCart, ArrowLeft, Plus, Minus, Leaf } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCart();
  const total = getTotal();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-brand-beige rounded-full flex items-center justify-center mb-8 border border-brand-green/10">
          <ShoppingCart className="w-10 h-10 text-brand-green" />
        </div>
        <h1 className="text-4xl font-black text-foreground mb-4">Your cart is empty</h1>
        <p className="text-gray-500 mb-10 max-w-md font-medium">
          Start your journey to natural oral health. Explore our premium Neem Datun collection.
        </p>
        <Link href="/datasets">
          <Button variant="primary" size="lg">
            Browse Collection
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <FadeIn>
        <div className="flex items-center gap-3 md:gap-4 mb-10 md:mb-16">
          <Link href="/datasets" className="p-3 hover:bg-brand-green/5 rounded-2xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-brand-green" />
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">Shopping Bag</h1>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16">
        <div className="lg:col-span-2">
          <StaggerContainer className="space-y-5 md:space-y-8">
            {items.map((item) => (
              <StaggerItem key={item.id}>
                <div className="bg-white p-5 md:p-8 flex flex-col sm:flex-row items-center gap-5 md:gap-8 group rounded-[2rem] md:rounded-[2.5rem] soft-shadow border border-brand-green/5">
                  <div className="w-24 h-24 bg-brand-beige rounded-2xl flex items-center justify-center border border-brand-green/10 shrink-0">
                    <Leaf className="w-10 h-10 text-brand-green" />
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-xl md:text-2xl font-black text-foreground mb-2 group-hover:text-brand-green transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">{item.category}</p>
                    <div className="flex items-center justify-center sm:justify-start gap-6">
                      <div className="flex items-center bg-brand-beige rounded-xl border border-brand-green/5 p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-white rounded-lg text-brand-green transition-all"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center text-foreground font-black">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-white rounded-lg text-brand-green transition-all"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest"
                      >
                        <Trash2 className="w-4 h-4" /> Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right sm:text-right">
                    <p className="text-2xl md:text-3xl font-black text-brand-green">{item.price}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="lg:col-span-1">
          <FadeIn delay={0.2} className="lg:sticky lg:top-32">
            <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] soft-shadow border-2 border-brand-green/10">
              <h2 className="text-xl md:text-2xl font-black text-foreground mb-8 md:mb-10 tracking-tight">Order Summary</h2>
              <div className="space-y-5 md:space-y-6 mb-8 md:mb-10">
                <div className="flex justify-between text-gray-500 font-bold">
                  <span>Subtotal</span>
                  <span className="text-foreground">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500 font-bold">
                  <span>Shipping</span>
                  <span className="text-brand-green uppercase text-xs tracking-widest">Free</span>
                </div>
                <div className="pt-6 border-t border-brand-green/5 flex justify-between">
                  <span className="text-lg md:text-xl font-black text-foreground">Total</span>
                  <span className="text-2xl md:text-3xl font-black text-brand-green">${total.toFixed(2)}</span>
                </div>
              </div>
              <Button variant="primary" size="lg" className="w-full py-5 md:py-6 text-base md:text-xl">
                Checkout Now
              </Button>
              <div className="mt-8 flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                <Shield2 className="w-4 h-4 text-brand-green" />
                <span>Encrypted Payment</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

function Shield2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
