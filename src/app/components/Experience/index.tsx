'use client'
import React from "react";
import CardParallax from "@/components/ui/card-parallax";
import { useScroll } from "framer-motion";
import { Project } from "@/lib/types/projects";

interface Props {
  pageData: Project[];
}

const Experience = (props: Props) => {
  const container = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
  <div className="max-w-7xl mx-auto mb-[10rem]">
			<h1 className="text-4xl font-bold text-neutral-500 mt-20 mb-2 px-2">Experiences</h1>
			{props.pageData.map((project, i) => {
				const targetScale = 1 - (props.pageData.length - i) * 0.05;
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
