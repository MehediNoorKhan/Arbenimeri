import { CardList } from './CardList';

export default function QualityServices() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        {/* Top heading with icon */}
        <div className="flex justify-center items-center gap-2 sm:gap-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_51_5143)">
              <path
                d="M12 5.98442C7.01299 6.54546 6.57662 7.01299 6.01558 12C5.45455 7.01299 4.98701 6.54546 0 5.98442C4.98701 5.42338 5.45455 4.98701 6.01558 0C6.57662 4.98701 7.01299 5.42338 12 5.98442Z"
                fill="#399385"
              />
            </g>
            <defs>
              <clipPath id="clip0_51_5143">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="uppercase text-primary text-sm sm:text-base font-semibold">
            Our Services
          </span>
        </div>

        {/* Main heading */}
        <h1 className="py-4 sm:py-5 md:py-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black flex justify-center gap-2 sm:gap-3 flex-wrap">
          High Quality <span className="text-primary">Services for You.</span>
        </h1>

        <p className='text-secondary xl:text-[22px]'>We are committed to sustainability. eco-friendly initiatives.</p>

      </div>

      {/* Services Card */}
      <CardList />
    </section>
  );
}
