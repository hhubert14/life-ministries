export function GivingContact() {
  return (
    <section className="py-16 lg:py-20 bg-footer-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-text-light sm:text-3xl mb-4">
          Have questions or need help?
        </h2>
        <p className="text-text-light/70 mb-8 max-w-lg mx-auto">
          We&apos;d love to hear from you. Reach out with any questions about
          giving or how your contributions make a difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@lifeministriesva.com"
            className="inline-flex items-center justify-center bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-background/90 transition-colors"
          >
            Email Us
          </a>
          <a
            href="tel:+14345284008"
            className="inline-flex items-center justify-center border border-text-light/30 px-6 py-3 text-sm font-semibold text-text-light hover:bg-text-light/10 transition-colors"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
