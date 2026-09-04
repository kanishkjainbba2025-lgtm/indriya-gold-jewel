import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { RELATED } from "@/assets/indriya";

export function YouMayAlsoLike() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <section className="relative bg-shell py-12 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <h2 className="text-center font-display text-[38px] font-normal leading-tight text-ink lg:text-[48px]">
          You may also like
        </h2>
        <p className="mx-auto mt-3 max-w-[640px] text-center text-[15px] leading-relaxed text-ink">
          Explore a treasure trove of radiant jewels, where each piece gleams with its own unique
          brilliance.
        </p>

        <div className="relative mt-10">
          <ul
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth"
          >
            {RELATED.map((p) => (
              <li
                key={p.sku}
                className="w-[74%] shrink-0 snap-start sm:w-[45%] lg:w-[calc((100%-3rem)/3)]"
              >
                <a
                  href={`https://www.indriya.com/jewellery-products/${p.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}-${p.sku.toLowerCase()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <div className="overflow-hidden bg-sand">
                    <img
                      src={p.img}
                      alt={p.name}
                      width={600}
                      height={600}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-center text-[16px] text-ink">{p.name}</h3>
                  <span className="mx-auto mt-2 block w-fit border-b border-navy pb-0.5 text-center text-[14px] text-navy">
                    Explore
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Previous products"
            onClick={() => scrollBy(-1)}
            className="absolute -left-2 top-[36%] hidden h-12 w-12 place-items-center rounded-full border border-rust/40 bg-shell text-navy transition-colors hover:bg-peach lg:grid"
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Next products"
            onClick={() => scrollBy(1)}
            className="absolute -right-2 top-[36%] hidden h-12 w-12 place-items-center rounded-full border border-rust/40 bg-shell text-navy transition-colors hover:bg-peach lg:grid"
          >
            <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
