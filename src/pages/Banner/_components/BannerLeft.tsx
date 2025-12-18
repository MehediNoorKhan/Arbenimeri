import lock from "../../../../public/images/All/Lock.png";
import avatar1 from "../../../../public/images/All/avatar1.png";
import avatar2 from "../../../../public/images/All/avatar2.png";
import avatar3 from "../../../../public/images/All/avatar3.png";
import avatar4 from "../../../../public/images/All/avatart4.png";
import logo1 from "../../../../public/images/home/logo1.svg";
import logo2 from "../../../../public/images/home/logo2.svg";
import logo3 from "../../../../public/images/home/logo3.svg";
import logo4 from "../../../../public/images/home/logo4.svg";

export default function BannerLeft() {
  return (
    <div className="flex flex-col gap-6 max-w-xl w-full text-center md:text-left">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 border border-border rounded-full w-fit mx-auto md:mx-0">
        <img src={lock} alt="Secure" className="h-4 w-4" />
        <span className="text-sm font-medium text-secondary">
          Secure Your Future
        </span>
      </div>

      {/* Heading */}
      <h1 className="2xl:text-[64px] leading-tight font-semibold text-foreground">
        Effortless Care at <br className="hidden sm:block" /> Your Fingertips
      </h1>

      {/* Social proof */}
      <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
        <div className="flex -space-x-2">
          {[avatar1, avatar2, avatar3, avatar4].map((a, i) => (
            <img
              key={i}
              src={a}
              alt=""
              className="h-8 w-8 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <p className="text-[16px] text-secondary">
          And <span className="font-medium text-foreground">1,283+</span> others already tried
        </p>
      </div>

      {/* Description */}
      <p className="text-secondary 2xl:text-[18px]">
        From life’s uncertainties to everyday needs, we’re here to provide unmatched
        support and tailored coverage.
      </p>

      {/* CTA */}
      <button className="mx-auto md:mx-0 w-fit p-[16px] bg-primary text-white rounded-full font-medium transition hover:scale-105">
        Explore Services
      </button>

      {/* Trusted by */}
      <div className="2xl:mt-[80px]">
        <p className="2xl:text-[18px] text-muted-foreground mb-[16px] text-center md:text-left">
          Trusted by Over 1,000 Companies
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 opacity-70">
          {[logo1, logo2, logo3, logo4].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt=""
              className="h-[28px] w-[116px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}



