"use client";
import { experienceColors } from "@/app/components/Experience";
import { motion } from "framer-motion";

const UbyonCaseStudy = () => {
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
				<h1 className="text-4xl font-bold mb-4">Ubyon Inc.</h1>
				<p className="text-lg text-gray-600 dark:text-gray-300">
					Full Stack Developer | Aug 2022 - Present
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
						At Ubyon Inc., I started as a frontend developer working with
						React.js to enhance the administration portal. I later transitioned
						into backend development using Golang, where I contributed to the
						configuration management server, which acts as a mediator between
						the frontend and backend services.
					</p>
					<p>
						This role involved creating cloud-native solutions for customers,
						building secure storage for sensitive data, and optimizing
						microservices architecture for high performance.
					</p>
				</div>

				<motion.div
					className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-2xl border mb-8"
					initial={{ scale: 0.9 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            boxShadow: `0 0 20px 4px rgba(${experienceColors.ubyon}, 0.1)`,
            border: `1px solid rgba(${experienceColors.ubyon}, 0.4)`
          }}
				>
					<h2 className="text-xl font-semibold">Key Contributions</h2>
					<ul className="list-disc list-outside text-gray-700 dark:text-gray-300 space-y-3">
						<li>
							Developed cloud-native microservices for configuration management
							and contributed to secure identity and access solutions.
						</li>
						<li>
							Contributed to the development of a secure application that
							provided Identity Provider (IdP) services and Just-In-Time (JIT)
							authentication for cloud and on-premises resources, utilizing
							React JS, React Native, and Golang.
						</li>
						<li>
							Played a key role in building and managing microservices
							architecture and optimizing MySQL databases for performance and
							scalability.
						</li>
						<li>
							Worked extensively with AWS cloud services to support robust
							infrastructure, ensuring seamless application deployment and
							operation.
						</li>
					</ul>
				</motion.div>

				<motion.div>
					<h2 className="text-xl font-semibold">Frontend development</h2>
					<p>
						As part of the administration portal team, I worked primarily with
						React JS, leading key aspects of the portal's functionality to allow
						customers to manage their resources seamlessly. My responsibilities
						included:
					</p>
					<ul className="list-disc list-outside text-gray-700 dark:text-gray-300 space-y-3">
						<li>
							<strong>Application Configuration:</strong> Spearheaded the
							creation of intuitive and user-friendly interfaces to configure
							cloud and on-prem resources.
						</li>
						<li>
							<strong>Asset Management:</strong> Developed modules for
							discovering and managing customer assets, providing them with
							comprehensive control over their resources.
						</li>
						<li>
							<strong>Service Template Creation:</strong> Enabled users to
							create reusable service templates, streamlining the setup of cloud
							services.
						</li>
						<li>
							<strong>Service Provider Integration:</strong> Integrated with
							major cloud providers like AWS, Azure, GCP, and data platforms
							such as Snowflake and Databricks, allowing seamless interaction
							between the frontend portal and the customer's chosen cloud
							services.
						</li>
					</ul>
					<p>
						These initiatives not only enhanced the usability of the portal but
						also provided customers with greater flexibility and control in
						configuring their environments.
					</p>
				</motion.div>

				<motion.div>
					<h2 className="text-xl font-semibold">Backend development</h2>
					<p>
						Transitioning into backend development, I was responsible for the
						configuration management server, a critical component acting as a
						mediator between the frontend portal and various backend services. I
						used Golang extensively for secure data handling and service
						orchestration. Key contributions include:
					</p>
					<ul className="list-disc list-outside text-gray-700 dark:text-gray-300 space-y-3">
						<li>
							<strong>Secure Storage of Client Credentials:</strong> I developed
							a system to securely store customers' sensitive information, such
							as AWS client ID and secret, using Golang's encryption package.
							This ensured that all sensitive data was handled with the highest
							security standards.
						</li>
						<li>
							<strong>Configuration Services:</strong> I built the backend
							services responsible for managing service provider configurations
							and service templates, allowing customers to easily configure
							their cloud infrastructure.
						</li>
						<li>
							<strong>Kafka Integration:</strong> The configuration management
							server was designed to send Kafka messages that other backend
							services could listen to, allowing for a scalable, event-driven
							architecture. This ensured that changes in configuration were
							propagated in real-time to the services impacted by those changes.
						</li>
					</ul>
				</motion.div>

				<motion.div className="mt-8">
					<h2 className="text-xl font-semibold">CARMS module development</h2>
					<p>
						One of the most significant contributions I made was the development
						of a new module, CARMS (Cloud Asset Resource Management System).
						This module took asset data and generated complete applications from
						it using predefined service templates. The CARMS module was a
						game-changer for the platform, enabling rapid app creation with
						minimal user intervention. The key aspects of the module included:
					</p>
					<ul className="list-disc list-outside text-gray-700 dark:text-gray-300 space-y-3">
						<li>
							<strong>Automated App Creation:</strong> CARMS streamlined the
							process of transforming asset data into fully functional
							applications, significantly reducing manual effort.
						</li>
						<li>
							<strong>Template-Driven Architecture:</strong> The module
							leveraged service templates that I helped build, ensuring
							consistency and reliability across different deployments.
						</li>
						<li>
							<strong>Integration with Existing Services:</strong> CARMS
							seamlessly integrated with existing services like AWS, Azure, and
							GCP, providing a unified experience for customers.
						</li>
					</ul>
					<p>
						This project required in-depth knowledge of the platform’s
						architecture and demanded close collaboration across frontend and
						backend teams. CARMS not only enhanced the platform’s capabilities
						but also contributed to reducing time-to-market for new
						applications.
					</p>
				</motion.div>

				<motion.div>
					<h2 className="text-xl font-semibold">Results and Impact</h2>
					<ul className="list-disc list-outside text-gray-700 dark:text-gray-300 space-y-3">
						<li>
							<strong>Improved User Experience:</strong> The user-friendly
							interfaces and seamless service provider integrations I developed
							in the frontend significantly enhanced the portal’s usability.
						</li>
						<li>
							<strong>Secure Backend Operations:</strong> By implementing robust
							encryption and real-time configuration management, I ensured that
							sensitive data was stored and handled securely, complying with
							industry standards.
						</li>
						<li>
							<strong>Increased Efficiency:</strong> The development of the
							CARMS module introduced a new level of automation to the platform,
							reducing the time required for app creation by over 50%.
						</li>
					</ul>
					<p>
						This project required in-depth knowledge of the platform’s
						architecture and demanded close collaboration across frontend and
						backend teams. CARMS not only enhanced the platform’s capabilities
						but also contributed to reducing time-to-market for new
						applications.
					</p>
				</motion.div>

				<motion.div>
					<h2 className="text-xl font-semibold">Conclusion</h2>
					<p>
						My journey at Ubyon Inc. was a transformative experience, allowing
						me to grow from a frontend specialist into a Full Stack Developer. I
						not only led the development of key frontend features but also took
						on the responsibility of building secure, scalable backend services.
						My work on the CARMS module and configuration management server laid
						the foundation for future innovations, driving significant
						improvements in the platform’s usability, security, and efficiency.
						Through these efforts, I contributed to the company’s mission of
						delivering cutting-edge cloud-native solutions to its clients.
					</p>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default UbyonCaseStudy;
