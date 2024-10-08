"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";
import { basepath, cn } from "@/lib/utils";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import NextImage from "@/components/ui/NextImage";
import MainTitle from "@/components/ui/flash-header";
import { HomePageData } from "@/lib/types/home";

interface Props {
  pageData: HomePageData;
}

const HomePage = (props: Props) => {
	const openMailTo = () => {
		window.open("mailto:kp@thecodeaddict.com");
	};

	return (
		<div className="home-section text-center">
      <BackgroundBeams />
			<div
				className={cn("relative transition-all duration-200 ease-linear")}
				style={{
					transformStyle: "preserve-3d",
				}}
			>
				<div className="rounded-full w-[10rem] h-[10rem] mx-auto shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-3 hover:shadow-2xl rounded-full overflow-hidden">
					<NextImage
						src={props.pageData.image}
            alt="Krishna Prasad - Full stack developer"
						className="w-full h-full object-cover"
					/>
				</div>
        <p
          className="text-sm inline-block px-4 py-2 -mt-[2rem] rounded-3xl font-bold bg-card border border-gray-600 tracking-wide"
        >
          {props.pageData.designation}
        </p>
			</div>
      <MainTitle>
        Hey! <br />
        {props.pageData.intro}
      </MainTitle>
			<div className="text-neutral-400 mx-auto my-2 text-m text-center relative flex flex-col gap-5">
        {props.pageData.description}
			</div>
			<div className="buttons flex justify-center mt-10">
				<HoverBorderGradient onClick={openMailTo}>
					{props.pageData.ctaText}
				</HoverBorderGradient>
			</div>
			<InfiniteMovingCards
				className="mx-auto my-10 text-m text-center relative"
				direction="left"
				speed="slow"
			/>
		</div>
	);
};

export default HomePage;
