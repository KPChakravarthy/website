"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";
import { basepath, cn } from "@/lib/utils";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import NextImage from "@/components/ui/NextImage";
import MainTitle from "@/components/ui/flash-header";

const HomePage = () => {
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
						src={basepath + "/assets/me.jpeg"}
            alt="Krishna Prasad - Full stack developer"
						className="w-full h-full object-cover"
					/>
				</div>
        <p
          className="text-sm inline-block px-4 py-2 -mt-[2rem] rounded-3xl font-bold bg-card border border-gray-600 tracking-wide"
        >
          Full Stack Developer
        </p>
			</div>
      <MainTitle>
        Hey! <br />
        I&apos;m Krishna Prasad
      </MainTitle>
			<div className="text-neutral-400 mx-auto my-2 text-m text-center relative flex flex-col gap-5">
        <HeroHighlight>
          As a <Highlight>seasoned full-stack developer</Highlight>, I bring a passion for building efficient, user-centered applications that solve real-world challenges. My experience spans cloud-native microservices, responsive front-end interfaces, and scalable backend systems using technologies like <Highlight>React, Golang, AWS, and SQL</Highlight>. I focus on performance and seamless user experience, delivering results that make an impact across various industries, from secure authentication systems to e-commerce optimization.
        </HeroHighlight>
				<p>
					
				</p>
			</div>
			<div className="buttons flex justify-center mt-10">
				<HoverBorderGradient onClick={openMailTo}>
					Let&apos;s talk!
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
