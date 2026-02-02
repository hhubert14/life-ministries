"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ministries", label: "Ministries" },
  { href: "/media", label: "Media" },
  { href: "/new", label: "I'm New" },
  { href: "/giving", label: "Give" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position - invert colors after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-100 transition-colors duration-300 ${
          isScrolled && !isMenuOpen ? "bg-white shadow-sm" : ""
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span
                className={`text-sm font-semibold tracking-[0.15em] uppercase transition-colors ${
                  isScrolled && !isMenuOpen ? "text-[#1a1a1a]" : "text-white"
                }`}
              >
                Life Ministries
              </span>
            </Link>

            {/* Menu Button */}
            <button
              type="button"
              className="flex items-center z-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`text-sm font-semibold tracking-wider uppercase transition-colors ${
                  isMenuOpen ? "text-white" : isScrolled ? "text-[#1a1a1a]" : "text-white"
                }`}
              >
                {isMenuOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-90 md:block"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Side Panel - full screen on mobile, side panel on desktop */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#0a0a12] z-95 transform transition-transform duration-300 ease-in-out
          w-full sm:w-80
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Navigation Links */}
        <nav className="px-6 py-12">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-xl font-medium text-white hover:text-white/70 transition-colors border-b border-white/10 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Panel Footer */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-8 border-t border-white/10">
          <p className="text-xs text-white/50 mb-2">Service Times</p>
          <p className="text-sm text-white/80">Sundays at 10:30 AM</p>
          <p className="text-sm text-white/80">Wednesdays at 6:30 PM</p>
        </div>
      </div>
    </>
  );
}
