"use client";

import React from "react";
import Image from "next/image";

interface SecurityItem {
  title: string;
  icon: React.ReactNode;
}

export default function Security() {
  const securityItems: SecurityItem[] = [
    {
      title: "SSO / SAML / SCIM",
      icon: (
        <Image
          src="/sso.svg"
          alt="SSO / SAML / SCIM"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      title: "GDPR",
      icon: (
        <Image
          src="/gdpr.svg"
          alt="GDPR"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      title: "SOC 2 Architecture",
      icon: (
        <Image
          src="/soc.svg"
          alt="SOC 2 Architecture"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      title: "ISO 27001 Ready",
      icon: (
        <Image
          src="/iso.svg"
          alt="ISO 27001 Ready"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      title: "Private Cloud",
      icon: (
        <Image
          src="/cloud.svg"
          alt="Private Cloud"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      title: "Automated Backups",
      icon: (
        <Image
          src="/backups.svg"
          alt="Automated Backups"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      title: "API Security",
      icon: (
        <Image
          src="/api_security.svg"
          alt="API Security"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      ),
    },
    {
      title: "RBAC",
      icon: (
        <Image
          src="/rbac.svg"
          alt="RBAC"
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      ),
    },
  ];


  return (
    <section className="relative w-full bg-white py-20 lg:py-14 overflow-hidden">
      
      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-6">
        <div className="max-w-md mx-auto flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col items-start gap-3">
            <span className="font-inter text-[12px] font-semibold tracking-wider text-[#5A5A59] bg-[#F5F5F2] border border-[#00000012] rounded-full px-3.5 py-1">
              Security & Compliance
            </span>
            <h2 className="font-inter font-bold text-[26px] md:text-[32px] leading-[1.2] tracking-[-0.02em] text-neutral-900">
              Enterprise-grade from day one
            </h2>
            <p className="font-inter font-normal text-[13px] md:text-[15px] leading-[1.6] text-neutral-500">
              Nexara is designed for the security, compliance and privacy demands of regulated industries and multinational enterprises.
            </p>
          </div>

          {/* Mobile Feature Cards list (stacked/grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {securityItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#F4F4F3] border border-black/[0.04] rounded-[12px] p-3.5 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-[6px] bg-white flex items-center justify-center shadow-sm shrink-0 text-black overflow-hidden">
                  {item.icon}
                </div>
                <span className="font-inter font-semibold text-[13px] text-neutral-800">
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
          <div className="flex flex-wrap gap-4 justify-center mt-12 max-w-[1400px] mx-auto">
            {securityItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F5F5F5] border border-black/[0.04] rounded-[20px] px-6 py-4.5 flex items-center gap-4 hover:border-black/[0.12] hover:bg-[#ECECEB] transition-all duration-300 cursor-default"
              >
                <div className="w-[52px] h-[52px] rounded-[12px] bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] shrink-0 text-black overflow-hidden">
                  {item.icon}
                </div>
                <span className="font-inter font-semibold text-[24px] text-neutral-900 whitespace-nowrap">
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
