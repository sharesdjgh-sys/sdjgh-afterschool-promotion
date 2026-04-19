export default function Nav() {
  return (
    <nav className="nav">
      <div className="brand">
        <span className="brand-dot" />
        AI·SW 방과후학교
      </div>
      <div className="nav-links">
        <a className="pill" href="#about">소개</a>
        <a className="pill" href="#curriculum">커리큘럼</a>
        <a className="pill" href="#effects">기대효과</a>
        <a className="pill" href="#teacher">강사</a>
      </div>
      <a className="cta" href="#apply">신청하기</a>
    </nav>
  );
}
