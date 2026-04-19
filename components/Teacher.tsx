import Image from "next/image";
import { BlobShape, FlowerShape } from "./Shapes";

const CERTS = [
  { name: "빅데이터분석기사", issuer: "한국데이터산업진흥원", year: "2022" },
  { name: "정보처리기사", issuer: "한국산업인력공단", year: "2009" },
  { name: "평생교육사 2급", issuer: "교육부", year: "2025" },
  { name: "컴퓨터활용능력 1급", issuer: "대한상공회의소", year: "2021" },  
];

const LECTURES = [
  { title: "방과후학교 강사", org: "서대전여자고등학교", period: "2025.05 ~ 2025.12", badge: "방과후학교", featured: true },
  { title: "디지털튜터", org: "서대전여자고등학교", period: "2025.04 ~ 현재", badge: "현재 진행 중", featured: true },
  { title: "정보처리기사 실기 강의", org: "클래스101", period: "2025.11 ~ 현재", badge: "현재 진행 중" },
  { title: "AI 입문 강의 (5개 학기)", org: "대전평생교육진흥원", period: "2025.01 ~ 현재", badge: "현재 진행 중" },
  { title: "생성형 AI 특강 · Git 교육", org: "배재대학교", period: "2024 ~ 2025" },
  { title: "생성형 AI 활용 방안 특강", org: "한국항공우주연구원", period: "2024.11" },
  { title: "정보처리기사 필기·실기 특강", org: "목원대학교", period: "2023 ~ 2024" },
  { title: "IT 튜터링 · 강의 · 강연", org: "인생교수의 AI 연구소", period: "2021 ~ 현재", badge: "현재 진행 중" },
];

export default function Teacher() {
  return (
    <section className="teacher" id="teacher">
      <div className="wrap">
        <div className="reveal">
          <span className="section-label">강사 소개</span>
          <h2 className="section-title">
          여러분을 직접 가르쳐줄<br /><em>AI·SW 전문가 선생님이에요</em>
          </h2>
        </div>

        <div className="teacher-card reveal d1">
          {/* ── 왼쪽 패널: 사진 + 명판 ── */}
          <div className="teacher-left">
            <div className="teacher-portrait">
              <div className="blobs" aria-hidden="true">
                <BlobShape fill="#ffd1e0" style={{ position: "absolute", top: "10%", left: "10%", width: "80%", opacity: 0.4 }} />
                <FlowerShape fill="#ffd166" style={{ position: "absolute", bottom: "12%", right: "8%", width: "40%", opacity: 0.3 }} />
              </div>
              <Image
                src="/lifeprofessor.jpg"
                alt="임성민 강사 사진"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>

            <div className="teacher-nameplate">
              <p className="nameplate-name">
                임성민
                <span className="nameplate-hanja"> 林聖民</span>
              </p>
              <div className="nameplate-badges">
                <span className="nameplate-badge">컴퓨터공학 박사</span>
                <span className="nameplate-badge accent">AI 전공</span>
              </div>
              <p className="nameplate-org">인생교수의 AI 연구소 대표</p>
            </div>
          </div>

          {/* ── 오른쪽 패널: 상세 정보 ── */}
          <div className="teacher-info">
            <blockquote className="teacher-quote">
              <span className="quote-decoration" aria-hidden="true">"</span>
              누군가의 인생길에 빛이 되어,<br />
              배움으로 희망을 만드는 교육자입니다.
            </blockquote>

            <p className="teacher-bio">
              서대전여자고등학교 방과후학교 강사 및 디지털튜터로 활동하며,
              AI·프로그래밍 등 IT 분야의 강의와 튜터링을 진행하고 있습니다.
              대학·기업·공공기관 등 다양한 현장에서 이론과 실습 중심의 교육을 제공하며,
              학생들이 꿈꾸는 미래를 실현할 수 있도록 돕는 것이 목표입니다.
            </p>

            <div className="teacher-certs">
              <p className="certs-heading">보유 자격증</p>
              <div className="certs-grid">
                {CERTS.map((c) => (
                  <div className="cert-item" key={c.name}>
                    <span className="cert-name">{c.name}</span>
                    <span className="cert-meta">{c.issuer} · {c.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="teacher-tags">
  {["AI·SW 교육 전문", "생성형 AI 강의", "학교 디지털튜터", "진로·학습 특강", "교직원 연수", "방과후학교 강사"].map((tag) => (
    <span className="tag" key={tag}>{tag}</span>
  ))}
              <a
                href="https://lifeprof-lecture.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="teacher-profile-link"
              >
                상세 이력 보러가기
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── 강의 이력 ── */}
        <div className="teacher-track reveal d2">
          <div className="track-stats">
            <div className="track-stat s1">
              <span className="track-num">28<span className="track-plus">+</span></span>
              <span className="track-label">강의 진행 건수</span>
            </div>
            <div className="track-stat s2">
              <span className="track-num">15</span>
              <span className="track-label">강의 기관</span>
            </div>
            <div className="track-stat s3">
              <span className="track-num">2021~</span>
              <span className="track-label">현재까지 활동 중</span>
            </div>
          </div>

          <p className="track-section-label">주요 강의 이력</p>

          <div className="track-grid">
            {LECTURES.map((lec) => (
              <div
                className={`track-item${lec.featured ? " featured" : ""}`}
                key={lec.org + lec.title}
              >
                {lec.badge && (
                  <span className={`track-badge ${lec.badge === "현재 진행 중" ? "active" : "special"}`}>
                    {lec.badge}
                  </span>
                )}
                <p className="track-item-org">{lec.org}</p>
                <p className="track-item-title">{lec.title}</p>
                <p className="track-item-period">{lec.period}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
