"use client";

import React from "react";
import Image from "next/image";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  bgType: "white" | "grid";
}

export default function Pricing() {
  const plans: PricingPlan[] = [
    {
      name: "Starter",
      description: "For growing teams launching modern learning.",
      price: "Custom",
      features: [
        "Up to 500 learners",
        "Tutor & Learner Portals",
        "Core analytics",
        "Standard integrations",
        "Community support",
      ],
      buttonText: "Get Started",
      bgType: "white",
    },
    {
      name: "Growth",
      description: "For scaling organizations that need automation and AI.",
      price: "Custom",
      features: [
        "Up to 10,000 learners",
        "All four products",
        "Nexara AI Engine",
        "Workflow automation",
        "SSO + SCIM",
        "Priority support",
      ],
      buttonText: "Request Demo",
      isPopular: true,
      bgType: "grid",
    },
    {
      name: "Enterprise",
      description: "For regulated, global, multi-tenant deployments.",
      price: "Custom",
      features: [
        "Unlimited learners",
        "Multi-tenant governance",
        "Private cloud & VPC",
        "Custom AI models",
        "Dedicated CSM",
        "99.99% SLA",
      ],
      buttonText: "Contact Sales",
      bgType: "white",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-24 lg:pt-10">
      
      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-6">
        <div className="max-w-md mx-auto flex flex-col gap-8">
          
          {/* Header */}
          <div className="flex flex-col items-start gap-4">
            <span className="font-inter text-[12px] font-semibold tracking-wider text-[#5A5A59] bg-white border border-[#00000012] rounded-full px-3.5 py-1">
              Pricing
            </span>
            <h2 className="font-inter font-bold text-[32px] leading-[1.2] tracking-[-0.02em] text-neutral-900">
              Enterprise pricing, transparent scope
            </h2>
            <p className="font-inter font-normal text-[15px] leading-[1.6] text-neutral-500">
              Every plan includes the full platform. You choose the scale, governance and support model that fits your organization.
            </p>
          </div>

          {/* Cards Stack */}
          <div className="flex flex-col gap-8 mt-4">
            {[
              ...plans.filter((p) => p.isPopular),
              ...plans.filter((p) => !p.isPopular),
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-[12px] border p-5 shadow-md flex flex-col justify-between min-h-[420px] isolate ${
                  plan.bgType === "grid"
                    ? "border-blue-400/20 text-black"
                    : "border-[#D9D9D9] bg-white text-neutral-900"
                }`}
              >
                {/* Background image for Grid type card */}
                {plan.bgType === "grid" && (
                  <div className="absolute inset-0 rounded-[12px] overflow-hidden bg-[#C2DAFF] -z-10">
                    <Image
                      src="/card.png"
                      alt=""
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}

                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white p-[3px] rounded-full shadow-sm">
                    <div className="bg-white border border-black px-4 py-1 rounded-full text-[11px] font-bold text-black">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex flex-col items-start gap-2">
                  <span className={`font-inter font-bold text-[24px] ${plan.bgType === "grid" ? "text-neutral-950" : "text-black"}`}>
                    {plan.name}
                  </span>
                  <p className={`font-inter text-[14px] leading-relaxed ${plan.bgType === "grid" ? "text-neutral-800" : "text-neutral-500"}`}>
                    {plan.description}
                  </p>
                  <span className={`font-inter font-bold text-[36px] mt-4 ${plan.bgType === "grid" ? "text-neutral-950" : "text-black"}`}>
                    {plan.price}
                  </span>
                </div>

                {/* Plan Features */}
                <ul className="flex flex-col gap-3 my-5">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`${plan.bgType === "grid" ? "text-neutral-950" : "text-black"} shrink-0 mt-0.5`}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className={`font-inter text-[14px] ${
                        plan.bgType === "grid" ? "text-neutral-950 font-medium" : "text-neutral-500 font-normal"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-full bg-black text-white hover:bg-black/90 transition-all font-inter font-semibold py-3.5 rounded-full text-[14px] shadow-sm">
                  {plan.buttonText}
                </button>
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
              <span className="font-inter text-[14px] font-normal tracking-wider text-[#5A5A59] bg-white border border-[#00000012] rounded-[56px] px-3.5 py-1">
                Pricing
              </span>
              <h2 className="font-inter font-normal text-[48px] leading-[1.15] tracking-[-0.03em] text-black max-w-[640px]">
                Enterprise pricing, transparent scope
              </h2>
            </div>
            <div className="max-w-[540px] pt-12">
              <p className="font-inter font-normal text-[19px] leading-[1.7] text-[#5A5A59]">
                Every plan includes the full platform. You choose the scale, governance and support model that fits your organization.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-8 items-stretch max-w-[1200px] mx-auto mt-12 pt-4">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-[12px] border p-8 shadow-sm flex flex-col justify-between isolate w-[384px] ${
                  plan.bgType === "grid"
                    ? "border-blue-400/20 text-black"
                    : "border-[#D9D9D9] bg-white text-neutral-900"
                }`}
              >
                {/* Background image for Grid type card */}
                {plan.bgType === "grid" && (
                  <div className="absolute inset-0 rounded-[12px] overflow-hidden bg-[#C2DAFF] -z-10">
                    <Image
                      src="/card.png"
                      alt=""
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}

                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white p-[3.5px] rounded-full shadow-sm">
                    <div className="bg-white border border-black px-4.5 py-1 rounded-full text-[12px] font-bold text-black">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex flex-col items-start gap-2.5 w-[342px]">
                  <span className={`font-inter font-semibold text-[26px] ${plan.bgType === "grid" ? "text-neutral-950" : "text-black"}`}>
                    {plan.name}
                  </span>
                  <p className={`font-inter text-[14px] font-normal  ${plan.bgType === "grid" ? "text-[#000000]" : "text-neutral-400"}`}>
                    {plan.description}
                  </p>
                  <span className={`font-inter font-bold text-[48px] mt-6 leading-none ${plan.bgType === "grid" ? "text-neutral-950" : "text-black"}`}>
                    {plan.price}
                  </span>
                </div>

                {/* Plan Features */}
                <ul className="flex flex-col gap-3.5 my-10 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`${plan.bgType === "grid" ? "text-neutral-950" : "text-black"} shrink-0 mt-0.5`}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className={`font-inter text-[14px] ${
                        plan.bgType === "grid" ? "text-[#000000] font-semibold" : "text-[#87928C] font-normal"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="w-[318px] bg-black text-white hover:bg-black/90 transition-all font-inter font-medium py-4 rounded-[10px] text-[14px] shadow-sm mt-auto">
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
