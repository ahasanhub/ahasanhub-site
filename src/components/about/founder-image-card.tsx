import Image from "next/image";
import { cn } from "@/lib/utils";

export type FounderImageCardProps = {
  className?: string;
};

export function FounderImageCard({ className }: FounderImageCardProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-surface p-3 shadow-[0_24px_60px_color-mix(in_srgb,var(--foreground)_10%,transparent)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,var(--primary-muted),transparent_32%),radial-gradient(circle_at_82%_20%,var(--tech-muted),transparent_30%),linear-gradient(135deg,var(--surface),var(--surface-muted))] dark:bg-[radial-gradient(circle_at_18%_18%,color-mix(in_srgb,var(--primary)_20%,transparent),transparent_32%),radial-gradient(circle_at_82%_20%,color-mix(in_srgb,var(--tech)_18%,transparent),transparent_30%),linear-gradient(135deg,var(--surface),var(--surface-muted))]"
      />

      <div className="relative overflow-hidden rounded-xl border border-border bg-background">
        <div className="relative aspect-[4/5]">
          <Image
            src="/images/founder/ahasan-habib.jpg"
            alt="Ahasan Habib, Founder and CEO of AhasanHub"
            fill
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 520px, calc(100vw - 48px)"
            className="object-cover object-center"
          />
        </div>

        <figcaption className="absolute bottom-4 left-4 rounded-xl border border-border bg-surface/85 px-4 py-2 text-sm font-semibold text-foreground shadow-sm backdrop-blur-xl">
          Founder &amp; CEO
        </figcaption>
      </div>
    </figure>
  );
}
