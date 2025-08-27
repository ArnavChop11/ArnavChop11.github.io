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
      description: `Our team designed and implemented an out-of-order RISC-V processor using the Explicit Register Renaming (ERR) microarchitecture, written entirely in SystemVerilog. The design supports the RV32IM instruction set with advanced features that increase throughput in numerous benchmarks 
      
      These advanced features include: 
      
      Pipelined Cache:
      We designed a parameterized pipelined instruction and data cache to improve throughput and reduce memory latency. Advanced features included back-to-back cache hits, PLRU replacement for any power-of-two associativity, and branch-aware memory scheduling. Verified with randomized testbenches and full benchmark integration, the cache eliminated critical memory paths and lowered the processor’s clock period to 2100 ns. A 2-way 64-set cache provided the best balance of power and delay, meeting benchmark requirements efficiently 

      Split LSQ:
      We implemented a split Load-Store Queue (LSQ) that enables loads to issue out of order between in-order stores, improving memory concurrency. Loads and stores share the same functional unit but dispatch to separate reservation stations, with additional checks to ensure correctness with pending stores and branches

      Branch Predictor:
      We implemented a two-level branch predictor with a branch target buffer (BTB) integrated into the fetch stage, ensuring predictions occur without altering the pipeline path. The predictor uses PC bits to index into a local history table (LHT), which then selects entries in the pattern history table (PHT) to determine branch behavior. The BTB, embedded within the LHT, provides the next PC value when predicting taken. Mispredictions trigger updates from the execute stage, with the PHT implemented in SRAM and the LHT/BTB in flip-flops, enabling accurate and efficient prediction
      
      Overall, we built a fully functional out-of-order RISC-V processor with advanced memory and branch features, validated through rigorous benchmarking. The design balanced performance, power, and delay while giving me hands-on experience in RTL design, verification, and architectural optimization.
      `,
      link: "https://github.com/ArnavChop11/RISCV-Processor",
      skills: ["SystemVerilog", "Assembly", "VCS", "Verdi", "SpyGlass", "Verilator", "Linux", "FPGA"],
    },
    {
      name: "Handwritten Digit Recognition Using CNN on FPGA",
      description: `In this project, we created a handwritten digit recognition system on an FPGA, using a Convolutional Neural Network (CNN). The user is able to input a handwritten digit 0-9 that is 28x28 pixels and receive an output that identifies the digit that was drawn.

      To translate CNN inference into RTL, we created dedicated hardware for two Convolution+ReLU layers, a max pooling layer, and two fully connected layers. Memory management was a major challenge due to over 100,000 parameters and nearly 10,000 intermediate neuron values. We addressed this by preloading parameters into ROMs and allocating intermediate results in BRAMs, enabling parallel access for convolutions. All floating-point parameters were converted into 9-bit fixed-point (Q3.6) representation to reduce FPGA resource usage while retaining accuracy. An FSM controlled the sequencing of layer operations, balancing parallelization for performance against serialization for hardware efficiency.

      The design achieved stable inference at 118.9 MHz with a total power consumption of 473 mW (75 mW static, 398 mW dynamic). Resource utilization included ~19,000 LUTs, 32 BRAMs, 4,318 flip-flops, and only 3 DSP slices, showing the efficiency of our fixed-point approach. Simulation waveforms confirmed correct top-3 digit predictions and validated classification across multiple test images.

      This project showcased the end-to-end process of implementing a CNN in hardware: preprocessing images, managing parameters, building custom convolution/pooling/FC modules, and integrating them into a functional inference pipeline. It provided hands-on experience with SystemVerilog, FPGA memory management, and hardware acceleration for AI, demonstrating the potential of FPGAs for efficient machine learning inference.
      `,
      link: "https://github.com/ArnavChop11/CNN-on-FPGA",
      skills: ["SystemVerilog", "FPGA", "C++"],
    },
    {
      name: "Optimized Convolutional Layer Using CUDA",
      description: `I implemented the forward pass of a Convolutional Neural Network (CNN) in CUDA, translating the mathematical operations of convolution and fully connected layers into highly parallel GPU kernels. The project explored how deep learning computations can be optimized for GPU architectures. I implemented many advanced features that optimized memory exchange and matrix multiplication. These features are detailed below. 

      Optimizations: 

      Tiling and Shared Memory:
      Partitioned input data into tiles and reused them in shared memory, reducing redundant global memory accesses and improving memory bandwidth utilization

      Input Unrolling:
      Transformed convolution into a matrix multiplication problem by unrolling input feature maps, enabling coalesced memory access and better GPU parallelism

      Kernel Fusion:
      Combined successive CNN operations (e.g., convolution, bias addition, activation) into a single CUDA kernel, minimizing intermediate memory transfers and launch overhead

      Tensor Core Utilization:
      Leveraged NVIDIA Tensor Cores with mixed-precision matrix multiply-accumulate operations, achieving significantly faster throughput for convolution layers

      Performance improvements were measured at each milestone using Nsight Systems and Nsight Compute, which provided detailed insights into memory throughput, occupancy, and instruction efficiency. These optimizations led to significant reductions in runtime compared to the baseline implementation, demonstrating the impact of GPU-aware design decisions.

      This project provided hands-on experience with GPU programming, CUDA optimization strategies, and profiling tools, while reinforcing my understanding of how CNN inference can be accelerated on modern GPU architectures.
      `,
      link: "https://github.com/ArnavChop11/Conv-Layer-CUDA",
      skills: ["CUDA", "Python", "Nsight Systems", "Nsight Compute"],
    },
  ],
  experience: [],
  education: [],
} as const;

export default siteConfig;
