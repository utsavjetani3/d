"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Leaf, ArrowLeft, Home } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-96px)] flex items-center justify-center p-6 bg-brand-beige/20">
      <FadeIn className="text-center max-w-xl">
        <div className="w-24 h-24 bg-brand-green/10 rounded-[2rem] flex items-center justify-center mx-auto mb-10 border border-brand-green/5">
          <Leaf className="w-12 h-12 text-brand-green animate-pulse" />
        </div>
        
        <h1 className="text-8xl font-black text-brand-green/20 mb-4 leading-none">404</h1>
        <h2 className="text-4xl font-black text-foreground mb-6 tracking-tight">Oops! Natural Mistake.</h2>
        
        <p className="text-gray-500 text-lg mb-12 font-medium leading-relaxed">
          It seems the path you're looking for has grown in another direction. Let's get you back to the roots of natural care.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/">
            <Button variant="primary" size="lg" className="gap-2 px-10">
              <Home className="w-5 h-5" /> Back Home
            </Button>
          </Link>
          <Link href="/datasets">
            <Button variant="natural" size="lg" className="gap-2 px-10 border-brand-green/20">
              <ArrowLeft className="w-5 h-5" /> Our Products
            </Button>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
