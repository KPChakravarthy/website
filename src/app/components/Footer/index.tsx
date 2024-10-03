import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-4">
      <div className="mx-auto flex justify-between items-center mt-20">
        <p className="text-sm">&copy; {year} KP</p>
        <div className="flex gap-6">
          <a
            href="mailto:kp@thecodeaddict.com"
            className="text-accent hover:opacity-70 transition tracking-widest"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/krishna-prasad-chakravarthy-b6566519/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:opacity-70 transition tracking-widest"
          >
            Linked-in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
