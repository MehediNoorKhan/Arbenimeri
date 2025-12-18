

import ClientSayHeading from './ClientSayHeading';
import ClientReviewCards from './ClientReviewCards';

export default function ClientSay() {
  return (

      <div className='px-4 md:px-[80px]'>
        {/* heading */}
        <ClientSayHeading></ClientSayHeading>
        {/* reviews card */}
        <ClientReviewCards></ClientReviewCards>
      </div>
   
  );
}
