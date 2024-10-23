"use client";
import { Headphones } from "lucide-react";
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
import MaskImageDesktop from "@/img/image_masked_desktop.svg";
import BackgroundImageDesktop from "@/img/mask_desktop.svg";
import ScreenDesktop from "@/img/screen_desktop.svg";
import Ellipse14Desktop from "@/img/ellipse_14_desktop.svg";
import Ellipse15Desktop from "@/img/ellipse_15_desktop.svg";
import Ellipse1Desktop from "@/img/ellipse_1_desktop.svg";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/Card/Card";
import { mock } from "@/lib/mock";

export default function Home() {
  return (
    <div>
      {/* First Section */}
      <section className=" px-4 lg:px-0">
        <header className="relative  flex items-center justify-between pl-4 lg:w-full lg:py-6 lg:pl-20 lg:sticky">
          <div className="lg:flex lg:items-center lg:gap-[38px]">
            <h2 className="font-bold text-[32px]">soller</h2>
            <nav className="hidden lg:flex lg:gap-4 lg:items-center">
              <Link href="#">Products</Link>
              <Link href="#">Solutions</Link>
              <Link href="#">Services</Link>
              <Link href="#">Configure</Link>
            </nav>
          </div>
          <div className="w-full lg:w-[510px]">
            <div className="">
              <Image
                src={BackgroundImage}
                alt="Background Image"
                className="top-0 absolute lg:right-0"
              />
              <Image
                src={MaskImage}
                alt="Mask Image"
                className="absolute top-0 lg:right-0"
              />
            </div>
            <div className="hidden lg:flex">
              <Image
                src={BackgroundImageDesktop}
                alt="Background Image"
                width={600}
                className="top-0 absolute lg:right-0"
              />
              <Image
                src={MaskImageDesktop}
                alt="Mask Image"
                width={600}
                className="absolute top-0 lg:right-0"
              />
            </div>
            <div className="lg:flex lg:items-center lg:gap-4">
              <Headphones
                size={20}
                className="hidden lg:flex lg:sticky lg:stroke-[#0369A1]"
              />
              <small className="hidden lg:flex lg:sticky lg:text-[#0369A1] lg:font-semibold">
                555 818 282
              </small>
              <Button
                variant="outline"
                size="lg"
                className="w-full hidden lg:flex lg:sticky"
              >
                Request a Quote
                <ArrowRightIcon className="animate-bounce" />
              </Button>
            </div>
          </div>
        </header>

        <div className="flex flex-row-reverse mt-64 pt-7 lg:flex-row lg:mt-0 lg:pt-0 lg:px-20">
          <div className="flex flex-col gap-6 items-center mt-12 pb-12 lg:mt-0 lg:items-start">
            <h1 className="font-bold text-[40px] leading-[44px] text-center lg:text-7xl lg:font-extrabold lg:text-start">
              Get the Sun to <br className="hidden lg:block" /> Power Your Home
            </h1>
            <p className="text-lg text-center lg:text-2xl lg:text-start">
              Viverra viverra nibh enim et aliquam, enim. Tempor, sit
              <br className="hidden lg:block" /> mus viverra orci dui consequat
              turpis scelerisque.
            </p>

            <Button variant="outline" size="lg" className="w-full">
              Request a Quote
              <ArrowRightIcon className="animate-bounce" />
            </Button>

            <div className="mt-8 pr-4 pl-4 flex flex-col gap-4 lg:mt-32">
              <p className="text-left text-[#0F172A]">
                “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
                viverra orci dui <br className="hidden lg:block" /> consequat
                turpis scelerisque faucibus.”
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
        <div className="px-4 lg:px-0">
          <h2 className="text-base font-semibold text-[#D97706] lg:text-xl">
            No more waste
          </h2>
          <h1 className="text-[32px] font-bold text-[#0F172A] lg:text-[56px]">
            Pick the Sun
          </h1>

          <p className="text-center mt-6 lg:text-center">
            Et pulvinar nec interdum integer id urna
            <br className="lg:hidden" /> molestie porta nullam. A, donec ornare
            sed turpis pulvinar <br className="hidden lg:flex" /> purus maecenas
            quam a. Erat porttitor pharetra sed in mauris elementum
            sollicitudin.
          </p>
        </div>

        <div className="lg:hidden">
          <Image
            src={Ellipse14}
            alt="Ellipse Amarela"
            className="absolute top-[170px]"
          />
          <Image
            src={Desktop}
            alt="Desktop"
            className="absolute mt-16 z-50 animate-fadeIn"
          />
          <Image
            src={Ellipse15}
            alt="Ellipse lilás"
            className="absolute right-0 top-64"
          />
        </div>

        <div className="hidden lg:flex">
          <Image
            src={Ellipse14Desktop}
            alt="Ellipse Amarela"
            className="absolute top-40"
          />
          <Image
            src={ScreenDesktop}
            alt="Desktop"
            className="absolute mt-20 z-50 flex left-32 animate-fadeIn"
          />

          <Image
            src={Ellipse15Desktop}
            alt="Ellipse lilás"
            className="absolute right-0 top-[315px]"
          />
        </div>
      </section>

      {/* Third Section */}
      <section className="mt-96 text-center lg:mt-[1000px] lg:flex items-start lg:flex-row-reverse lg:text-start lg:gap-[71px]  lg:items-center lg:justify-start lg:pb-20 ">
        <div className="px-4 lg:px-0 lg:flex lg:items-start lg:flex-col  lg:w-[75%]">
          <div>
            <h2 className="text-base font-semibold text-[#D97706] lg:text-xl">
              Services
            </h2>
            <h1 className="text-[32px] font-bold text-[#0F172A] lg:text-[56px]">
              Personalized Services
            </h1>

            <p className="mt-6 text-[#0F172A] lg:text-xl lg:mt-0">
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
              et. Auctor turpis semper id sit ornare maecenas lectus sed.
            </p>
          </div>

          <div className="mt-16 flex gap-12 flex-col lg:mt-12">
            <div className="flex gap-12">
              <div>
                <h1 className="text-xl text-[#0F172A] font-semibold lg:text-2xl">
                  Et Mauris
                </h1>
                <p className="text-[#0F172A] mt-4 lg:text-lg">
                  Posuere quis sed mauris non curabitur pretium elementum eget.
                  <br className="hidden lg:block" />
                  Feugiat sed maecenas eu accumsan tristique.
                </p>
              </div>
              <div>
                <h1 className="text-xl text-[#0F172A] font-semibold lg:text-2xl">
                  Eget sit
                </h1>
                <p className="text-[#0F172A] mt-4 lg:text-lg">
                  Sit bibendum donec dolor fames neque vulputate non sit
                  aliquam.
                  <br className="hidden lg:block" /> Consequat turpis natoque
                  leo, massa.
                </p>
              </div>
            </div>
            <div className="flex gap-12">
              <div>
                <h1 className="text-xl text-[#0F172A] font-semibold lg:text-2xl">
                  Imperdiet pellentesque
                </h1>
                <p className="text-[#0F172A] mt-4 lg:text-lg">
                  Platea arcu dapibus non magna cursus lectus id sollicitudin.
                  Enim <br className="hidden lg:block" /> viverra parturient
                  tristique nulla.
                </p>
              </div>
              <div>
                <h1 className="text-xl text-[#0F172A] font-semibold lg:text-2xl">
                  Non libero
                </h1>
                <p className="text-[#0F172A] mt-4 lg:text-lg">
                  Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit
                  purus ut <br className="hidden lg:block" /> sed eros,
                  consectetur viverra.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative lg:sticky lg:w-[25%]">
          <Image
            src={Rectangle}
            alt="Rectangle"
            className="mt-[23px] relative lg:mt-0"
          />
          <Image
            src={Mobile}
            alt="Mobile"
            width={220}
            height={471}
            className="absolute top-16 right-20 lg:top-14 lg:left-20 lg:right-0"
          />
        </div>
      </section>

      {/* Fourth Section */}
      <section className=" text-center lg:text-start lg:pl-20 lg:flex">
        <div className="px-4 lg:px-0">
          <div>
            <h2 className="text-base font-semibold text-[#D97706] lg:text-xl">
              System features
            </h2>
            <h1 className="text-[32px] font-bold text-[#0F172A] lg:text-[56px]">
              Powerful features
            </h1>

            <p className="mt-6 lg:mt-0">
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
            className="absolute right-20 w-[228px] bottom-0 lg:top-4 lg:left-14 lg:right-0 lg:w-[420px]"
          />
        </div>
      </section>

      {/* Fifth Section */}
      <section className="mt-12 bg-[#581C87] flex flex-col items-center justify-center text-center px-4 pt-12 pb-16">
        <div className="flex flex-col items-center lg:flex-row lg:w-full lg:justify-between lg:px-20">
          <div className="mb-6 lg:text-start">
            <h2 className="text-base font-semibold text-[#FCD34D] lg:text-xl">
              Join other Sun harvesters
            </h2>
            <h1 className="mt-2 font-bold text-white text-[32px] leading-9 lg:text-[56px] lg:leading-[61px]">
              Make something awesome
            </h1>
            <p className="text-center mt-6 text-white text-base lg:text-xl lg:text-start">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique
              <br className="hidden lg:block" /> condimentum congue fusce nunc,
              donec magnis commodo.
            </p>
          </div>
          <Button variant="secondary" size="lg" className="w-full">
            Request a Quote
            <ArrowRightIcon className="animate-bounce" />
          </Button>
        </div>
        <div className="mx-auto max-w-2xl mt-16 w-full lg:flex lg:items-start lg:max-w-full lg:pl-20 lg:mt-20 lg:pb-20">
          <Carousel className="w-full max-w-2xl lg:max-w-full">
            <CarouselContent className="lg:flex items-center gap-6">
              {mock?.map((item, index) => (
                <CarouselItem className="lg:basis-auto" key={index}>
                  <Card key={index} {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Six Section*/}
      <section className="bg-[#581C87] relative flex flex-col items-center justify-center text-center  pt-12 pb-4 lg:bg-[#7E22CE]">
        <div className="px-4 lg:px-0 lg:flex lg:items-center lg:sticky lg:z-30 lg:justify-around lg:w-full">
          <div className="hidden lg:block" />
          <div className="lg:text-start">
            <small className="text-base font-semibold text-[#FCD34D] lg:text-xl">
              Get the Sun to power your home
            </small>
            <h1 className="mt-2 lg:mt-0 font-bold text-white text-[32px] leading-9 lg:text-[56px] lg:leading-[61px]">
              All the power that you need for
              <br className="hidden lg:block" /> your house is now available
            </h1>
          </div>
          <div className="mt-6 flex flex-col items-center gap-4 lg:mt-0">
            <Button variant="secondary" size="lg" className="p-5">
              Request a Quote
              <ArrowRightIcon className="animate-bounce" />
            </Button>

            <p className="text-base text-white lg:text-lg">
              Egestas fringilla aliquam leo
            </p>
          </div>
        </div>
        <div className="mt-16 lg:hidden">
          <Image
            src={Macbook}
            alt="Tela de um macbook"
            className="sticky z-30 animate-fadeIn"
          />
          <Image
            src={EllipseMobile}
            alt="Ellipse"
            className="absolute bottom-0"
          />
        </div>
        <div className="hidden lg:block lg:mt-20">
          <Image
            src={Macbook}
            alt="Tela de um macbook"
            className="sticky z-30 animate-fadeIn"
          />
          <Image
            src={Ellipse1Desktop}
            alt="Ellipse"
            className="absolute top-0 right-0"
          />
        </div>
      </section>

      <footer className="flex items-center justify-center flex-col py-6 px-4 gap-6 lg:flex-row lg:justify-between lg:px-20">
        <div className="flex items-center gap-6 flex-col lg:flex-row">
          <Image src={Logo} alt="Logo" />
          <span>@ 2023 Soller, Inc. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#">Terms</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Support</Link>
        </div>
      </footer>
    </div>
  );
}
