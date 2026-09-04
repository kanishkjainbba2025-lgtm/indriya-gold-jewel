import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { IMG } from "@/assets/indriya";

const DESCRIPTION =
  "Shrinathji chose your heart as his abode\u2014was it your love or devotion? Keep this secret safe with you.Embark on a spiritual journey with the Giriraj Gold Pendant, a masterpiece in 24 karat gold. The matte finish offers understated charm, showcasing the sacred Shrinath Ji motif. This pendant serves as a symbol of divine connection and spiritual guidance, enveloping you in the warmth of divine love.";

const SPECIFICATION = [
  ["Product", "Gold"],
  ["Category", "Pendants"],
  ["Type", "Faith & Belief"],
  ["Collection", "-"],
  ["Gender", "Men"],
  ["Occasion", "Daily Wear"],
  ["Design Theme", "Religious"],
];

const METALS = [
  ["Gold Weight", "8.315000 g"],
  ["Purity (Karatage)", "24KT"],
  ["Metal Color", "Yellow"],
];

function SpecTable({ rows }: { rows: string[][] }) {
  return (
    <dl className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
      {rows.map(([label, value]) => (
        <div key={label} className="flex justify-between gap-4 border-b border-line/70 pb-2">
          <dt className="text-[14px] text-muted-foreground">{label}</dt>
          <dd className="text-[14px] text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="text-[17px] text-ink">{title}</span>
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-peach text-navy">
            {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </span>
        </button>
      </h3>
      {open && <div className="pb-6">{children}</div>}
    </div>
  );
}

export function CherishEveryDetail() {
  return (
    <section className="bg-shell py-10 lg:py-16">
      <div className="mx-auto grid max-w-[1280px] items-start gap-8 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="bg-sand">
          <img
            src={IMG.pdp1}
            alt="Giriraj Gold Pendant detail view"
            width={1200}
            height={1200}
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
        </div>

        <div className="lg:pt-6">
          <h2 className="text-center font-display text-[38px] font-normal leading-tight text-ink lg:text-[46px]">
            Cherish Every Detail
          </h2>

          <div className="mt-8 lg:mt-12">
            <Accordion title="Product Description">
              <p className="max-w-prose text-[14px] leading-[1.7] text-muted-foreground">
                {DESCRIPTION}
              </p>
            </Accordion>
            <Accordion title="Product Specification">
              <SpecTable rows={SPECIFICATION} />
            </Accordion>
            <Accordion title="Metals">
              <SpecTable rows={METALS} />
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
