"use client";

import React from "react";

interface SecurityItem {
  title: string;
  icon: React.ReactNode;
}

export default function Security() {
  const securityItems: SecurityItem[] = [
    {
      title: "SSO / SAML / SCIM",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 10a2 2 0 0 0-2 2v3" />
          <path d="M14 10a4 4 0 0 0-8 0v4" />
          <path d="M16 10a6 6 0 0 0-12 0v7" />
          <path d="M18 10a8 8 0 0 0-16 0v8" />
          <path d="M22 10V8a10 10 0 0 0-20 0v12" />
        </svg>
      ),
    },
    {
      title: "GDPR",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "SOC 2 Architecture",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      title: "ISO 27001 Ready",
      icon: (
        <span className="font-bold text-[11px] text-black tracking-tighter">ISO</span>
      ),
    },
    {
      title: "Private Cloud",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
    },
    {
      title: "Automated Backups",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      ),
    },
    {
      title: "API Security",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: "RBAC",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 lg:py-24 overflow-hidden">
      
      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-6">
        <div className="max-w-md mx-auto flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col items-start gap-4">
            <span className="font-inter text-[12px] font-semibold tracking-wider text-[#5A5A59] bg-[#F5F5F2] border border-[#00000012] rounded-full px-3.5 py-1">
              Security & Compliance
            </span>
            <h2 className="font-inter font-bold text-[32px] leading-[1.2] tracking-[-0.02em] text-neutral-900">
              Enterprise-grade from day one
            </h2>
            <p className="font-inter font-normal text-[15px] leading-[1.6] text-neutral-500">
              Nexara is designed for the security, compliance and privacy demands of regulated industries and multinational enterprises.
            </p>
          </div>

          {/* Mobile Feature Cards list (stacked/grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {securityItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#F4F4F3] border border-black/[0.04] rounded-[16px] p-4.5 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-[10px] bg-white flex items-center justify-center shadow-sm shrink-0 text-black">
                  {item.icon}
                </div>
                <span className="font-inter font-semibold text-[15px] text-neutral-800">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-[1440px] w-full px-20">
          
          {/* Header Row */}
          <div className="flex flex-row justify-between items-start mb-16 gap-8">
            <div className="flex flex-col items-start gap-4">
              <span className="font-inter text-[14px] font-normal tracking-wider text-[#5A5A59] bg-[#F5F5F2] border border-[#00000012] rounded-[56px] px-3.5 py-1">
                Security & Compliance
              </span>
              <h2 className="font-inter font-normal text-[48px] leading-[1.15] tracking-[-0.03em] text-black max-w-[640px]">
                Enterprise-grade from day one
              </h2>
            </div>
            <div className="max-w-[540px] pt-12">
              <p className="font-inter font-normal text-[19px] leading-[1.7] text-[#5A5A59]">
                Nexara is designed for the security, compliance and privacy demands of regulated industries and multinational enterprises.
              </p>
            </div>
          </div>

          {/* Desktop Feature Cards Layout */}
          <div className="flex flex-wrap gap-4 justify-center mt-12 max-w-[1200px] mx-auto">
            {securityItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F4F4F3] border border-black/[0.04] rounded-[20px] px-6 py-4.5 flex items-center gap-4 hover:border-black/[0.12] hover:bg-[#ECECEB] transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-[12px] bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] shrink-0 text-black">
                  {item.icon}
                </div>
                <span className="font-inter font-semibold text-[17px] text-neutral-900 whitespace-nowrap">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
