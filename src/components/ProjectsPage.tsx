"use client";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogOverlay, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Nav from "@/components/Nav";

// Define the type for a project
type Project = {
  title: string;
  description: string;
  category: "Mobile" | "Web" | "Utils";
  liveLink: string;
  githubLink: string;
  imageUrl: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "SafeChain",
    description:
      "SafeChain is a health management system on the blockchain, allowing cross-border insurance and health management powered by the internet-computer.",
    category: "Web",
    liveLink: "https://example.com/safechain",
    githubLink: "https://github.com/jefftrojan/safechain",
    imageUrl: "/images/safechain.jpg",
    tags: ["Blockchain", "Healthcare", "Web"],
  },
  {
    title: "FemCycle",
    description:
      "FemCycle harnesses the power of GPT-3 to provide intelligent responses and support through its AI chatbot assistant for reproductive health and menstrual hygiene.",
    category: "Mobile",
    liveLink: "https://example.com/femcycle",
    githubLink: "https://github.com/jefftrojan/femcycle",
    imageUrl: "/images/femcycle.jpg",
    tags: ["AI", "Chatbot", "Mobile"],
  },
  {
    title: "Environment Compliance System",
    description:
      "Designed and developed a Monitoring System to improve adherence to Rwanda's environmental safety policies using Arduino IoT automation.",
    category: "Utils",
    liveLink: "https://example.com/environment-compliance",
    githubLink: "https://github.com/jefftrojan/environment-compliance",
    imageUrl: "/images/environment-compliance.jpg",
    tags: ["IoT", "Automation", "Utils"],
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Mobile" | "Web" | "Utils">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] p-8">
    <Nav />

          <div className="container mx-auto max-w-4xl">
              <h1 className="text-3xl font-bold mb-6">Projects</h1>
              <div className="flex gap-4 mb-8">
                  {["All", "Mobile", "Web", "Utils"].map((category) => (
                      <Button
                          key={category}
                          onClick={() => setSelectedCategory(category as "All" | "Mobile" | "Web" | "Utils")}
                          className={`px-4 py-2 rounded ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-[#2d2d2d] text-[#d4d4d4]"}`}
                      >
                          {category}
                      </Button>
                  ))}
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredProjects.map((project, index) => (
                      <Card
                          key={index}
                          className="bg-[#2d2d2d] border border-[#424242] rounded-lg shadow-lg cursor-pointer"
                          onClick={() => setSelectedProject(project)}
                      >
                          <CardContent className="flex flex-col items-center p-4">
                              <img
                                  src={project.imageUrl}
                                  alt={`${project.title} thumbnail`}
                                  className="mb-4 h-40 w-full rounded-md object-cover" />
                              <h3 className="text-lg font-semibold text-[#d4d4d4]">{project.title}</h3>
                              <p className="mt-2 text-sm text-[#a6a6a6]">{project.description}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>

          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
              <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
              <DialogContent className="fixed top-1/2 left-1/2 max-w-lg w-full bg-[#252526] p-6 rounded-md transform -translate-x-1/2 -translate-y-1/2">
                  <DialogTitle className="text-2xl font-bold mb-4 text-white">{selectedProject?.title}</DialogTitle>
                  {selectedProject && (
                      <div className="text-[#d4d4d4]">
                          <img
                              src={selectedProject.imageUrl}
                              alt={`${selectedProject.title} thumbnail`}
                              className="mb-4 h-60 w-full rounded-md object-cover" />
                          <p className="mb-4">{selectedProject.description}</p>
                          <div className="flex gap-2 mb-4">
                              {selectedProject.tags.map((tag, index) => (
                                  <span key={index} className="bg-[#0078d4] text-white px-2 py-1 rounded">
                                      {tag}
                                  </span>
                              ))}
                          </div>
                          <div className="flex gap-4">
                              <a
                                  href={selectedProject.liveLink}
                                  className="text-blue-400 hover:underline flex items-center"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                              </a>
                              <a
                                  href={selectedProject.githubLink}
                                  className="text-blue-400 hover:underline flex items-center"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  <FaGithub className="mr-2" /> GitHub
                              </a>
                          </div>
                          <Button
                              className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
                              onClick={() => setSelectedProject(null)}
                          >
                              Close
                          </Button>
                      </div>
                  )}
              </DialogContent>
          </Dialog>
      </div></>
  );
}
