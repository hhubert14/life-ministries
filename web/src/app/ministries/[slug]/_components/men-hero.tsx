import Image from "next/image";

export function MenHero() {
  return (
    <section id="hero" className="relative h-[50vh] min-h-100">
      <Image
        src="/mens-ministry.jpeg"
        alt="Men's Ministry"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-text-light sm:text-6xl lg:text-7xl">
          Men
        </h1>
      </div>
      <div className="absolute -bottom-px left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-15 block">
          <path d="M0 60V30C240 10 480 0 720 0C960 0 1200 10 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
