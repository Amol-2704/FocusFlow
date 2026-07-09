interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-bold text-[color:var(--foreground)]">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm text-[color:var(--foreground-secondary)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}