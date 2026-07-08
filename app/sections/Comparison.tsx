"use client";

import React, { useState } from "react";
import Image from "next/image";

const LEGACY_TAGS = [
  "Poor Analytics",
  "Low Learner Engagement",
  "Weak Reporting",
  "Manual Administration",
  "Difficult Course Management",
  "Poor Enterprise Support",
  "No AI Assistance",
  "Fragmented Systems",
  "No Intelligent Automation",
  "Poor User Experience"
];

const OURS_TAGS = [
  "AI Analytics",
  "Automated Workflows",
  "Personalized Learning",
  "Modern UX",
  "Enterprise Dashboards",
  "AI Tutor",
  "Compliance Automation",
  "Multi-Tenant Architecture",
  "AI Content Generation",
  "Smart Reporting"
];

export default function Comparison() {
  const [activeTab, setActiveTab] = useState<"legacy" | "ours">("ours");

  // ── MOBILE CARD RENDERER ──────────────────────────────────────────
  const renderMobileCard = (title: string, tags: string[], isActive: boolean) => {
    if (isActive) {
      return (
        <div className="relative border border-neutral-200/50 rounded-[12px] p-4 overflow-hidden shadow-md flex flex-col justify-between min-h-[260px] transition-all duration-300">
          {/* Background Image - Object Fill to stretch and fit card without crop */}
          <div className="absolute inset-0 -z-10 rounded-[12px] overflow-hidden">
            <Image
              src="/card.png"
              alt="Background shape"
              fill
              className="object-fill"
              priority
            />
          </div>
          <div>
            <h3 className="font-inter font-bold text-[18px] text-neutral-900 mb-3">
              {title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-inter font-semibold text-[11px] text-neutral-800 bg-white shadow-sm rounded-full px-2.5 py-1 hover:shadow-md transition-shadow cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-white border border-neutral-200/50 rounded-[12px] p-4 shadow-sm flex flex-col justify-between min-h-[260px] transition-all duration-300">
          <div>
            <h3 className="font-inter font-bold text-[18px] text-neutral-900 mb-3">
              {title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-inter font-medium text-[11px] text-neutral-500 bg-neutral-100/80 border border-neutral-200/30 rounded-full px-2.5 py-1 transition-colors hover:bg-neutral-100"
                >
                  {tag}
                </span>  
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  // ── DESKTOP CARD RENDERER ─────────────────────────────────────────
  const renderDesktopCard = (title: string, tags: string[], isActive: boolean) => {
    if (isActive) {
      return (
        <div className="relative w-[645px] h-[356px] border border-neutral-200/50 rounded-[32px] p-8 overflow-hidden shadow-md flex flex-col justify-between transition-all duration-300">
          {/* Background Image - Object Fill to stretch and fit card without crop */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/card.png"
              alt="Background shape"
              fill
              className="object-fill"
              priority
            />
          </div>
          <div>
            <h3 className="font-inter font-bold text-[22px] text-black mb-5">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-inter font-normal text-[16px] text-black bg-white shadow-sm rounded-full px-4.5 py-2 hover:shadow-md transition-shadow cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-white w-[645px] h-[356px] border border-neutral-200/50 rounded-[32px] p-8 shadow-sm flex flex-col justify-between transition-all duration-300">
          <div>
            <h3 className="font-inter font-bold text-[22px] text-black mb-5">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-inter font-normal text-[16px] text-black bg-[#FFFFFF] border-1 border-[#000000]/10 rounded-full px-4.5 py-2 transition-colors hover:bg-neutral-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <section id="comparison" className="relative w-full overflow-hidden  lg:py-24 lg:pt-0">
      
      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-6">
        <div className="max-w-md mx-auto flex flex-col gap-6">
          
          {/* Header */}
          <div className="flex flex-col items-start gap-3">
            <span className="font-inter text-[11px] font-semibold tracking-wider text-neutral-400 bg-white border border-neutral-200/60 rounded-full px-3.5 py-1">
              The Legacy LMS Problem
            </span>
            <h2 className="font-inter font-bold text-[26px] md:text-[32px] leading-[1.2] tracking-[-0.02em] text-neutral-900">
              Why traditional LMS platforms fail modern organizations
            </h2>
            <p className="font-inter font-normal text-[13px] md:text-[14px] leading-[1.6] text-neutral-500">
              Most Learning Management Systems were designed years ago. They rely on manual administration, disconnected tools, outdated interfaces, weak reporting, and poor learner engagement.
            </p>
          </div>

          {/* Toggle Switcher */}
          <div className="flex justify-center mt-2">
            <div className="inline-flex bg-neutral-200/60 p-1 rounded-full border border-neutral-200/40">
              <button
                onClick={() => setActiveTab("legacy")}
                className={`px-5 py-2 rounded-full font-inter text-[14px] font-semibold transition-all duration-200 ${
                  activeTab === "legacy"
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                Legacy Lms
              </button>
              <button
                onClick={() => setActiveTab("ours")}
                className={`px-5 py-2 rounded-full font-inter text-[14px] font-semibold transition-all duration-200 ${
                  activeTab === "ours"
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                Our's LMS
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-4">
            {activeTab === "legacy" 
              ? renderMobileCard("Legacy LMS", LEGACY_TAGS, true) 
              : renderMobileCard("Our's LMS", OURS_TAGS, true)}
          </div>

        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-[1440px] w-full px-20">
          
          {/* Header Row */}
          <div className="flex flex-row justify-between items-start mb-16 gap-4">
            <div className="flex flex-col items-start gap-4">
              <span className="font-inter text-[14px] font-normal tracking-wider text-[#5A5A59] bg-white border border-[#00000012] rounded-[56px] px-3.5 py-1">
                The Legacy LMS Problem
              </span>
              <h2 className="font-inter font-normal text-[48px] leading-[1.15] tracking-[-0.03em] text-[#000000] max-w-[640.0896606445312px] ">
                Why traditional LMS platforms fail modern organizations
              </h2>
            </div>
            <div className="max-w-[541.3800659179688px] pt-12">
              <p className="font-inter font-normal text-[19.18px] leading-[1.7] text-[#000000]">
                Most Learning Management Systems were designed years ago. They rely on manual administration, disconnected tools, outdated interfaces, weak reporting, and poor learner engagement.
              </p>
            </div>
          </div>

          {/* Toggle Switcher Header */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-neutral-200/60 rounded-full border border-neutral-200/40 h-[40px] items-center">
              <button
                onClick={() => setActiveTab("legacy")}
                className={`w-[180px] h-full rounded-full font-inter text-[20px]  transition-all duration-200 flex items-center justify-center ${
                  activeTab === "legacy"
                    ? "bg-neutral-900 text-white shadow-sm font-semibold "
                    : "text-black hover:text-neutral-800 font-normal"
                }`}
              >
                Legacy Lms
              </button>
              <button
                onClick={() => setActiveTab("ours")}
                className={`w-[180px] h-full rounded-full font-inter text-[20px] transition-all duration-200 flex items-center justify-center ${
                  activeTab === "ours"
                    ? "bg-neutral-900 text-white shadow-sm font-semibold "
                    : "text-black hover:text-neutral-800 font-normal"
                }`}
              >
                Our's LMS
              </button>
            </div>
          </div>

          {/* Side-by-Side Cards */}
          <div className="grid grid-cols-2 gap-8 items-stretch">
            {renderDesktopCard("Legacy LMS", LEGACY_TAGS, activeTab === "legacy")}
            {renderDesktopCard("Our's LMS", OURS_TAGS, activeTab === "ours")}
          </div>

        </div>
      </div>

    </section>
  );
}
