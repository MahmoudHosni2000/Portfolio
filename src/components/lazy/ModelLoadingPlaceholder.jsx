"use client";

export default function ModelLoadingPlaceholder() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
      <div className="flex w-[16rem] flex-col items-center gap-4 rounded-3xl border border-accent/20 bg-black/45 px-6 py-5 text-center backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border border-accent/25 animate-pulse" />
          <div className="absolute inset-2 rounded-full border-2 border-accent border-t-transparent animate-spin" />
          <div className="absolute inset-4 rounded-full bg-accent/25" />
        </div>
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-accent/90">
            Loading 3D scene
          </p>
          <p className="mt-2 text-sm text-foreground/75">
            Preparing the wizard and its materials...
          </p>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 animate-pulse rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}
