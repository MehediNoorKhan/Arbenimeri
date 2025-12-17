import Banner from '../Banner/_components/Banner';
import ClientSay from './_components/ClientSay';
import HowWorks from './_components/HowWorks';
import QualityServices from './_components/QualityServices';
import Request from './_components/Request';
import Works from './_components/Works';

export default function Home() {
  return (
    <div className='py-[20px]'>
      <Banner></Banner>
      <Works></Works>
      <QualityServices></QualityServices>
      <HowWorks></HowWorks>
       <Request></Request>
      <ClientSay></ClientSay>
    </div>
  );
}
