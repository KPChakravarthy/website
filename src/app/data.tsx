import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { HomePageData } from "@/lib/types/home";
import { basepath } from "@/lib/utils";
import { Project } from "@/lib/types/projects";

const img1 = basepath + "/assets/experiences/img1.jpg";
const img2 = basepath + "/assets/experiences/img2.jpg";

export const experienceColors = {
  ubyon: "53, 174, 83",
  cognitiveClouds: "33, 136, 158",
  imaxBluet: "255, 255, 4",
}

export const home: HomePageData = {
	image: basepath + "/assets/me.jpeg",
	designation: "Full Stack Developer",
	intro: "I'm Krishna Prasad",
	description: (
		<HeroHighlight>
			As a <Highlight>seasoned full-stack developer</Highlight>, I bring a
			passion for building efficient, user-centered applications that solve
			real-world challenges. My experience spans cloud-native microservices,
			responsive front-end interfaces, and scalable backend systems using
			technologies like <Highlight>React, Golang, AWS, and SQL</Highlight>. I
			focus on performance and seamless user experience, delivering results that
			make an impact across various industries, from secure authentication
			systems to e-commerce optimization.
		</HeroHighlight>
	),
	ctaText: "Reach out!",
};

export const projects: Project[] = [
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
    link: '/experience/ubyon',
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
    images: [img2],
    color: experienceColors.cognitiveClouds,
    link: '/experience/cognitive-clouds',
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

export const articles = [
	{
		id: 6,
		image_url: "https://miro.medium.com/max/1400/1*E152GuY2fDCTBDjdQyPqdQ.png",
		title: "Cross-Browser Responsive Typography with pure CSS.",
		description:
			"Ever wondered why there is so much emphasis on responsive design? Responsive design doesn’t just mean compatibility between desktop view and mobile view!",
		article_url:
			"https://krimsonhart.medium.com/cross-browser-responsive-typography-with-pure-css-d9f1b16ea0ee",
	},
	{
		id: 5,
		image_url: "https://miro.medium.com/max/2000/1*Co40TEFIAUWJF8Ksu86XAA.png",
		title: "Content Diff View in vanilla JavaScript",
		description:
			"Hello y’all, let’s talk about “Diff View” today and see how we can achieve that in our project...",
		article_url:
			"https://medium.com/javascript-in-plain-english/content-diff-view-in-vanilla-javascript-105a00abd7ce",
	},
	{
		id: 1,
		image_url: "https://miro.medium.com/max/1400/1*6wXzB0-WM_UolLBy76Us7g.jpeg",
		title: "How to transfer blobs from a Chrome Extension (with Gotchas)",
		description:
			"Have you ever built a chrome extension and uploaded a photo and wanted to transfer the data to your website...",
		article_url:
			"https://medium.com/javascript-in-plain-english/how-to-transfer-blobs-from-a-chrome-extension-with-gotchas-8ed541a1a4e8",
	},
	{
		id: 3,
		image_url: "https://miro.medium.com/max/848/1*qSsa3OXB1T8dJuHSzY9PQg.jpeg",
		title: "NodeJS Postgresql Bulk upsert.",
		description:
			"Lately I have been working a lot with Postgresql and NodeJS. Bulk upsert of data read from a .xlsx file...",
		article_url:
			"https://medium.com/swlh/nodejs-postgresql-bulk-upsert-2dbd9fe0dba",
	},
	{
		id: 2,
		image_url: "https://miro.medium.com/max/1400/1*vcDn-LBjj0IaD98XZaokJA.gif",
		title: "CSS Parallax “Explore Space” effect.",
		description:
			"Hi y’all, hope you’re doing good. I am excited to share this article with you all. It is an animation that you see in the gif above…",
		article_url:
			"https://krimsonhart.medium.com/css-parallax-explore-space-effect-with-html-css-js-scroll-animation-aded7b771b2",
	},
	{
		id: 4,
		image_url: "https://miro.medium.com/max/1400/1*xFScuG9fJtpjjOC0q0Vj3g.png",
		title: "Support chat with Angular + Firebase Realtime Database",
		description:
			"Let us start by creating the firebase chat model first. Here’s how the tree flows. We need to get the list of users that have had a chat conversation...",
		article_url:
			"https://krimsonhart.medium.com/support-chat-with-angular-firebase-realtime-database-1bf1c3b21f10",
	},
];
