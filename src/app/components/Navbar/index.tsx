'use client'
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  const openMailTo = () => {}

  return (
    <nav className="sticky top-0 w-full backdrop-blur-sm border border-bottom-gray-300 shadow-md flex justify-between items-center py-4 px-10"
    style={{
      background: "rgba(var(--background), 0.1)",
      zIndex: 49,
    }}>
      <div>
        <Image src="/assets/logo.svg" alt="Logo" width={32} height={32} />
      </div>
    </nav>
  );
};

export default Navbar;