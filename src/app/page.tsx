"use client";
import { Headphones, ArrowRight } from "lucide-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Avatar from "@/img/avatar.png";
import Desktop from "@/img/desktop.svg";
import Ellipse14 from "@/img/ellipse_14.svg";
import Ellipse15 from "@/img/ellipse_15.svg";
import Rectangle from "@/img/rectangle_16.svg";
import Mobile from "@/img/placeholder_mobile.svg";
import RectangleYellow from "@/img/rectangle_yelllow.svg";
import PlaceholderMobile from "@/img/mobile_placeholder.svg";
import Logo from "@/img/logo.svg";
import EllipseMobile from "@/img/ellipse_mobile.svg";
import Macbook from "@/img/macbook.svg";
import MaskImage from "@/img/image_masked.svg";
import BackgroundImage from "@/img/mask.svg";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div>
      {/* First Section */}
      <section className=" pl-4 pr-4">
        <header className="relative flex items-center justify-between pl-4">
          <div>
            <h2 className="font-bold text-[32px]">soller</h2>
            <div className="hidden">
              <small>Products</small>
              <small>Solutions</small>
              <small>Services</small>
              <small>Configure</small>
            </div>
          </div>
          <div className="w-full">
            <div>
              <Image
                src={BackgroundImage}
                alt="Background Image"
                className="top-0 absolute"
              />
              <Image
                src={MaskImage}
                alt="Mask Image"
                className="absolute top-0"
              />
            </div>
            <Headphones size={32} className="hidden" />
            <small className="hidden">55555 5555</small>
            <button className="hidden">Request a Quote</button>
          </div>
        </header>

        <div className="flex flex-row-reverse mt-64 pt-7">
          <div className="flex flex-col gap-6 items-center mt-12 pb-12">
            <h1 className="font-bold text-[40px] leading-[44px] text-center">
              Get the Sun to Power Your Home
            </h1>
            <p className="text-lg text-center">
              Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque.
            </p>

            <Button variant="outline" size="lg" className="w-full">
              Request a Quote
              <ArrowRightIcon />
            </Button>

            <div className="mt-8 pr-4 pl-4 flex flex-col gap-4">
              <p className="text-left text-[#0F172A]">
                “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
                viverra orci dui consequat turpis scelerisque faucibus.”
              </p>

              <figure className="flex items-center gap-4">
                <Image
                  src={Avatar}
                  alt="Rwanda Melfor"
                  className="rounded-full flex items-center justify-center h-16 w-16 object-center object-cover"
                />
                <figcaption>
                  <h2 className="text-lg text-[#0F172A]">Rwanda Melfor</h2>
                  <h3 className="text-base text-[#475569]">zerowaste.com</h3>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="relative mt-12 text-center">
        <div className="px-4">
          <h2 className="text-base font-semibold text-[#D97706]">
            No more waste
          </h2>
          <h1 className="text-[32px] font-bold text-[#0F172A]">Pick the Sun</h1>

          <p className="text-center mt-6">
            Et pulvinar nec interdum integer id urna
            <br /> molestie porta nullam. A, donec ornare sed turpis pulvinar
            purus maecenas quam a. Erat porttitor pharetra sed in mauris
            elementum sollicitudin.
          </p>
        </div>

        <div>
          <Image
            src={Ellipse14}
            alt="Ellipse Amarela"
            className="absolute top-[170px]"
          />
          <Image src={Desktop} alt="Desktop" className="absolute mt-16 z-50" />
          <Image
            src={Ellipse15}
            alt="Ellipse lilás"
            className="absolute right-0 top-64"
          />
        </div>
      </section>

      {/* Third Section */}
      <section className="mt-96 text-center ">
        <div className="px-4">
          <div>
            <h2 className="text-base font-semibold text-[#D97706]">Services</h2>
            <h1 className="text-[32px] font-bold text-[#0F172A]">
              Personalized Services
            </h1>

            <p className="mt-6 text-[#0F172A]">
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
              et. Auctor turpis semper id sit ornare maecenas lectus sed.
            </p>
          </div>

          <div className="mt-16 flex gap-12 flex-col">
            <div className="flex gap-12">
              <div>
                <h1 className="text-xl text-[#0F172A] font-semibold">
                  Et Mauris
                </h1>
                <p className="text-[#0F172A] mt-4">
                  Posuere quis sed mauris non curabitur pretium elementum eget.
                  Feugiat sed maecenas eu accumsan tristique.
                </p>
              </div>
              <div>
                <h1 className="text-xl text-[#0F172A] font-semibold">
                  Eget sit
                </h1>
                <p className="text-[#0F172A] mt-4">
                  Sit bibendum donec dolor fames neque vulputate non sit
                  aliquam. Consequat turpis natoque leo, massa.
                </p>
              </div>
            </div>
            <div className="flex gap-12">
              <div>
                <h1 className="text-xl text-[#0F172A] font-semibold">
                  Imperdiet pellentesque
                </h1>
                <p className="text-[#0F172A] mt-4">
                  Platea arcu dapibus non magna cursus lectus id sollicitudin.
                  Enim viverra parturient tristique nulla.
                </p>
              </div>
              <div>
                <h1 className="text-xl text-[#0F172A] font-semibold">
                  Non libero
                </h1>
                <p className="text-[#0F172A] mt-4">
                  Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit
                  purus ut sed eros, consectetur viverra.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative">
          <Image
            src={Rectangle}
            alt="Rectangle"
            className="mt-[23px] relative "
          />
          <Image
            src={Mobile}
            alt="Mobile"
            width={220}
            height={471}
            className="absolute top-16 right-20"
          />
        </div>
      </section>

      {/* Fourth Section */}
      <section className=" text-center ">
        <div className="px-4">
          <div>
            <h2 className="text-base font-semibold text-[#D97706]">
              System features
            </h2>
            <h1 className="text-[32px] font-bold text-[#0F172A]">
              Powerful features
            </h1>

            <p className="mt-6">
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
              et. Auctor turpis semper id sit ornare maecenas lectus sed.
            </p>
          </div>

          <div className="mt-16 flex gap-12 flex-col">
            <div className="flex gap-12">
              <div>
                <h1 className="text-xl text-[#0F172A] font-semibold">
                  Erat sit
                </h1>
                <p className="text-[#0F172A] mt-4">
                  Id quis lectus pharetra, ultricies integer montes, amet,
                  gravida consectetur. Nunc convallis fringilla nisl magna
                  sagittis.
                </p>
              </div>
              <div>
                <h1 className="text-xl text-[#0F172A] font-semibold">
                  Ullamcorper arcu
                </h1>
                <p className="text-[#0F172A] mt-4">
                  Ipsum at id hendrerit amet faucibus commodo quam nullam.
                  Lectus auctor habitant duis dictum.
                </p>
              </div>
            </div>
            <div className="flex gap-12">
              <div>
                <h1 className="text-xl text-[#0F172A] font-semibold">
                  Et pellentesque
                </h1>
                <p className="text-[#0F172A] mt-4">
                  Mi vitae, massa eu molestie massa euismod volutpat
                  condimentum. Blandit molestie ullamcorper hendrerit purus
                  lorem vulputate.
                </p>
              </div>
              <div>
                <h1 className="text-xl text-[#0F172A] font-semibold">
                  Amet egestas
                </h1>
                <p className="text-[#0F172A] mt-4">
                  Elementum, libero, lacus, vel ullamcorper at velit id.
                  Malesuada velit et, ullamcorper malesuada amet, felis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative pl-9">
          <Image
            src={RectangleYellow}
            alt="Rectangle"
            width={600}
            className="mt-[23px] relative "
          />
          <Image
            src={PlaceholderMobile}
            alt="Mobile"
            width={220}
            className="absolute right-20 bottom-0"
          />
        </div>
      </section>

      {/* Fifth Section */}
      <section className="mt-12 bg-[#581C87] flex flex-col items-center justify-center text-center px-4  pt-12 pb-16">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <small className="text-base font-semibold text-[#FCD34D]">
              Join other Sun harvesters
            </small>
            <h1 className="mt-2 font-bold text-white text-[32px] leading-9">
              Make something awesome
            </h1>
            <p className="text-center mt-6 text-white text-base">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <Button variant="secondary" size="lg" className="w-full">
            Request a Quote
            <ArrowRightIcon />
          </Button>
        </div>
        <div className="mx-auto max-w-2xl mt-16 w-full">
          <Carousel className="w-full max-w-2xl">
            <CarouselContent>
              <CarouselItem>
                <div className="bg-white w-full rounded-xl">
                  <div className=" flex flex-col gap-4 justify-center px-7 pt-[112px] pb-7 text-left">
                    <p>
                      Purus maecenas quis elit eu, aliquet. Tellus porttitor ut
                      sollicitudin sit non fringilla. Quam nunc volutpat
                      senectus neque eget amet pharetra, euismod. Tempus, nunc,
                      molestie imperdiet curabitur commodo euismod.
                    </p>
                    <figure className="flex items-center gap-4">
                      <Image
                        src={Avatar}
                        alt="Rwanda Melfor"
                        className="rounded-full flex items-center justify-center h-16 w-16 object-center object-cover"
                      />
                      <figcaption>
                        <h2 className="text-lg text-[#0F172A]">
                          Rwanda Melfor
                        </h2>
                        <h3 className="text-base text-[#475569]">
                          zerowaste.com
                        </h3>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="bg-white w-full rounded-xl">
                  <div className=" flex flex-col gap-4 justify-center px-7 pt-[112px] pb-7 text-left">
                    <p>
                      Purus maecenas quis elit eu, aliquet. Tellus porttitor ut
                      sollicitudin sit non fringilla. Quam nunc volutpat
                      senectus neque eget amet pharetra, euismod. Tempus, nunc,
                      molestie imperdiet curabitur commodo euismod.
                    </p>
                    <figure className="flex items-center gap-4">
                      <Image
                        src={Avatar}
                        alt="Rwanda Melfor"
                        className="rounded-full flex items-center justify-center h-16 w-16 object-center object-cover"
                      />
                      <figcaption>
                        <h2 className="text-lg text-[#0F172A]">
                          Rwanda Melfor
                        </h2>
                        <h3 className="text-base text-[#475569]">
                          zerowaste.com
                        </h3>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Six Section*/}
      <section className="bg-[#581C87] relative flex flex-col items-center justify-center text-center  pt-12 pb-4">
        <div className="px-4 ">
          <div>
            <small className="text-base font-semibold text-[#FCD34D]">
              Get the Sun to power your home
            </small>
            <h1 className="mt-2 font-bold text-white text-[32px] leading-9">
              All the power that you need for your house is now available
            </h1>
          </div>
          <div className="mt-6 flex flex-col items-center gap-4">
            <Button variant="secondary" size="lg" className="w-full">
              Request a Quote
              <ArrowRight size={48} />
            </Button>

            <small className="text-base text-white">
              Egestas fringilla aliquam leo
            </small>
          </div>
        </div>
        <div className="mt-16 ">
          <Image
            src={Macbook}
            alt="Tela de um macbook"
            className="sticky z-30"
          />
          <Image
            src={EllipseMobile}
            alt="Ellipse"
            className="absolute bottom-0"
          />
        </div>
      </section>

      <footer className="flex items-center justify-center flex-col py-6 px-4 gap-6">
        <div className="flex items-center gap-6 flex-col">
          <Image src={Logo} alt="Logo" />
          <span>@ 2023 Soller, Inc. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/privacy">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/privacy">Support</Link>
        </div>
      </footer>
    </div>
  );
}
