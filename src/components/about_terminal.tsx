"use client";

import { SetStateAction, useState } from "react";

export default function Terminal() {
  const [currentCommand, setCurrentCommand] = useState("");
  const [output, setOutput] = useState(`
    Welcome to Jeffrey Karau Dauda's Terminal Portfolio!

    Type one of the following commands to navigate:
    
    - './about' - Learn more about me
    - 'bio' - See my background and interests
    - 'skills' - Explore my technical skills
    - 'projects' - Check out my recent projects
    - 'contact' - Get in touch with me
    
    To return to this main menu, type 'home'.
  `);

  const handleCommand = (command: string) => {
    setCurrentCommand(command);
    switch (command.trim()) {
      case "./about":
        setOutput(`
        Welcome to the About section!
        
        Type the following commands to navigate:
        
        - 'bio' - Learn more about me
        - 'skills' - See my technical skills
        - 'projects' - Check out my recent projects
        - 'contact' - Get in touch with me
        
        To return to the main menu, type 'home'.
        `);
        break;
      case "bio":
        setOutput(`
        Hi! I'm Jeffrey Karau Dauda, a software engineer passionate about leveraging technology to solve real-world problems.
        
        I have experience working with various programming languages and frameworks, and I enjoy exploring new technologies. 
        
        Some key facts about me:
        - Based in Kenya
        - Final year student at ALU, pursuing a mission in Software Engineering
        - Co-lead and Web Technologies Lead at Google Developer Students Club (GDSC)
        - Interested in building solutions in tech, business, and sustainability
        
        To return to the main menu, type 'home'.
        `);
        break;
      case "skills":
        setOutput(`
        Here are some of the key skills I've developed over the years:
        
        - Python, JavaScript, Dart/Flutter, Swift/Swift-UI, Go
        - ReactJS, Next.js, Material-UI, HTML, CSS
        - Motoko, Solidity
        - Firebase, MongoDB, PostgreSQL
        - Git, GitHub, CI/CD
        - Agile methodologies and project management
        
        To return to the main menu, type 'home'.
        `);
        break;
      case "projects":
        setOutput(`
        Check out some of my recent projects:
        
        1. SafeChain
           - A health management system on the blockchain for cross-border insurance and health management.
           - Technologies: Internet Computer, Blockchain, React
        
        2. FemCycle
           - An AI-powered reproductive health and menstrual hygiene chatbot using GPT-3.
           - Technologies: GPT-3, React, Firebase
        
        3. Environment Compliance System
           - A monitoring system to ensure adherence to environmental safety policies in Rwanda.
           - Technologies: Arduino, IoT, React
        
        To return to the main menu, type 'home'.
        `);
        break;
      case "contact":
        setOutput(`
        Feel free to get in touch with me through any of the following channels:
        
        Email: jeffrey@example.com
        LinkedIn: linkedin.com/in/jeffreydauda
        GitHub: github.com/jefftrojan
        
        I'm always happy to chat about new opportunities, collaborate on projects, or discuss the latest tech trends!
        
        To return to the main menu, type 'home'.
        `);
        break;
      case "home":
        setOutput(`
        Welcome to Jeffrey Karau Dauda's Terminal Portfolio!

        Type one of the following commands to navigate:
        
        - './about' - Learn more about me
        - 'bio' - See my background and interests
        - 'skills' - Explore my technical skills
        - 'projects' - Check out my recent projects
        - 'contact' - Get in touch with me
        
        To return to this main menu, type 'home'.
        `);
        break;
      default:
        setOutput(`Invalid command. Type './about' to see the available options or 'home' to return to the main menu.`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono">
      <div className="w-full max-w-4xl bg-[#2d2d2d] rounded-lg shadow-lg p-6 sm:p-8">
        <div className="flex items-center mb-4">
          <span className="text-[#9cdcfe]">jeffrey@example.com</span>
          <span className="text-[#ce9178] ml-2">~</span>
          <span className="text-[#b5cea8] ml-2">{currentCommand}</span>
          <span className="text-[#d4d4d4] ml-2">$</span>
          <input
            type="text"
            className="bg-transparent border-none outline-none text-[#d4d4d4] ml-2 flex-1"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCommand(currentCommand);
              }
            }}
          />
        </div>
        <pre className="text-[#d4d4d4] whitespace-pre-wrap break-words">{output}</pre>
      </div>
    </div>
  );
}
