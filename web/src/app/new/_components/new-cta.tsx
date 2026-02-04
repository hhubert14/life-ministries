export function NewCta() {
  return (
    <section className="py-16 lg:py-20 bg-footer-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://maps.google.com/?q=2213+Cobbs+St+Lynchburg+VA+24501"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-background/90 transition-colors"
          >
            Get Directions
          </a>
          <a
            href="mailto:info@lifeministriesva.com"
            className="inline-flex items-center justify-center border border-text-light/30 px-6 py-3 text-sm font-semibold text-text-light hover:bg-text-light/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
