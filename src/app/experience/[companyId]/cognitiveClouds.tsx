"use client";
import { motion } from "framer-motion";
import { sectionHeaderClassList, sectionSubHeaderClassList } from "./page";
import MainTitle from "@/components/ui/flash-header";
import { experienceColors } from "@/app/data";

const CognitiveCloudsCaseStudy = () => {
	return (
		<motion.div
			className="container py-12 px-4"
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
				<MainTitle>Cognitive Clouds</MainTitle>
				<p className="text-lg">
					Senior Software Developer | Feb 2018 - Aug 2022
				</p>
			</motion.div>

			<motion.div
				className="mt-12 grid grid-cols-1"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}
			>
				<div className="text-lg">
					<h2 className={sectionHeaderClassList}>Overview</h2>
					<p>
						During my tenure at Cognitive Clouds, I played a pivotal role in
						developing full-stack solutions for a range of clients. My work
						focused on creating efficient, scalable platforms that offered both
						technical and business value. Here are two of the most impactful
						projects I contributed to:
					</p>
				</div>

				<motion.div
					className="bg-card p-6 rounded-lg shadow-2xl border mb-8"
					initial={{ scale: 0.9 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					style={{
						boxShadow: `0 0 20px 4px rgba(${experienceColors.cognitiveClouds}, 0.1)`,
						border: `1px solid rgba(${experienceColors.cognitiveClouds}, 0.4)`,
					}}
				>
					<h2 className={`${sectionHeaderClassList} mt-0`}>
						Key Contributions
					</h2>
					<ul className="list-disc list-outside space-y-3">
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
					<h2 className={sectionHeaderClassList}>
						Part Analytics – BOM Cost Optimization Platform
					</h2>
					<p>
						Part Analytics is an electronics business platform that enables
						clients to save significantly on their Bill of Materials (BOM). The
						platform cross-references a client&apos;s BOM with a comprehensive
						list of manufacturers using the OctoPart tool to provide
						cost-effective alternatives.
					</p>
					<ol className="list-decimal list-outside space-y-3 ml-4">
						<li>
							<h3 className={sectionSubHeaderClassList}>
								BOM IQ: Optimizing Bill of Materials
							</h3>
							<p>
								<strong>Problem:</strong> Challenges in managing BOMs, including
								real-time access to part pricing, availability, and lifecycle
								information.
							</p>
							<p>
								<strong>Solution: </strong>
							</p>
							<ul className="list-disc list-outside space-y-3">
								<li>
									Integrated with OctoPart to provide real-time part data from
									multiple suppliers.
								</li>
								<li>
									Developed a custom Excel upload and header mapping system for
									easy BOM imports.
								</li>
								<li>
									Optimized backend processes by migrating from AWS Lambda to
									EC2 instances, reducing operational costs and improving
									calculation speeds.
								</li>
							</ul>
							<p>
								<strong>Impact:</strong> Reduced manual data processing and
								improved the accuracy of component sourcing in real-time.
							</p>
						</li>
						<li>
							<h3 className={sectionSubHeaderClassList}>
								PART IQ: Strategic Component Sourcing
							</h3>
							<p>
								<strong>Problem:</strong> Difficulty in sourcing cost-effective,
								reliable components from multiple suppliers.
							</p>
							<ul>
								<li>
									Built a system for real-time search and comparison of
									individual components across multiple suppliers.
								</li>
								<li>
									Implemented frontend and backend solutions using Angular and
									Node.js to streamline component sourcing.
								</li>
								<li>
									Enabled data retrieval from multiple supplier databases,
									providing users with up-to-date component availability.
								</li>
							</ul>
							<p>
								<strong>Impact:</strong> Allowed procurement teams to make
								data-driven decisions, resulting in cost savings and improved
								supply chain reliability.
							</p>
						</li>
						<li>
							<h3 className={sectionSubHeaderClassList}>
								CATEGORY IQ: Category-Level Spend Analysis
							</h3>
							<p>
								<strong>Problem:</strong> Lack of visibility into spending
								patterns across different component categories.
							</p>
							<ul>
								<li>
									Developed tools for visualizing category-level spending
									patterns and trends.
								</li>
								<li>
									Enabled drill-down analysis for specific categories to
									identify cost-saving opportunities.
								</li>
								<li>
									Provided insights into overall expenditure on components
									across various categories.
								</li>
							</ul>
							<p>
								<strong>Impact:</strong> Uncovered hidden cost-saving
								opportunities, helping clients improve profitability and
								optimize procurement strategies.
							</p>
						</li>
					</ol>
					<h3 className={sectionSubHeaderClassList}>Impact:</h3>
					<ul className="list-disc list-outside space-y-3">
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
					<h2 className={sectionHeaderClassList}>
						Dragon Slayer Travel – Concierge-Based Luxury Travel App
					</h2>
					<p>
						Dragon Slayer is a luxury travel app designed for high-net-worth
						individuals, offering bespoke travel experiences booked through a
						concierge service. The app allowed users to chat with a dedicated
						concierge agent, who helped them plan extravagant trips.
					</p>
					<h3 className={sectionSubHeaderClassList}>
						Challenges and Solutions:
					</h3>
					<ul className="list-disc list-outside space-y-3">
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
							Real-time notifications enhanced the app&apos;s responsiveness,
							making it easy for users to stay informed about their travel
							plans.
						</li>
					</ul>
				</motion.div>

				<motion.div>
					<h2 className={sectionHeaderClassList}>Conclusion</h2>
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
