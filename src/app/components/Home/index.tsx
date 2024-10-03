"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import kp from "@/app/assets/me.jpeg";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { BackgroundBeams } from "@/components/ui/background-beams";

const HomePage = () => {
	const openMailTo = () => {
		window.open("mailto:kp@thecodeaddict.com");
	};

	const containerRef = React.useRef<HTMLDivElement>(null);
	const [isMouseEntered, setIsMouseEntered] = React.useState(false);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) return;
		const { left, top, width, height } =
			containerRef.current.getBoundingClientRect();
		const x = (e.clientX - left - width / 2) / 25;
		const y = (e.clientY - top - height / 2) / 25;
		containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
	};

	const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
		setIsMouseEntered(true);
		if (!containerRef.current) return;
	};

	const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) return;
		setIsMouseEntered(false);
		containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
	};

	return (
		<div className="home-section text-center">
      <BackgroundBeams />
			<div
				ref={containerRef}
				onMouseEnter={handleMouseEnter}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				className={cn("relative transition-all duration-200 ease-linear")}
				style={{
					transformStyle: "preserve-3d",
				}}
			>
				<div className="rounded-full w-[10rem] h-[10rem] mx-auto shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-3 hover:shadow-2xl rounded-full overflow-hidden">
					<Image
						src={kp}
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
			<p
				className="text-2xl md:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-0 md:py-8"
				style={{
					backgroundImage:
						"radial-gradient(61% 200% at 39.7% 21.9%, rgb(255, 255, 255) 0%, rgba(0, 0, 0, 0.35) 110%)",
				}}
			>
				Hey! <br />
				I'm Krishna Prasad
			</p>
			<div className="text-neutral-400 mx-auto my-2 text-m text-center relative flex flex-col gap-5">
        <HeroHighlight>
          As a <Highlight>seasoned full-stack developer</Highlight>, I bring a passion for building efficient, user-centered applications that solve real-world challenges. My experience spans cloud-native microservices, responsive front-end interfaces, and scalable backend systems using technologies like <Highlight>React, Golang, AWS, and SQL</Highlight>. I focus on performance and seamless user experience, delivering results that make an impact across various industries, from secure authentication systems to e-commerce optimization.
        </HeroHighlight>
				<p>
					
				</p>
			</div>
			<div className="buttons flex justify-center mt-10">
				<HoverBorderGradient onClick={openMailTo}>
					Let's talk!
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
