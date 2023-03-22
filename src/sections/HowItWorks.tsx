import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="py-24 px-8 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <div className="relative mx-auto md:ml-0 max-w-max">
              <Image
                width={112}
                height={112}
                className="absolute z-10 -right-8 -top-8"
                src="/images/circle3-yellow.svg"
                alt=""
              />
              <Image
                width={112}
                height={112}
                className="absolute z-10 -left-10 -bottom-8"
                src="/images/dots3-blue.svg"
                alt=""
              />
              <Image
                src="/images/how-it-works/stock.png"
                width={600}
                height={600}
                alt=""
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="mb-12 text-4xl md:text-5xl leading-tight font-bold tracking-tighter">
              Uygulamayı Nasıl Kullanabilirsiniz?
            </h2>
            <div className="flex flex-wrap -mx-4 text-center md:text-left">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-blue-500 font-semibold rounded-full">
                  1
                </div>
                <h3 className="mb-2 text-xl font-bold">Lorem Ipsum</h3>
                <p className="font-medium text-coolGray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  reprehenderit provident sint dolorum perferendis ad et
                  voluptatem nihil omnis tempora?
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-blue-500 font-semibold rounded-full">
                  2
                </div>
                <h3 className="mb-2 text-xl font-bold">Lorem Ipsum</h3>
                <p className="font-medium text-coolGray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  reprehenderit provident sint dolorum perferendis ad et
                  voluptatem nihil omnis tempora?
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-blue-500 font-semibold rounded-full">
                  3
                </div>
                <h3 className="mb-2 text-xl font-bold">Lorem Ipsum</h3>
                <p className="font-medium text-coolGray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  reprehenderit provident sint dolorum perferendis ad et
                  voluptatem nihil omnis tempora?
                </p>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-blue-500 font-semibold rounded-full">
                  4
                </div>
                <h3 className="mb-2 text-xl font-bold">Lorem Ipsum</h3>
                <p className="font-medium text-coolGray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  reprehenderit provident sint dolorum perferendis ad et
                  voluptatem nihil omnis tempora?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
