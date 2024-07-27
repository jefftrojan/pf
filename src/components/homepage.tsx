"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Dialog, DialogOverlay, DialogContent } from "@/components/ui/dialog";
import { JSX, SVGProps } from "react";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1.",
      liveLink: "https://example.com/project1",
      githubLink: "https://github.com/username/project1",
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      liveLink: "https://example.com/project2",
      githubLink: "https://github.com/username/project2",
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3.",
      liveLink: "https://example.com/project3",
      githubLink: "https://github.com/username/project3",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#1e1e1e] text-[#d4d4d4]">
      <header className="flex h-14 items-center justify-between border-b border-[#2d2d2d] px-4 sm:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Portfolio</span>
        </Link>
        <button
          className="sm:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </header>
      <div className="flex flex-1">
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } sm:block sm:w-64`}
        >
          <Collapsible className="border-r border-[#2d2d2d] bg-[#252526] p-4 sm:static">
            <CollapsibleTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]">
              <div className="flex items-center gap-2">
                <FolderIcon className="h-5 w-5" />
                <span>Home</span>
              </div>
              <ChevronRightIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]"
                prefetch={false}
              >
                <FileIcon className="h-5 w-5" />
                <span>Hero</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]"
                prefetch={false}
              >
                <FileIcon className="h-5 w-5" />
                <span>About</span>
              </Link>
            </CollapsibleContent>
            <CollapsibleTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]">
              <div className="flex items-center gap-2">
                <FolderIcon className="h-5 w-5" />
                <span>Projects</span>
              </div>
              <ChevronRightIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]"
                >
                  <FileIcon className="h-5 w-5" />
                  <span>{project.title}</span>
                </button>
              ))}
            </CollapsibleContent>
            <CollapsibleTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]">
              <div className="flex items-center gap-2">
                <FolderIcon className="h-5 w-5" />
                <span>Contact</span>
              </div>
              <ChevronRightIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#2d2d2d]"
                prefetch={false}
              >
                <FileIcon className="h-5 w-5" />
                <span>Contact Form</span>
              </Link>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <main className="flex-1">
          <section className="bg-[#252526] py-12 sm:py-24">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
              <h1 className="text-3xl font-bold sm:text-5xl">Jeffrey Dauda</h1>
              <p className="mt-4 text-lg text-[#a6a6a6]">
                Software Engineer & Tech Enthusiast
              </p>
              <p className="mt-4 text-lg text-[#a6a6a6]">
                Passionate about building impactful projects using technology.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md bg-[#0078d4] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#005a9e] focus:outline-none focus:ring-2 focus:ring-[#0078d4] focus:ring-offset-2"
                  prefetch={false}
                >
                  View Projects
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-[#424242] bg-transparent px-4 py-2 text-sm font-medium text-[#d4d4d4] shadow-sm transition-colors hover:bg-[#2d2d2d] focus:outline-none focus:ring-2 focus:ring-[#0078d4] focus:ring-offset-2"
                  prefetch={false}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </section>
          <section id="projects" className="bg-[#1e1e1e] py-12 sm:py-24">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6">
              <h2 className="text-2xl font-bold sm:text-4xl">My Projects</h2>
              <p className="mt-4 text-lg text-[#a6a6a6]">
                Check out some of my latest projects.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <Card key={index} onClick={() => setSelectedProject(project)}>
                    <CardContent className="flex aspect-video items-center justify-center">
                      <img
                        src="/placeholder.svg"
                        width={300}
                        height={200}
                        alt={project.title}
                      />
                    </CardContent>
                    <CardFooter className="p-4">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Modal Popup for Project Details */}
      {selectedProject && (
        <Dialog open={true} onOpenChange={() => setSelectedProject(null)}>
          <DialogOverlay />
          <DialogContent className="bg-[#252526] p-6 text-[#d4d4d4] rounded-lg max-w-md">
            <h2 className="text-xl font-bold">{selectedProject.title}</h2>
            <p className="mt-4">{selectedProject.description}</p>
            <div className="mt-6 flex gap-4">
              <Link
                href={selectedProject.liveLink}
                target="_blank"
                className="inline-flex items-center justify-center rounded-md bg-[#0078d4] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#005a9e] focus:outline-none focus:ring-2 focus:ring-[#0078d4] focus:ring-offset-2"
                prefetch={false}
              >
                Live Demo
              </Link>
              <Link
                href={selectedProject.githubLink}
                target="_blank"
                className="inline-flex items-center justify-center rounded-md border border-[#424242] bg-transparent px-4 py-2 text-sm font-medium text-[#d4d4d4] shadow-sm transition-colors hover:bg-[#2d2d2d] focus:outline-none focus:ring-2 focus:ring-[#0078d4] focus:ring-offset-2"
                prefetch={false}
              >
                View on GitHub
              </Link>
            </div>
            <Button
              onClick={() => setSelectedProject(null)}
              className="mt-6"
            >
              Close
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

// Icons (You can replace these with your SVGs or other icons)
const MenuIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 6h16M4 12h16M4 18h16"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FolderIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 4h4l2 2h10v12H4V4z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FileIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 3v4a1 1 0 001 1h4M16 8V5.5a2.5 2.5 0 00-2.5-2.5H9a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V8h-3z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MountainIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M2 17l6-6 4 4 8-8 4 4"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9 18l6-6-6-6"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
