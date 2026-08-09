import Image from "next/image";

import heroLeft from "@/assets/images/hero-left.webp";
import heroRight from "@/assets/images/hero-right.webp";
import CtaButton from "@/components/cta-button";

export default function Hero() {
  return (
    <section className="overflow-x-clip pt-16 pb-8 md:pb-16">
      <div className="relative">
        <div className="-mx-7 flex justify-between md:-mx-6.5 xl:h-90">
          <Image
            src={heroLeft}
            alt=""
            priority
            fetchPriority="high"
            sizes="(min-width: 768px) 394px, 48vw"
            className="h-auto w-[48.05%] self-start md:w-98.5"
          />
          <Image
            src={heroRight}
            alt=""
            priority
            fetchPriority="high"
            sizes="(min-width: 768px) 394px, 48vw"
            className="h-auto w-[48.05%] self-start md:w-98.5 xl:self-end"
          />
        </div>

        <div className="v-container mt-12 md:mt-18 xl:absolute xl:inset-0 xl:mt-0 xl:flex xl:flex-col xl:justify-center">
          <div className="mx-auto flex max-w-md flex-col items-center text-center">
            <h1 className="text-display-sm font-black text-very-dark-navy md:text-display-md xl:text-display">
              Group Chat <br />
              for Everyone
            </h1>

            <p className="mt-6 xl:mt-8 xl:text-body">
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </p>

            <div className="mt-6 flex flex-col items-center gap-4 md:flex-row xl:mt-8">
              <CtaButton href="#download" variant="cyan" version="v1.3">
                Download
              </CtaButton>
              <CtaButton href="#what-is-it" variant="purple">
                What is it?
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
