"use client";

import React from "react";
import Image from "next/image";

export default function Metrics() {
  const stats = [
    {
      value: "62%",
      label: "Reduce Administrative Work",
    },
    {
      value: "70%",
      label: "Automate Operations",
    },
    {
      value: "100%",
      label: "AI Powered Decisions",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F5F2] pb-20 lg:pb-24">
      <div className="mx-auto max-w-[1440px] w-full px-6 md:px-20">
        
        {/* Dark Container Box */}
        <div className="w-full bg-[#131313] rounded-[32px] lg:rounded-[48px] p-6 md:p-12 lg:p-16 flex flex-col gap-12 lg:gap-16 shadow-2xl relative overflow-hidden">
          
          {/* Top Mockup Dashboard Image */}
          <div className="relative w-full max-w-[840px] mx-auto aspect-[1.47/1] rounded-[20px] overflow-hidden border border-white/5 bg-white p-2.5 md:p-4 shadow-2xl">
            <div className="relative w-full h-full rounded-[12px] md:rounded-[16px] overflow-hidden shadow-inner">
              <Image
                src="/heroimg.png"
                alt="Metrics Dashboard Preview"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Bottom Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 pt-4">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className={`flex flex-col items-center text-center gap-3 ${
                  i > 0 ? "pt-6 md:pt-0" : ""
                }`}
              >
                <span className="font-inter font-bold text-[54px] lg:text-[72px] text-white leading-none tracking-[-0.03em]">
                  {stat.value}
                </span>
                <span className="font-inter text-[14px] lg:text-[16px] text-neutral-400 font-medium max-w-[220px] leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
