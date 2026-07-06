"use client";

import React from "react";
import Image from "next/image";

interface ProductCardProps {
  iconSrc: string;
  isGradientIcon?: boolean;
  label: string;
  title: string;
  description: string;
  tags: string[];
  plusTag?: string;
  businessValue: string;
  isDesktop?: boolean;
}

const PRODUCTS_DATA = [
  {
    iconSrc: "/material-symbols-light_admin-panel-settings-rounded.svg",
    isGradientIcon: true,
    label: "GOVERNANCE",
    title: "Super Admin Platform",
    description: "The complete control center for managing your entire learning ecosystem.",
    tags: [
      "Multi Tenant Management",
      "Client Management",
      "Course Approval",
      "Department Management",
      "RBAC",
      "Employee Management",
      "User Management",
      "Role Management"
    ],
    plusTag: "+15 Plus",
    businessValue: "Manage every organization from one centralized platform while automating administration and compliance."
  },
  {
    iconSrc: "/material-symbols-light_laptop-chromebook-rounded.svg",
    label: "AUTHORING",
    title: "Tutor Portal",
    description: "Everything instructors need to create, manage and grow their courses.",
    tags: [
      "Dashboard",
      "Course Builder",
      "Drag Drop Builder",
      "Live Classes",
      "AI Course Generator",
      "AI Quiz Generator",
      "Student Management",
      "Assignment Builder",
      "Certificates",
      "Messages"
    ],
    plusTag: "+7 Plus",
    businessValue: "Create engaging learning experiences faster with AI-assisted authoring and advanced analytics."
  },
  {
    iconSrc: "/material-symbols-light_mobile-check-rounded.svg",
    label: "ENGAGEMENT",
    title: "Learner Portal",
    description: "A modern learning experience built for engagement and success.",
    tags: [
      "Dashboard",
      "Continue Learning",
      "Learning Paths",
      "Workspace",
      "Assignments",
      "Certificates",
      "Community",
      "Bookmarks",
      "Messages",
      "Notifications",
      "Notes",
      "Calendar"
    ],
    plusTag: "+4 Plus",
    businessValue: "Increase learner engagement through personalized AI-powered learning journeys."
  },
  {
    iconSrc: "/material-symbols-light_web-traffic-rounded.svg",
    label: "COMMERCE",
    title: "Front Store",
    description: "A premium marketplace where organizations and learners discover courses, certifications, subscriptions and learning paths.",
    tags: [
      "Marketplace",
      "Search",
      "AI Search",
      "Subscription Plans",
      "Categories",
      "Learning Paths",
      "Course Preview",
      "Instructor Profiles",
      "Reviews",
      "Checkout",
      "Wishlist",
      "Corporate Purchasing"
    ],
    plusTag: "",
    businessValue: "Enable organizations to purchase and deploy learning at scale."
  }
];

