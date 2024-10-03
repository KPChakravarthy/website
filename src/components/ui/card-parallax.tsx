"use client";
import Link from 'next/link';
import { useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";
import CTAButton from "./button";
import NextImage from "./NextImage";

interface CardProps {
  i: number;
  title: string;
  designation: string;
  duration: string;
  description: React.ReactNode;
  color: string;
  slug: string;
  images: string[];
  progress: MotionValue;
  range: number[];
  targetScale: number;
  link: string;
}

const CardParallax = ({
  i,
  title,
  designation,
  duration,
  description,
  color,
  progress,
  range,
  targetScale,
  slug,
  images,
  link,
}: CardProps) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={`flex items-start ${i>0 ? "mt-[20rem]" : "mt-20"} justify-center sticky top-[10rem]`}>
      <motion.div
        style={{
          border: `1px solid rgba(${color}, 0.2)`,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative top-[-25%] rounded-xl p-6 sm:p-12  bg-card flex flex-col sm:flex-row gap-8 sm:gap-12 overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full bg-opacity-50 z-[-1]"></div>
        <div className="w-full sm:w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-normal text-gray-900 dark:text-white">
              {title}
            </h2>
            <p className="text-sm sm:text-md font-semibold text-gray-900 dark:text-white mb-5">
              {designation}
            </p>
            {description}
          </div>
          {
            link &&
            <Link href={link} className="w-fit">
              <CTAButton text="Read more" />
            </Link>
          }
        </div>
        <div className="w-full sm:w-1/3 flex flex-col items-center">
          <div className="relative">
            <div
              className="absolute inset-0 blur-[150px] bg-opacity-50 rounded-full"
              style={{ backgroundColor: `rgb(${color})` }}
            ></div>
            <NextImage
              src={images[0]}
              alt={slug}
              className="relative z-10 object-cover rounded-lg"
            />
          </div>
          <p className="text-2xl sm:text-4xl font-serif font-semibold mt-6 sm:mt-10 text-center text-gray-200">
            {duration}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CardParallax;
