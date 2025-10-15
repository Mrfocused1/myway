// import React from 'react';
import { cn } from "@/lib/utils";

export interface TestimonialAuthor {
  name: string;
  role: string;
  company?: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const CardWrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className={cn(
        "flex w-[350px] flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg",
        href && "hover:shadow-xl transition-shadow cursor-pointer",
        className
      )}
    >
      {/* Quote Icon */}
      <div className="flex-shrink-0">
        <svg
          className="w-8 h-8 text-earthy-green/20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote Text */}
      <p className="text-sm text-foreground/90 leading-relaxed italic flex-1">
        "{text}"
      </p>

      {/* Author Info */}
      <div className="border-t border-border pt-4">
        <p className="font-bold text-foreground">
          {author.name}
        </p>
        <p className="text-muted-foreground text-sm">
          {author.role}
          {author.company && <span> • {author.company}</span>}
        </p>
      </div>
    </CardWrapper>
  );
}
