import WorkList from "./WorkList";

export default function HowWorks() {
  return (
    <section className="mt-12 sm:mt-16 md:mt-20 px-4 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold">
          How does it work?
        </h1>
        <p className="text-base sm:text-lg mt-2 text-secondary">
          Get the best offer in 3 steps
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 sm:mt-14 md:mt-16">
        <WorkList />
      </div>

      {/* Advantages */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 mt-12 sm:mt-16 md:mt-20 mb-8">
        {/* Title */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-black leading-tight">
            Your advantages with
          </h3>
          <h3 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-primary leading-tight">
            MoversCO
          </h3>
        </div>

        {/* Description */}
        <p className="w-full md:w-1/2 text-secondary text-base sm:text-lg leading-relaxed">
          93% of all clients use the Internet to compare offers from providers.
          Thanks to MoversCO, multiple requests are no longer necessary. You only
          have contact with providers who have free capacity and can certainly
          fulfill your wishes. With up to 3 offers, you can choose the best one
          for you and reach your goal faster.
        </p>
      </div>
    </section>
  );
}
