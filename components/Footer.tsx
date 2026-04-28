import Link from "next/link";
import { Leaf, MessageCircle, Globe, User, Camera, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-beige pt-14 md:pt-24 pb-10 md:pb-12 mt-auto border-t border-brand-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-brand-green rounded-xl">
                <Leaf className="text-white w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-brand-green leading-none">NEEM DATUN</span>
                <span className="text-[8px] font-bold text-gray-400 tracking-widest uppercase leading-none mt-1">લીમડા નું દાતણ</span>
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 md:mb-8">
              Experience the ancient wisdom of natural oral care. Our premium Neem Datun products are sourced sustainably to bring you the best of nature.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 shadow-sm">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 shadow-sm">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-black text-xs uppercase tracking-widest mb-6">Oral Care</h3>
            <ul className="space-y-4">
              <li><Link href="/datasets" className="text-gray-500 hover:text-brand-green transition-colors text-sm font-medium">Fresh Neem Sticks</Link></li>
              <li><Link href="/datasets" className="text-gray-500 hover:text-brand-green transition-colors text-sm font-medium">Neem Powder</Link></li>
              <li><Link href="/datasets" className="text-gray-500 hover:text-brand-green transition-colors text-sm font-medium">Herbal Toothbrushes</Link></li>
              <li><Link href="/datasets" className="text-gray-500 hover:text-brand-green transition-colors text-sm font-medium">Gum Care Kits</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-black text-xs uppercase tracking-widest mb-6">Education</h3>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-gray-500 hover:text-brand-green transition-colors text-sm font-medium">How to use Datun</Link></li>
              <li><Link href="/benefits" className="text-gray-500 hover:text-brand-green transition-colors text-sm font-medium">Health Benefits</Link></li>
              <li><Link href="/research" className="text-gray-500 hover:text-brand-green transition-colors text-sm font-medium">Ayurvedic Roots</Link></li>
              <li><Link href="/faq" className="text-gray-500 hover:text-brand-green transition-colors text-sm font-medium">Common Questions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-black text-xs uppercase tracking-widest mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-gray-500 hover:text-brand-green transition-colors text-sm font-medium">Contact Us</Link></li>
              <li><Link href="/shipping" className="text-gray-500 hover:text-brand-green transition-colors text-sm font-medium">Shipping Info</Link></li>
              <li><Link href="/privacy" className="text-gray-500 hover:text-brand-green transition-colors text-sm font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-500 hover:text-brand-green transition-colors text-sm font-medium">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 md:pt-12 border-t border-brand-green/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
          <p className="text-gray-400 text-[11px] md:text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} NEEM DATUN INC. TRADITIONAL CARE.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <span>Sustainably Sourced</span>
            <span>100% Natural</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
