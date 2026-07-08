"use client";

import React from "react";
import Image from "next/image";

export default function Architecture() {
  return (
    <section id="architecture" className="relative w-full overflow-hidden bg-white py-16 lg:py-10">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-6">
        <div className="max-w-md mx-auto flex flex-col gap-6">

          {/* Header */}
          <div className="flex flex-col items-start gap-3">
            <span className="font-inter text-[12px] font-semibold tracking-wider text-[#5A5A59] border-[1px] border-[#1313131A] rounded-full px-3.5 py-1">
              Platform Architecture
            </span>
            <h2 className="font-inter font-bold text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.02em] text-neutral-900">
              One platform. Four powerful products.
            </h2>
            <p className="font-inter font-normal text-[13px] md:text-[15px] leading-[1.6] text-neutral-850">
              Manage every part of enterprise learning from one connected ecosystem. Data, identity, content and analytics flow seamlessly between products.
            </p>
          </div>

          {/* Centerpiece Tablet Mockup */}
          <div className="relative w-full flex justify-center">
            {/* Custom simulated premium tablet bezel */}
            <div className="relative w-full max-w-[340px] aspect-[1.46/1] bg-neutral-950 border-neutral-950 rounded-[12px] shadow-xl overflow-hidden">
              {/* Tablet screen content */}
              <div className="relative w-full h-full bg-white rounded-[10px] overflow-hidden">
                <Image
                  src="/heroimg.png"
                  alt="LMS Analytics Screen"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* 4 Portals (List Row Layout for Mobile) */}
          <div className="flex flex-col gap-3">
            {/* Super Admin */}
            <div className="flex items-center bg-white p-2.5 rounded-[12px] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-[44px] h-[44px] rounded-[10px] bg-[#AC78FF] flex items-center justify-center p-2 shrink-0 shadow-inner">
                  <Image src="/material-symbols-light_admin-panel-settings-rounded.svg" alt="" width={24} height={24} className="brightness-0 invert object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-inter font-bold text-[13px] text-neutral-900 leading-tight">Super Admin</span>
                  <span className="font-inter text-[11px] text-neutral-500 leading-tight mt-0.5">Governance & control</span>
                </div>
              </div>
            </div>

            {/* Learner Portal */}
            <div className="flex items-center bg-white p-2.5 rounded-[12px] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-[44px] h-[44px] rounded-[10px] bg-[#FF8C78] flex items-center justify-center p-2 shrink-0 shadow-inner">
                  <Image src="/material-symbols-light_mobile-check-rounded.svg" alt="" width={24} height={24} className="brightness-0 invert object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-inter font-bold text-[13px] text-neutral-900 leading-tight">Learner Portal</span>
                  <span className="font-inter text-[11px] text-neutral-500 leading-tight mt-0.5">Engagement layer</span>
                </div>
              </div>
            </div>

            {/* Tutor Portal */}
            <div className="flex items-center bg-white p-2.5 rounded-[12px] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-[44px] h-[44px] rounded-[10px] bg-[#FF7878] flex items-center justify-center p-2 shrink-0 shadow-inner">
                  <Image src="/material-symbols-light_laptop-chromebook-rounded.svg" alt="" width={24} height={24} className="brightness-0 invert object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-inter font-bold text-[13px] text-neutral-900 leading-tight">Tutor Portal</span>
                  <span className="font-inter text-[11px] text-neutral-500 leading-tight mt-0.5">Authoring & delivery</span>
                </div>
              </div>
            </div>

            {/* Front Store */}
            <div className="flex items-center bg-white p-2.5 rounded-[12px] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-[44px] h-[44px] rounded-[10px] bg-[#7886FF] flex items-center justify-center p-2 shrink-0 shadow-inner">
                  <Image src="/material-symbols-light_web-traffic-rounded.svg" alt="" width={24} height={24} className="brightness-0 invert object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-inter font-bold text-[13px] text-neutral-900 leading-tight">Front Store</span>
                  <span className="font-inter text-[11px] text-neutral-500 leading-tight mt-0.5">Marketplace & commerce</span>
                </div>
              </div>
            </div>
          </div>

          {/* Unified bar (Grid for Mobile) */}
          <div className="relative rounded-[12px] p-4 overflow-hidden shadow-md isolate">
            <div className="absolute inset-0 -z-10 rounded-[12px] overflow-hidden">
              <Image
                src="/card.png"
                alt=""
                fill
                className="object-fill"
              />
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-[8px] bg-white/90 shadow-sm shrink-0 flex items-center justify-center">
                  <Image src="/material-symbols-light_database-upload-rounded.svg" alt="" width={22} height={22} className="object-contain" />
                </div>
                <span className="font-inter font-bold text-[11px] text-neutral-800 leading-tight">Unified data layer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-[8px] bg-white/90 shadow-sm shrink-0 flex items-center justify-center">
                  <Image src="/heroicons_finger-print-16-solid.svg" alt="" width={22} height={22} className="object-contain" />
                </div>
                <span className="font-inter font-bold text-[11px] text-neutral-800 leading-tight">Single identity (SSO)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-[8px] bg-white/90 shadow-sm shrink-0 flex items-center justify-center">
                  <Image src="/icon-park-solid_connection-point.svg" alt="" width={22} height={22} className="object-contain" />
                </div>
                <span className="font-inter font-bold text-[11px] text-neutral-800 leading-tight">Cross workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-[8px] bg-white/90 shadow-sm shrink-0 flex items-center justify-center">
                  <Image src="/fluent_laptop-shield-16-filled.svg" alt="" width={22} height={22} className="object-contain" />
                </div>
                <span className="font-inter font-bold text-[11px] text-neutral-800 leading-tight">Shared compliance</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <div className="max-w-[1440px] px-20 ">

          {/* Header Row */}
          <div className="flex flex-row justify-between items-start mb-10 gap-4">
            <div className="flex flex-col items-start gap-4">
              <span className="font-inter text-[14px] font-semibold tracking-wider text-[#5A5A59] border-[1px] border-[#1313131A] rounded-full px-3.5 py-1">
                Platform Architecture
              </span>
              <h2 className="font-inter font-bold text-[48px] leading-[1.15] tracking-[-0.03em] text-neutral-900 max-w-[620px]">
                One platform. Four powerful<br />products.
              </h2>
            </div>
            <div className="max-w-[531.3800659179688px] pt-12">
              <p className="font-inter font-normal text-[19px] leading-[1.7] text-[#000000] ">
                Manage every part of enterprise learning from one connected ecosystem data, identity, content and analytics flow seamlessly between products.
              </p>
            </div>
          </div>

          {/* Centerpiece Device with Floating Portals */}
          <div className="relative w-full flex justify-center items-center h-[540px] mb-6 ">
            
            {/* Custom simulated premium tablet bezel */}
            <div className="relative w-[659.1668701171875px] h-[449.4693908691406px] border-neutral-950 rounded-[24px] shadow-2xl overflow-hidden z-10">
              {/* Tablet screen content */}
              <div className="relative w-full h-full bg-white rounded-[20px] overflow-hidden">
                <Image
                  src="/heroimg.png"
                  alt="LMS Analytics Screen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* FLOATING BANNER 1: Super Admin (Top Left) */}
            <div className="absolute top-[55px] left-[45px] z-20 flex items-center gap-3 bg-[#AC78FF] text-white pl-4 pr-5 py-2.5 rounded-[48px] shadow-md w-auto">
              <div className="relative w-[39px] h-[39px] shrink-0">
                <Image
                  src="/material-symbols-light_admin-panel-settings-rounded.svg"
                  alt=""
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-inter font-bold text-[16px] leading-tight">Super Admin</span>
                <span className="font-inter text-[13px] opacity-90 leading-tight mt-0.5 w-auto">Governance & control</span>
              </div>
              {/* Indicator Arrow */}
              <div className="absolute bottom-[-22px] right-[-25px] w-[36px] h-[41px]">
                <Image src="/admin.svg" alt="" width={36} height={41} className="object-contain" />
              </div>
            </div>

            {/* FLOATING BANNER 2: Learner Portal (Bottom Left) */}
            <div className="absolute bottom-[160px] left-[65px] z-20 flex items-center gap-3 bg-[#FF8C78] text-white pl-4 pr-5 py-2.5 rounded-[48px] shadow-md w-auto">
              <div className="relative w-[39px] h-[39px] shrink-0">
                <Image
                  src="/material-symbols-light_mobile-check-rounded.svg"
                  alt=""
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-inter font-bold text-[16px] leading-tight">Learner Portal</span>
                <span className="font-inter text-[13px] opacity-90 leading-tight mt-0.5 w-auto">Engagement layer</span>
              </div>
              {/* Indicator Arrow */}
              <div className="absolute top-[-22px] right-[-25px] w-[36px] h-[41px]">
                <Image src="/learner.svg" alt="" width={36} height={41} className="object-contain" />
              </div>
            </div>

            {/* FLOATING BANNER 3: Tutor Portal (Top Right) */}
            <div className="absolute top-[15px] right-[55px] z-20 flex items-center gap-3 bg-[#FF7878] text-white pl-4 pr-5 py-2.5 rounded-[48px] shadow-md w-auto">
              <div className="relative w-[39px] h-[39px] shrink-0">
                <Image
                  src="/material-symbols-light_laptop-chromebook-rounded.svg"
                  alt=""
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-inter font-bold text-[16px] leading-tight">Tutor Portal</span>
                <span className="font-inter text-[13px] opacity-90 leading-tight mt-0.5 w-auto">Authoring & delivery</span>
              </div>
              {/* Indicator Arrow */}
              <div className="absolute bottom-[-22px] left-[-25px] w-[36px] h-[41px]">
                <Image src="/tutor.svg" alt="" width={36} height={41} className="object-contain" />
              </div>
            </div>

            {/* FLOATING BANNER 4: Front Store (Bottom Right) */}
            <div className="absolute bottom-[55px] right-[25px] z-20 flex items-center gap-3 bg-[#7886FF] text-white pl-4 pr-5 py-2.5 rounded-[48px] shadow-md w-auto">
              <div className="relative w-[39px] h-[39px] shrink-0">
                <Image
                  src="/material-symbols-light_web-traffic-rounded.svg"
                  alt=""
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-inter font-bold text-[16px] leading-tight">Front Store</span>
                <span className="font-inter text-[13px] opacity-90 leading-tight mt-0.5 w-auto">Marketplace & commerce</span>
              </div>
              {/* Indicator Arrow */}
              <div className="absolute top-[-22px] left-[-25px] w-[36px] h-[41px]">
                <Image src="/frontstore.svg" alt="" width={36} height={41} className="object-contain" />
              </div>
            </div>

          </div>

          {/* Unified horizontal bar */}
          <div className="relative rounded-[16px] p-4 overflow-hidden shadow-md w-[1157px] isolate h-[75px] mx-auto">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/card.png"
                alt=""
                fill
                className="object-fill"
              />
            </div>
            <div className="flex flex-row justify-around items-center w-full h-full">
              <div className="flex items-center gap-3.5">
                <Image src="/material-symbols-light_database-upload-rounded.svg" alt="" width={26} height={26} />
                <span className="font-inter font-bold text-[20px] text-neutral-800">Unified data layer</span>
              </div>
              <div className="flex items-center gap-3.5">
                <Image src="/heroicons_finger-print-16-solid.svg" alt="" width={26} height={26} />
                <span className="font-inter font-bold text-[20px] text-neutral-800">Single identity (SSO)</span>
              </div>
              <div className="flex items-center gap-3.5">
                <Image src="/icon-park-solid_connection-point.svg" alt="" width={26} height={26} />
                <span className="font-inter font-bold text-[20px] text-neutral-800">Cross-product workflows</span>
              </div>
              <div className="flex items-center gap-3.5">
                <Image src="/fluent_laptop-shield-16-filled.svg" alt="" width={26} height={26} />
                <span className="font-inter font-bold text-[20px] text-neutral-800">Shared compliance</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
