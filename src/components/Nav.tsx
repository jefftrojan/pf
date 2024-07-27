// Nav.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  FaMountain as MountainIcon,
  FaChevronRight as ChevronRightIcon,
  FaFolder as FolderIcon,
  FaReact as ReactIcon,
} from "react-icons/fa";

const Nav: React.FC = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-[#252526] border-r border-[#2d2d2d] overflow-y-auto text-white">
      <div className="flex items-center h-14 px-4 border-b border-[#2d2d2d]">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <MountainIcon className="h-6 w-6 text-white" />
          <span>Portfolio</span>
        </Link>
      </div>
      <nav className="mt-4 px-4">
        <Collapsible open={isHomeOpen} onOpenChange={setIsHomeOpen}>
          <CollapsibleTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]">
            <div className="flex items-center gap-2">
              <FolderIcon className="h-5 w-5 text-yellow-500" />
              <span>Home</span>
            </div>
            <ChevronRightIcon className={`h-5 w-5 transition-transform ${isHomeOpen ? "rotate-90" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4">
            <Link href="/" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]">
              <ReactIcon className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400">Hero.tsx</span>
            </Link>
            <Link href="#about" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]">
              <ReactIcon className="h-5 w-5 text-green-400" />
              <span className="text-green-400">About.tsx</span>
            </Link>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible open={isProjectsOpen} onOpenChange={setIsProjectsOpen}>
          <CollapsibleTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]">
            <div className="flex items-center gap-2">
              <FolderIcon className="h-5 w-5 text-red-500" />
              <span>Projects</span>
            </div>
            <ChevronRightIcon className={`h-5 w-5 transition-transform ${isProjectsOpen ? "rotate-90" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4">
            <Link href="#projects" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]">
              <ReactIcon className="h-5 w-5 text-purple-400" />
              <span className="text-purple-400">SafeChain.tsx</span>
            </Link>
            <Link href="#projects" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]">
              <ReactIcon className="h-5 w-5 text-teal-400" />
              <span className="text-teal-400">FemCycle.tsx</span>
            </Link>
            <Link href="#projects" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]">
              <ReactIcon className="h-5 w-5 text-orange-400" />
              <span className="text-orange-400">EnvironmentCompliance.tsx</span>
            </Link>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible open={isContactOpen} onOpenChange={setIsContactOpen}>
          <CollapsibleTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]">
            <div className="flex items-center gap-2">
              <FolderIcon className="h-5 w-5 text-blue-500" />
              <span>Contact</span>
            </div>
            <ChevronRightIcon className={`h-5 w-5 transition-transform ${isContactOpen ? "rotate-90" : ""}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4">
            <Link href="#contact" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]">
              <ReactIcon className="h-5 w-5 text-pink-400" />
              <span className="text-pink-400">ContactForm.tsx</span>
            </Link>
          </CollapsibleContent>
        </Collapsible>
        <Link href="/blog" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]">
          <ReactIcon className="h-5 w-5 text-yellow-500" />
          <span>Blog</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Nav;
