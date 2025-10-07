import { cn } from "@/lib/utils";
import { useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const animationDuration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
  const animationDirection = direction === "right" ? "reverse" : "normal";

  return (
    <div
      className={cn(
        "relative z-20 w-full overflow-hidden",
        className
      )}
      style={{
        maskImage: "linear-gradient(to right, transparent, white 10%, white 90%, transparent)"
      }}
    >
      <div
        className={cn(
          "flex gap-4 py-4",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `scrollAnimation ${animationDuration} linear infinite ${animationDirection}`,
          width: "fit-content"
        }}
      >
        {/* First set of cards */}
        {items.map((item, idx) => (
          <div
            className="w-[350px] flex-shrink-0 rounded-2xl border border-border bg-white px-8 py-6 md:w-[450px]"
            key={`first-${idx}`}
          >
            <blockquote>
              <span className="text-sm leading-[1.6] text-foreground/90 font-normal italic">
                "{item.quote}"
              </span>
              <div className="mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-foreground font-bold">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-muted-foreground font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {items.map((item, idx) => (
          <div
            className="w-[350px] flex-shrink-0 rounded-2xl border border-border bg-white px-8 py-6 md:w-[450px]"
            key={`second-${idx}`}
          >
            <blockquote>
              <span className="text-sm leading-[1.6] text-foreground/90 font-normal italic">
                "{item.quote}"
              </span>
              <div className="mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-foreground font-bold">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-muted-foreground font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};
