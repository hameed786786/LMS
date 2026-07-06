"use client";

import React, { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqRow({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className="w-full bg-[#1C1C1C] border border-white/5 rounded-[16px] p-6 hover:border-white/10 hover:bg-[#252525] transition-all duration-300 cursor-pointer flex flex-col select-none"
    >
      <div className="flex items-center gap-4 w-full">
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={`text-white/60 shrink-0 transform transition-transform duration-200 ${
            isOpen ? "rotate-90" : ""
          }`}
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
        <span className="font-inter font-normal text-[15px] lg:text-[18px] text-white leading-tight">
          {question}
        </span>
      </div>
      
      {/* Animated collapse content wrapper */}
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-[300px] opacity-100 mt-4 pt-4 border-t border-white/5" : "max-h-0 opacity-0"
      }`}>
        <p className="font-inter font-normal text-[14px] lg:text-[16px] leading-relaxed text-neutral-400">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function Faq() {
  const faqItems: FaqItemProps[] = [
    {
      question: "What is included in the demo?",
      answer: "Our interactive demo centers include access to the Super Admin Dashboard, Tutor Portals, Learner Interfaces, and Front Store Marketplaces. You can explore core configurations, test automated content creation pipelines, and preview access control setups.",
    },
    {
      question: "Can we migrate our existing LMS?",
      answer: "Yes! We provide robust automated data migration utilities. You can seamlessly transition users, courses, compliance structures, history records, and files from standard platforms without service disruption.",
    },
    {
      question: "Is the platform white-label?",
      answer: "Absolutely. We support complete white-label customization including custom domain names, brand colors, custom logos, unique email templates, and personalized tenant layouts.",
    },
    {
      question: "Does it support SSO?",
      answer: "Yes, we support enterprise-grade security protocols including SAML, OpenID Connect, SCIM user provisioning, and integration with major identity providers like Okta, Azure AD, and Auth0.",
    },
    {
      question: "Can we integrate with HR software?",
      answer: "Yes, Nexara offers out-of-the-box integrations with major HRIS and workforce management systems to sync employee directories, job roles, learning paths, and training records automatically.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F5F2] pb-20 lg:pb-24">
      <div className="mx-auto max-w-[1440px] w-full px-6 md:px-20">
        
        {/* ================= MOBILE ================= */}
        <div className="md:hidden w-full bg-[#131313] rounded-[32px] p-6 flex flex-col gap-8 shadow-2xl relative overflow-hidden text-white">
          {/* Header */}
          <div className="flex flex-col items-start gap-4">
            <span className="font-inter text-[12px] font-semibold tracking-wider text-neutral-300 bg-white/10 border border-white/10 rounded-full px-3.5 py-1">
              FAQ
            </span>
            <h2 className="font-inter font-normal text-[32px] leading-[1.2] tracking-[-0.02em] text-white">
              Frequently asked questions
            </h2>
          </div>

          {/* FAQ Accordion list */}
          <div className="flex flex-col gap-3">
            {faqItems.map((item, idx) => (
              <FaqRow key={idx} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block w-full bg-[#131313] rounded-[48px] p-16 flex flex-col gap-12 shadow-2xl relative overflow-hidden text-white">
          {/* Header */}
          <div className="flex flex-col items-start gap-4">
            <span className="font-inter text-[14px] font-normal tracking-wider text-neutral-300 bg-white/10 border border-white/10 rounded-[56px] px-3.5 py-1">
              FAQ
            </span>
            <h2 className="font-inter font-normal text-[48px] leading-[1.15] tracking-[-0.03em] text-white">
              Frequently asked questions
            </h2>
          </div>

          {/* FAQ Accordion list */}
          <div className="flex flex-col gap-4 max-w-[1080px] w-full mt-4">
            {faqItems.map((item, idx) => (
              <FaqRow key={idx} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
