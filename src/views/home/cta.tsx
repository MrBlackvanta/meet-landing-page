import CtaButton from "@/components/cta-button";
import { Footer } from "@/components/layout";
import StepBadge from "@/components/step-badge";

export default function Cta() {
  return (
    <section id="download">
      <StepBadge className="relative z-10">02</StepBadge>

      <div className="v-cta-band -mt-7 pt-16 pb-2 xl:pt-28">
        <div className="v-container">
          <div className="mx-auto flex max-w-126 v-reveal flex-col items-center text-center xl:grid xl:max-w-none xl:grid-cols-12 xl:items-start xl:gap-8 xl:text-left">
            <h2 className="text-heading-sm font-black text-off-white md:text-heading-md xl:col-span-5 xl:text-heading">
              Experience more together
            </h2>

            <p className="mt-6 text-off-white xl:col-span-4 xl:mt-0 xl:text-body">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>

            <CtaButton
              href="#download"
              variant="purple"
              version="v1.3"
              className="mt-6 xl:col-span-3 xl:mt-0 xl:justify-self-end"
            >
              Download
            </CtaButton>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}
