import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  ChevronRight,
  ChevronDown,
  BadgeCheck,
  IndianRupee,
  RefreshCcw,
  X,
} from "lucide-react";

import pendantMain from "@/assets/pendant-main.jpg";
import pendantDetail from "@/assets/pendant-detail.jpg";
import pendantWorn from "@/assets/pendant-worn.jpg";
import pendantBox from "@/assets/pendant-box.jpg";
import similar1 from "@/assets/similar-1.jpg";
import similar2 from "@/assets/similar-2.jpg";
import similar3 from "@/assets/similar-3.jpg";
import similar4 from "@/assets/similar-4.jpg";

export const Route = createFileRoute("/")({
  component: ProductDetailPage,
  head: () => ({
    meta: [
      { title: "Giriraj Gold Pendant | Indriya Jewellery" },
      {
        name: "description",
        content:
          "Shop the Giriraj Gold Pendant in 22KT antique gold by Indriya. BIS hallmarked, transparent pricing, lifetime exchange & buyback. Every jewel tells a story.",
      },
      { property: "og:title", content: "Giriraj Gold Pendant | Indriya Jewellery" },
      {
        property: "og:description",
        content:
          "A temple-inspired 22KT antique gold pendant from Indriya. BIS hallmarked with 100% transparent pricing.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Giriraj Gold Pendant",
          sku: "GDAYA00-AEPF128",
          brand: { "@type": "Brand", name: "Indriya" },
          description:
            "Giriraj Gold Pendant in 22KT antique gold, inspired by traditional temple motifs. BIS Hallmark certified.",
          material: "22KT Gold",
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "48250",
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
          },
        }),
      },
    ],
  }),
});

const GALLERY = [
  { src: pendantMain, alt: "Giriraj Gold Pendant in 22kt Antique Gold on a fine gold chain" },
  { src: pendantDetail, alt: "Close-up of the temple motif craftsmanship on the Giriraj Gold Pendant" },
  { src: pendantWorn, alt: "Giriraj Gold Pendant in 22kt antique gold worn with a traditional ensemble" },
  { src: pendantBox, alt: "Giriraj Gold Pendant presented in the signature Indriya gift box" },
];

const SIMILAR = [
  { src: similar1, alt: "Padma 22kt gold lotus pendant by Indriya", title: "Padma Lotus Pendant", price: "₹36,400" },
  { src: similar2, alt: "Mayura 22kt antique gold peacock pendant by Indriya", title: "Mayura Peacock Pendant", price: "₹54,900" },
  { src: similar3, alt: "Aum 22kt gold engraved pendant by Indriya", title: "Aum Circle Pendant", price: "₹29,750" },
  { src: similar4, alt: "Devika antique gold temple jhumka earrings by Indriya", title: "Devika Temple Jhumkas", price: "₹78,200" },
];

const SPECS = [
  { label: "Gold Purity", value: "22KT (916 BIS Hallmarked)" },
  { label: "Gross Weight", value: "7.42 g" },
  { label: "Dimensions", value: "H 28 mm × W 22 mm" },
  { label: "Collection", value: "Temple Treasures" },
  { label: "Finish", value: "Antique, hand-carved" },
  { label: "Style Code", value: "GDAYA00-AEPF128" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button
          aria-label="Open menu"
          className="p-2 text-foreground md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm tracking-wide text-muted-foreground md:flex">
          <a href="#" className="transition-colors hover:text-royal">Jewellery</a>
          <a href="#" className="transition-colors hover:text-royal">Collections</a>
          <a href="#" className="transition-colors hover:text-royal">Gifting</a>
        </nav>
        <Link to="/" className="justify-self-center font-display text-2xl font-semibold tracking-[0.35em] text-royal">
          INDRIYA
        </Link>
        <div className="flex items-center justify-self-end">
          <button aria-label="Search" className="p-2 text-foreground transition-colors hover:text-gold-deep">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Wishlist" className="p-2 text-foreground transition-colors hover:text-gold-deep">
            <Heart className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="p-2 text-foreground transition-colors hover:text-gold-deep">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex h-16 items-center justify-between border-b border-border px-4">
            <span className="font-display text-xl font-semibold tracking-[0.35em] text-royal">INDRIYA</span>
            <button aria-label="Close menu" className="p-2" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-6 font-display text-2xl text-foreground">
            {["Jewellery", "Collections", "Gifting", "Our Story", "Stores"].map((item) => (
              <a key={item} href="#" className="border-b border-border py-4" onClick={() => setOpen(false)}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Breadcrumbs() {
  const items = ["Home", "Jewellery", "Gold Pendants"];
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-1 text-xs tracking-wide text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-1">
            <a href="#" className="transition-colors hover:text-royal">{item}</a>
            <ChevronRight className="h-3 w-3" aria-hidden />
          </li>
        ))}
        <li aria-current="page" className="font-medium text-royal">
          Giriraj Gold Pendant
        </li>
      </ol>
    </nav>
  );
}

function Gallery() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      {/* Thumbnails */}
      <div className="order-2 flex gap-3 overflow-x-auto no-scrollbar lg:order-1 lg:flex-col lg:overflow-visible">
        {GALLERY.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            aria-pressed={active === i}
            className={`shrink-0 overflow-hidden rounded-lg border transition-all ${
              active === i ? "border-gold-deep ring-1 ring-gold" : "border-border hover:border-gold"
            }`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" width={1024} height={1024} className="h-20 w-20 object-cover" />
          </button>
        ))}
      </div>
      {/* Main image with hover zoom */}
      <div className="group order-1 flex-1 overflow-hidden rounded-2xl border border-border bg-cream lg:order-2">
        <img
          src={GALLERY[active].src}
          alt={GALLERY[active].alt}
          width={1024}
          height={1024}
          fetchPriority="high"
          className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-125"
        />
      </div>
    </div>
  );
}

