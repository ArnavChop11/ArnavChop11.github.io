// src/config.ts

export const siteConfig = {
  name: "Arnav Chopra",
  title: "Hardware Engineer",
  description: "Portfolio website of Arnav Chopra",
  accentColor: "#1d4ed8",
  social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    // remove twitter if you don't use it
    // twitter: "",
    //github: "https://github.com/ArnavChop11",
  },
  aboutMe:
    "Short bio about your FPGA/ASIC/CUDA focus. Replace this with 2–3 sentences about you.",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  projects: [
    {
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [],
  // Keep the key; empty array hides the section without breaking imports/types
  education: [],
} as const;

export default siteConfig;
