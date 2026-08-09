import { cn } from "@/lib";

type StepBadgeProps = {
  className?: string;
  children: React.ReactNode;
};

export default function StepBadge({ className, children }: StepBadgeProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex flex-col items-center", className)}
    >
      <span className="h-20 w-px bg-light-grey" />
      <span className="flex size-14 items-center justify-center rounded-full border border-light-grey bg-off-white text-base font-black text-grey">
        {children}
      </span>
    </div>
  );
}
