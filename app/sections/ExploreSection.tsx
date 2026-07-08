"use client";

import React, { useState } from "react";

type ProductTab = "super-admin" | "tutor" | "learner" | "marketplace";
type MediaTab = "video" | "demo";

export default function ExploreSection() {
  const [activeProduct, setActiveProduct] = useState<ProductTab>("super-admin");
  const [mediaType, setMediaType] = useState<MediaTab>("video");

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] w-full px-6 md:px-20">

        {/* ================= HEADING & HEADER ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="flex flex-col items-start gap-3">
            <span className="font-inter text-[11px] md:text-[12px] font-normal tracking-wider text-[#5A5A59] bg-white border border-[#00000012] rounded-[56px] px-3 py-1">
              Interactive Demo Center
            </span>
            <h2 className="font-inter font-normal text-[22px] md:text-[32px] lg:text-[48px] leading-[1.15] tracking-[-0.03em] text-[#000000] max-w-[640px]">
              <span className="hidden md:inline">Experience every product before you buy</span>
              <span className="md:hidden">Experience before you buy</span>
            </h2>

            {/* Product Selector Pills (Header row placement) */}
            <div className="flex flex-wrap gap-2 mt-3">
              {(["super-admin", "tutor", "learner", "marketplace"] as ProductTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveProduct(tab)}
                  className={`px-2.5 py-1.5 md:px-3.5 md:py-2 rounded-[8px] font-inter text-[11px] md:text-[14px] font-semibold border transition-all duration-200 ${activeProduct === tab
                      ? "bg-black border-black text-white shadow-sm"
                      : "bg-white border-black/10 text-neutral-700 hover:border-black/30"
                    }`}
                >
                  {tab === "super-admin" ? "Super Admin" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-[540px] lg:pt-12">
            <p className="font-inter font-normal text-[13px] lg:text-[19px] leading-[1.6] lg:leading-[1.7] text-neutral-500">
              <span className="hidden md:inline">Explore guided interactive demos of each platform before booking a consultation.</span>
              <span className="md:hidden">Explore interactive demos of each platform.</span>
            </p>
          </div>
        </div>

        {/* ================= OUTER WRAPPER (Exact Code Approach) ================= */}
        <div className="relative mx-auto mt-[44px] w-297 max-lg:w-full max-lg:px-2">

          {/* ================= GLOW WRAPPER ================= */}
          <div className="relative h-190 overflow-hidden rounded-[94px] max-lg:h-[420px] max-md:h-[340px] max-lg:rounded-[34px] isolate">

            {/* LEFT BLUR */}
            <div className="absolute -left-35 top-5 h-105 w-105 rounded-full bg-[#C2DAFF] opacity-60 blur-3xl max-lg:-left-8 max-lg:top-8 max-lg:h-42 max-lg:w-42 -z-10" />

            {/* RIGHT BLUR */}
            <div className="absolute -right-30 bottom-2.5 h-105 w-105 rounded-full bg-[#C2DAFF] opacity-60 blur-3xl max-lg:-right-8 max-lg:bottom-8 max-lg:h-42 max-lg:w-42 -z-10" />

            {/* INNER BOX */}
            <div
              className="
                absolute
                left-1/2
                top-13.5
                h-165
                w-[1080px]
                -translate-x-1/2
                rounded-[40px]
                border
                border-[#D9D9D9]
                bg-[#F8F8F8]
                shadow-[0_10px_30px_rgba(0,0,0,0.05)]

                max-lg:top-[16px]
                max-lg:h-[300px]
                max-lg:w-[92%]
                max-lg:rounded-[12px]
              "
            />
          </div>

          {/* ================= MOBILE BOTTOM BUTTONS ================= */}
          <div
            className="
              hidden
              max-lg:flex
              absolute
              left-0
              right-0
              mx-auto
              w-fit
              bottom-[-20px]
              z-30
            "
          >
            <div
              className="
                flex
                items-center
                rounded-full
                border
                border-black/10
                bg-[#F1F1F1]
                p-[4px]
                shadow-[0_2px_10px_rgba(0,0,0,0.05)]
              "
            >
              <button
                onClick={() => setMediaType("video")}
                className={`flex h-[26px] min-w-[82px] items-center justify-center rounded-full px-5 text-[11px] font-inter font-bold whitespace-nowrap transition-all duration-200 ${mediaType === "video"
                    ? "bg-black text-white shadow-sm"
                    : "text-neutral-500"
                  }`}
              >
                Video
              </button>
              <button
                onClick={() => setMediaType("demo")}
                className={`flex h-[26px] min-w-[82px] items-center justify-center rounded-full px-5 text-[11px] font-inter font-bold whitespace-nowrap transition-all duration-200 ${mediaType === "demo"
                    ? "bg-black text-white shadow-sm"
                    : "text-neutral-500"
                  }`}
              >
                Try a demo
              </button>
            </div>
          </div>

          {/* ================= DESKTOP BOTTOM BUTTONS ================= */}
          <div className="absolute -bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-8 max-lg:hidden">
            <button
              onClick={() => setMediaType("video")}
              className={`flex h-12 w-45.25 items-center justify-center rounded-full font-inter text-[16px] font-semibold transition-all duration-200 ${mediaType === "video"
                  ? "bg-black text-white shadow-md"
                  : "text-neutral-500 hover:text-black"
                }`}
            >
              Video
            </button>

            <button
              onClick={() => setMediaType("demo")}
              className={`flex items-center justify-center text-center font-inter text-[16px] font-semibold hover:text-black/85 transition-all gap-1.5 group ${mediaType === "demo"
                  ? "text-black"
                  : "text-neutral-500"
                }`}
            >
              Try a demo
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
