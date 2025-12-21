import mapicon from "../../../public/images/All/pinicon.png";
import emailicon from "../../../public/images/All/emailicon.png";
import telephoneicon from "../../../public/images/All/telephoneicon.png";
import linkedicon from "../../../public/images/All/linkedinicon.png";
import twittericon from "../../../public/images/All/twittericon.png";
import facebookicon from "../../../public/images/All/facebookicon.png";
import youtubeicon from "../../../public/images/All/youtubeicon.png";
import instagram from "../../../public/images/All/instagramicon.png";

export default function Footer() {
  return (
    <footer className="bg-[#eef6f5] w-full">
      <div className="px-4 md:px-12 lg:px-20 py-8 lg:py-20 flex flex-col gap-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4 md:w-[30%]">
           <div className="flex items-center gap-2 flex-shrink-0">
              <div className=" rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/logos/logo.png"
                  className="h-[46px] w-[131px]"
                  alt=""
                />
              </div>
            </div>

            <p className="text-[16px] xl:text-[18px] text-[#84909C] leading-relaxed">
              Award winning Long Distance Moving Company Accurate online
              moving quote with no hidden costs
            </p>

            <div className="flex flex-col gap-3 text-[16px] xl:text-[18px] text-[#84909C]">
              <div className="flex items-start gap-2">
                <img src={mapicon} alt="location" width={16} height={16} />
                <span>
                  Feldstrasse 8, CH-8370 Sirnach TG, Switzerland
                </span>
              </div>

              <div className="flex items-center gap-2">
                <img src={emailicon} alt="email" width={16} height={16} />
                <span>info@moversco.ch</span>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src={telephoneicon}
                  alt="phone"
                  width={16}
                  height={16}
                />
                <span>+41 79 788 33 44</span>
              </div>
            </div>
          </div>

          {/* Quick */}
          <div className="flex flex-col gap-3 md:w-[15%]">
  <h4 className="font-semibold text-[#000000]">Quick</h4>

  <ul className="flex flex-col gap-2 text-[16px] xl:text-[18px] text-[#84909C]">
    <li className="cursor-pointer">
      <a href="/" className="hover:text-[#399385] transition">
        Home
      </a>
    </li>
    <li className="cursor-pointer">
      <a href="/services" className="hover:text-[#399385] transition">
        Services
      </a>
    </li>
    <li className="cursor-pointer">
      <a href="/contact" className="hover:text-[#399385] transition">
        Contact Us
      </a>
    </li>
    <li className="cursor-pointer">
      <a href="/faq" className="hover:text-[#399385] transition">
        FAQ
      </a>
    </li>
    <li className="cursor-pointer">
      <a href="/blogs" className="hover:text-[#399385] transition">
        Blogs
      </a>
    </li>
    <li className="cursor-pointer">
      <a href="/privacy-policy" className="hover:text-[#399385] transition">
        Privacy Policy
      </a>
    </li>
  </ul>
</div>


          {/* Services Location */}
          <div className="flex flex-col gap-3 md:w-[20%]">
            <h4 className="font-semibold text-[#000000]">
              Services Location
            </h4>
            <ul className="flex flex-col gap-2 text-[16px] xl:text-[18px] text-[#84909C]">
              <li>Zurich</li>
              <li>Winterthur</li>
              <li>Thurgau</li>
              <li>St. Gallen</li>
              <li>Schaffhausen</li>
              <li>Schwyz</li>
              <li>Zug</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col gap-4 md:w-[35%]">
            <h4 className="font-semibold text-[#000000]">Subscribe</h4>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-[#cfdedb] bg-transparent text-[16px] xl:text-[18px] outline-none"
              />
              <button className="px-6 py-3 rounded-full bg-[#399385] text-white text-[16px] xl:text-[18px] font-medium hover:brightness-110 transition">
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {[linkedicon, twittericon, facebookicon, youtubeicon, instagram].map(
                (icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#399385] hover:border-[#399385] transition"
                  >
                    <img src={icon} alt="social" width={18} height={18} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-[16px] xl:text-[18px] text-[#84909C]">
          ©All right reserved – Moversco 2025
        </div>
      </div>
    </footer>
  );
}
