import { BlobShape, DonutShape, FlowerShape, Star4Shape, ArrowIcon } from "./Shapes";

const marqueeItems = [
  "AI 이해", "프롬프트 설계", "이미지 생성", "카드뉴스",
  "영상 제작", "파이썬", "바이브코딩", "4족 로봇 MecDog",
  "센서 활용", "자유 제작",
];

const PREVIEW = [
  { num: "01", title: "AI 이해·활용", span: "1~5차시", color: "#ff6b9d", bg: "#ffd1e0" },
  { num: "02", title: "이미지·영상", span: "6~8차시", color: "#e08a00", bg: "#ffe9b5" },
  { num: "03", title: "파이썬·바이브코딩", span: "9~13차시", color: "#7c5cff", bg: "#ece6ff" },
  { num: "04", title: "MecDog 로봇", span: "14~18차시", color: "#1a1a2e", bg: "#d5e8ff" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-scenery" aria-hidden="true">
        <BlobShape className="blob-deco b1" fill="#ffd166" />
        <DonutShape className="blob-deco b2" fill="#ff6b9d" />
        <FlowerShape className="blob-deco b3" fill="#c8b8ff" />
        <Star4Shape className="blob-deco b4" fill="#1a1a2e" />
      </div>

      <div className="wrap hero-wrap">
        {/* ── 왼쪽: 메인 텍스트 ── */}
        <div className="hero-body">
          <span className="hero-eyebrow reveal">
            <span className="dot" />
            2026학년도 서대전여고 방과후학교
          </span>

          <h1 className="reveal d1">
            <span className="serif-word">AI</span>와 함께<br />
            생각하고,{" "}<span className="mark">만들고</span>,<br />
            움직여봐요.
          </h1>

          <p className="hero-sub reveal d2">
            1·2학년 누구나, 18주 동안 한 걸음씩.
            인공지능의 기본부터 이미지 생성, 바이브코딩, 그리고 4족 로봇 MecDog까지 —
            진짜 &ldquo;만들어본&rdquo; 경험을 가져가는 수업이에요.
          </p>

          <div className="hero-meta reveal d3">
            <span className="chip"><strong>18</strong> 차시 예정</span>
            <span className="chip">주 1회 · <strong>60</strong>분</span>
            <span className="chip">대상 · 1·2학년</span>
            <span className="chip">매 차시 결과물</span>
          </div>

          <div className="hero-cta-row reveal d4">
            <a className="btn-primary" href="#apply">
              지금 신청하러 가기 <ArrowIcon className="arrow" stroke="#fff" />
            </a>
            <a className="btn-ghost" href="#curriculum">
              18차시 살펴보기
            </a>
          </div>
        </div>

        {/* ── 오른쪽: 커리큘럼 미리보기 ── */}
        <div className="hero-curriculum reveal d2">
          <p className="hero-curr-label">커리큘럼 미리보기</p>
          <div className="hero-curr-grid">
            {PREVIEW.map((p) => (
              <div
                className="hero-curr-card"
                style={{ background: p.bg }}
                key={p.num}
              >
                <span className="hero-curr-num" style={{ color: p.color }}>{p.num}</span>
                <p className="hero-curr-title">{p.title}</p>
                <p className="hero-curr-span">{p.span}</p>
              </div>
            ))}
          </div>
          <div className="hero-curr-footer">
            <span>총 <strong>18차시</strong> · <strong>4개 파트</strong></span>
            <span>매 차시 완성 결과물</span>
          </div>
        </div>
      </div>

      <div className="marquee-wrap reveal d5">
        <div className="marquee">
          <span>
            {marqueeItems.map((item, i) => (
              <span key={i}>{item} <span className="sep">✦</span> </span>
            ))}
          </span>
          <span aria-hidden="true">
            {marqueeItems.map((item, i) => (
              <span key={i}>{item} <span className="sep">✦</span> </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
