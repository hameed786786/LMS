"use client";

import React, { useState } from "react";
import Image from "next/image";

// Reusable SVG Star Component (Gold color matching screenshot)
const Star = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="#FBBF24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
  </svg>
);

const StarsRow = () => (
  <div className="flex gap-[3px] mt-1.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} />
    ))}
  </div>
);

const cardShadow = "shadow-[0px_4px_24px_rgba(0,0,0,0.03)] border border-black/5";

// Custom testimonial text content matching your mockup screenshot
const testimonialsData = {
  istiak: "Compliance training used to be a quarterly fire drill. With Nexara it runs itself — evidence, audits and reminders included.",
  jon: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam.",
  rahul: "Nexara replaced three legacy systems and cut our onboarding time by 62%. The AI Course Builder alone saves our L&D team 40 hours a week.",
  saimoon: "Average rating across 1,240+ verified enterprise reviews on G2, Capterra and TrustRadius.",
  sakib: "SSO, SCIM and audit logs worked on day one. Security signed off faster than any platform we've adopted.",
  nazmul: "The AI tutor genuinely feels like a 1:1 coach for every engineer. Skill velocity is up 3.4x since rollout.",
  amir: "We rolled out Nexara to 5,000 global employees in under two weeks. The localization and compliance tracking are flawless.",
};

