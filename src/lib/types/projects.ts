import React from "react";

export interface Project {
  title: string;
  designation: string;
  duration: string;
  description: React.ReactNode;
  slug: string;
  images: string[];
  color: string;
  link: string;
}