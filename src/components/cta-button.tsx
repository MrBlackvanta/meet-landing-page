import { cn } from "@/lib";

type CtaButtonProps = {
  href: string;
  variant: "cyan" | "purple";
  version?: string;
  className?: string;
  children: React.ReactNode;
};

export default function CtaButton({
  href,
  variant,
  version,
  className,
  children,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "v-btn",
        {
          "v-btn-cyan": variant === "cyan",
          "v-btn-purple": variant === "purple",
        },
        className,
      )}
    >
      {children}
      {version && <span className="text-(--btn-version)">{version}</span>}
    </a>
  );
}
