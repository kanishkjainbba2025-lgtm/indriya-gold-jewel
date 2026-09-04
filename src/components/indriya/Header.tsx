import { useState } from "react";
import { Search, Mic, MapPin, Heart, User, Menu, X, Users } from "lucide-react";
import { IMG } from "@/assets/indriya";

const NAV = [
  "All Jewellery",
  "Gold",
  "Diamond",
  "Daily Wear",
  "Wedding",
  "Gifting",
  "Masterpieces",
  "More",
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-peach">
      {/* Top row */}
      <div className="mx-auto flex h-[60px] max-w-[1440px] items-center gap-3 px-4 lg:h-[72px] lg:px-8">
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="-ml-1 p-1 text-navy lg:hidden"
        >
          <Menu className="h-7 w-7" strokeWidth={1.5} />
        </button>

        <a href="/" className="mx-auto shrink-0 lg:mx-0" aria-label="Indriya home">
          <img
            src={IMG.logo}
            alt="Indriya"
            width={600}
            height={130}
            className="h-8 w-auto lg:h-9"
          />
        </a>

        {/* Search */}
        <div className="ml-auto hidden max-w-[430px] flex-1 justify-center lg:flex">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5"
            role="search"
          >
            <Search className="h-4 w-4 shrink-0 text-navy" strokeWidth={2} />
            <input
              type="search"
              aria-label="Search for jewellery"
              placeholder="Search For.."
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted-foreground"
            />
            <Mic className="h-4 w-4 shrink-0 text-navy" strokeWidth={1.8} />
          </form>
        </div>

        <div className="ml-auto flex items-center gap-4 lg:gap-5">
          <button
            type="button"
            aria-label="Search"
            className="p-1 text-navy lg:hidden"
          >
            <Search className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <a
            href="#"
            className="hidden items-center gap-2 text-sm text-navy transition-opacity hover:opacity-70 lg:flex"
          >
            <Users className="h-5 w-5" strokeWidth={1.4} />
            Golden Programs
          </a>
          <a
            href="#"
            className="hidden items-center gap-1.5 text-sm text-navy transition-opacity hover:opacity-70 lg:flex"
          >
            <MapPin className="h-5 w-5" strokeWidth={1.4} />
            Store
          </a>
          <a href="#" aria-label="Wishlist" className="hidden text-navy transition-opacity hover:opacity-70 lg:block">
            <Heart className="h-5 w-5" strokeWidth={1.4} />
          </a>
          <a href="#" aria-label="Account" className="hidden text-navy transition-opacity hover:opacity-70 lg:block">
            <User className="h-5 w-5" strokeWidth={1.4} />
          </a>
          <img
            src={IMG.abg}
            alt="Aditya Birla Jewellery"
            width={300}
            height={300}
            className="h-11 w-11 object-contain lg:h-12 lg:w-12"
          />
        </div>
      </div>

      {/* Nav row */}
      <nav aria-label="Primary" className="hidden border-t border-white/40 lg:block">
        <ul className="mx-auto flex max-w-[1440px] items-center justify-center gap-10 px-8 py-3.5 text-[15px] text-navy">
          {NAV.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="transition-colors hover:text-rust"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="absolute inset-0 bg-navy/40"
            onClick={() => setMenuOpen(false)}
            aria-hidden
          />
          <div className="relative flex h-full w-[82%] max-w-sm flex-col bg-peach">
            <div className="flex h-[60px] items-center justify-between px-4">
              <img src={IMG.logo} alt="Indriya" className="h-8 w-auto" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="p-1 text-navy"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>
            <ul className="flex flex-col px-5 text-navy">
              {NAV.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-line py-4 text-[15px]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
