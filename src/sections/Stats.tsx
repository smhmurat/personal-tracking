import React from "react";

// style="background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"

const Stats = () => {
  return (
    <section className="">
      <div className="block -mb-1 w-full text-coolGray-900">
        <svg
          viewBox="0 0 1440 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="px-8  bg-coolGray-900 py-16">
        <div className="text-center max-w-7xl mx-auto">
          <h3 className="mb-4 text-4xl md:text-5xl text-gray-200 font-bold tracking-tighter">
            Verinin Gücüne İnanıyoruz
          </h3>
          <p className="mb-16 xl:mb-24 mx-auto text-lg md:text-xl text-gray-200 font-medium max-w-4xl">
            Personel ve Araç Takip Uygulaması kullanan müşterilerimizin son bir
            yıl içerisinde aldıkları katkıyı sayılarla gösterebiliriz.
          </p>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h2 className="mb-2 text-4xl md:text-5xl text-gray-300 font-bold tracking-tighter">
                235.000
              </h2>
              <p className="text-lg md:text-xl text-gray-100 font-medium">
                Kullanan Şirket Sayısı
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h2 className="mb-2 text-4xl md:text-5xl text-gray-300 font-bold tracking-tighter">
                ₺10 Milyon
              </h2>
              <p className="text-lg md:text-xl text-gray-100 font-medium">
                Ortalama Yıllık Tasarruf
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
              <h2 className="mb-2 text-4xl md:text-5xl text-gray-300 font-bold tracking-tighter">
                +50.000
              </h2>
              <p className="text-lg md:text-xl text-gray-100 font-medium">
                Yılda Kaydedilen Saat
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 px-4">
              <h2 className="mb-2 text-4xl md:text-5xl text-gray-300 font-bold tracking-tighter">
                3.500
              </h2>
              <p className="text-lg md:text-xl text-gray-100 font-medium">
                Tekil Kullanıcı Sayısı
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block -mt-1 wave wave-bottom w-full text-coolGray-900">
        <svg
          viewBox="0 0 1440 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Stats;
