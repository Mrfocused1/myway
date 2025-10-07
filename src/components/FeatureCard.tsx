import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage: string;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, title, description, buttonText, buttonHref, backgroundImage, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full max-w-[350px] aspect-square rounded-2xl overflow-hidden shadow-lg",
          className
        )}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        {...props}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end items-start p-8 text-left">
          <div className="mb-[15px]">
            <h3 className="text-lg font-bold text-white mb-[10px] leading-none uppercase">
              {title}
            </h3>
            <p className="text-sm text-white/90 leading-tight">
              {description}
            </p>
          </div>

          <a
            href={buttonHref}
            className="inline-block w-fit bg-white text-black px-8 py-3 rounded-lg font-semibold text-sm transition-all hover:bg-white/90 hover:scale-105"
          >
            {buttonText}
          </a>
        </div>
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export { FeatureCard, type FeatureCardProps };
