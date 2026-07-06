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
    <footer className="relative w-full bg-[#131313] text-white pt-16 pb-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1440px] w-full px-6 md:px-20">
        
        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex flex-col gap-10">
          
          {/* Mobile CTA Banner Card */}
          <div className="w-full bg-[#1C1C1C] border border-white/5 rounded-[28px] overflow-hidden p-6 pt-10 flex flex-col items-center gap-6 shadow-xl">
            <h3 className="font-inter font-bold text-[28px] leading-tight text-white text-center px-2">
              Ready to transform enterprise learning?
            </h3>
            <button className="bg-white text-black font-inter font-semibold px-8 py-3.5 rounded-full hover:bg-neutral-100 transition-all text-[14px] shadow-md">
              Book Enterprise Demo
            </button>
            
            {/* Tablet Mockup screen aligned to bottom */}
            <div className="relative w-full aspect-[1.8/1] mt-4 rounded-b-[16px] overflow-hidden border border-white/10 bg-white p-2">
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
            className="w-full bg-[#1C1C1C] border border-white/5 rounded-[20px] p-6 flex flex-col gap-4 shadow-md"
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
                className="bg-[#131313] border border-white/10 rounded-full px-5 py-3 text-[13px] text-white placeholder-neutral-500 focus:outline-none focus:border-white/20 transition-all font-inter"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-[#131313] border border-white/10 rounded-full px-5 py-3 text-[13px] text-white placeholder-neutral-500 focus:outline-none focus:border-white/20 transition-all font-inter"
              />
              <button 
                type="submit"
                className="bg-white text-black font-inter font-semibold py-3 rounded-full text-[13px] shadow-sm hover:bg-neutral-100 transition-all mt-1"
              >
                Subscribe
              </button>
            </div>
          </form>

          {/* Mobile Social Links */}
          <div className="flex justify-center items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-[10px] bg-[#1C1C1C] border border-white/5 flex items-center justify-center text-white/80 hover:text-white transition-all">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-[10px] bg-[#1C1C1C] border border-white/5 flex items-center justify-center text-white/80 hover:text-white transition-all">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-[10px] bg-[#1C1C1C] border border-white/5 flex items-center justify-center text-white/80 hover:text-white transition-all">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-[10px] bg-[#1C1C1C] border border-white/5 flex items-center justify-center text-white/80 hover:text-white transition-all">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.803a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.803 5.042a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.522 2.522H3.761a2.528 2.528 0 0 1-2.52-2.522V8.823a2.528 2.528 0 0 1 2.52-2.52h5.042zm10.155 3.761a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.522 2.528 2.528 0 0 1-2.522 2.52h-2.52v-2.522zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52V3.761a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.042zm-3.781 10.155a2.528 2.528 0 0 1-2.52 2.52 2.528 2.528 0 0 1-2.522-2.52v-2.52h2.522a2.528 2.528 0 0 1 2.52 2.52zm0-1.262a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.522-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.043a2.528 2.528 0 0 1-2.52 2.52h-5.043z"/>
              </svg>
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
        <div className="hidden md:flex flex-col">
          
          {/* Desktop CTA Banner Card */}
          <div className="w-[1216px] h-[282px] bg-[#1C1C1C] border border-white/5 rounded-[32px] overflow-hidden flex flex-row items-center justify-between mb-16 shadow-2xl relative mx-auto">
            
            {/* Left Content Column */}
            <div className="w-[calc(100%-423px)] h-full pl-16 pr-8 flex flex-col justify-center items-start gap-6">
              <h3 className="font-inter font-normal text-[42px] lg:text-[40px] leading-tight text-white max-w-[677px]">
                Ready to transform enterprise learning?
              </h3>
              <button className="bg-white text-black font-inter font-semibold px-4 rounded-[12px] hover:bg-neutral-100 transition-all text-[15px] shadow-md h-[40px]">
                Book Enterprise Demo
              </button>
            </div>

            {/* Right Screen Mockup Column */}
            <div className="w-[423px] relative h-full overflow-hidden shrink-0">
              <div className="absolute top-5 left-10 right-0 bottom-0 overflow-hidden shadow-2xl ">
                <div className="relative w-full h-full  overflow-hidden">
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
              <a href="#" className="w-11 h-11 rounded-[12px] bg-[#1C1C1C] border border-white/5 flex items-center justify-center text-white/80 hover:text-white hover:border-white/20 transition-all">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="#" className="w-11 h-11 rounded-[12px] bg-[#1C1C1C] border border-white/5 flex items-center justify-center text-white/80 hover:text-white hover:border-white/20 transition-all">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-11 h-11 rounded-[12px] bg-[#1C1C1C] border border-white/5 flex items-center justify-center text-white/80 hover:text-white hover:border-white/20 transition-all">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-11 h-11 rounded-[12px] bg-[#1C1C1C] border border-white/5 flex items-center justify-center text-white/80 hover:text-white hover:border-white/20 transition-all">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.803a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.803 5.042a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.522 2.522H3.761a2.528 2.528 0 0 1-2.52-2.522V8.823a2.528 2.528 0 0 1 2.52-2.52h5.042zm10.155 3.761a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.522 2.528 2.528 0 0 1-2.522 2.52h-2.52v-2.522zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52V3.761a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.042zm-3.781 10.155a2.528 2.528 0 0 1-2.52 2.52 2.528 2.528 0 0 1-2.522-2.52v-2.52h2.522a2.528 2.528 0 0 1 2.52 2.52zm0-1.262a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.522-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.043a2.528 2.528 0 0 1-2.52 2.52h-5.043z"/>
                </svg>
              </a>
            </div>

            {/* Right Column: Newsletter Signup Form */}
            <form 
              onSubmit={handleSubscribe}
              className="w-full max-w-[580px] bg-[#1C1C1C] border border-white/5 rounded-[24px] p-6 flex flex-col gap-4 shadow-lg shrink-0"
            >
              <p className="font-inter text-[14px] text-neutral-400 font-medium">
                Sign up for our newsletter and join the growing Rig.dev community.
              </p>
              <div className="flex flex-row items-center gap-3 w-full">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="flex-1 min-w-0 bg-[#131313] border border-white/10 rounded-full px-5 py-3.5 text-[14px] text-white placeholder-neutral-500 focus:outline-none focus:border-white/20 transition-all font-inter"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 min-w-0 bg-[#131313] border border-white/10 rounded-full px-5 py-3.5 text-[14px] text-white placeholder-neutral-500 focus:outline-none focus:border-white/20 transition-all font-inter"
                />
                <button
                  type="submit"
                  className="bg-white text-black font-inter font-semibold px-7 py-3.5 rounded-full hover:bg-neutral-100 transition-all text-[14px] shrink-0 shadow-sm"
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
