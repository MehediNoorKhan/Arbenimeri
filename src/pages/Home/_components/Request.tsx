import { Check } from "lucide-react";
import requestData from "../../../types/request.data";

export default function Request() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 mt-16 mb-24">
      <div className="bg-[#2F9C8C] rounded-2xl py-8 px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {requestData.map((item) => (
            <div key={item.id} className="flex gap-4 sm:gap-6">
              {/* Icon */}
              <div className="flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/20">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" strokeWidth={3} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
