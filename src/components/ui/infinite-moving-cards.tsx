"use client";

import { basepath, cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import NextImage from "./NextImage";

const ReactLogo = basepath + "/assets/logos/react.svg";
const NextLogo = basepath + "/assets/logos/next.svg";
const GolangLogo = basepath + "/assets/logos/golang.svg";
const MySQLLogo = basepath + "/assets/logos/mysql.svg";
const PostgreSQLLogo = basepath + "/assets/logos/postgresql.svg";

const logos = [ReactLogo, NextLogo, GolangLogo, MySQLLogo, PostgreSQLLogo];

export const InfiniteMovingCards = ({
  items = logos,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items?: string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
  
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
  
        getDirection();
        getSpeed();
        setStart(true);
      }
    }

    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-xl overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,white_20%,white_50%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-2 py-2"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item}
          >
            <blockquote>
              <NextImage
                key={idx}
                src={item}
                alt={`Logo ${idx}`}
                width={10}
                height={10}
                className="h-10 w-10"
              />
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
