import { notFound } from "next/navigation";
import UbyonCaseStudy from "./ubyon";
import "./experience.css";
import Link from "next/link";
import CognitiveCloudsCaseStudy from "./cognitiveClouds";

const companyCaseStudies: Record<string, JSX.Element> = {
	ubyon: <UbyonCaseStudy />,
  'cognitive-clouds': <CognitiveCloudsCaseStudy />,
};

export const sectionHeaderClassList = "text-2xl font-bold text-neutral-500 my-6";
export const sectionSubHeaderClassList = "text-lg font-bold text-neutral-500 mt-4";

const ExperiencePage = ({ params }: { params: { companyId: string } }) => {
	const companyId = params.companyId;

	const caseStudyComponent = companyCaseStudies[companyId];

	if (!caseStudyComponent) {
		notFound();
	}

	return (
		<div className="min-h-screen py-12 experience-section container mx-auto px-10">
			<Link
				href="/#experiences"
				className="flex items-center text-sm text-gray-300 hover:text-primary transition duration-300 ease-in-out"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="w-4 h-4 mr-2"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 19l-7-7 7-7"
					/>
				</svg>
				Go back
			</Link>
			{caseStudyComponent}
		</div>
	);
};

export async function generateStaticParams() {
  const companies = [
    { companyId: 'ubyon' },
    { companyId: 'cognitive-clouds' },
    { companyId: 'imax' },
  ];

  return companies.map((company) => ({
    companyId: company.companyId,
  }));
}


export default ExperiencePage;
