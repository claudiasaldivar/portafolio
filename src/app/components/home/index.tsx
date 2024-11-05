"use client";

import { FC } from 'react';
import { Twitter, Github, Instagram, Linkedin, Mail } from 'lucide-react';

const HomePage: FC = () => {
  const socialLinks = [
    { icon: <Twitter size={20} />, url: "https://twitter.com/your_handle" },
    { icon: <Github size={20} />, url: "https://github.com/your_handle" },
    { icon: <Instagram size={20} />, url: "https://instagram.com/your_handle" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/your_handle" },
    { icon: <Mail size={20} />, url: "mailto:your@email.com" }
  ];

  const workExperience = [
    {
      company: "Cloudflare",
      description: "empowering developers in building application using Cloudflare Workers",
      url: "#"
    },
    {
      company: "Passionate People",
      description: "frontend developer consultant, worked with Valtech and KPN",
      url: "#"
    },
    {
      company: "Andela",
      description: "developed internal software and supported pm as a scrum leader",
      url: "#"
    }
  ];

  const blogPosts = [
    { date: "23 Mar 2021", title: "Delete Multiple Branches in Git", url: "#" },
    { date: "3 Mar 2021", title: "Show Your Work!", url: "#" },
    { date: "11 Feb 2021", title: "Buddy vs. Travis CI: A Detailed Comparison", url: "#" },
    { date: "30 Sept 2020", title: "Vuejs Global 2020: A Recap", url: "#" },
    { date: "8 Jun 2020", title: "Deploy a Gridsome App on Azure Static Web Apps", url: "#" },
    { date: "1 May 2020", title: "Soft Skills Every Software Developer Should Learn", url: "#" },
    { date: "13 Feb 2020", title: "Applying CSS :focus-within", url: "#" },
    { date: "7 Feb 2020", title: "TIL: CSS Media Queries", url: "#" },
    { date: "30 Dec 2019", title: "2019 In Review; My Year of Grace", url: "#" },
    { date: "10 Nov 2019", title: "Reflections from Microsoft Ignite 2019", url: "#" }
  ];

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl mt-4">
      {/* Intro Section */}
      <section className="mb-12">
        <h1 className="text-sm md:text-2xl font-bold font-menlo text-title">Hi there!</h1>
        <p className="font-menlo font-light text-sm text-title leading-relaxed mb-6 mt-6">
          I'm Gift Egwuenu, a developer advocate at Cloudflare, focusing on the developer
          platform. My role involves simplifying complex technical concepts and empowering
          developers to build applications with Workers. My goal is to make technology
          accessible and comprehensible to everyone. This website serves as my digital
          garden, a space where I share my learnings and document my professional journey.
        </p>
        
        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <span className="font-menlo font-light text-sm text-title">Find me on</span>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-title hover:text-content dark:text-content dark:hover:text-title transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Work</h2>
        <div className="space-y-4">
          {workExperience.map((work, index) => (
            <div key={index}>
              <a
                href={work.url}
                className="text-gray-800 dark:text-gray-200 hover:underline font-medium"
              >
                {work.company}
              </a>
              <p className="text-gray-600 dark:text-gray-400">{work.description}</p>
            </div>
          ))}
          <a href="#" className="text-gray-800 dark:text-gray-200 hover:underline block">
            More Places I've worked
          </a>
        </div>
      </section>

      {/* Posts Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Posts</h2>
        <div className="space-y-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex">
              <span className="text-gray-500 dark:text-gray-400 w-24 flex-shrink-0">
                {post.date}
              </span>
              <a
                href={post.url}
                className="text-gray-800 dark:text-gray-200 hover:underline"
              >
                {post.title}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;