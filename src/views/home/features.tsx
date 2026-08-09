import Image from "next/image";

import manInVideocall from "@/assets/images/man-in-videocall.webp";
import manTexting from "@/assets/images/man-texting.webp";
import menInMeeting from "@/assets/images/men-in-meeting.webp";
import menVideochatting from "@/assets/images/men-videochatting.webp";
import StepBadge from "@/components/step-badge";

const gallery = [
  {
    image: manInVideocall,
    alt: "Smiling person wearing headphones on a video call at a kitchen table",
  },
  {
    image: menVideochatting,
    alt: "Three people sharing a phone screen and smiling together",
  },
  {
    image: menInMeeting,
    alt: "Person on a laptop video call while making notes on a printout",
  },
  { image: manTexting, alt: "Person smiling at a phone on a sofa" },
];

export default function Features() {
  return (
    <section id="what-is-it" className="pt-8 pb-16 md:pt-14 xl:pb-18">
      <StepBadge>01</StepBadge>

      <div className="v-container">
        <ul className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 xl:gap-8">
          {gallery.map(({ image, alt }) => (
            <li
              key={image.src}
              className="aspect-147.5/144 sm:aspect-19/20 xl:aspect-square"
            >
              <Image
                src={image}
                alt={alt}
                sizes="(min-width: 1280px) 256px, (min-width: 640px) 22vw, 47vw"
                className="h-full w-full rounded-lg object-cover"
              />
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col items-center text-center">
          <p className="-me-1 text-overline-sm font-black tracking-overline text-cyan uppercase md:text-overline-md xl:text-overline">
            Built for modern use
          </p>

          <h2 className="mt-4 max-w-md text-heading-sm font-black text-very-dark-navy md:text-heading-md xl:text-heading">
            Smarter meetings, all in one place
          </h2>

          <p className="mt-8 max-w-126 xl:max-w-136 xl:text-body">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </div>
      </div>
    </section>
  );
}
