"use client";
import { Headphones, ArrowRight } from "lucide-react";
import Image from "next/image";
// import MaskBackground from "@/img/mask_header.png";
import Avatar from "@/img/avatar.png";
import Desktop from "@/img/desktop.svg";
import Ellipse14 from "@/img/ellipse_14.svg";
import Ellipse15 from "@/img/ellipse_15.svg";
import Rectangle from "@/img/rectangle_16.svg";
import Mobile from "@/img/placeholder_mobile.svg";
import RectangleYellow from "@/img/rectangle_yelllow.svg";
import PlaceholderMobile from "@/img/mobile_placeholder.svg";
import Ellipse from "@/img/ellipse.svg";
import Logo from "@/img/logo.svg";
import Macbook from "@/img/macbook.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* First Section */}
      <section className="relative pl-4 pr-4">
        <header className="flex items-center justify-between pl-4">
          <div>
            <h2 className="font-bold text-[32px]">soller</h2>
            <div className="hidden">
              <small>Products</small>
              <small>Solutions</small>
              <small>Services</small>
              <small>Configure</small>
            </div>
          </div>
          <div className="hidden">
            <Headphones size={32} />
            <small>55555 5555</small>
            <button>Request a Quote</button>
          </div>
        </header>

        <div className="flex flex-row-reverse">
          <div className="flex flex-col gap-6 items-center mt-16">
            <h1 className="font-bold text-[40px] leading-[44px] text-center">
              Get the Sun to Power Your Home
            </h1>
            <p className="text-lg text-center">
              Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque.
            </p>
            <button className="flex items-center justify-center gap-6 border-2 border-[#581C87] w-full  h-16 rounded-full font-bold text-[#581C87] text-2xl hover:bg-[#581C87] hover:text-[#FCD34D]">
              Request a Quote
              <ArrowRight color="#581C87" size={24} />
            </button>

            <div className="mt-16 pr-4 pl-4 flex flex-col gap-4">
              <p className="text-left">
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

          {/* <div>
            <Image
              src={MaskBackground}
              alt="Mask Background"
              className="shape-outside-ellipse absolute"
            />
          </div> */}
        </div>
      </section>

      {/* Second Section */}
      <section>
        <div>
          <h2>No more waste</h2>
          <h1>Pick the Sun</h1>

          <p>
            Et pulvinar nec interdum integer id urna molestie porta nullam. A,
            donec ornare sed turpis pulvinar purus maecenas quam a. Erat
            porttitor pharetra sed in mauris elementum sollicitudin.
          </p>
        </div>

        <div>
          <Image src={Ellipse14} alt="Ellipse Amarela" />
          <Image src={Desktop} alt="Desktop" />
          <Image src={Ellipse15} alt="Ellipse lilás" />
        </div>
      </section>

      {/* Third Section */}
      <section>
        <div>
          <div>
            <h2>Services</h2>
            <h1>Personalized Services</h1>

            <p>
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
              et. Auctor turpis semper id sit ornare maecenas lectus sed.
            </p>
          </div>

          <div>
            <div>
              <h1>Et Mauris</h1>
              <p>
                Posuere quis sed mauris non curabitur pretium elementum eget.
                Feugiat sed maecenas eu accumsan tristique.
              </p>
            </div>
            <div>
              <h1>Eget sit</h1>
              <p>
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.
              </p>
            </div>
            <div>
              <h1>Imperdiet pellentesque</h1>
              <p>
                Platea arcu dapibus non magna cursus lectus id sollicitudin.
                Enim viverra parturient tristique nulla.
              </p>
            </div>
            <div>
              <h1>Non libero</h1>
              <p>
                Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit
                purus ut sed eros, consectetur viverra.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image src={Rectangle} alt="Rectangle" />
          <Image src={Mobile} alt="Mobile" />
        </div>
      </section>

      {/* Fourth Section */}
      <section>
        <div>
          <div>
            <h2>Services</h2>
            <h1>Powerful features</h1>
            <p>
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
              et. Auctor turpis semper id sit ornare maecenas lectus sed.
            </p>

            <div>
              <div>
                <h1>Erat sit</h1>
                <p>
                  Id quis lectus pharetra, ultricies integer montes, amet,
                  gravida consectetur. Nunc convallis fringilla nisl magna
                  sagittis.
                </p>
              </div>
              <div>
                <h1>Ullamcorper arcu</h1>
                <p>
                  Ipsum at id hendrerit amet faucibus commodo quam nullam.
                  Lectus auctor habitant duis dictum.
                </p>
              </div>
              <div>
                <h1>Et pellentesque</h1>
                <p>
                  Mi vitae, massa eu molestie massa euismod volutpat
                  condimentum. Blandit molestie ullamcorper hendrerit purus
                  lorem vulputate.
                </p>
              </div>
              <div>
                <h1>Amet egestas</h1>
                <p>
                  Elementum, libero, lacus, vel ullamcorper at velit id.
                  Malesuada velit et, ullamcorper malesuada amet, felis.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image src={RectangleYellow} alt="Rectangle Yellow" />
            <Image src={PlaceholderMobile} alt="Placeholder Mobile" />
          </div>
        </div>
      </section>

      {/* Fifth Section */}
      <section>
        <div>
          <div>
            <small>Join other Sun harvesters</small>
            <h1>Make something awesome</h1>
            <p>
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
              Eleifend mi tristique condimentum congue fusce nunc, donec magnis
              commodo.
            </p>
          </div>
          <button>Request a Quote</button>
        </div>
        <div>Carrousel</div>
      </section>

      {/* Six Section*/}
      <section>
        <div>
          <div>
            <small>Get the Sun to power your home</small>
            <h1>All the power that you need for your house is now available</h1>
          </div>
          <div>
            <button type="submit">Request a Quote</button>
            <small>Egestas fringilla aliquam leo</small>
          </div>
        </div>
        <Image src={Macbook} alt="Tela de um macbook" />
        <Image src={Ellipse} alt="Ellipse" />
      </section>

      <footer>
        <div>
          <Image src={Logo} alt="Logo" />
          <span>@ 2023 Soller, Inc. All rights reserved.</span>
        </div>
        <div>
          <Link href="/privacy">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/privacy">Support</Link>
        </div>
      </footer>
    </div>
  );
}
