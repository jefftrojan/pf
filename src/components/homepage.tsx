"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link"
type Project = {
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  imageUrl: string;
};

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "SafeChain",
      description:
        "SafeChain is a health management system on the blockchain, allowing cross-border insurance and health management powered by the internet-computer.",
      liveLink: "https://example.com/safechain",
      githubLink: "https://github.com/jefftrojan/safechain",
      imageUrl: "/images/safechain.jpg",
    },
    {
      title: "FemCycle",
      description:
        "FemCycle harnesses the power of GPT-3 to provide intelligent responses and support through its AI chatbot assistant for reproductive health and menstrual hygiene.",
      liveLink: "https://example.com/femcycle",
      githubLink: "https://github.com/jefftrojan/femcycle",
      imageUrl: "/images/femcycle.jpg",
    },
    {
      title: "Environment Compliance System",
      description:
        "Designed and developed a Monitoring System to improve adherence to Rwanda's environmental safety policies using Arduino IoT automation.",
      liveLink: "https://example.com/environment-compliance",
      githubLink: "https://github.com/jefftrojan/environment-compliance",
      imageUrl: "/images/environment-compliance.jpg",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#1e1e1e] text-[#d4d4d4]">
      <Nav />
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
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-[#424242] bg-transparent px-4 py-2 text-sm font-medium text-[#d4d4d4] shadow-sm transition-colors hover:bg-[#2d2d2d] focus:outline-none focus:ring-2 focus:ring-[#0078d4] focus:ring-offset-2"
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
                <Card
                  key={index}
                  className="bg-[#2d2d2d] border border-[#424242] rounded-lg shadow-lg"
                >
                  <CardContent className="flex flex-col items-center p-4">
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} thumbnail`}
                      className="mb-4 h-40 w-full rounded-md object-cover"
                    />
                    <h3 className="text-lg font-semibold text-[#d4d4d4]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#a6a6a6]">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center gap-4 p-4">
                    <Link
                      href={project.liveLink}
                      className="text-sm text-[#0078d4] hover:underline"
                    >
                      Live Demo
                    </Link>
                    <Link
                      href={project.githubLink}
                      className="text-sm text-[#0078d4] hover:underline"
                    >
                      GitHub
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="bg-[#252526] py-12 sm:py-24">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold sm:text-4xl">Contact Me</h2>
            <p className="mt-4 text-lg text-[#a6a6a6]">
              Have a question or want to work together? Fill out the form
              below!
            </p>
            <form className="mt-8 space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Input id="name" type="text" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                />
              </div>
              <div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
