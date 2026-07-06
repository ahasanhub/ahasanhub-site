import Image from "next/image";
import { cn } from "@/lib/utils";

export type FounderImageCardProps = {
  className?: string;
};

export function FounderImageCard({ className }: FounderImageCardProps) {
  return (
    <figure
      className={cn(
        "relative mx-auto flex max-w-sm flex-col items-center text-center",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-8 -z-10 size-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--primary-muted),transparent_68%)] blur-2xl dark:bg-[radial-gradient(circle,color-mix(in_srgb,var(--primary)_18%,transparent),transparent_68%)]"
      />

      <div className="relative rounded-full border border-border bg-surface p-2 shadow-[0_20px_54px_color-mix(in_srgb,var(--foreground)_10%,transparent)]">
        <div
          aria-hidden="true"
          className="absolute inset-3 rounded-full border border-primary/25"
        />
        <div className="relative aspect-square w-[14rem] overflow-hidden rounded-full border border-border bg-background sm:w-[16rem] lg:w-[17rem]">
          <Image
            src="/images/founder/ahasan-habib.jpg"
            alt="Ahasan Habib, Founder and CEO of AhasanHub"
            fill
            sizes="(min-width: 1024px) 272px, (min-width: 640px) 256px, 224px"
            className="object-cover object-center"
          />
        </div>
      </div>

      <figcaption className="mt-6 space-y-2">
        <p className="text-base font-semibold text-foreground">
          Founder &amp; CEO
        </p>
        <p className="text-sm leading-6 text-muted-foreground">
          Enterprise systems, AI automation, and SaaS architecture.
        </p>
      </figcaption>
    </figure>
  );
}
