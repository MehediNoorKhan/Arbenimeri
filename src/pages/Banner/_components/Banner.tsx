// import BannerLeft from "./BannerLeft";
// import BannerRight from "./BannerRight";

// export default function Banner() {
//   return (
//     <section className="w-full mb-12">
//       <div className="px-[80px] grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
//         <BannerLeft />
//         <BannerRight />
//       </div>
//     </section>
//   );
// }


import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";

export default function Banner() {
  return (
    <section className="w-full mb-12">
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 flex flex-col md:flex-row gap-6 justify-between">
        <BannerLeft />
        <BannerRight />
      </div>
    </section>
  );
}
