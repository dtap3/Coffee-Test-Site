type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: Props) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
            light ? 'text-[var(--color-gold)]' : 'text-[var(--color-gold)]'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-4xl md:text-5xl font-bold leading-tight ${
          light ? 'text-white' : 'text-[var(--color-navy)]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-gray-300' : 'text-[var(--color-stone)]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
