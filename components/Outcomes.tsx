"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const outcomes = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: "AI 도구 활용 능력",
    desc: "ChatGPT, 이미지 생성 AI 등 실무에서 쓰이는 도구를 직접 익힙니다.",
    color: "#7a9e7e", bg: "#e8f1e9",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "디지털 리터러시",
    desc: "디지털 환경에서 정보를 읽고, 만들고, 공유하는 능력을 기릅니다.",
    color: "#6a9ea0", bg: "#e4f4f4",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "창의적 사고력",
    desc: "직접 만들고 실패하며 문제를 해결하는 경험이 창의성을 자극합니다.",
    color: "#9b7cb6", bg: "#f3eefa",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 8 12 12 14 14"/>
      </svg>
    ),
    title: "진로 탐색 기회",
    desc: "AI 개발자, 콘텐츠 크리에이터, 로봇 엔지니어 등 다양한 진로를 체험합니다.",
    color: "#c49a6a", bg: "#fdf0e4",
  },
];

export default function Outcomes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="outcomes" className="py-24 bg-[#f0ede6]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(122,158,126,0.12)] text-[#5a7e5e] text-[12px] font-semibold uppercase tracking-widest mb-4">
            Expected Outcomes
          </div>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-[#2c2118] leading-tight tracking-tight mb-3">
            이런 역량이 길러져요
          </h2>
          <p className="text-[#8a7b70] text-[15px] max-w-lg">
            18차시가 끝날 때쯤엔 AI가 낯설지 않고, 내 손으로 무언가를 만들 수 있다는 자신감이 생깁니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {outcomes.map(({ icon, title, desc, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.08 }}
              className="pastel-card rounded-3xl p-6 flex flex-col group hover:scale-[1.03] hover:-translate-y-1 transition-transform duration-500"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-[1.08]"
                style={{ backgroundColor: bg, color }}
              >
                {icon}
              </div>
              <div className="font-black text-[#2c2118] text-[18px] tracking-tight leading-tight mb-3">{title}</div>
              <div className="text-[#8a7b70] text-[14px] leading-relaxed flex-1">{desc}</div>
              <div className="mt-5 text-[12px] font-semibold flex items-center gap-1.5" style={{ color }}>
                자세히 보기
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
