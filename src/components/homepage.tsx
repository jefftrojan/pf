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
import { Dialog, DialogOverlay, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { FaMountain as MountainIcon, FaBars as MenuIcon, FaChevronRight as ChevronRightIcon, FaFolder as FolderIcon, FaFile as FileIcon } from "react-icons/fa";

// Define the type for a project
type Project = {
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  imageUrl: string;
};

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Project 1",
      description: "A brief description of Project 1.",
      liveLink: "https://example.com/project1",
      githubLink: "https://github.com/username/project1",
      imageUrl: "/images/project1.jpg",
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2.",
      liveLink: "https://example.com/project2",
      githubLink: "https://github.com/username/project2",
      imageUrl: "/images/project2.jpg",
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3.",
      liveLink: "https://example.com/project3",
      githubLink: "https://github.com/username/project3",
      imageUrl: "/images/project3.jpg",
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
              <h2 className="text-2xl font-bold sm:text-4xl">Projects</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <Card key={index} className="bg-[#2d2d2d] border border-[#424242] rounded-lg shadow-lg">
                    <CardContent>
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="mt-2 text-sm text-[#a6a6a6]">{project.description}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="text-center">
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        className="inline-flex items-center justify-center rounded-md bg-[#0078d4] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#005a9e] focus:outline-none focus:ring-2 focus:ring-[#0078d4] focus:ring-offset-2"
                        prefetch={false}
                      >
                        Live Demo
                      </Link>
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        className="inline-flex items-center justify-center rounded-md border border-[#424242] bg-transparent px-4 py-2 text-sm font-medium text-[#d4d4d4] shadow-sm transition-colors hover:bg-[#2d2d2d] focus:outline-none focus:ring-2 focus:ring-[#0078d4] focus:ring-offset-2"
                        prefetch={false}
                      >
                        View on GitHub
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <section id="contact" className="bg-[#252526] py-12 sm:py-24">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6">
              <h2 className="text-2xl font-bold sm:text-4xl">Contact Me</h2>
              <p className="mt-4 text-lg text-[#a6a6a6]">
                Feel free to reach out for collaborations or just a friendly chat.
              </p>
              <form className="mt-8 space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={4} />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </section>
        </main>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogOverlay className="fixed inset-0 bg-black/50" />
          <DialogContent className="fixed inset-0 m-auto w-[90%] max-w-3xl p-6 bg-[#2d2d2d] rounded-lg shadow-lg overflow-y-auto">
            <VisuallyHidden>
              <DialogTitle>{selectedProject.title}</DialogTitle>
            </VisuallyHidden>
            <div className="flex flex-col lg:flex-row">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full lg:w-1/2 h-auto object-cover rounded-lg"
              />
              <div className="lg:ml-6 mt-4 lg:mt-0 lg:w-1/2">
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
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
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
