import { useState } from "react";
import { Heart, Share2, Copy, Check } from "lucide-react";
import { IMG } from "@/assets/indriya";

const DESCRIPTION =
  "Shrinathji chose your heart as his abode\u2014was it your love or devotion? Keep this secret safe with you.Embark on a spiritual journey with the Giriraj Gold Pendant, a masterpiece in 24 karat gold. The matte finish offers understated charm, showcasing the sacred Shrinath Ji motif. This pendant serves as a symbol of divine connection and spiritual guidance, enveloping you in the warmth of divine love.";

export function ProductInfo() {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [wished, setWished] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1 text-[13px] text-ink">
          {["Home", "Jewellery", "Pendants"].map((c) => (
            <li key={c} className="flex items-center gap-1">
              <a href="#" className="transition-colors hover:text-rust">
                {c}
              </a>
              <span className="text-muted-foreground">/</span>
            </li>
          ))}
          <li aria-current="page" className="text-muted-foreground">
            Giriraj Gold Pendant
          </li>
        </ol>
      </nav>

      <div className="mt-3 flex items-start justify-between gap-4">
        <h1 className="font-display text-[32px] font-normal leading-tight text-ink lg:text-[34px]">
          Giriraj Gold Pendant
        </h1>
        <div className="flex shrink-0 items-center gap-4 pt-2">
          <button
            type="button"
            aria-label="Add to wishlist"
            aria-pressed={wished}
            onClick={() => setWished((v) => !v)}
            className="text-navy transition-transform hover:scale-110"
          >
            <Heart className={`h-5 w-5 ${wished ? "fill-rust text-rust" : ""}`} strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label="Share this product"
            onClick={() => {
              if (typeof navigator !== "undefined" && navigator.share) {
                void navigator.share({ title: "Giriraj Gold Pendant" });
              }
            }}
            className="text-navy transition-transform hover:scale-110"
          >
            <Share2 className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>
      </div>

      <p className="mt-1 flex items-center gap-2 text-[13px] tracking-wide text-muted-foreground">
        GDAYA00-AEPF128
        <button
          type="button"
          aria-label="Copy product code"
          onClick={() => {
            if (typeof navigator !== "undefined" && navigator.clipboard) {
              void navigator.clipboard.writeText("GDAYA00-AEPF128").then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              });
            }
          }}
          className="text-navy"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      </p>

      <p className="mt-4 max-w-[560px] text-[15px] leading-[1.55] text-ink">
        {expanded ? DESCRIPTION : `${DESCRIPTION.slice(0, 128)}\u2026`}{" "}
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="block underline underline-offset-4 hover:text-rust"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </p>

      <p className="mt-5 text-[15px] text-rust">24KT Yellow&nbsp; | &nbsp;8.315 g Gross wt.</p>

      <p className="mt-6 font-display text-[30px] font-medium tracking-wide text-ink">
        &#8377;1,48,563.00
      </p>
      <p className="mt-1 text-[13px] text-muted-foreground">Approximate (excluding taxes)</p>

      <p className="mt-7 text-[14px] text-ink">Colour</p>
      <button
        type="button"
        aria-label="Colour: Yellow gold"
        aria-pressed="true"
        className="mt-2 grid h-8 w-8 place-items-center rounded-full border border-rust"
      >
        <span className="block h-[22px] w-[22px] rounded-full bg-[oklch(0.87_0.06_88)]" />
      </button>

      <div className="mt-7 grid grid-cols-2 gap-4 lg:max-w-[520px]">
        <a
          href="https://www.indriya.com/jewellery-stores"
          target="_blank"
          rel="noreferrer"
          className="flex h-[46px] items-center justify-center bg-navy text-[15px] text-white transition-opacity hover:opacity-90"
        >
          Find a Store
        </a>
        <a
          href="tel:18002108383"
          className="flex h-[46px] items-center justify-center border border-navy bg-white text-[15px] text-navy transition-colors hover:bg-navy hover:text-white"
        >
          Call Us
        </a>
      </div>

      <div className="mt-12 flex items-start justify-center gap-14 lg:mt-16">
        <figure className="flex flex-col items-center gap-2">
          <img src={IMG.bis} alt="BIS Hallmark" width={120} height={60} className="h-9 w-auto object-contain" />
          <figcaption className="text-[12px] text-ink">100% BIS Hallmarked</figcaption>
        </figure>
        <figure className="flex flex-col items-center gap-2">
          <img src={IMG.cert} alt="Indriya certified" width={120} height={60} className="h-9 w-auto object-contain" />
          <figcaption className="text-[12px] text-ink">100% Indriya Certified</figcaption>
        </figure>
      </div>
    </div>
  );
}
