import type { WorkCardItem } from '@/types/HowWorksCard';
import React from 'react';

interface CardProps {
  item: WorkCardItem;
}

const WorkCard: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="bg-primary p-4 sm:p-5 md:p-6 rounded-3xl flex flex-col text-center items-center">
      <div className="bg-white/20 backdrop-blur-3xl w-14 h-14 rounded-xl flex justify-center items-center ">
        <img
          src={item.image}
          alt={item.title}
          className=" h-11 w-11 p-2 object-cover"
        />
      </div>
      {/* Glass overlay */}
      {/* <div className="absolute inset-0 bg-white/50 backdrop-blur-md flex flex-col justify-center items-center text-center p-4"> */}
      <h2 className="text-xl font-bold text-white mb-2 md:mb-3 mt-5 md:mt-8">
        {item.title}
      </h2>
      <p className="text-white">{item.description}</p>
      {/* </div> */}
    </div>
  );
};

export default WorkCard;
