// adjust path if needed
import { reviewsDatas } from '@/types/ReviewDatas';
import { Star, Quote } from 'lucide-react';

export default function ClientReviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {reviewsDatas.map((item, index) => (
        <div
          key={index}
          className="bg-[#F3F3F3] shadow-md rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center"
        >
          {/* Profile Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 rounded-full object-cover mb-4"
          />

          {/* Name */}
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>

          {/* Designation */}
          <p className="text-sm text-gray-500">{item.designation}</p>

          {/* Stars */}
          <div className="flex gap-1 my-4 sm:my-5">
            {Array.from({ length: item.stars }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="text-yellow-500 fill-yellow-500"
              />
            ))}
          </div>

          {/* Review Text */}
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            “{item.review}”
          </p>

          {/* Quote Icon */}
          <Quote className="w-6 h-6 mt-4 text-primary fill-current" />
        </div>
      ))}
    </div>
  );
}