export default function Products() {
  
  // ── MOBILE CARD RENDERER ──────────────────────────────────────────
  const renderMobileCard = (card: ProductCardProps) => {
    return (
      <div className="group bg-white border border-neutral-200/60 rounded-[24px] p-6 shadow-sm flex flex-col gap-6">
        
        {/* Card Header */}
        <div className="flex items-start justify-between w-full">
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="relative w-12 h-12 rounded-[12px] bg-neutral-950 flex items-center justify-center p-2.5 shrink-0 overflow-hidden isolate shadow-sm transition-colors duration-300">
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image src="/card.png" alt="" fill className="object-fill" />
              </div>
              <Image src={card.iconSrc} alt="" width={26} height={26} className="brightness-0 invert object-contain" />
            </div>
            
            {/* Titles */}
            <div className="flex flex-col">
              <span className="font-inter text-[11px] font-bold tracking-wider text-neutral-400 uppercase">{card.label}</span>
              <h3 className="font-inter font-bold text-[18px] text-neutral-900 leading-tight mt-0.5">{card.title}</h3>
            </div>
          </div>

          {/* Link Arrow */}
          <div className="relative w-[24px] h-[24px] shrink-0">
            <Image
              src="/ri_arrow-up-line.svg"
              alt="Arrow"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Description */}
        <p className="font-inter font-normal text-[14px] leading-relaxed text-neutral-500">
          {card.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="font-inter font-normal text-[13px] text-black bg-[#F5F5F5] rounded-full px-3.5 py-1.5"
            >
              {tag}
            </span>
          ))}
          {card.plusTag && (
            <span className="font-inter font-semibold text-[13px] text-white bg-black rounded-full px-3.5 py-1.5">
              {card.plusTag}
            </span>
          )}
        </div>

        {/* Business Value panel */}
        <div className="bg-[#F5F5F5] rounded-[14px] p-4 flex flex-col gap-1">
          <span className="font-inter font-bold text-[11px] tracking-wider text-neutral-400 uppercase">Business value</span>
          <p className="font-inter font-normal text-[13px] leading-relaxed text-neutral-700">{card.businessValue}</p>
        </div>

      </div>
    );
  };

  // ── DESKTOP CARD RENDERER ─────────────────────────────────────────
  const renderDesktopCard = (card: ProductCardProps) => {
    return (
      <div className="group bg-white border border-neutral-200/60 rounded-[32px] px-6 py-8 shadow-sm flex flex-col justify-between gap-8 hover:shadow-md transition-all duration-300">
        
        <div className="flex flex-col gap-6">
          {/* Card Header */}
          <div className="flex items-start justify-between w-full gap-4">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="relative w-[100px] h-[100px] rounded-[14px] bg-neutral-950 flex items-center justify-center p-3 shrink-0 overflow-hidden isolate shadow-sm transition-colors duration-300">
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image src="/card.png" alt="" fill className="object-fill" />
                </div>
                <Image src={card.iconSrc} alt="" width={80} height={80} className="brightness-0 invert object-contain" />
              </div>
              
              {/* Titles & Description (Side-by-side next to the icon!) */}
              <div className="flex flex-col pt-1">
                <span className="font-inter text-[12px] font-bold tracking-wider text-neutral-400 uppercase">{card.label}</span>
                <h3 className="font-inter font-bold text-[22px] text-neutral-900 leading-tight mt-0.5">{card.title}</h3>
                <p className="font-inter font-normal text-[15px] leading-relaxed text-neutral-500 mt-2 max-w-[420px]">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Link Arrow */}
            <div className="flex items-center justify-center w-[88px] h-[88px] shrink-0 hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform cursor-pointer">
              <Image
                src="/ri_arrow-up-line.svg"
                alt="Arrow"
                width={70 }
                height={70}
                className="object-contain"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="font-inter font-normal text-[14px] text-black bg-[#F5F5F5] rounded-full px-4.5 py-2 cursor-default"
              >
                {tag}
              </span>
            ))}
            {card.plusTag && (
              <span className="font-inter font-semibold text-[14px] text-white bg-black rounded-full px-4.5 py-2">
                {card.plusTag}
              </span>
            )}
          </div>
        </div>

        {/* Business Value panel */}
        <div className="bg-[#F5F5F5] rounded-[16px] p-5 flex flex-col gap-1">
          <span className="font-inter font-bold text-[12px] tracking-wider text-neutral-400 uppercase">Business value</span>
          <p className="font-inter font-normal text-[14px] leading-relaxed text-neutral-700">{card.businessValue}</p>
        </div>

      </div>
    );
  };

  return (
    <section id="products" className="relative w-full overflow-hidden bg-neutral-50/20  lg:py-24">
      
      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-6">
        <div className="max-w-md mx-auto flex flex-col gap-8">
          
          {/* Header */}
          <div className="flex flex-col items-start gap-4">
            <span className="font-inter text-[11px] font-semibold tracking-wider text-neutral-400 bg-white border border-neutral-200/60 rounded-full px-3.5 py-1">
              Our Products
            </span>
            <h2 className="font-inter font-bold text-[28px] leading-[1.2] tracking-[-0.02em] text-neutral-900">
              Four products. One ecosystem.
            </h2>
            <p className="font-inter font-normal text-[14px] leading-[1.6] text-neutral-500">
              Each product is powerful on its own. Together, they replace an entire stack of legacy LMS tools with a single, AI-native platform.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-col gap-6 mt-4">
            {PRODUCTS_DATA.map((card) => (
              <div key={card.title}>
                {renderMobileCard(card)}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-[1440px] w-full px-20">
          
          {/* Header Row */}
          <div className="grid grid-cols-12 gap-8 items-start mb-16">
            <div className="col-span-7 flex flex-col items-start gap-4">
              <span className="font-inter text-[12px] font-semibold tracking-wider text-neutral-400 bg-white border border-neutral-200/60 rounded-full px-3.5 py-1">
                Our Products
              </span>
              <h2 className="font-inter font-bold text-[40px] leading-[1.15] tracking-[-0.03em] text-neutral-900 max-w-[620px]">
                Four products. One ecosystem.
              </h2>
            </div>
            <div className="col-span-5 pt-12">
              <p className="font-inter font-normal text-[16px] leading-[1.7] text-neutral-500 max-w-[450px]">
                Each product is powerful on its own together they replace an entire stack of legacy LMS tools with a single, AI-native platform.
              </p>
            </div>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 gap-8 items-stretch">
            {PRODUCTS_DATA.map((card) => (
              <div key={card.title} className="flex">
                {renderDesktopCard(card)}
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
