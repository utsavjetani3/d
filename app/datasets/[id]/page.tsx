"use client";

import { Leaf, Star, ArrowLeft, ShieldCheck, Clock, CheckCircle2, ShoppingCart, Sparkles, Heart, MapPin, Package } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import { useParams } from "next/navigation";
import { useCart } from "@/lib/store";
import { Button } from "@/components/ui/Button";

const getProduct = (id: string) => ({
  id,
  title: "Fresh Organic Neem Sticks (Datun)",
  description: "Hand-picked organic Neem sticks sourced from traditional farms. These fresh datun sticks are the most natural way to maintain oral hygiene, kill harmful bacteria, and strengthen your gums without any chemical additives.",
  category: "Traditional Care",
  price: "$12.99",
  rating: 4.9,
  reviews: 450,
  origin: "Gujarat, India",
  quantity: "10 sticks per pack",
  lastHarvest: "2 days ago",
  seller: "Nature's Wisdom Co.",
  benefits: [
    "Kills 99.9% of oral bacteria",
    "Naturally whitens teeth",
    "Relieves sensitive toothache",
    "100% Biodegradable & Compostable",
  ],
  features: [
    { icon: MapPin, label: "Origin", value: "Gujarat, India" },
    { icon: Package, label: "Quantity", value: "10 sticks" },
    { icon: Clock, label: "Harvested", value: "Freshly Picked" },
    { icon: ShieldCheck, label: "Purity", value: "100% Organic" },
  ]
});

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProduct(params.id as string);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      quantity: 1
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-12 pb-14 md:pb-24">
        {/* Breadcrumb / Back Link */}
        <FadeIn direction="right">
          <Link href="/datasets" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-green transition-all mb-8 md:mb-10 text-[10px] uppercase tracking-[0.18em] md:tracking-[0.3em] font-black group">
            <ArrowLeft className="w-4 h-4 -translate-x-0 group-hover:-translate-x-1 transition-transform" /> 
            Back to Collection
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-20">
          {/* Left: Images */}
          <div className="lg:col-span-7 space-y-5 md:space-y-8">
            <FadeIn direction="right">
              <div className="aspect-[4/3] md:aspect-square bg-[#F5F5F0] rounded-[2rem] md:rounded-[3rem] flex items-center justify-center relative overflow-hidden group border border-brand-green/5 shadow-inner">
                <div className="absolute inset-0 bg-brand-green opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700"></div>
                <Leaf className="w-32 h-32 md:w-48 md:h-48 text-brand-green/10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-1000" />
                
                {/* Product Tags */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8 flex flex-col gap-2">
                  <span className="px-3 md:px-5 py-1.5 md:py-2 bg-brand-green text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-xl shadow-brand-green/20">
                    Traditional
                  </span>
                  <span className="px-3 md:px-5 py-1.5 md:py-2 bg-brand-mint text-brand-green text-[10px] font-black rounded-full uppercase tracking-widest border border-brand-green/10">
                    Hand-Picked
                  </span>
                </div>

                {/* Main Image Overlay */}
                <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-right">
                  <p className="text-[10px] font-black text-brand-green/40 uppercase tracking-[0.2em] leading-none mb-2">Heritage Selection</p>
                  <p className="text-xl md:text-3xl font-black text-brand-green tracking-tighter">લીમડા નું દાતણ</p>
                </div>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-[#F9F9F6] rounded-2xl flex items-center justify-center border border-gray-100 cursor-pointer hover:border-brand-green hover:bg-white transition-all duration-300">
                  <Leaf className="w-6 h-6 text-brand-green/20" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-5 flex flex-col">
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-400 tracking-wider">({product.reviews} Verification Reviews)</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-foreground mb-5 md:mb-6 leading-[1.05] tracking-tighter">
                {product.title}
              </h1>
              
              <p className="text-base md:text-lg text-gray-500 mb-7 md:mb-10 font-medium leading-relaxed">
                {product.description}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#F5F5F0] rounded-2xl border border-brand-green/5">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-green shadow-sm">
                      <f.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{f.label}</p>
                      <p className="text-xs font-black text-foreground leading-none">{f.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-12 py-6 md:py-8 border-y border-gray-100">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl md:text-5xl font-black text-brand-green tracking-tighter">{product.price}</span>
                  <span className="text-base md:text-lg text-gray-300 line-through font-bold">$18.99</span>
                </div>
                <div className="px-4 py-2 bg-brand-light-green/10 text-brand-green text-[10px] font-black rounded-lg uppercase tracking-widest border border-brand-green/5">
                  Free Shipping
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                <Button size="lg" className="w-full flex-grow gap-3 py-5 md:py-7 rounded-2xl shadow-xl shadow-brand-green/20" onClick={handleAddToCart}>
                  <ShoppingCart className="w-6 h-6" /> 
                  <span className="uppercase tracking-[0.1em] font-black">Add to Basket</span>
                </Button>
                <Button variant="natural" size="lg" className="w-full sm:w-16 rounded-2xl border border-gray-100 hover:bg-brand-beige">
                  <Heart className="w-6 h-6" />
                </Button>
              </div>

              {/* Benefits Box */}
              <div className="bg-[#F9F9F6] p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-brand-green/5">
                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground mb-6 flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-brand-green" /> 
                  Premium Benefits
                </h3>
                <div className="space-y-4">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-green/20" />
                      <span className="text-sm font-bold text-gray-600 tracking-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
