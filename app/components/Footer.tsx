"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed: ${firstName} (${email})`);
    setFirstName("");
    setEmail("");
  };

  return (
    <footer className="relative w-full bg-[#181818] text-white pt-16 pb-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1440px] w-full px-6 md:px-20">
        
        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex flex-col gap-10">
          
          {/* Mobile CTA Banner Card */}
          <div className="w-full bg-[#222222] border border-white/5 rounded-[24px] overflow-hidden p-6 pt-10 flex flex-col items-center gap-6 shadow-xl">
            <h3 className="font-inter font-normal text-[28px] leading-tight text-white text-center px-2">
              Ready to transform enterprise learning?
            </h3>
            <button className="bg-white text-[#181818] font-inter font-medium px-8 py-3.5 rounded-[10px] hover:bg-neutral-100 transition-all text-[14px] shadow-md">
              Book Enterprise Demo
            </button>
            
            {/* Tablet Mockup screen aligned to bottom */}
            <div className="relative w-full aspect-[1.8/1] mt-4 rounded-[12px] overflow-hidden border border-white/5 bg-white p-2">
              <div className="relative w-full h-full rounded-[10px] overflow-hidden">
                <Image
                  src="/heroimg.png"
                  alt="Dashboard View"
                  fill
                  className="object-cover object-left-top"
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
            </div>
          </div>

          {/* Mobile Newsletter Signup */}
          <form 
            onSubmit={handleSubscribe}
            className="w-full bg-[#222222] border border-white/5 rounded-[20px] p-6 flex flex-col gap-4 shadow-md"
          >
            <p className="font-inter text-[13px] text-neutral-400 font-medium">
              Sign up for our newsletter and join the growing Rig.dev community.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="bg-[#1A1A1A] border border-white/10 rounded-[10px] px-5 py-3 text-[13px] text-white placeholder-neutral-500 focus:outline-none focus:border-white/20 transition-all font-inter"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#1A1A1A] border border-white/10 rounded-[10px] px-5 py-3 text-[13px] text-white placeholder-neutral-500 focus:outline-none focus:border-white/20 transition-all font-inter"
              />
              <button 
                type="submit"
                className="bg-white text-[#181818] font-inter font-medium py-3 rounded-[10px] text-[13px] shadow-sm hover:bg-neutral-100 transition-all mt-1"
              >
                Subscribe
              </button>
            </div>
          </form>

          {/* Mobile Social Links */}
          <div className="flex justify-center items-center gap-4">
            <a href="#" className="w-[44px] h-[44px] rounded-[10px] bg-[#222222] border border-white/10 flex items-center justify-center hover:bg-[#2b2b2b] transition-all">
              <Image src="/github.svg" alt="GitHub" width={20} height={20} />
            </a>
            <a href="#" className="w-[44px] h-[44px] rounded-[10px] bg-[#222222] border border-white/10 flex items-center justify-center hover:bg-[#2b2b2b] transition-all">
              <Image src="/x.svg" alt="X" width={18} height={18} />
            </a>
            <a href="#" className="w-[44px] h-[44px] rounded-[10px] bg-[#222222] border border-white/10 flex items-center justify-center hover:bg-[#2b2b2b] transition-all">
              <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
            </a>
            <a href="#" className="w-[44px] h-[44px] rounded-[10px] bg-[#222222] border border-white/10 flex items-center justify-center hover:bg-[#2b2b2b] transition-all">
              <Image src="/last.svg" alt="Slack" width={21} height={21} />
            </a>
          </div>

          <div className="border-t border-white/10 w-full pt-6 flex flex-col gap-4 items-center text-neutral-500 font-inter text-[13px] text-center">
            <span>© 2026 LMS</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-all">Terms of Service</a>
              <a href="#" className="hover:text-white transition-all">Privacy & Cookies policy</a>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex flex-col max-w-[1216px] mx-auto w-full">
          
          {/* Desktop CTA Banner Card */}
          <div className="w-full h-[282px] bg-[#222222] border border-white/5 rounded-[32px] overflow-hidden flex flex-row items-center justify-between mb-16 shadow-2xl relative">
            
            {/* Left Content Column */}
            <div className="w-[calc(100%-480px)] h-full pl-16 pr-8 flex flex-col justify-center items-start gap-6">
              <h3 className="font-inter font-normal text-[42px] leading-[1.2] text-white max-w-[600px] tracking-[-0.02em]">
                Ready to transform enterprise learning?
              </h3>
              <button className="h-[40px] w-[211px] bg-white text-[#181818] font-inter font-medium px-6 py-2 rounded-[12px] hover:bg-neutral-100 transition-all text-[16px] shadow-md">
                Book Enterprise Demo
              </button>
            </div>

            {/* Right Screen Mockup Column */}
            <div className="w-[423px] relative h-full overflow-hidden shrink-0">
              <div className="absolute top-5 left-10 right-0 bottom-0 overflow-hidden shadow-2xl rounded-tl-[12px] rounded-bl-[12px] border-l border-t border-white/5 bg-[#181818]">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/heroimg.png"
                    alt="Dashboard View"
                    fill
                    className="object-cover object-left-top"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Desktop Mid-Row: Socials & Newsletter */}
          <div className="flex flex-row justify-between items-center gap-8 mb-16">
            
            {/* Left Column: Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-[52px] h-[52px] rounded-[10px] bg-[#222222] border border-white/10 flex items-center justify-center hover:bg-[#2b2b2b] transition-all">
                <Image src="/github.svg" alt="GitHub" width={24} height={24} />
              </a>
              <a href="#" className="w-[52px] h-[52px] rounded-[10px] bg-[#222222] border border-white/10 flex items-center justify-center hover:bg-[#2b2b2b] transition-all">
                <Image src="/x.svg" alt="X" width={22} height={22} />
              </a>
              <a href="#" className="w-[52px] h-[52px] rounded-[10px] bg-[#222222] border border-white/10 flex items-center justify-center hover:bg-[#2b2b2b] transition-all">
                <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="#" className="w-[52px] h-[52px] rounded-[10px] bg-[#222222] border border-white/10 flex items-center justify-center hover:bg-[#2b2b2b] transition-all">
                <Image src="/last.svg" alt="Slack" width={24} height={24} />
              </a>
            </div>

            {/* Right Column: Newsletter Signup Form */}
            <form 
              onSubmit={handleSubscribe}
              className="w-full max-w-[580px] bg-[#222222] border border-white/5 rounded-[24px] p-6 flex flex-col gap-4 shadow-lg shrink-0"
            >
              <p className="font-inter text-[14px] text-neutral-400 font-normal">
                Sign up for our newsletter and join the growing Rig.dev community.
              </p>
              <div className="flex flex-row items-center gap-3 w-full">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="flex-1 min-w-0 bg-[#1A1A1A] border border-white/10 rounded-[10px] px-4 py-3 text-[14px] text-white placeholder-neutral-500 focus:outline-none focus:border-white/20 transition-all font-inter"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 min-w-0 bg-[#1A1A1A] border border-white/10 rounded-[10px] px-4 py-3 text-[14px] text-white placeholder-neutral-500 focus:outline-none focus:border-white/20 transition-all font-inter"
                />
                <button
                  type="submit"
                  className="bg-white text-[#181818] font-inter font-medium px-6 py-3 rounded-[10px] hover:bg-neutral-100 transition-all text-[14px] shrink-0 shadow-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>

          </div>

          {/* Bottom Divider & Copyright */}
          <div className="border-t border-white/10 w-full my-8" />
          
          <div className="flex flex-row justify-between items-center text-neutral-500 font-inter text-[14px] pb-4">
            <span>© 2026 LMS</span>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-all">Terms of Service</a>
              <a href="#" className="hover:text-white transition-all">Privacy & Cookies policy</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
