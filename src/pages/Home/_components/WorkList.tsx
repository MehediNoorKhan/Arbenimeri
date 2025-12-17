import React from 'react';
import WorkCard from './WorkCard';
import { workList } from '@/types/HowWorksCard';

const WorkList: React.FC = () => {
  return (
    <div className="py-8 sm:py-10 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 justify-center items-center ">
      {workList.map((item, index) => (
        <WorkCard key={index} item={item} />
      ))}
    </div>
  );
};

export default WorkList;
