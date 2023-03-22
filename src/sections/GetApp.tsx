import React from "react";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h3 className="mb-10 mx-auto text-3xl md:text-4xl leading-tight text-coolGray-900 font-bold tracking-tighter max-w-5xl">
            Uygulama Üzerinden Anlık Takip Edin
          </h3>
          <div className="relative mb-10 mx-auto max-w-max">
            <img
              className="absolute top-1/2 transform -translate-y-1/2 w-1/2 md:w-auto text-yellow-400"
              src="/images/elements/circle1-yellow.svg"
              alt=""
            />
            <img
              className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1/4 md:w-auto text-blue-500"
              src="/images/elements/dots1-blue.svg"
              alt=""
            />
            <img
              className="absolute p-7 -mt-1 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 z-20"
              src="/images/elements/dashboard.png"
              alt=""
            />
            <img
              className="relative z-10"
              src="/images/elements/applications/macbook.png"
              alt=""
            />
          </div>
          <p className="mb-6 mx-auto text-lg md:text-xl text-coolGray-500 font-medium max-w-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            sit aspernatur amet sint dignissimos quo impedit nesciunt, quas
            soluta quia culpa reprehenderit cum dolorum vero eius molestias
            beatae eum ullam nostrum a odit maiores! Cum consequatur quisquam,
            commodi voluptates quas eius temporibus unde corporis iste ratione
            repellendus, enim fugiat magni.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-auto py-1 md:py-0 md:mr-6">
              <a
                className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-blue-500 rounded-md shadow-sm"
                href="#"
              >
                Devamı...
              </a>
            </div>
            <div className="w-full md:w-auto py-1 md:py-0">
              <a
                className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm"
                href="#"
              >
                Hakkımızda
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section className="py-24 px-8 bg-white overflow-hidden">
    //   <div className="container px-4 mx-auto">
    //     <div className="flex flex-wrap items-center -mx-4">
    //       <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
    //         <h3 className="mb-4 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">
    //           Mobil Uygulamamızı İndirin
    //         </h3>
    //         <p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
    //           incidunt aliquid veritatis consequuntur quam iusto eligendi, ipsa
    //           facere et magni fuga dicta! Ab iure inventore esse dicta quod
    //           eveniet excepturi.
    //         </p>
    //         <div className="flex flex-wrap">
    //           <div className="w-full md:w-auto mb-3 md:mb-0 md:mr-4 flex items-center">
    //             <Image
    //               width={150}
    //               height={75}
    //               src="/images/elements/app-store-dark.svg"
    //               alt=""
    //             />
    //           </div>
    //           <div className="w-full md:w-auto flex items-center">
    //             <Image
    //               width={170}
    //               height={85}
    //               src="/images/elements/google-play-dark.svg"
    //               alt=""
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full md:w-1/2 px-4">
    //         <div className="relative flex flex-row items-center mx-auto md:mr-0 max-w-max">
    //           <div className="relative max-w-max overflow-hidden">
    //             <Image
    //               className="relative z-20 md:h-auto object-cover"
    //               width={160}
    //               height={320}
    //               src="/images/elements/applications/iphone-light1.png"
    //               alt=""
    //             />
    //             <Image
    //               className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 p-7 md:p-0 -mt-3 md:-mt-4 -ml-1 md:h-auto object-cover"
    //               src="/images/elements/applications/smartphone-ui.png"
    //               alt=""
    //               width={320}
    //               height={640}
    //             />
    //           </div>

    //           <Image
    //             className="absolute -left-5 -top-5 w-28 md:w-auto text-yellow-400"
    //             src="/images/elements/circle2-yellow.svg"
    //             alt=""
    //             width={100}
    //             height={100}
    //           />
    //           <Image
    //             className="absolute -right-7 bottom-12 w-28 md:w-auto text-blue-500"
    //             src="/images/elements/dots1-blue.svg"
    //             alt=""
    //             width={100}
    //             height={100}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default GetApp;