function BuyBox() {
  return (
    <div className="flex flex-col">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-deep">Temple Treasures Collection</p>
      <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
        Giriraj Gold Pendant
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">Style Code: GDAYA00-AEPF128</p>

      <div className="mt-6 flex items-end gap-3">
        <p className="font-display text-3xl font-semibold text-foreground">₹48,250</p>
        <p className="pb-1 text-sm text-muted-foreground line-through">₹51,800</p>
      </div>
      <a href="#price-breakup" className="mt-1 w-fit text-sm font-medium text-royal underline underline-offset-4 hover:text-royal-deep">
        View Price Breakup
      </a>
      <p className="mt-1 text-xs text-muted-foreground">Inclusive of all taxes. Price as per today's gold rate.</p>

      <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground">
        Inspired by the sacred temples of the South, the Giriraj pendant is hand-carved in 22KT
        antique gold by master karigars. Its divine motif and warm, time-worn finish make it a
        keepsake of devotion — crafted to be treasured for generations.
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <button className="w-full rounded-full bg-gold py-4 text-sm font-semibold uppercase tracking-[0.2em] text-royal-deep transition-all hover:bg-gold-deep hover:text-gold-soft">
          Add to Cart
        </button>
        <button className="w-full rounded-full border-2 border-royal py-4 text-sm font-semibold uppercase tracking-[0.2em] text-royal transition-colors hover:bg-royal hover:text-primary-foreground">
          Book a Try-at-Home Appointment
        </button>
      </div>

      <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
        <BadgeCheck className="h-4 w-4 shrink-0 text-gold-deep" aria-hidden />
        Free insured shipping · 15-day easy returns
      </p>
    </div>
  );
}

const TRUST = [
  { icon: BadgeCheck, title: "BIS Hallmark Certified Gold", text: "Every piece carries the 916 hallmark of purity." },
  { icon: IndianRupee, title: "100% Transparent Pricing", text: "Gold rate, making charges and GST — all itemised." },
  { icon: RefreshCcw, title: "Lifetime Exchange & Buyback", text: "Full-value exchange, for a lifetime." },
];

function TrustBanner() {
  return (
    <section aria-label="Our promises" className="mt-14 bg-gold-soft/60 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {TRUST.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-background text-gold-deep shadow-sm">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <div className="min-w-0">
              <h2 className="font-display text-lg font-semibold text-royal">{title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AccordionItem({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-display text-xl font-semibold text-foreground">{title}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-gold-deep transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open && <div className="pb-6">{children}</div>}
    </div>
  );
}

function ProductInfo() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <AccordionItem title="Product Details" defaultOpen>
        <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {SPECS.map((s) => (
            <div key={s.label} className="flex justify-between border-b border-border/60 pb-2">
              <dt className="text-sm text-muted-foreground">{s.label}</dt>
              <dd className="text-sm font-medium text-foreground">{s.value}</dd>
            </div>
          ))}
        </dl>
      </AccordionItem>
      <AccordionItem title="Brand Story">
        <p className="max-w-prose leading-relaxed text-muted-foreground">
          At Indriya, we believe <em className="font-display text-foreground">"Every Jewel Tells a Story."</em> Born from
          the Aditya Birla Group's legacy of trust, Indriya brings together India's finest karigari
          and contemporary design. Each creation is hallmarked, honestly priced, and made to carry
          your most cherished moments — from everyday grace to once-in-a-lifetime celebrations.
        </p>
      </AccordionItem>
    </section>
  );
}

function SimilarProducts() {
  const [wished, setWished] = useState<Set<string>>(new Set());
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <h2 className="text-center font-display text-3xl font-semibold text-foreground sm:text-4xl">
        You May Also Like
      </h2>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        More stories in gold, from the Temple Treasures collection
      </p>
      <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto no-scrollbar sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
        {SIMILAR.map((p) => (
          <article key={p.title} className="group w-64 shrink-0 snap-start sm:w-auto">
            <div className="relative overflow-hidden rounded-xl border border-border bg-cream">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button
                aria-label={`Add ${p.title} to wishlist`}
                aria-pressed={wished.has(p.title)}
                onClick={() =>
                  setWished((prev) => {
                    const next = new Set(prev);
                    if (next.has(p.title)) next.delete(p.title);
                    else next.add(p.title);
                    return next;
                  })
                }
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 shadow-sm transition-transform hover:scale-110"
              >
                <Heart
                  className={`h-4 w-4 ${wished.has(p.title) ? "fill-gold-deep text-gold-deep" : "text-foreground"}`}
                />
              </button>
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="text-sm font-medium text-royal">{p.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-royal-deep py-10 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 text-center sm:px-6 lg:px-8">
        <p className="font-display text-2xl font-semibold tracking-[0.35em]">INDRIYA</p>
        <p className="text-sm opacity-80">Every Jewel Tells a Story · An Aditya Birla Group brand</p>
      </div>
    </footer>
  );
}

function ProductDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumbs />
      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <Gallery />
          <BuyBox />
        </section>
        <TrustBanner />
        <ProductInfo />
        <SimilarProducts />
      </main>
      <Footer />
    </div>
  );
}
