import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";
import { Carousel } from "@mantine/carousel";

const Graphics = () => {
  const { graphics } = config;
  const [
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
    item12,
    item13,
    item14,
    item15,
    item16,
    item17,
  ] = graphics.items;

  return (
    <section className={`bg-background py-8`} id="graphics">
      <div className={`flex flex-col w-screen`}>
        <h1
          className={`w-full my-2 text-4xl font-bold leading-tight text-center text-primary`}
        >
          {graphics.section1.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />
        <Carousel controlSize={40} controlsOffset="xl" >
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[760px]"
                  src={item1?.img}
                  alt={item1?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item1?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[760px]"
                  src={item2?.img}
                  alt={item2?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item2?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[460px]"
                  src={item3?.img}
                  alt={item3?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item3?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>

        <h1
          className={`w-full mt-20 my-2 text-4xl font-bold leading-tight text-center text-primary`}
        >
          {graphics.section2.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>

        <Divider />

        <div className="flex flex-col gap-8">
          <div className={`flex w-full items-center justify-center`}>
            <img className="w-[760px]" src={item4?.img} alt={item4?.title} />
          </div>
          <div className={`w-full h-full px-12 text-center`}>
            <p className={`text-gray-600`}>{item4?.description}</p>
          </div>
        </div>

        <h1
          className={`w-full mt-20 my-2 text-4xl font-bold leading-tight text-center text-primary`}
        >
          {graphics.section3.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />

        <Carousel controlSize={40} controlsOffset="xl">
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[460px]"
                  src={item5?.img}
                  alt={item5?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item5?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[760px]"
                  src={item6?.img}
                  alt={item6?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item6?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>

        <h1
          className={`w-full mt-20 my-2 text-4xl font-bold leading-tight text-center text-primary`}
        >
          {graphics.section4.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />

        <Carousel controlSize={40} controlsOffset="xl">
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[460px]"
                  src={item7?.img}
                  alt={item7?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item7?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[760px]"
                  src={item8?.img}
                  alt={item8?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item8?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[760px]"
                  src={item9?.img}
                  alt={item9?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item9?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[760px]"
                  src={item10?.img}
                  alt={item10?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item10?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>

        <h1
          className={`w-full mt-20 my-2 text-4xl font-bold leading-tight text-center text-primary`}
        >
          {graphics.section5.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />

        <Carousel controlSize={40} controlsOffset="xl">
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[460px]"
                  src={item11?.img}
                  alt={item11?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item11?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[460px]"
                  src={item12?.img}
                  alt={item12?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item12?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[460px]"
                  src={item13?.img}
                  alt={item13?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item13?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>

        <h1
          className={`w-full mt-20 my-2 text-4xl font-bold leading-tight text-center text-primary`}
        >
          {graphics.section6.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />

        <Carousel controlSize={40} controlsOffset="xl">
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[460px]"
                  src={item14?.img}
                  alt={item14?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item14?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[460px]"
                  src={item15?.img}
                  alt={item15?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item15?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="flex flex-col gap-8">
              <div className={`flex w-full items-center justify-center`}>
                <img
                  className="w-[460px]"
                  src={item16?.img}
                  alt={item16?.title}
                />
              </div>
              <div className={`w-full h-full px-12 text-center`}>
                <p className={`text-gray-600`}>{item16?.description}</p>
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>

        <h1
          className={`w-full mt-20 my-2 text-4xl font-bold leading-tight text-center text-primary`}
        >
          {graphics.section7.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />

        <div className="flex flex-col gap-8">
          <div className={`flex w-full items-center justify-center`}>
            <img className="w-[960px]" src={item17?.img} alt={item17?.title} />
          </div>
          <div className={`w-full h-full px-12 text-center`}>
            <p className={`text-gray-600`}>{item17?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graphics;
