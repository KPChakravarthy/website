import HomePage from "./components/Home";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const articles = [
  {
    "id": 6,
    "image_url": "https://miro.medium.com/max/1400/1*E152GuY2fDCTBDjdQyPqdQ.png",
    "title": "Cross-Browser Responsive Typography with pure CSS.",
    "description": "Ever wondered why there is so much emphasis on responsive design? Responsive design doesn’t just mean compatibility between desktop view and mobile view!",
    "article_url": "https://krimsonhart.medium.com/cross-browser-responsive-typography-with-pure-css-d9f1b16ea0ee"
  },
  {
    "id": 5,
    "image_url": "https://miro.medium.com/max/2000/1*Co40TEFIAUWJF8Ksu86XAA.png",
    "title": "Content Diff View in vanilla JavaScript",
    "description": "Hello y’all, let’s talk about “Diff View” today and see how we can achieve that in our project...",
    "article_url": "https://medium.com/javascript-in-plain-english/content-diff-view-in-vanilla-javascript-105a00abd7ce"
  },
  {
    "id": 1,
    "image_url": "https://miro.medium.com/max/1400/1*6wXzB0-WM_UolLBy76Us7g.jpeg",
    "title": "How to transfer blobs from a Chrome Extension (with Gotchas)",
    "description": "Have you ever built a chrome extension and uploaded a photo and wanted to transfer the data to your website...",
    "article_url": "https://medium.com/javascript-in-plain-english/how-to-transfer-blobs-from-a-chrome-extension-with-gotchas-8ed541a1a4e8"
  },
  {
    "id": 3,
    "image_url": "https://miro.medium.com/max/848/1*qSsa3OXB1T8dJuHSzY9PQg.jpeg",
    "title": "NodeJS Postgresql Bulk upsert.",
    "description": "Lately I have been working a lot with Postgresql and NodeJS. Bulk upsert of data read from a .xlsx file...",
    "article_url": "https://medium.com/swlh/nodejs-postgresql-bulk-upsert-2dbd9fe0dba"
  },
  {
    "id": 2,
    "image_url": "https://miro.medium.com/max/1400/1*vcDn-LBjj0IaD98XZaokJA.gif",
    "title": "CSS Parallax “Explore Space” effect.",
    "description": "Hi y’all, hope you’re doing good. I am excited to share this article with you all. It is an animation that you see in the gif above…",
    "article_url": "https://krimsonhart.medium.com/css-parallax-explore-space-effect-with-html-css-js-scroll-animation-aded7b771b2"
  },
  {
    "id": 4,
    "image_url": "https://miro.medium.com/max/1400/1*xFScuG9fJtpjjOC0q0Vj3g.png",
    "title": "Support chat with Angular + Firebase Realtime Database",
    "description": "Let us start by creating the firebase chat model first. Here’s how the tree flows. We need to get the list of users that have had a chat conversation...",
    "article_url": "https://krimsonhart.medium.com/support-chat-with-angular-firebase-realtime-database-1bf1c3b21f10"
  }
]

export default function Home() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="home min-h-screen pt-20 md:pt-40 md:py-40 text-center">
        <HomePage />
      </div>
      <div id="experiences">
        <Experience />
      </div>
      <Blog articles={articles} />
      <Footer />
    </div>
  );
}
