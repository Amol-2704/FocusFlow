interface CircularProgressProps {
  progress: number;
  children: React.ReactNode;
}

export default function CircularProgress({
  progress,
  children,
}: CircularProgressProps) {
  const radius = 120;
  const stroke = 12;

  const normalizedRadius = radius - stroke / 2;

  const circumference =
    normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference -
    (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">

      <svg
        width={radius * 2}
        height={radius * 2}
        className="-rotate-90"
      >
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          stroke="#2A2226"
          strokeWidth={stroke}
          fill="transparent"
        />

        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          stroke="#FF7324"
          strokeWidth={stroke}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000"
        />
      </svg>

      <div className="absolute">
        {children}
      </div>

    </div>
  );
}