import React from "react";
import Image from "next/image";
import HeroImage from "../assets/hero-image.jpg";
import CircleYellow from "../assets/circle3-yellow.svg";
import Dots from "../assets/dots3-blue.svg";

const Hero = () => {
  return (
    <section className="flex justify-center mx-auto max-w-7xl py-32 md:py-40 px-8 sm:px-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-y-24">
        <div className="flex-1 text-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              En güncel ve yeni versiyonumuz yayında.{" "}
              <a href="#" className="font-semibold text-blue-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Daha Fazla... <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-coolGray-900 sm:text-6xl">
            Personel ve Araç <br /> Takip Programı
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            reiciendis blanditiis, eius perferendis id illum quis quo,
            reprehenderit totam odit dolore voluptatem ut fuga culpa adipisci
            doloremque ipsa earum ex.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-6 px-8 md:px-0">
            <div>
              <a
                href="#"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Hadi Başlayalım
              </a>
            </div>

            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Detayları Öğren <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="relative mx-auto md:mr-0 max-w-max">
            <Image
              className="absolute z-10 -left-14 -top-12"
              src={CircleYellow}
              alt=""
              width={112}
              height={112}
            />
            <Image
              className="absolute z-10 -right-7 -bottom-8"
              src={Dots}
              alt=""
              width={112}
              height={112}
            />
            <Image
              src={HeroImage}
              width={500}
              height={500}
              alt="Hero Image"
              className="relative rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
