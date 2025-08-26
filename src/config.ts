// src/config.ts

export const siteConfig = {
  name: "Arnav Chopra",
  title: "Hardware Engineer",
  description: "Portfolio website of Arnav Chopra",
  accentColor: "#1d4ed8",
  social: {
    email: "arnavchopra1@icloud.com",
    linkedin: "https://www.linkedin.com/in/arnav-chopra-8b4a43201/",
    // twitter: "",
    //github: "https://github.com/ArnavChop11",
  },
  aboutMe:
    `Hi, my name is Arnav Chopra and I am a Computer Engineering student at The University of Illinois at 
    Urbana-Champaign. I am deeply interested in ASIC/FPGA development, specifically in the fields of AI 
    acceleration and HFT. Currently I am working as a hardware engineer at HeftAI, a stealth startup focused 
    on creating cutting edge platform-agnostic high-performance machine learning infrastructure. In this role, 
    I have honed in my skills with SystemVerilog, C, and verification by working on the architecture and 
    prototyping of a stripped-down systolic array accelerator optimized for deterministic, low-latency INT8 
    matrix multiplication with BF16 accumulation. I also have strong project experience, and have had the
    opporunity to work on many exciting and challenging projects involving computer architecture and 
    AI acceleration. This includes a Pipelined Out-Of-Order RISC-V Processor, a Handwritten Digit Recognition 
    System built on an FPGA, and a deeply optimized Convolutional Layer using CUDA. All these projects are further
    detailed below. I am seeking internship/full-time opportunities in ASIC/FPGA design and/or verification, 
    and am always excited to learn about new technologies.`,
  //I am currently working on a [HFT project here]. add this in after CUDA
  skills: [],
  projects: [
    {
      name: "Pipelined Out-of-Order RISC-V Processor",
      description: `Our team designed and implemented an out-of-order RISC-V processor using the 
      Explicit Register Renaming (ERR) microarchitecture, written entirely in SystemVerilog. 
      The design supports the RV32IM instruction set with advanced features that increase throughput 
      in numerous benchmarks. These advanced features include: 
      
      \n - Pipelined Cache
      \n     We designed a parameterized pipelined instruction and data cache to improve throughput 
             and reduce memory latency. Advanced features included back-to-back cache hits, PLRU replacement 
             for any power-of-two associativity, and branch-aware memory scheduling. Verified with randomized 
             testbenches and full benchmark integration, the cache eliminated critical memory paths and lowered 
             the processor’s clock period to 2100 ns. A 2-way 64-set cache provided the best balance of power and 
             delay, meeting benchmark requirements efficiently. 
      
      
      `,
      link: "https://github.com/ArnavChop11/RISCV-Processor",
      skills: ["SystemVerilog", "Assembly", "VCS", "Verdi", "SpyGlass", "Verilator", "Linux", "FPGA"],
    },
    {
      name: "Handwritten Digit Recognition Using CNN on FPGA",
      description: "Write project description here",
      link: "https://github.com/ArnavChop11/CNN-on-FPGA",
      skills: ["SystemVerilog", "FPGA", "C++"],
    },
    {
      name: "Optimized Convolutional Layer Using CUDA",
      description: "Write project description here",
      link: "https://github.com/ArnavChop11/Conv-Layer-CUDA",
      skills: ["CUDA", "Python", "Nsight Systems", "Nsight Compute"],
    },
  ],
  experience: [],
  // Keep the key; empty array hides the section without breaking imports/types
  education: [],
} as const;

export default siteConfig;
