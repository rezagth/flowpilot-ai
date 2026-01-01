"use client";

export default function Reveal3D({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
}
