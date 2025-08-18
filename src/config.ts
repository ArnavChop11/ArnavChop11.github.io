// src/config.ts

export const siteConfig = {
  name: "Arnav Chopra",
  title: "Hardware Engineer",
  description: "Portfolio website of Arnav Chopra",
  accentColor: "#1d4ed8",
  social: {
    email: "arnavchopra1@icloud.com",
    linkedin: "www.linkedin.com/in/arnav-chopra-8b4a43201",
    // remove twitter if you don't use it
    // twitter: "",
    //github: "https://github.com/ArnavChop11",
  },
  aboutMe:
    "Short bio about your FPGA/ASIC/CUDA focus. Replace this with 2–3 sentences about you.",
  skills: [],
  projects: [
    {
      name: "Pipelined Out-of-Order RISC-V Processor",
      description: "Write project description here",
      //link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["Maybe put relevant skills here"],
    },
    {
      name: "Handwritten Digit Recognition Using CNN on FPGA",
      description: "Write project description here",
      //link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["Maybe put relevant skills here"],
    },
    {
      name: "Optimized Convolutional Layer Using CUDA",
      description: "Write project description here",
      //link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["Maybe put relevant skills here"],
    },
  ],
  experience: [],
  // Keep the key; empty array hides the section without breaking imports/types
  education: [],
} as const;

export default siteConfig;