const clientTestimonials = [
  { name: "Istiak Ahmed", role: "CEO, Avito", src: "/assets/client-1.svg", text: testimonialsData.istiak },
  { name: "Jon Sari", role: "CEO, Avito", src: "/assets/client-1.1.svg", text: testimonialsData.jon },
  { name: "Rahul Deb", role: "CEO, Avito", src: "/assets/client-2.svg", text: testimonialsData.rahul },
  { name: "Ahmed Saimoon", role: "CEO, Avito", src: "/assets/client-2.1.svg", text: testimonialsData.saimoon },
  { name: "Sakib Mo", role: "CEO, Avito", src: "/assets/client-2.2.svg", text: testimonialsData.sakib },
  { name: "Nazmul Karim", role: "CEO, Avito", src: "/assets/client-3.svg", text: testimonialsData.nazmul },
  { name: "Amir Khan", role: "CEO, Avito", src: "/assets/client-3.1.svg", text: testimonialsData.amir },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clientTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length);
  };

  return (
    <section className="relative w-full bg-white py-20 lg:py-24 overflow-hidden">
      
      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-6">
        <div className="max-w-md mx-auto flex flex-col gap-8">
          
          {/* Header */}
          <div className="flex flex-col items-start gap-4">
            <span className="font-inter text-[12px] font-semibold tracking-wider text-[#5A5A59] bg-[#F5F5F2] border border-[#00000012] rounded-full px-3.5 py-1">
              Testimonials
            </span>
            <h2 className="font-inter font-bold text-[32px] leading-[1.2] tracking-[-0.02em] text-neutral-900">
              Loved by learners, trusted by L&D
            </h2>
          </div>

          {/* Slider Layout */}
          <div className="bg-[#E4E4E1] rounded-[24px] p-5 pt-6 pb-8 w-full flex flex-col items-center">
            {/* Slide Card */}
            <div className="bg-white rounded-[20px] border border-black/5 p-6 min-h-[250px] w-full flex flex-col justify-between shadow-sm">
              <p className="text-neutral-800 text-[14px] leading-relaxed mb-6 font-inter">
                "{clientTestimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 bg-neutral-100">
                  <Image
                    src={clientTestimonials[currentIndex].src}
                    alt={clientTestimonials[currentIndex].name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-black font-inter">
                    {clientTestimonials[currentIndex].name}
                  </p>
                  <p className="text-neutral-500 text-[12px] font-inter">
                    {clientTestimonials[currentIndex].role}
                  </p>
                  <StarsRow />
                </div>
              </div>
            </div>

            {/* Slider Arrows */}
            <div className="flex gap-4 justify-center mt-6">
              <button 
                onClick={prevSlide}
                className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-neutral-50 transition-colors"
                aria-label="Previous Testimonial"
              >
                <svg width="6" height="10" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 1L1 6L6 11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-neutral-50 transition-colors"
                aria-label="Next Testimonial"
              >
                <svg width="6" height="10" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L1 11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
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
                Testimonials
              </span>
              <h2 className="font-inter font-normal text-[48px] leading-[1.15] tracking-[-0.03em] text-black max-w-[640px]">
                Loved by learners, trusted by L&D
              </h2>
            </div>
            <div className="max-w-[540px] pt-12">
              <p className="font-inter font-normal text-[19px] leading-[1.7] text-[#5A5A59]">
                Read how leading enterprises are using Nexara to scale compliant onboarding, upskilling, and operations.
              </p>
            </div>
          </div>

          {/* Desktop 3-Column Testimonial Masonry Grid */}
          <div className="grid grid-cols-[267px_1fr_293px] gap-6 max-w-[1200px] mx-auto">
            
            {/* COLUMN 1 */}
            <div className="flex flex-col gap-6">
              {/* Card 1: Istiak Ahmed – tall portrait top */}
              <div className={`bg-white rounded-2xl overflow-hidden ${cardShadow} flex flex-col`}>
                <div className="relative w-full h-[182px]">
                  <Image
                    src="/assets/client-1.svg"
                    alt="Istiak Ahmed"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6">
                  <p className="text-neutral-700 text-[14px] leading-relaxed mb-4 font-inter">
                    {testimonialsData.istiak}
                  </p>
                  <p className="text-black text-[14px] font-bold font-inter">
                    Istiak Ahmed
                  </p>
                  <p className="text-neutral-500 text-[12px] font-inter">
                    CEO, Avito
                  </p>
                  <StarsRow />
                </div>
              </div>

              {/* Card 2: Jon Sari – avatar row */}
              <div className={`bg-white rounded-2xl p-5 ${cardShadow}`}>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 bg-neutral-100">
                    <Image
                      src="/assets/client-1.1.svg"
                      alt="Jon Sari"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-black text-[14px] font-bold font-inter">
                      Jon Sari
                    </p>
                    <p className="text-neutral-500 text-[12px] font-inter">
                      CEO, Avito
                    </p>
                    <StarsRow />
                  </div>
                </div>
                <p className="text-neutral-700 text-[14px] leading-relaxed font-inter">
                  {testimonialsData.jon}
                </p>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col gap-6">
              {/* Card 3: Rahul Deb – wide side-by-side */}
              <div className={`bg-white rounded-2xl overflow-hidden ${cardShadow} flex h-[255px]`}>
                <div className="relative shrink-0 w-[220px] h-full">
                  <Image
                    src="/assets/client-2.svg"
                    alt="Rahul Deb"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center px-8 py-6 flex-1">
                  <p className="text-neutral-700 text-[14px] leading-relaxed mb-4 font-inter">
                    {testimonialsData.rahul}
                  </p>
                  <p className="text-black text-[14px] font-bold font-inter">
                    Rahul Deb
                  </p>
                  <p className="text-neutral-500 text-[12px] font-inter">
                    CEO, Avito
                  </p>
                  <StarsRow />
                </div>
              </div>

              {/* Card 4: Ahmed Saimoon */}
              <div className={`bg-white rounded-2xl p-5 ${cardShadow}`}>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 bg-neutral-100">
                    <Image
                      src="/assets/client-2.1.svg"
                      alt="Ahmed Saimoon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-black text-[14px] font-bold font-inter">
                      Ahmed Saimoon
                    </p>
                    <p className="text-neutral-500 text-[12px] font-inter">
                      CEO, Avito
                    </p>
                    <StarsRow />
                  </div>
                </div>
                <p className="text-neutral-700 text-[14px] leading-relaxed font-inter">
                  {testimonialsData.saimoon}
                </p>
              </div>

              {/* Card 5: Sakib Mo */}
              <div className={`bg-white rounded-2xl p-5 ${cardShadow}`}>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 bg-neutral-100">
                    <Image
                      src="/assets/client-2.2.svg"
                      alt="Sakib Mo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-black text-[14px] font-bold font-inter">
                      Sakib Mo
                    </p>
                    <p className="text-neutral-500 text-[12px] font-inter">
                      CEO, Avito
                    </p>
                    <StarsRow />
                  </div>
                </div>
                <p className="text-neutral-700 text-[14px] leading-relaxed font-inter">
                  {testimonialsData.sakib}
                </p>
              </div>
            </div>

            {/* COLUMN 3 */}
            <div className="flex flex-col gap-6">
              {/* Card 6: Nazmul Karim */}
              <div className={`bg-white rounded-2xl p-5 ${cardShadow}`}>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 bg-neutral-100">
                    <Image
                      src="/assets/client-3.svg"
                      alt="Nazmul Karim"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-black text-[14px] font-bold font-inter">
                      Nazmul Karim
                    </p>
                    <p className="text-neutral-500 text-[12px] font-inter">
                      CEO, Avito
                    </p>
                    <StarsRow />
                  </div>
                </div>
                <p className="text-neutral-700 text-[14px] leading-relaxed font-inter">
                  {testimonialsData.nazmul}
                </p>
              </div>

              {/* Card 7: Amir Khan */}
              <div className={`bg-white rounded-2xl p-5 ${cardShadow}`}>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 bg-neutral-100">
                    <Image
                      src="/assets/client-3.1.svg"
                      alt="Amir Khan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-black text-[14px] font-bold font-inter">
                      Amir Khan
                    </p>
                    <p className="text-neutral-500 text-[12px] font-inter">
                      CEO, Avito
                    </p>
                    <StarsRow />
                  </div>
                </div>
                <p className="text-neutral-700 text-[14px] leading-relaxed font-inter">
                  {testimonialsData.amir}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
