import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  readonly eyebrow: string
  readonly title: string
  readonly description: string
  readonly align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <p className="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-pretty text-base leading-relaxed text-slate-300">
        {description}
      </p>
    </header>
  )
}
