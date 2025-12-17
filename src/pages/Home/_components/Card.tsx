import type { CardProps } from '@/types/ServicesCard';

export const Card = ({ imageSrc, title, description }: CardProps) => {
  console.log(imageSrc);
  return (
    <div className=" bg-white rounded-2xl flex flex-col justify-between border p-4 md:p-6">
      {/* Top image */}
      <div className=" bg-primary h-10 w-10 rounded-md">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover  p-1 "
        />
      </div>

      {/* Title and description */}
      <div className="flex-1 mt-4 md:mt-[37px]">
        <h2 className="text-[24px] text-black font-semibold">{title}</h2>
        <p className="text-secondary mt-2 md:mt-3 w-/12 sm:w-auto">
          {description}
        </p>
      </div>

      {/* Button with SVG */}
      <div className="flex gap-2 items-center  mt-5 md:mt-9">
        <button className="text-xl text-primary font-semibold">
          Submit Inquiry
        </button>
        <span className="bg-primary p-1 flex  justify-center items-center h-6 w-6 rounded-full">
          <img src="/images/home/arrow.svg" className="h-full w-full" alt="" />
        </span>
      </div>
    </div>
  );
};
