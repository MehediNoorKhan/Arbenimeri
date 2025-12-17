import bannering from "../../../../public/images/All/bannerimg.png";
import verify from "../../../../public/images/All/verified.png";
import shareit from "../../../../public/images/All/shareit.png";
import widereach from "../../../../public/images/All/widereach.png";
import insight from "../../../../public/images/All/insight.png";

export default function BannerRight() {
  return (
    <div className="relative flex justify-end items-center w-full">
      {/* Circular main image */}
      <div className="relative w-[480px] h-[480px] rounded-full overflow-hidden shadow-xl">
        <img
          src={bannering}
          alt="Banner"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-5 right-5 flex flex-col gap-4">
        {/* Top labels */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md outline outline-1 outline-primary">
            <img src={verify} alt="Verified Partners" className="h-5 w-5" />
            <span className="text-sm font-medium text-foreground">
              Verified Partners
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md outline outline-1 outline-primary ml-6">
            <img src={shareit} alt="Smart Matching" className="h-5 w-5" />
            <span className="text-sm font-medium text-foreground">
              Smart Matching
            </span>
          </div>
        </div>

        {/* Bottom labels */}
        <div className="flex flex-col gap-3 mt-[250px]">
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md outline outline-1 outline-primary ml-6">
            <img src={widereach} alt="Wide Reach" className="h-5 w-5" />
            <span className="text-sm font-medium text-foreground">
              Wide Reach
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-md outline outline-1 outline-primary ">
            <img src={insight} alt="Clear Insight" className="h-5 w-5" />
            <span className="text-sm font-medium text-foreground">
              Clear Insight
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}





