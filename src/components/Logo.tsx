import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: { svg: 40, text: "text-lg" },
  md: { svg: 60, text: "text-xl" },
  lg: { svg: 80, text: "text-2xl" },
  xl: { svg: 120, text: "text-3xl" },
};

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const { svg: svgSize, text: textSize } = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <circle
          cx="35"
          cy="35"
          r="28"
          fill="#AFC6D1"
          fillOpacity="0.85"
          style={{ mixBlendMode: "multiply" }}
        />
        <circle
          cx="65"
          cy="35"
          r="28"
          fill="#F4A28C"
          fillOpacity="0.85"
          style={{ mixBlendMode: "multiply" }}
        />
        <circle
          cx="50"
          cy="62"
          r="28"
          fill="#F2C66D"
          fillOpacity="0.85"
          style={{ mixBlendMode: "multiply" }}
        />
        <circle
          cx="60"
          cy="50"
          r="22"
          fill="#B7CBA3"
          fillOpacity="0.8"
          style={{ mixBlendMode: "multiply" }}
        />
      </svg>
      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-playfair font-semibold text-cinza-texto leading-tight",
              textSize
            )}
          >
            Montessori
          </span>
          <span
            className={cn(
              "font-inter text-cinza-texto/80 tracking-wider uppercase",
              size === "sm" ? "text-[10px]" : size === "md" ? "text-xs" : "text-sm"
            )}
          >
            All Around
          </span>
        </div>
      )}
    </div>
  );
}

export function LogoIcon({ className, size = 60 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="35"
        cy="35"
        r="28"
        fill="#AFC6D1"
        fillOpacity="0.85"
        style={{ mixBlendMode: "multiply" }}
      />
      <circle
        cx="65"
        cy="35"
        r="28"
        fill="#F4A28C"
        fillOpacity="0.85"
        style={{ mixBlendMode: "multiply" }}
      />
      <circle
        cx="50"
        cy="62"
        r="28"
        fill="#F2C66D"
        fillOpacity="0.85"
        style={{ mixBlendMode: "multiply" }}
      />
      <circle
        cx="60"
        cy="50"
        r="22"
        fill="#B7CBA3"
        fillOpacity="0.8"
        style={{ mixBlendMode: "multiply" }}
      />
    </svg>
  );
}
