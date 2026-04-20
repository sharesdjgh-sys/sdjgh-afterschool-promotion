import { BlobShape, FlowerShape, Star4Shape, DonutShape } from "./Shapes";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="about-head">
          <div className="reveal">
            <span className="section-label">이런 수업이에요</span>
            <h2 className="section-title">
              코딩도 로봇도<br /><em>처음</em>이어도 괜찮아요
            </h2>
            <p className="section-lead">
            인공지능·코딩·로봇을 처음 접하는 학생도 <br/>
            18차시가 끝날 때쯤엔 진짜 결과물을 손에 쥐게 되는 수업이에요.<br/>
            선행 지식 없이도, 한 번 빠져도 따라올 수 있어요.
          </p>
          </div>
          
        </div>

        <div className="stat-row reveal d2">
          <div className="stat-card">
            <div className="stat-num">18<span className="stat-unit">차시</span></div>
            <div className="stat-label">주 1회 · 50분</div>
            <BlobShape className="shape" fill="#ff6b9d" style={{ width: 80, opacity: 0.15 }} />
          </div>
          <div className="stat-card">
            <div className="stat-num">4<span className="stat-unit">파트</span></div>
            <div className="stat-label">AI · 콘텐츠 · 코딩 · 로봇</div>
            <FlowerShape className="shape" fill="#ffd166" style={{ width: 70, opacity: 0.22 }} />
          </div>
          <div className="stat-card">
            <div className="stat-num">18<span className="stat-unit">작품</span></div>
            <div className="stat-label">매 차시 결과물</div>
            <Star4Shape className="shape" fill="#9fe5cf" style={{ width: 54, opacity: 0.3 }} />
          </div>
          <div className="stat-card">
            <div className="stat-num">1·2<span className="stat-unit">학년</span></div>
            <div className="stat-label">누구나 신청 가능</div>
            <DonutShape className="shape" fill="#c8b8ff" style={{ width: 62, opacity: 0.3 }} />
          </div>
        </div>

        <div className="feature-row reveal d3">
          <div className="feature">
            <div className="icon" style={{ background: "#ffd1e0" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ff6b9d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3>설명 10분, 실습 40분</h3>
            <p>강의는 최소화하고 직접 해보는 시간을 최대로. 매 수업 눈에 보이는 결과물이 나와요.</p>
          </div>
          <div className="feature">
            <div className="icon" style={{ background: "#ffe9b5" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffa94d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>한 번 빠져도 괜찮아요</h3>
            <p>각 차시가 독립적으로 구성되어 있어서, 한 회를 놓쳐도 다음 수업을 따라올 수 있어요.</p>
          </div>
          <div className="feature">
            <div className="icon" style={{ background: "#ece6ff" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c5cff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3>선행 지식 없어도 OK</h3>
            <p>코딩을 전혀 몰라도 됩니다. AI 도구도 처음 써보는 학생 기준으로 차근차근 설계했어요.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
