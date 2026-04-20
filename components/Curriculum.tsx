"use client";

import { useState } from "react";
import Image from "next/image";
import { PARTS } from "@/lib/data";

export default function Curriculum() {
  const [activeId, setActiveId] = useState(PARTS[0].id);
  const [openLesson, setOpenLesson] = useState<number | null>(null);

  const activePart = PARTS.find((p) => p.id === activeId)!;

  return (
    <section className="curriculum" id="curriculum">
      <div className="wrap">
        <div className="reveal">
          <span className="section-label">커리큘럼</span>
          <h2 className="section-title">
            4개 파트로 완성하는<br /><em>AI·SW 여정</em>
          </h2>
          <p className="section-lead">
            AI 이해부터 이미지·영상 제작, 바이브코딩, 4족 로봇 MecDog까지.<br/>
            매 차시 하나의 완성된 결과물을 만들어가요.
          </p>
          <p className="curriculum-notice">
            ※ 차시 수(약 18차시 예정) 및 커리큘럼 내용은 운영 상황에 따라 변동될 수 있습니다.
          </p>
        </div>

        <div className="part-tabs reveal d1">
          {PARTS.map((part) => (
            <button
              key={part.id}
              className={`part-tab${activeId === part.id ? " active" : ""}`}
              onClick={() => { setActiveId(part.id); setOpenLesson(null); }}
            >
              <span className="partnum">{part.num}</span>
              {part.label ?? part.title.replace("와 함께", "").split("으로")[0].split("과")[0].trim()}
            </button>
          ))}
        </div>

        <div className="part-block reveal d2">
          <div className="part-head">
            <div>
              <h3>
                {activePart.title}<br /><em>{activePart.titleEm}</em>
              </h3>
              <p className="part-desc">{activePart.desc}</p>
            </div>
            <span className="part-badge">
              <span className="sq" style={{ background: activePart.color }} />
              {activePart.span}
            </span>
          </div>

          {activePart.id === "robot" && (
            <a
              href="https://www.youtube.com/watch?v=c7XJqjFmjto"
              target="_blank"
              rel="noopener noreferrer"
              className="part-tool"
            >
              <div className="part-tool-header">
                <div className="part-tool-meta">
                  <span className="part-tool-badge">로봇 소개 영상</span>
                  <p className="part-tool-name">MecDog — 교육 및 연구용으로 설계된 오픈 소스 AI 4족 보행 로봇 개</p>
                  <p className="part-tool-desc"></p>
                </div>
                <span className="part-tool-cta">보러가기 →</span>
              </div>
              <Image
                src="/mecdog.jpg"
                alt="MecDog 로봇 소개"
                width={1280}
                height={720}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </a>
          )}

          {activePart.id === "code" && (
            <a
              href="https://lifeprofessor.github.io/python_edu/home.html"
              target="_blank"
              rel="noopener noreferrer"
              className="part-tool"
            >
              <div className="part-tool-header">
                <div className="part-tool-meta">
                  <span className="part-tool-badge">수업 활용 도구</span>
                  <p className="part-tool-name">MecDog 로봇 제어를 위한 파이썬 학습</p>
                  <p className="part-tool-desc"></p>
                </div>
                <span className="part-tool-cta">체험하기 →</span>
              </div>
              <Image
                src="/vibe_coding.png"
                alt="파이썬 학습 로드맵 미리보기"
                width={1280}
                height={720}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </a>
          )}

          {activePart.id === "content" && (
            <a
              href="https://sdjgh-think-img-prompt.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="part-tool"
            >
              <div className="part-tool-header">
                <div className="part-tool-meta">
                  <span className="part-tool-badge">수업 활용 도구</span>
                  <p className="part-tool-name">AI 이미지 프롬프트 학습 도우미</p>
                  <p className="part-tool-desc"></p>
                </div>
                <span className="part-tool-cta">체험하기 →</span>
              </div>
              <Image
                src="/think_image_prompt.png"
                alt="Think Prompt 이미지 버전 미리보기"
                width={1280}
                height={720}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </a>
          )}

          {activePart.id === "ai" && (
            <a
              href="https://sdjgh-think-prompt.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="part-tool"
            >
              <div className="part-tool-header">
                <div className="part-tool-meta">
                  <span className="part-tool-badge">수업 활용 도구</span>
                  <p className="part-tool-name">AI 채팅 프롬프트 학습 도우미</p>
                  <p className="part-tool-desc"></p>
                </div>
                <span className="part-tool-cta">체험하기 →</span>
              </div>
              <Image
                src="/think_chat_prompt.png"
                alt="Think Prompt 미리보기"
                width={1280}
                height={720}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </a>
          )}

          <div className="lessons">
            {activePart.lessons.map((lesson) => {
              const isOpen = openLesson === lesson.no;
              return (
                <div
                  key={lesson.no}
                  className={`lesson${isOpen ? " open" : ""}`}
                  onClick={() => setOpenLesson(isOpen ? null : lesson.no)}
                >
                  <div>
                    <div className="cha">
                      {lesson.no}<span className="suf">차시</span>
                    </div>
                    <div className="t-title">{lesson.title}</div>
                    <div className="t-topic">{lesson.topic}</div>
                    <div className="t-detail">{lesson.detail}</div>
                  </div>
                  <div className="t-output">
                    <span>✦</span>
                    <b>{lesson.output}</b>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
