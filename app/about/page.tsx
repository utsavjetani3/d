"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { Leaf, Users, Globe, History, Heart, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn className="max-w-4xl mx-auto text-center mb-32">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded-full">
          Our Heritage
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-foreground mb-8 tracking-tighter leading-none">
          Rooted in <span className="text-brand-green">Tradition</span>
        </h1>
        <p className="text-gray-500 text-xl font-medium leading-relaxed">
          We are on a mission to bring the ancient Gujarati secret of Neem Datun to the modern world, combining sustainable sourcing with premium quality.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
        <FadeIn direction="right">
          <div className="aspect-[4/5] bg-brand-beige rounded-[4rem] overflow-hidden relative soft-shadow">
            <div className="absolute inset-0 flex items-center justify-center">
              <Leaf className="w-64 h-64 text-brand-green/10" />
            </div>
            <div className="absolute bottom-12 left-12 right-12 bg-white/80 backdrop-blur-md p-10 rounded-[3rem] border border-brand-green/5">
              <p className="text-3xl font-black text-brand-green mb-2 tracking-tight">Authentic Heritage</p>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">લીમડા નું દાતણ — કુદરતી કુટુંબ</p>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn direction="left" className="space-y-12">
          <div>
            <h2 className="text-4xl font-black text-foreground mb-6 tracking-tight">The Story of Datun</h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-6">
              For centuries, the people of Gujarat and across India have relied on the Neem tree, often called the "Village Pharmacy," for its unparalleled medicinal properties. The simple act of using a Neem twig for oral care has protected generations from dental issues.
            </p>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              Neem Datun was founded to preserve this disappearing tradition and make it accessible, convenient, and premium for the health-conscious global citizen.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-4xl font-black text-brand-green">100%</p>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Natural Sourcing</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-black text-brand-green">0%</p>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Plastic Waste</p>
            </div>
          </div>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
        {[
          { title: "Sustainable Farming", desc: "We partner directly with organic farms to ensure every stick is harvested with care for the tree's health.", icon: Globe },
          { title: "Traditional Quality", desc: "Our selection process follows ancient criteria to ensure optimal essential oil content in every twig.", icon: History },
          { title: "Global Community", desc: "Joining a movement of over 10,000 users who have switched to plastic-free oral care.", icon: Users },
        ].map((item, i) => (
          <StaggerItem key={i}>
            <div className="text-center group">
              <div className="w-20 h-20 bg-brand-beige rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-green group-hover:rotate-12 transition-all duration-500 shadow-sm">
                <item.icon className="w-10 h-10 text-brand-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-black text-foreground mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn className="bg-brand-beige rounded-[4rem] p-12 md:p-24 text-center border border-brand-green/5">
        <Heart className="w-16 h-16 text-brand-green/30 mx-auto mb-10" />
        <h2 className="text-4xl font-black text-foreground mb-8 tracking-tight">Our Commitment to You</h2>
        <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto mb-12">
          "We believe that the best solutions for our health are already provided by nature. Our promise is to deliver those solutions with integrity and respect for the planet."
        </p>
        <div className="flex items-center justify-center gap-2">
          <ShieldCheck className="w-6 h-6 text-brand-green" />
          <span className="text-sm font-black text-foreground uppercase tracking-widest">Certified Organic & Ethical</span>
        </div>
      </FadeIn>
    </div>
  );
}
