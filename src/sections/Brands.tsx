import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <section className="py-20 px-8 xl:pt-24 bg-white">
      <div className="container px-4 mx-auto">
        <h3 className="mb-8 text-center text-2xl font-medium leading-6 text-coolGray-600">
          Sektörde bize güvenen başlıca şirketler
        </h3>
        <div className="flex flex-wrap items-center justify-center -mx-4">
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
            <Image
              className="mx-auto"
              width={160}
              height={80}
              src="/images/brands/logo-clouds/jiggle-logo.svg"
              alt=""
            />
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
            {/* <img className="mx-auto" src="flex-ui-assets/brands/logo-clouds/symtric-logo.svg" alt=""> */}
            <Image
              className="mx-auto"
              width={160}
              height={80}
              src="/images/brands/logo-clouds/symtric-logo.svg"
              alt=""
            />
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
            {/* <img className="mx-auto" src="flex-ui-assets/brands/logo-clouds/wishelp-logo.svg" alt=""> */}
            <Image
              className="mx-auto"
              width={160}
              height={80}
              src="/images/brands/logo-clouds/wishelp-logo.svg"
              alt=""
            />
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0">
            {/* <img className="mx-auto" src="flex-ui-assets/brands/logo-clouds/resecurb-logo.svg" alt=""> */}
            <Image
              className="mx-auto"
              width={160}
              height={80}
              src="/images/brands/logo-clouds/resecurb-logo.svg"
              alt=""
            />
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4">
            {/* <img className="mx-auto" src="flex-ui-assets/brands/logo-clouds/welytics-logo.svg" alt=""> */}
            <Image
              className="mx-auto"
              width={160}
              height={80}
              src="/images/brands/logo-clouds/welytics-logo.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
