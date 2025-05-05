"use client";
import React from "react";
import Image from "next/image";

const CreatorText: React.FC = () => (
  <div className="hidden h-full flex-1 items-center justify-center bg-neutral-950 px-5 sm:flex">
    <div className="flex h-full w-full flex-col gap-7 rounded-2xl px-12 py-3 text-white">
      <div className="h-18 w-18 mt-auto overflow-hidden rounded-full">
        <Image
          src="/Me.jpg"
          className="h-full w-full object-fill"
          alt="creator"
          width={80}
          height={80}
        />
      </div>
      <p className="z-10 clear-left font-light">
        &quot;I created Chainscope to help you invest smarter. My mission? To
        create tools for you that last, scale, and deliver real value for those
        who live the crypto world every day.&quot;
      </p>
      <div className="mb-15 mt-auto">
        <h3 className="text-[18px] font-bold">Sebastian Vargas</h3>
        <p>Founder, Chainscope</p>
      </div>
    </div>
  </div>
);

export default CreatorText;
