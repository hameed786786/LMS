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
    <section className="relative w-full overflow-hidden bg-[#F5F5F2] pb-20 lg:pb-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-15">
        
        {/* Dark Container Box */}
        <div className="w-full max-w-[1331px] mx-auto h-auto lg:h-[856px] bg-[#131313] rounded-[12px] lg:rounded-[48px] p-5 md:p-12 lg:p-16 flex flex-col gap-6 md:gap-12 lg:gap-16 shadow-2xl relative overflow-hidden">
          
          {/* Top Mockup Dashboard Image */}
          <div className="relative w-full max-w-[840px] mx-auto aspect-[1.47/1] rounded-[8px] overflow-hidden shadow-2xl">
            <div className="relative w-full h-full rounded-[8px] overflow-hidden shadow-inner">
              <Image
                src="/eCommerce Dashboard.png"
                alt="Metrics Dashboard Preview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Bottom Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 pt-2 md:pt-4">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className={`flex flex-col items-center text-center gap-2 ${
                  i > 0 ? "pt-4 md:pt-0" : ""
                }`}
              >
                <span className="font-inter font-bold text-[38px] md:text-[54px] lg:text-[88.36px] text-white leading-none tracking-[-0.03em]">
                  {stat.value}
                </span>
                <span className="font-inter text-[12px] md:text-[14px] lg:text-[22.09px] text-neutral-400 font-semibold max-w-[248.51612854003906px] leading-snug">
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
