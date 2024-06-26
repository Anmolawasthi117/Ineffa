"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Design Consultancy
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          We offer a comprehensive range of design-related services, and we are also equipped to handle any specific design needs you may bring to us
          </p>
        </div>
        <Image
          src="https://www.ineffa.in/_next/static/media/Image_4.0c023c77.svg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[20%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Software & App Development
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Dive into the treasure trove of perks waiting to party with you! Gather up the rainbow of advantages thats just itching to join the celebration!
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          IT & Technical Solutions
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Comprehensive services tailored to optimize digital infrastructure and enhance operational efficiency.
          </p>
        </div>
        <Image
          src="https://www.ineffa.in/_next/static/media/Image_1.cf8e2137.svg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[5%] -bottom-10 object-contain rounded-2xl "
        />
      </WobbleCard>
    </div>
  );
}
