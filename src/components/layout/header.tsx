import { LogoIcon } from "@/components/icons";

export default function Header() {
  return (
    <header className="flex justify-center pt-12 xl:pt-20">
      <LogoIcon
        role="img"
        aria-label="Meet"
        className="h-7 w-29.5 text-very-dark-navy"
      />
    </header>
  );
}
