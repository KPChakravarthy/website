import HomePage from "./components/Home";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { articles, home, projects } from "./data";

export default function Home() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="home min-h-screen pt-20 md:pt-40 md:py-40 text-center">
        <HomePage pageData={home} />
      </div>
      <div id="experiences">
        <Experience pageData={projects} />
      </div>
      <Blog articles={articles} />
      <Footer />
    </div>
  );
}
