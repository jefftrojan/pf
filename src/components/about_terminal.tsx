
"use client"

import { useState } from "react"

export function Terminal() {
  const [currentCommand, setCurrentCommand] = useState("./about")
  const [output, setOutput] = useState("")
  const handleCommand = (command) => {
    setCurrentCommand(command)
    switch (command) {
      case "./about":
        setOutput(`
        Welcome to my about page! 
        
        Type the following commands to navigate:
        
        - 'bio' - Learn more about me
        - 'skills' - See my technical skills
        - 'projects' - Check out my recent projects
        - 'contact' - Get in touch with me
        `)
        break
      case "bio":
        setOutput(`
        Hi there! I'm a passionate full-stack developer with a love for building innovative web applications.
        
        I have 5+ years of experience in the industry, working with a variety of technologies and frameworks. 
        
        Some key facts about me:
        - Based in San Francisco, CA
        - Graduated with a Computer Science degree from UC Berkeley
        - Enjoy learning new things and staying up-to-date with the latest trends
        - Believe in writing clean, maintainable, and well-tested code
        - Outside of work, I enjoy hiking, traveling, and playing the guitar
        `)
        break
      case "skills":
        setOutput(`
        Here are some of the key skills I've developed over the years:
        
        - JavaScript (ES6+), TypeScript
        - React, Next.js, Vue.js
        - Node.js, Express
        - MongoDB, PostgreSQL
        - HTML, CSS, Tailwind CSS
        - Git, GitHub, CI/CD
        - Unit testing with Jest, Enzyme, React Testing Library
        - Agile methodologies and project management
        `)
        break
      case "projects":
        setOutput(`
        Check out some of my recent projects:
        
        1. Acme Inc. Dashboard
           - Built a comprehensive admin dashboard for a SaaS company
           - Utilized React, TypeScript, and Tailwind CSS
           - Implemented features like user management, analytics, and order tracking
        
        2. Foodie - Recipe Sharing App
           - Developed a full-stack web application for sharing recipes
           - Used Next.js, Firebase, and Framer Motion
           - Allowed users to create, save, and comment on recipes
        
        3. Crypto Tracker
           - Created a mobile-friendly cryptocurrency tracking app
           - Leveraged Vue.js, Vuex, and Axios for data fetching
           - Displayed real-time prices, market trends, and portfolio management
        `)
        break
      case "contact":
        setOutput(`
        Feel free to get in touch with me through any of the following channels:
        
        Email: john@example.com
        LinkedIn: linkedin.com/in/johndoe
        GitHub: github.com/johndoe
        
        I'm always happy to chat about new opportunities, collaborate on projects, or just discuss the latest tech trends!
        `)
        break
      default:
        setOutput('Invalid command. Type "./about" to see the available options.')
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono">
      <div className="w-full max-w-4xl bg-[#2d2d2d] rounded-lg shadow-lg p-6 sm:p-8">
        <div className="flex items-center mb-4">
          <span className="text-[#9cdcfe]">john@example.com</span>
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
                handleCommand(currentCommand)
              }
            }}
          />
        </div>
        <pre className="text-[#d4d4d4] whitespace-pre-wrap break-words">{output}</pre>
      </div>
    </div>
  )
}
