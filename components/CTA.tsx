"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="cta" className="py-24 relative overflow-hidden" style={{ backgroundColor: "#1e2d1f" }}>
      {/* 배경 블롭 장식 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="blob absolute -top-40 -right-40 w-[500px] h-[500px] opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #7a9e7e 0%, transparent 70%)" }}
        />
        <div
          className="blob-2 absolute -bottom-20 -left-20 w-[400px] h-[400px] opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #a8c9ab 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(168,201,171,0.25)] bg-[rgba(122,158,126,0.1)] text-[#a8c9ab] text-[13px] font-semibold mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7a9e7e] animate-pulse" />
            선착순 모집 중
          </div>

          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-white leading-tight tracking-tight mb-5">
            지금 바로
            <br />
            <span className="text-[#a8c9ab]">신청하세요</span>
          </h2>

          <p className="text-[rgba(255,255,255,0.45)] text-[1rem] leading-relaxed mb-10 max-w-md mx-auto">
            AI와 함께하는 18차시 여정이 기다리고 있어요.
            <br />
            자리가 한정되어 있으니 서두르세요.
          </p>

          {/* 정보 칩 */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { label: "모집 대상", value: "1·2학년 여학생" },
              { label: "운영 기간", value: "주 1회 18주" },
              { label: "신청 방법", value: "담당 교사 문의" },
            ].map(({ label, value }) => (
              <div key={label} className="px-4 py-2.5 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.04)] text-center">
                <div className="text-[11px] text-[rgba(255,255,255,0.35)] font-medium mb-0.5">{label}</div>
                <div className="text-[14px] font-bold text-white">{value}</div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-3 bg-[#7a9e7e] text-white text-[16px] font-bold px-8 py-4 rounded-full hover:bg-[#6a8e6e] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_12px_32px_rgba(122,158,126,0.4)] min-h-[56px]"
          >
            구글 폼으로 신청하기
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <p className="mt-5 text-[13px] text-[rgba(255,255,255,0.25)]">
            ○○고등학교 AI·SW 방과후 담당 교사에게 직접 문의도 가능합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
