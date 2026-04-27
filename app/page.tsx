"use client";

import { ArrowRight, Leaf, Shield, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";

const FEATURED_PRODUCTS = [
  { id: 1, title: "Fresh Organic Neem Sticks", category: "Traditional", price: "$12.99", rating: 4.9, benefit: "Directly from the farm" },
  { id: 2, title: "Herbal Gum Care Bundle", category: "Care Kit", price: "$24.99", rating: 5.0, benefit: "Complete oral protection" },
  { id: 3, title: "Neem & Mint Tooth Powder", category: "Powder", price: "$15.99", rating: 4.8, benefit: "Fluoride-free formula" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-0 pb-20 md:pt-0 md:pb-24 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-mint rounded-l-[5rem] -z-10 opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-yellow rounded-full -z-10 blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="text-left">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-foreground leading-[0.9]">
                Natural Tooth Care with <span className="text-brand-green">Neem Datun</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-500 max-w-xl mb-12 font-medium leading-relaxed">
                Relieve toothache & strengthen gums naturally. Experience the traditional secret to lifelong oral health.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/datasets">
                  <Button size="lg" className="px-12 py-6 text-xl">
                    Shop Natural Datun
                  </Button>
                </Link>
                <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-brand-green/10 shadow-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-brand-mint border-2 border-white flex items-center justify-center text-[10px] font-bold text-brand-green">
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-600">5k+ Happy Users</span>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="left" className="relative">
              <div className="aspect-square bg-white rounded-[3rem] shadow-2xl p-12 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-green opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <Leaf className="w-48 h-48 text-brand-green group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-brand-green rounded-2xl text-white">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Gujarati Tradition</p>
                  <p className="text-2xl font-black tracking-tight">લીમડા નું દાતણ</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">The Power of Pure Neem</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">Ancient healing properties refined for modern daily use.</p>
          </div>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Relieves Toothache", desc: "Natural analgesic properties soothe sensitive nerves.", icon: Shield },
              { title: "Kills Bacteria", desc: "Strong anti-microbial action for total oral hygiene.", icon: Zap },
              { title: "Strengthens Gums", desc: "Rich in nutrients that fortify gum tissues naturally.", icon: Leaf },
              { title: "Fresh Breath", desc: "Eliminates odor-causing bacteria without chemicals.", icon: Sparkles },
            ].map((benefit, i) => (
              <StaggerItem key={i}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-3xl bg-brand-beige flex items-center justify-center mb-8 group-hover:bg-brand-green transition-colors duration-500">
                    <benefit.icon className="w-10 h-10 text-brand-green group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">{benefit.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-brand-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="text-left">
              <h2 className="text-4xl font-black text-foreground mb-4 tracking-tight">Our Herbal Selection</h2>
              <p className="text-gray-500 text-lg font-medium">Sustainably harvested and carefully packaged.</p>
            </div>
            <Link href="/datasets">
              <Button variant="outline" size="md">
                View All Products
              </Button>
            </Link>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {FEATURED_PRODUCTS.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard {...product} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Section - Asymmetrical */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-green rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            
            <div className="flex-1 text-white">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">100% Traditional, <br /> 100% Effective.</h2>
              <ul className="space-y-6 mb-12">
                {["Pesticide Free", "Cruelty Free", "Zero Plastic Packaging", "Biodegradable"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-lg">
                    <CheckCircle2 className="w-6 h-6 text-brand-light-green" /> {item}
                  </li>
                ))}
              </ul>
              <Button variant="natural" size="lg">Learn Our Process</Button>
            </div>
            
            <div className="flex-1">
              <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20">
                <div className="text-center mb-8">
                  <p className="text-5xl font-black text-white mb-2">98%</p>
                  <p className="text-brand-light-green font-bold uppercase tracking-widest text-xs">Customer Satisfaction</p>
                </div>
                <div className="space-y-6">
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-light-green w-[98%]"></div>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed font-medium italic">
                    "I've been using Neem Datun for 3 months now and my bleeding gums have completely stopped. Best natural alternative!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
