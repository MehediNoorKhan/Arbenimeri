
import type { WorkCardItem } from '@/types/HowWorksCard';
import React from 'react';

interface CardProps {
  item: WorkCardItem;
}

const WorkCard: React.FC<CardProps> = ({ item }) => {
  return (
    <div
      className="
        bg-primary
        rounded-3xl
        w-full
        max-w-[400px] max-h-[350px] mx-auto
        aspect-[3/4]
        p-5 sm:p-6
        flex flex-col items-center text-center
      "
    >
      {/* ICON */}
      <div className="bg-white/20 backdrop-blur-3xl w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 justify-center md:mt-5">
        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 line-clamp-2">
          {item.title}
        </h2>

        <p className="text-white text-sm sm:text-base leading-relaxed line-clamp-4">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
