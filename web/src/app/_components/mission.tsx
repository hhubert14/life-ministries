export function Mission() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#e07940]" />
              <span className="text-sm font-semibold uppercase tracking-wider text-[#e07940]">
                Our Mission
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl lg:text-5xl mb-6">
              A Place to Belong
            </h2>

            <p className="text-lg text-[#6b7280] leading-relaxed mb-6">
              Life Ministries is a place where people can meet Jesus, believers can engage in
              life-giving community, and everyone is welcome. We believe in creating a Spirit-filled
              atmosphere where people can have authentic encounters with Christ.
            </p>

            <p className="text-lg text-[#6b7280] leading-relaxed">
              Here, you can discover your gifts, explore your callings, and use them for Him.
              Whether you&apos;re taking your first steps in faith or have walked with Christ for years,
              there&apos;s a place for you at Life Ministries.
            </p>
          </div>

          {/* Visual Element / Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#f5f5f5] rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-[#2d3a8c] mb-2">20+</div>
                <div className="text-sm text-[#6b7280] uppercase tracking-wide">Years of Ministry</div>
              </div>
              <div className="bg-[#f5f5f5] rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-[#2d3a8c] mb-2">3</div>
                <div className="text-sm text-[#6b7280] uppercase tracking-wide">Weekly Services</div>
              </div>
              <div className="bg-[#2d3a8c] rounded-2xl p-8 text-center text-white">
                <div className="text-4xl font-bold mb-2">1</div>
                <div className="text-sm uppercase tracking-wide opacity-80">Community</div>
              </div>
              <div className="bg-[#e07940] rounded-2xl p-8 text-center text-white">
                <div className="text-4xl font-bold mb-2">&infin;</div>
                <div className="text-sm uppercase tracking-wide opacity-80">God&apos;s Love</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
