import { useState } from "react";
import { Play } from "lucide-react";
import { IMG } from "@/assets/indriya";

const SLIDES = [
  { src: IMG.pdp1, alt: "Giriraj Gold Pendant in 24KT yellow gold with Shrinath Ji motif on a gold chain" },
  { src: IMG.pdp2, alt: "Side angle of the Giriraj Gold Pendant showing the matte finish detailing" },
  { src: IMG.pdp3, alt: "Model wearing the Giriraj Gold Pendant with a gold saree" },
  { src: IMG.pdp4, alt: "Close-up of a model wearing the Giriraj Gold Pendant", video: true },
];

export function ProductGallery() {
  const [active, setActive] = useState(0);
  const current = SLIDES[active]!;

  return (
    <div className="flex flex-col">
      <div className="group relative overflow-hidden bg-sand">
        <img
          src={current.src}
          alt={current.alt}
          width={1200}
          height={1200}
          fetchPriority="high"
          className="aspect-square w-full object-cover transition-transform duration-500 ease-out lg:group-hover:scale-[1.35]"
        />
      </div>

      {/* progress line (mobile) */}
      <div className="relative mt-0 h-px w-full bg-line lg:hidden">
        <span
          className="absolute -top-px block h-0.5 bg-rust transition-all duration-300"
          style={{ width: `${((active + 1) / SLIDES.length) * 100}%` }}
        />
      </div>

      <div className="mt-5 flex justify-center gap-3 lg:mt-6 lg:justify-start lg:pl-[88px]">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show image ${i + 1}`}
            aria-current={active === i}
            className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden bg-sand transition-colors ${
              active === i ? "border border-rust" : "border border-transparent"
            }`}
          >
            <img
              src={s.src}
              alt=""
              width={300}
              height={300}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            {s.video && (
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/80">
                  <Play className="h-3 w-3 fill-ink text-ink" />
                </span>
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
