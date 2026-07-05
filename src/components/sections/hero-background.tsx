export function HeroBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--primary-muted)_54%,white)_0%,color-mix(in_srgb,var(--surface)_88%,var(--tech-muted))_42%,color-mix(in_srgb,var(--premium-muted)_48%,white)_100%)] dark:bg-[linear-gradient(90deg,color-mix(in_srgb,var(--primary)_13%,var(--background))_0%,color-mix(in_srgb,var(--tech)_11%,var(--background))_48%,color-mix(in_srgb,var(--premium)_10%,var(--background))_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-0 -z-10 h-80 w-[34rem] rounded-full bg-primary-muted/42 blur-3xl dark:bg-primary/10"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-tech-muted/60 blur-3xl dark:bg-tech/10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-8 -z-10 h-[28rem] w-[36rem] rounded-full bg-premium-muted/50 blur-3xl dark:bg-premium/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--border-strong)_82%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--border-strong)_82%,transparent)_1px,transparent_1px)] bg-[size:32px_32px] opacity-60 [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)] dark:opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_54%,color-mix(in_srgb,var(--surface)_66%,transparent)_100%)]"
      />
    </>
  );
}
