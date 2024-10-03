"use client";
import NextImage from "@/components/ui/NextImage";
import CTAButton from "@/components/ui/button";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

interface Article {
	id: number;
	title: string;
	description: string;
	image_url: string;
	article_url: string;
}

const BlogCard = ({ article, isLast }: { article: Article; isLast: boolean }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<div key={article.id} ref={ref}>
			<div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
				<div
					className="w-full sm:w-1/4"
					style={{
						transform: isInView ? "none" : "translateX(-100px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}
				>
					<NextImage
						src={article.image_url}
						alt="Blog Banner"
            width={0}
            height={150}
						className="w-full h-[150px] object-cover rounded-lg"
					/>
				</div>

				<div
					className="flex flex-col w-full sm:w-3/4"
					style={{
						transform: isInView ? "none" : "translateX(100px)",
						opacity: isInView ? 1 : 0,
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
					}}
				>
					<div className="flex flex-col gap-4">
						<h2 className="text-2xl font-bold">{article.title}</h2>
						<p className="text-sm">{article.description}</p>
					</div>

					<div className="flex justify-start mt-8">
						<a
							href={article.article_url}
							target="_blank"
						>
							<CTAButton text="Read on Medium" />
						</a>
					</div>
				</div>
			</div>
      {
        !isLast &&
			  <hr className="my-10 border-b border-gray-800" />
      }
		</div>
	);
};

const Blog = (props: { articles: Article[] }) => {
	return (
		<div className="mx-auto">
      <h1 className="text-4xl font-bold text-neutral-500 mb-6 px-2">Articles</h1>
			<div className="flex flex-col">
				{props.articles.map((article, index) => (
					<BlogCard key={article.id} article={article} isLast={index === props.articles.length - 1} />
				))}
			</div>
		</div>
	);
};

export default Blog;
