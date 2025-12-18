

import bannering from "../../../../public/images/All/bannerimg.png";
import verify from "../../../../public/images/All/verified.png";
import shareit from "../../../../public/images/All/shareit.png";
import widereach from "../../../../public/images/All/widereach.png";
import insight from "../../../../public/images/All/insight.png";
import avatar1 from "../../../../public/images/All/avatar1.png";
import avatar2 from "../../../../public/images/All/avatar2.png";
import avatar3 from "../../../../public/images/All/avatar3.png";

export default function BannerRight() {
  return (
    <div className="w-full flex justify-center md:justify-end">
      {/* STAGE */}
      <div className="relative flex flex-col items-center md:block">

        {/* CIRCLE IMAGE */}
        <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden shadow-xl">
          <img
            src={bannering}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ===== MOBILE CONTENT (STACKED) ===== */}
        <div className="flex flex-col items-center gap-4 mt-6 md:hidden">
          <Label icon={verify} text="Verified Partners" />
          <Label icon={shareit} text="Smart Matching" />
          <Label icon={widereach} text="Wide Reach" />
          <Label icon={insight} text="Clear Insights" />

          <ClientCard />
        </div>

        {/* ===== DESKTOP FLOATING CONTENT ===== */}
        <div className="hidden md:block">
          {/* Labels */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute md:-top-2 md:-right-6 lg:top-2 lg:right-4 flex flex-col gap-3">
              <Label icon={verify} text="Verified Partners" />
              <Label icon={shareit} text="Smart Matching" offset />
            </div>

            <div className="absolute md:top-72 md:-right-6 lg:top-92 lg:right-8 flex flex-col gap-3">
              <Label icon={widereach} text="Wide Reach" offset />
              <Label icon={insight} text="Clear Insights" />
            </div>
          </div>

          {/* Bottom Left Card */}
          <div className="absolute z-30 -bottom-10 -left-10 md:bottom-8 md:left-12 lg:-bottom-12 lg:-left-12 2xl:bottom-16 2xl:-left-12">
            <ClientCard />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- LABEL ---------------- */

function Label({
  icon,
  text,
  offset = false,
}: {
  icon: string;
  text: string;
  offset?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md outline outline-1 outline-primary ${
        offset ? "ml-6" : ""
      }`}
    >
      <img src={icon} alt={text} className="w-5 h-5" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

/* ---------------- CLIENT CARD ---------------- */

function ClientCard() {
  return (
    <div className="bg-[#f2f2f2] rounded-2xl shadow-xl p-4 w-[240px] sm:w-[260px] rotate-[0deg] lg:rotate-[-6deg]">
      <h4 className="font-semibold mb-2">Happy Clients</h4>

      <div className="flex items-center gap-2 mb-2">
        <div className="flex -space-x-2">
          <img src={avatar1} className="w-8 h-8 rounded-full border-2 border-white" />
          <img src={avatar2} className="w-8 h-8 rounded-full border-2 border-white" />
          <img src={avatar3} className="w-8 h-8 rounded-full border-2 border-white" />
        </div>
        <span className="text-sm font-semibold text-primary">+1K</span>
      </div>

      <p className="text-sm text-muted-foreground">
        We provide seamless solutions that simplify daily tasks and wellbeing.
      </p>
    </div>
  );
}




