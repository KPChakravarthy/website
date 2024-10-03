'use client'
import { Timeline } from "@/components/ui/timeline";
import React from "react";
import img1 from "@/app/assets/experiences/img1.jpg";
import img2 from "@/app/assets/experiences/img2.jpg";
import CardParallax from "@/components/ui/card-parallax";
import { useScroll } from "framer-motion";

export const experienceColors = {
  ubyon: "53, 174, 83",
  cognitiveClouds: "33, 136, 158",
  imaxBluet: "255, 255, 4",
}

export const projects = [
  {
    title: "Ubyon Inc.",
    designation: "Full Stack Developer",
    duration: "2022 - Present",
    description: (
      <>
        <p>At Ubyon, I spearheaded the development of cloud-native microservices that shaped secure identity and access solutions. My work extended to crafting an app with seamless JIT authentication and IdP services, blending React, Golang, and AWS to power scalability and performance for both cloud and on-prem environments. From microservices to optimized databases, every solution ensured security and reliability across the board.</p>
      </>
    ),
    slug: "ubyon-inc",
    images: [img1, img2],
    color: experienceColors.ubyon,
    link: 'experience/ubyon',
  },
  {
    title: "Cognitive Clouds",
    designation: "Senior Software Developer",
    duration: "2018 - 2022",
    description: (
      <>
        <p>At Cognitive Clouds, I led the development of cutting-edge, data-driven applications that transformed business processes. I built Part Analytics, a smart tool that optimized Bill of Materials by analyzing market data using React, Python, Golang, and AWS. I also crafted Dragonslayer Travel, a luxury app designed for high-net-worth individuals, blending Angular, Firebase, and PostgreSQL with a bespoke chatbot concierge.</p>
      </>
    ),
    slug: "cognitive-clouds",
    images: [img1, img2],
    color: experienceColors.cognitiveClouds,
    link: 'experience/cognitive-clouds',
  },
  {
    title: "IMAX CW & Bluet",
    designation: "Software Developer",
    duration: "2014 - 2018",
    description: (
      <>
        <p>At IMAX, I was immersed in crafting and maintaining their digital presence, building responsive web applications using PHP, WordPress, and WooCommerce. I also fine-tuned their e-commerce operations, ensuring a seamless online experience with technologies like HTML, CSS, and jQuery.</p>
        <p>At Bluet, I focused on delivering clean, user-friendly websites, utilizing the PHP LAMP Stack, HTML, and jQuery. Whether integrating WooCommerce into WordPress or building custom web apps, I ensured every digital asset enhanced the company’s online presence.</p>
      </>
    ),
    slug: "imax-bluet",
    images: [img1, img2],
    color: experienceColors.imaxBluet,
    link: '',
  },
]

const Experience = () => {
  const container = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
	// return <Timeline data={timelineData} />;
  return (
  <div className="max-w-7xl mx-auto mb-[10rem]">
			<h1 className="text-4xl font-bold text-neutral-500 mt-20 mb-2 px-2">Experiences</h1>
			{projects.map((project, i) => {
				const targetScale = 1 - (projects.length - i) * 0.05;
				return (
					<CardParallax
						key={project.slug}
						i={i}
						{...project}
						progress={scrollYProgress}
						range={[i * 0.25, 1]}
						targetScale={targetScale}
					/>
				);
			})}
		</div>)
};

export default Experience;
