"use client";

import { useState } from "react";
import { ArrowIcon } from "./Shapes";

// Google Apps Script 웹앱 URL을 여기에 붙여넣으세요
const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbwugD5D9XFUnFjbvcRg1QVia1-bKy8zcCJlBL87pig6-q2spECSyr3E-bevEhjxdiBkog/exec";

type FormData = {
  grade: string;
  name: string;
  classNo: string;
  phoneOwner: string;
  phone: string;
  interest: string;
  motive: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

export default function Apply() {
  const [form, setForm] = useState<FormData>({ grade: "", name: "", classNo: "", phoneOwner: "본인", phone: "", interest: "", motive: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((err) => ({ ...err, [k]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Errors = {};
    if (!form.grade)          newErrors.grade   = "학년을 선택해주세요.";
    if (!form.name.trim())    newErrors.name    = "이름을 입력해주세요.";
    if (!form.classNo.trim()) newErrors.classNo = "반·번호를 입력해주세요.";
    if (!form.phone.trim())   newErrors.phone   = "연락처를 입력해주세요.";
    if (!form.motive.trim())  newErrors.motive  = "지원 동기를 입력해주세요.";
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setLoading(true);
    try {
      if (SHEET_ENDPOINT) {
        const url = SHEET_ENDPOINT + "?" + new URLSearchParams({ data: JSON.stringify(form) });
        await fetch(url, { mode: "no-cors" });
      }
      setSubmitted(true);
    } catch {
      alert("신청 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="apply" id="apply">
      <div className="wrap">
        <div className="reveal">
          <span className="section-label">신청 안내</span>
          <h2 className="section-title">
          박사가 직접 가르치는 <br /><em>AI·SW 방과후학교</em>
          </h2>
        </div>

        <div className="apply-grid reveal d1">
          {/* 안내 패널 */}
          <div className="apply-info">
            <h3>2026학년도<br /><em>AI·SW 방과후학교</em><br />운영 안내</h3>
            <div className="info-list">
              {[
                { k: "대상", v: "1·2학년 전체", s: "학년 구분 없이 신청 가능" },
                { k: "일정", v: "주 2회 · 총 18주", s: "화·수요일 7교시(오후 3시 10분~4시) 수업" },
                { k: "장소", v: "본교 1층 스마트학습실", s: "장소 변경시 안내 예정" },
                { k: "비용", v: "무료", s: "별도 수강료 없이 무료로 운영" },
              ].map(({ k, v, s }) => (
                <div className="info-row" key={k}>
                  <span className="k">{k}</span>
                  <span className="v">{v}<small>{s}</small></span>
                </div>
              ))}
            </div>
          </div>

          {/* 신청 폼 */}
          <div className="apply-form">
            {submitted ? (
              <div className="success">
                <span style={{ fontSize: 24 }}>✦</span>
                <span>신청이 완료되었어요! 담당 선생님께서 확인 후 연락드릴게요.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>수업 신청하기</h3>
                <p className="form-desc">아래 정보를 입력하고 신청 버튼을 눌러주세요.</p>

                <div className="field">
                  <label>* 학년</label>
                  <div className="radio-row">
                    {["1학년", "2학년"].map((g) => (
                      <label key={g}>
                        <input type="radio" name="grade" value={g} checked={form.grade === g} onChange={set("grade")} />
                        {g}
                      </label>
                    ))}
                  </div>
                  {errors.grade && <span className="field-error">{errors.grade}</span>}
                </div>

                <div className="field">
                  <label>* 이름</label>
                  <input type="text" placeholder="홍길동" value={form.name} onChange={set("name")} className={errors.name ? "input-error" : ""} />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="field">
                  <label>* 반·번호</label>
                  <input type="text" placeholder="예: 3반 15번" value={form.classNo} onChange={set("classNo")} className={errors.classNo ? "input-error" : ""} />
                  {errors.classNo && <span className="field-error">{errors.classNo}</span>}
                </div>

                <div className="field">
                  <label>* 연락처</label>
                  <div className="radio-row">
                    {["본인", "학부모"].map((v) => (
                      <label key={v}>
                        <input type="radio" name="phoneOwner" value={v} checked={form.phoneOwner === v} onChange={set("phoneOwner")} />
                        {v}
                      </label>
                    ))}
                  </div>
                  <input type="tel" placeholder="010-0000-0000" value={form.phone} onChange={set("phone")} className={errors.phone ? "input-error" : ""} />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>

                <div className="field">
                  <label>가장 기대되는 파트</label>
                  <div className="radio-row">
                    {["AI 이해·활용", "이미지·영상 제작", "파이썬·바이브 코딩", "MecDog 로봇"].map((v) => (
                      <label key={v}>
                        <input type="radio" name="interest" value={v} checked={form.interest === v} onChange={set("interest")} />
                        {v}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label>* 지원 동기</label>
                  <textarea placeholder="이 수업에 신청하게 된 이유를 간단히 적어주세요." value={form.motive} onChange={set("motive")} className={errors.motive ? "input-error" : ""} />
                  {errors.motive && <span className="field-error">{errors.motive}</span>}
                </div>

                <div className="submit-row">
                  <span className="submit-hint">* 표시 항목은 필수입니다</span>
                  <button type="submit" className="btn-submit">
                    수업 신청
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
