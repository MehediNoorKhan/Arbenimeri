import { Check } from "lucide-react";
import requestData from "../../../types/request.data";

export default function Request() {
  return (
    <section className="px-[20px] md:px-[80px] mt-16 mb-24">
      <div className="bg-[#2F9C8C] rounded-2xl py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {requestData.map((item) => (
            <div key={item.id} className="flex px-[8px] gap-4 sm:gap-6">
              {/* Icon */}
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20">
                <Check className="h-4 w-4 text-white" strokeWidth={3} />
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
