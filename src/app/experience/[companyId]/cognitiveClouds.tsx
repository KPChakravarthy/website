"use client";
import { experienceColors } from "@/app/components/Experience";
import { motion } from "framer-motion";

const CognitiveCloudsCaseStudy = () => {
	return (
		<motion.div
			className="container py-12 lg:px-0"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<motion.div
				className="text-center"
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.7 }}
			>
				<h1 className="text-4xl font-bold mb-4">Cognitive Clouds</h1>
				<p className="text-lg text-gray-600 dark:text-gray-300">
					Senior Software Developer | Feb 2018 - Aug 2022
				</p>
			</motion.div>

			<motion.div
				className="mt-12 grid grid-cols-1"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}
			>
				<div className="text-lg text-gray-800 dark:text-gray-200">
					<h2 className="text-2xl font-semibold">Overview</h2>
					<p>
						During my tenure at Cognitive Clouds, I played a pivotal role in
						developing full-stack solutions for a range of clients. My work
						focused on creating efficient, scalable platforms that offered both
						technical and business value. Here are two of the most impactful
						projects I contributed to:
					</p>
				</div>

				<motion.div
					className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-2xl border mb-8"
					initial={{ scale: 0.9 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					style={{
            boxShadow: `0 0 20px 4px rgba(${experienceColors.cognitiveClouds}, 0.1)`,
						border: `1px solid rgba(${experienceColors.cognitiveClouds}, 0.4)`,
					}}
				>
					<h2 className="text-xl font-semibold">Key Contributions</h2>
					<ul className="list-disc list-outside text-gray-700 dark:text-gray-300 space-y-3">
						<li>
							Led the development of a custom Excel upload and header mapping
							system, streamlining the input of complex Bill of Materials (BOM)
							data into the platform.
						</li>
						<li>
							Played a crucial role in both frontend (Angular) and backend
							(Node.js) development, ensuring the platform delivered real-time,
							accurate cost-saving insights for electronics manufacturers.
						</li>
						<li>
							Designed and implemented a concierge chat system using{" "}
							<strong>Angular and Firebase Realtime Database</strong>, providing
							seamless real-time communication for high-net-worth users booking
							extravagant trips.
						</li>
						<li>
							Contributed to building a smooth and responsive Angular and
							ReactJS frontend.
						</li>
					</ul>
				</motion.div>

				<motion.div>
					<h2 className="text-xl font-semibold">
						Part Analytics – BOM Cost Optimization Platform
					</h2>
					<p>
						Part Analytics is an electronics business platform that enables
						clients to save significantly on their Bill of Materials (BOM). The
						platform cross-references a client&apos;s BOM with a comprehensive list
						of manufacturers using the OctoPart tool to provide cost-effective
						alternatives.
					</p>
					<h3>Challenges and Solutions:</h3>
					<ul className="list-disc list-outside text-gray-700 dark:text-gray-300 space-y-3">
						<li>
							<strong>Custom Excel Upload and Header Mapping:</strong> One of
							the key features was building an Excel upload system that allowed
							users to map custom headers from their BOM files to the database
							fields. This was critical because the platform needed to ingest
							data from various client formats seamlessly. I led the development
							of this feature, ensuring that the upload process was smooth and
							user-friendly.
						</li>
						<li>
							<strong>BOM Calculation Optimization:</strong> The platform needed
							to process large BOMs in real time, which initially posed
							challenges due to the vast number of components that needed
							cross-referencing. We first used AWS Lambda to handle the
							computations, but this became cost-prohibitive for clients. To
							solve this, I designed and implemented a system where a basic EC2
							instance would perform the necessary calculations, call our API
							for further processing, and automatically shut down after the
							task. This drastically reduced operational costs while maintaining
							performance.
						</li>
					</ul>
					<h3>Impact:</h3>
					<ul className="list-disc list-outside text-gray-700 dark:text-gray-300 space-y-3">
						<li>
							Helped clients save significantly on component costs by automating
							price comparisons.
						</li>
						<li>
							Improved platform efficiency by optimizing BOM calculations,
							leading to faster results and reduced computational costs.
						</li>
					</ul>
				</motion.div>

				<motion.div>
					<h2 className="text-xl font-semibold">
						Dragon Slayer Travel – Concierge-Based Luxury Travel App
					</h2>
					<p>
						Dragon Slayer is a luxury travel app designed for high-net-worth
						individuals, offering bespoke travel experiences booked through a
						concierge service. The app allowed users to chat with a dedicated
						concierge agent, who helped them plan extravagant trips.
					</p>
					<h3>Challenges and Solutions:</h3>
					<ul className="list-disc list-outside text-gray-700 dark:text-gray-300 space-y-3">
						<li>
							<strong>Concierge Chat System:</strong> One of the core features
							of Dragon Slayer was a real-time concierge chat system. I built
							this system using Angular and Firebase Realtime Database to ensure
							instant communication between clients and concierge agents.
							Additionally, I implemented real-time notifications using Firebase
							database hooks to ensure users received updates instantly when
							interacting with the app.
						</li>
						<li>
							<strong>Seamless Frontend Development:</strong> I played a key
							role in developing the frontend of the platform, ensuring that the
							user experience was intuitive and smooth, despite the app&apos;s
							complexity.
						</li>
					</ul>
					<h3>Impact:</h3>
					<ul className="list-disc list-outside text-gray-700 dark:text-gray-300 space-y-3">
						<li>
							The concierge chat system provided a personalized, seamless
							experience for high-net-worth individuals, resulting in higher
							user engagement.
						</li>
						<li>
							Real-time notifications enhanced the app&apos;s responsiveness, making
							it easy for users to stay informed about their travel plans.
						</li>
					</ul>
				</motion.div>

				<motion.div>
					<h2 className="text-xl font-semibold">Conclusion</h2>
					<p>
						Both of these projects allowed me to leverage my full-stack
						expertise, particularly in optimizing backend processes and ensuring
						smooth, responsive user experiences. My work at Cognitive Clouds not
						only delivered technical innovation but also helped clients achieve
						tangible business benefits through cost savings and improved user
						satisfaction.
					</p>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default CognitiveCloudsCaseStudy;
