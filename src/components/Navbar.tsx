import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Features", "Workflow", "Team"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-500 ${scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
        }`}
    >
      {/* Left: Brand */}
      <a href="/" className="flex items-center gap-2.5 group">
        <div className="w-7 h-7 rounded-md bg-[#b5ff4d] flex items-center justify-center shadow-[0_0_16px_rgba(181,255,77,0.5)] group-hover:shadow-[0_0_24px_rgba(181,255,77,0.8)] transition-all duration-300">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="3" fill="#0a0a0a" />
            <path d="M7 1v2M7 11v2M1 7h2M11 7h2" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <span className="text-white font-syne font-bold text-lg tracking-tight">
          Smart<span className="text-[#b5ff4d]">Suraksha</span>
        </span>
      </a>

      {/* Right: Nav links */}
      <ul className="hidden md:flex items-center gap-1">
        {navItems.map((item, i) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className={`relative text-sm px-4 py-2 rounded-sm font-barlow font-light transition-all duration-300 group ${i === 0
                  ? "text-[#b5ff4d]"
                  : "text-white/70 hover:text-white"
                }`}
            >
              {item}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-[#b5ff4d] transition-all duration-300 ${i === 0 ? "w-4/5 opacity-100" : "w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100"
                  }`}
              />
            </a>
          </li>
        ))}
      </ul>

      {/* Top-right CTA: Launch Dashboard → */}
      <a
        href="#dashboard"
        className="hidden md:inline-flex items-center gap-2 bg-[#b5ff4d] text-[#0a0a0a] font-barlow font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-[#c8ff6e] transition-all duration-300 shadow-[0_0_20px_rgba(181,255,77,0.3)] hover:shadow-[0_0_30px_rgba(181,255,77,0.5)]"
      >
        Launch Dashboard →
      </a>

      {/* Mobile menu toggle */}
      <button className="md:hidden text-white/80 hover:text-white transition-colors" aria-label="Toggle Menu">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
