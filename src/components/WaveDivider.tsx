interface WaveDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
}

export function WaveDivider({
  from = "#FFFFFF",
  to = "#E9E1D8",
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`wave-divider ${className}`}
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "clamp(40px, 6vw, 80px)" }}
      >
        <path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
          fill={to}
        />
        <path
          d="M0,80 C360,40 720,110 1080,50 C1260,30 1380,70 1440,80 L1440,120 L0,120 Z"
          fill={to}
          opacity="0.5"
        />
        <rect width="1440" height="1" fill={from} opacity="0" />
      </svg>
    </div>
  );
}
