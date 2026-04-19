export const BlobShape = ({ fill = "#ff6b9d", className = "", style }: { fill?: string; className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 200 200" className={className} style={style}>
    <path fill={fill} d="M44.4,-61.4C57,-52.5,66.6,-38.8,70.9,-23.7C75.2,-8.6,74.1,7.9,67.8,21.9C61.5,35.8,50,47.3,36.6,55.8C23.2,64.3,7.9,69.8,-7.9,70.4C-23.7,71,-40,66.7,-52.2,57.3C-64.3,47.9,-72.3,33.5,-74.8,18.2C-77.3,2.9,-74.3,-13.3,-66.9,-26.1C-59.5,-38.9,-47.8,-48.3,-35.1,-56.9C-22.3,-65.5,-8.6,-73.4,3.4,-78C15.5,-82.7,31,-84.1,44.4,-61.4Z" transform="translate(100 100)" />
  </svg>
);

export const Star4Shape = ({ fill = "#1a1a2e", className = "", style }: { fill?: string; className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 40 40" className={className} style={style}>
    <path fill={fill} d="M20 0 C 20 14, 26 20, 40 20 C 26 20, 20 26, 20 40 C 20 26, 14 20, 0 20 C 14 20, 20 14, 20 0 Z" />
  </svg>
);

export const FlowerShape = ({ fill = "#ffd166", className = "", style }: { fill?: string; className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 60 60" className={className} style={style}>
    {[0, 60, 120, 180, 240, 300].map((r) => (
      <ellipse key={r} cx="30" cy="12" rx="9" ry="16" fill={fill} transform={`rotate(${r} 30 30)`} />
    ))}
    <circle cx="30" cy="30" r="7" fill="#fff" />
  </svg>
);

export const DonutShape = ({ fill = "#ff6b9d", className = "", style }: { fill?: string; className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 40 40" className={className} style={style}>
    <circle cx="20" cy="20" r="16" fill="none" stroke={fill} strokeWidth="8" />
  </svg>
);

export const ArrowIcon = ({ className = "", size = 16, stroke = "currentColor" }: { className?: string; size?: number; stroke?: string }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M3 8h10m-4-4 4 4-4 4" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
