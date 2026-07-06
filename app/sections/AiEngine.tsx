"use client";

import React from "react";
import Image from "next/image";

interface AiCardProps {
  title: string;
  iconSrc: string;
  tags: string[];
}

const aiCards: AiCardProps[] = [
  {
    title: "Super Admin AI",
    iconSrc: "/Super Admin AI.svg",
    tags: ["Workforce Analytics", "Compliance Prediction", "AI Reports", "AI Dashboards", "AI Insights"]
  },
  {
    title: "Tenant-Level Isolation",
    iconSrc: "/Tenant-Level Isolation.svg",
    tags: ["AI Course Builder", "AI Quiz Generator", "AI SEO", "AI Content Improvement", "AI Assignment Generator"]
  },
  {
    title: "Complete Audit Logs",
    iconSrc: "/Complete Audit Logs.svg",
    tags: ["AI Tutor", "AI Summaries", "AI Notes", "AI Learning Paths", "AI Recommendations"]
  },
  {
    title: "Role-Based Access",
    iconSrc: "/Role-Based Access.svg",
    tags: ["AI Career Suggestions", "AI Course Discovery", "AI Bundles", "AI Search"]
  }
];

export default function AiEngine() {
  return (
    <section id="ai-engine" className="relative w-full overflow-hidden bg-[#131313] text-white py-16 lg:py-24 animate-fade-in">
      
      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-6">
        <div className="max-w-md mx-auto flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col items-start gap-4">
            <span className="w-[95px] h-[33px] font-inter text-[14px] font-medium tracking-wider text-neutral-300 bg-[#FFFFFF]/10 border border-[#FFFFFF]/10 rounded-[56px] py-1 px-[10px] flex items-center justify-center">
              Ai Engine
            </span>
            <h2 className="font-inter font-normal text-[32px] leading-[1.2] tracking-[-0.02em] text-white">
              Artificial intelligence built into every product
            </h2>
            <p className="font-inter font-normal text-[15px] leading-[1.6] text-neutral-400">
              Every user admin, tutor, learner, and buyer benefits from AI that understands your organization&apos;s data, content, and outcomes.
            </p>
          </div>

          {/* Mockup Image for Mobile */}
          <div className="relative w-full aspect-[1353/1051] rounded-[20px] overflow-hidden border border-white/5 shadow-2xl">
            <Image
              src="/AI_Engine-img.png"
              alt="AI Engine Mockup"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Cards list for Mobile */}
          <div className="flex flex-col gap-4">
            {aiCards.map((card) => (
              <div 
                key={card.title}
                className="bg-[#1C1C1C] border border-[#2D2D2D] rounded-[20px] p-5 flex flex-col gap-4"
              >
                {/* SVG Icon */}
                <div className="relative w-12 h-12 shrink-0 overflow-hidden rounded-[8px]">
                  <Image 
                    src={card.iconSrc} 
                    alt={card.title} 
                    fill 
                    className="object-contain"
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="font-inter font-semibold text-[18px] text-white leading-tight">{card.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {card.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="font-inter font-normal text-[12px] text-neutral-300 border border-white/10 bg-white/5 rounded-full px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        {/* Centered Top Header Row */}
        <div className="mx-auto max-w-[1440px] w-full px-20 mb-16">
          <div className="flex flex-row justify-between items-start gap-8">
            <div className="flex flex-col items-start gap-4">
              <span className="w-[95px] h-[33px] font-inter text-[14px] font-medium tracking-wider text-neutral-300 bg-[#FFFFFF]/10 border border-[#FFFFFF]/10 rounded-[56px] py-1 px-[10px] flex items-center justify-center">
                Ai Engine
              </span>
              <h2 className="font-inter font-normal text-[48px] leading-[1.15] tracking-[-0.03em] text-white max-w-[640px]">
                Artificial intelligence built into every product
              </h2>
            </div>
            <div className="max-w-[540px] pt-12">
              <p className="font-inter font-normal text-[19.18px] leading-[1.7] text-neutral-400 w-[531.3800659179688px]">
                Every user admin, tutor, learner, and buyer benefits from AI that understands your organization&apos;s data, content, and outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Content Split: Left column aligned, Right column bleeding to screen edge */}
        <div className="flex flex-row gap-12 items-stretch w-full pb-24">
          {/* Left Column: AI Cards (aligned with centered layout) */}
          <div className="w-[551px] xl:w-[calc(591px+(90vw-1440px)/2+80px)] shrink-0 pl-20 xl:pl-[calc((100vw-1440px)/2+60px)]">
            <div className="flex flex-col gap-4 w-full">
              {aiCards.map((card) => (
                <div 
                  key={card.title}
                  className="w-[551px] h-[250px] bg-[#262626] border border-[#2D2D2D] rounded-[24px] p-6 flex flex-col items-start hover:border-[#3D3D3D] transition-all duration-300 cursor-default b-2"
                >
                  {/* SVG Icon */}
                  <div className="relative w-[60px] h-[60px] shrink-0 overflow-hidden rounded-[10px] mb-4">
                    <Image 
                      src={card.iconSrc} 
                      alt={card.title} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Content Block */}
                  <div className="flex flex-col gap-3 w-full">
                    <h3 className="font-inter font-normal text-[20px] text-white leading-tight">{card.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="h-[39px] font-inter font-normal text-[16px] text-neutral-300 border border-white/10 bg-[#1F1F1F] rounded-full px-3 py-1.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dashboard Glow Panel (bleeding to screen edge!) */}
          <div className="flex-1 flex items-stretch select-none">
            <div className="relative w-full lg:h-[1051px] rounded-l-[24px] overflow-hidden border border-white/5 shadow-2xl">
              <Image
                src="/AI_Engine-img.png"
                alt="AI Engine Mockup"
                fill
                className="object-cover object-left"
                priority
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
