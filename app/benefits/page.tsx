"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { Shield, Zap, Sparkles, Heart, CheckCircle2, Leaf, Droplets, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function BenefitsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <FadeIn className="text-center mb-14 md:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded-full">
          Science & Tradition
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-foreground mb-6 md:mb-8 tracking-tighter leading-none">
          Nature's <span className="text-brand-green">Healing</span> Touch
        </h1>
        <p className="text-gray-500 text-base md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed italic">
          Discover why the ancient wisdom of Neem Datun is still the most effective oral care solution today.
        </p>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32">
        {[
          { title: "Anti-Bacterial Power", desc: "Neem contains natural compounds that eliminate 99.9% of harmful oral bacteria.", icon: Zap, color: "bg-brand-green/10", text: "text-brand-green" },
          { title: "Gum Strengthening", desc: "Regular use massages and strengthens gum tissues, preventing bleeding and recession.", icon: Shield, color: "bg-brand-light-green/20", text: "text-brand-green" },
          { title: "Fluoride-Free Whitening", desc: "Naturally polishes teeth and removes stains without harsh chemicals or abrasives.", icon: Sparkles, color: "bg-brand-yellow/30", text: "text-amber-600" },
          { title: "Fresh Breath", desc: "Neutralizes odor-causing compounds at the source for long-lasting morning freshness.", icon: Droplets, color: "bg-blue-50", text: "text-blue-500" },
          { title: "Eco-Friendly Choice", desc: "100% biodegradable and zero plastic waste. Good for you, great for the planet.", icon: Leaf, color: "bg-brand-mint", text: "text-brand-green" },
          { title: "Holistic Wellness", desc: "The bitterness of Neem stimulates digestive enzymes, supporting overall gut health.", icon: Sun, color: "bg-orange-50", text: "text-orange-500" },
        ].map((benefit, i) => (
          <StaggerItem key={i}>
            <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-brand-green/5 soft-shadow hover:scale-[1.02] transition-all duration-500 group h-full">
              <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform`}>
                <benefit.icon className={`w-8 h-8 ${benefit.text}`} />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-foreground mb-4">{benefit.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{benefit.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Comparison Section */}
      <FadeIn className="mb-20 md:mb-32">
        <div className="bg-brand-green rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaves.png')] opacity-10"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-tight">Datun vs.<br className="hidden sm:block" /> Plastic Brushes</h2>
              <p className="text-white/80 text-base md:text-lg mb-8 md:mb-10 font-medium">Why millions are switching back to the roots of oral care.</p>
              <ul className="space-y-6">
                {[
                  "No micro-plastics ingestion",
                  "Natural essential oils included",
                  "Zero carbon footprint",
                  "Self-sanitizing properties",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-4 text-base md:text-xl font-bold">
                    <CheckCircle2 className="w-6 h-6 text-brand-light-green shrink-0" /> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-[2rem] md:rounded-[3rem] border border-white/20 p-6 md:p-12">
              <div className="space-y-8">
                <div className="flex items-center justify-between text-white font-black uppercase tracking-widest text-xs">
                  <span>Chemical Free</span>
                  <span className="text-brand-light-green">100%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-light-green w-full"></div>
                </div>
                <div className="flex items-center justify-between text-white font-black uppercase tracking-widest text-xs">
                  <span>Sustainability</span>
                  <span className="text-brand-light-green">100%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-light-green w-full"></div>
                </div>
                <div className="pt-8 border-t border-white/10">
                  <p className="text-white/70 text-sm font-medium italic">
                    "Transitioning to Neem Datun has been the best decision for my oral health and the environment."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn className="text-center">
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8">Ready to start your natural journey?</h2>
        <Link href="/datasets">
          <Button variant="primary" size="lg" className="px-8 md:px-12 py-5 md:py-6 text-base md:text-xl">
            Explore Products
          </Button>
        </Link>
      </FadeIn>
    </div>
  );
}
