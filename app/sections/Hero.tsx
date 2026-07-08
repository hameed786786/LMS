"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-white"
    >

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-6 py-12">
        <div className="max-w-md flex flex-col items-start gap-6">

          {/* Hero Image */}
          <div className="relative w-full aspect-[1.12/1]">
            <Image
              src="/heroentireimg.png"
              alt="LMS Analytics Dashboard"
              fill
              className="object-contain"
              priority
              sizes="90vw"
            />
          </div>

          {/* Heading */}
          <h1 className="font-inter font-bold text-[32px] leading-[1.15] tracking-[-0.02em] text-neutral-900">
            Transform Enterprise<br />
            Learning with AI
          </h1>

          {/* Body */}
          <p className="font-inter font-normal text-[15px] leading-[1.6] text-neutral-500">
            One intelligent platform to manage enterprise training,
            workforce development, instructor operations, learner
            engagement, compliance, analytics, and course
            marketplaces powered by AI and built for modern
            organizations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center gap-3">
            <Link
              href="#demo"
              className="font-inter inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[12px] text-[14px] font-semibold text-white bg-neutral-950 whitespace-nowrap"
            >
              Try Demo
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_mobile_arrow)">
                  <path d="M12.312 4L17 10L12.313 16M17 10H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_mobile_arrow">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link
              href="#explore"
              className="font-inter inline-flex items-center justify-center px-5 py-2.5 rounded-[12px] text-[14px] font-semibold text-neutral-700 bg-white border border-neutral-200 whitespace-nowrap"
            >
              Explore Platform
            </Link>
          </div>

          {/* Compatible With */}
          <div className="flex flex-col items-start gap-3">
            <span className="font-inter text-[11px] font-medium text-neutral-400">
              Compatible with
            </span>
            <div className="flex flex-row flex-wrap items-center gap-2 w-full">
              <div className="flex items-center justify-center bg-white border border-neutral-200 rounded-full px-2.5 h-[32px] shadow-sm shrink-0">
                <Image src="/googlecloud.svg" alt="Google Cloud" width={80} height={18} className="object-contain" />
              </div>
              <div className="flex items-center justify-center bg-white border border-neutral-200 rounded-full px-2 h-[32px] shadow-sm shrink-0">
                <Image src="/aws.svg" alt="AWS" width={40} height={15} className="object-contain" />
              </div>
              <div className="flex items-center justify-center bg-white border border-neutral-200 rounded-full px-2 h-[32px] shadow-sm shrink-0">
                <Image src="/firebase.svg" alt="Firebase" width={16} height={16} className="object-contain" />
              </div>
              <div className="flex items-center justify-center bg-white border border-neutral-200 rounded-full px-2 h-[32px] shadow-sm shrink-0">
                <Image src="/lasticon.svg" alt="Integration" width={26} height={18} className="object-contain" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex items-center min-h-[calc(100vh-73px)]">
        <div className="mx-auto max-w-[1440px] w-full px-20 py-16">
          <div className="grid grid-cols-2 gap-10 items-center">

            {/* LEFT COLUMN */}
            <div className="flex flex-col items-start gap-6 max-w-[516px]">

              {/* Heading */}
              <h1 className="font-inter font-bold text-[48px] leading-[1.12] tracking-[-0.03em] text-neutral-900">
                Transform Enterprise<br />
                Learning with AI
              </h1>

              {/* Body */}
              <p className="font-inter font-normal text-[16px] leading-[1.6] text-neutral-500 max-w-[440px]">
                One intelligent platform to manage enterprise training,
                workforce development, instructor operations, learner
                engagement, compliance, analytics, and course
                marketplaces powered by AI and built for modern
                organizations.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-row items-center gap-3 mt-1">
                <Link
                  href="#demo"
                  className="font-inter inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[12px] text-[16px] font-semibold text-white bg-neutral-950 hover:bg-neutral-800 transition-colors"
                >
                  Try Demo
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_desktop_arrow)">
                      <path d="M12.312 4L17 10L12.313 16M17 10H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_desktop_arrow">
                        <rect width="20" height="20" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  href="#explore"
                  className="font-inter inline-flex items-center justify-center px-6 py-2.5 rounded-[12px] text-[18px] font-semibold text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-50 transition-colors"
                >
                  Explore Platform
                </Link>
              </div>

              {/* Compatible With */}
              <div className="flex flex-col items-start gap-3 mt-6">
                <span className="font-inter text-[13px] font-medium text-neutral-400">
                  Compatible with
                </span>
                <div className="flex flex-row items-center gap-2.5">
                  <div className="flex items-center justify-center bg-white border border-neutral-200 rounded-full px-4 h-[38px] shadow-sm hover:border-neutral-300 transition-colors">
                    <Image src="/googlecloud.svg" alt="Google Cloud" width={160.28599548339844} height={35} className="object-cover" />
                  </div>
                  <div className="flex items-center justify-center bg-white border border-neutral-200 rounded-full px-2 h-[38px] shadow-sm hover:border-neutral-300 transition-colors">
                    <Image src="/aws.svg" alt="AWS" width={80.40660095214844} height={30} className="object-cover" />
                  </div>
                  <div className="flex items-center justify-center bg-white border border-neutral-200 rounded-full px-3 h-[38px] shadow-sm hover:border-neutral-300 transition-colors">
                    <Image src="/firebase.svg" alt="Firebase" width={35} height={35} className="object-cover" />
                  </div>
                  <div className="flex items-center justify-center bg-white border border-neutral-200 rounded-full px-3 h-[38px] shadow-sm hover:border-neutral-300 transition-colors">
                    <Image src="/lasticon.svg" alt="Integration" width={53} height={35} className="object-cover" />
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="flex items-center justify-end">
              <div className="relative w-[660px] h-[588px]">
                <Image
                  src="/heroentireimg.png"
                  alt="LMS Analytics Dashboard"
                  fill
                  className="object-contain"
                  priority
                  sizes="660px"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
