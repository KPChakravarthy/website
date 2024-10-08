import React from "react";

interface Props {
	children: React.ReactNode;
}

const MainTitle = ({ children }: Props) => {
	return <p
		className="text-2xl md:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-0 md:py-4 bg-[radial-gradient(61% 200% at 39.7% 21.9%, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0.35) 110%)] dark:bg-[radial-gradient(61% 200% at 39.7% 21.9%, rgb(255, 255, 255) 0%, rgba(0, 0, 0, 0.35) 110%)]"
	>
		{children}
	</p>;
};

export default MainTitle;
