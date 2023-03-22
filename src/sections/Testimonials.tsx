import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-24 md:pb-28 bg-white">
      <h3 className="mb-8 text-center text-2xl font-medium leading-6 text-coolGray-600">
        Kullanıcı Yorumları
      </h3>
      <div className="container px-4 mx-auto">
        <div className="relative max-w-5xl sm:px-6 pb-6 mb-10 mx-auto text-center">
          <Image
            className="absolute top-0 left-0"
            width={100}
            height={100}
            src="/images/elements/testimonials/quote-top-green.svg"
            alt=""
          />
          <Image
            className="absolute bottom-0 right-0"
            width={100}
            height={100}
            src="/images/elements/testimonials/quote-down-green.svg"
            alt=""
          />
          <div className="relative">
            <p className="text-md md:text-lg font-medium">
              Babamlar araçla memlekete gideceklerdi.Aile takip programı ararken
              bu uygulama karşıma çıktı.Şuan Samsun civarında tüm geçtiği
              güzergahları tek tek gördüm. Gayet başarılı ve kullanılabilir bir
              program Türkiyede bu kadar kullanışlı programların yapıldığını
              görmek gurur verici. Elinize sağlık çok faydalı olmuş.. 👏👏👏
            </p>
          </div>
        </div>
        <div className="text-center mb-8">
          <Image
            className="mx-auto mb-6 rounded-full"
            width={100}
            height={100}
            src="/images/testimonials/avatar1.png"
            alt=""
          />
          <h3 className="mb-2 text-xl md:text-2xl font-semibold">
            Ahmet Durmaz
          </h3>
          <span className="text-lg text-coolGray-500 font-medium">
            Serbest Meslek
          </span>
        </div>
        <div className="text-center">
          <button className="inline-block h-3 w-3 mr-3 rounded-full bg-coolGray-100"></button>
          <button className="inline-block h-3 w-3 mr-3 rounded-full bg-green-500"></button>
          <button className="inline-block h-3 w-3 rounded-full bg-coolGray-100"></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
