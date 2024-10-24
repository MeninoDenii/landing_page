"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface iCardProps {
  description: string;
  avatar: {
    name: string;
    src: StaticImport;
    alt: string;
  };
}

export const Card: React.FC<iCardProps> = ({ description, avatar }) => {
  return (
    <div className="bg-white w-full rounded-xl lg:w-[364px] lg:max-h-[490px]">
      <div className=" flex flex-col gap-4 justify-end px-7 pt-[112px] pb-7 text-left lg:px-8 lg:gap-6 lg:justify-end">
        <p>{description}</p>
        <figure className="flex items-center gap-4">
          <Image
            src={avatar?.src}
            alt={avatar?.name}
            className="rounded-full flex items-center justify-center h-16 w-16 object-center object-cover"
          />
          <figcaption>
            <h2 className="text-lg text-[#0F172A]">{avatar.name}</h2>
            <h3 className="text-base text-[#475569]">{avatar.alt}</h3>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};
