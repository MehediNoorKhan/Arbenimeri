export default function ClientSayHeading() {
  return (
    <section className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 px-4 sm:px-8 lg:px-16 mt-12">
      {/* Left */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
          What Our <span className="text-primary">Client Say</span>
        </h1>
        <p className="text-secondary text-sm sm:text-base md:text-lg">
          We are committed to sustainability. Eco-friendly initiatives.
        </p>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 bg-primary text-white rounded-2xl md:rounded-3xl">
        <div className="flex flex-col gap-4">
          {/* Rating number */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">4.7/5</h2>
            <p className="text-sm sm:text-base mt-1 sm:mt-0">
              This rate is given by user after visiting our location
            </p>
          </div>

          {/* Star rating */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 border-t border-gray-300 pt-2">
            <div className="rating flex">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
            </div>
            <p className="text-sm sm:text-base mt-1 sm:mt-0">For Excellence Services</p>
          </div>
        </div>
      </div>
    </section>
  );
}
