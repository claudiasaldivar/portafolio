"use client";
/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const HomePage: FC = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/claudiasaldivar" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/claudia-saldivar/" },
    { icon: <Mail size={20} />, url: "mailto:claudiasaldivar493@@gmail.com" }
  ];

  const workExperience = [
    {
      company: "Softmods",
      description: "I lead the team, providing support and guidance to developers while also contributing to the development of both front-end and back-end solutions, as well as overseeing the deployment of applications.",
      url: "#"
    },
    {
      company: "Fractall",
      description: "I led the development of the front-end using React and Web3, integrating various services for Ethereum. I also worked with low-code platforms, including Bubble.io, to streamline application development",
      url: "#"
    },
    {
      company: "LoftMX",
      description: "I served as Frontend Development Lead, responsible for creating and maintaining the company’s platforms. I also led a development team, providing mentorship and support to foster their professional growth.",
      url: "#"
    }
  ];

  const blogPosts = [
    { date: "6 Nov 2024", title: "Show Your Work!", url: "portafolio/post/1" },
    { date: "23 Mar 2021", title: "Delete Multiple Branches in Git", url: "#" },
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
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Intro Section */}
      <section className="mb-12">
        <h1 className="text-md md:text-2xl font-bold font-menlo dark:text-title text-subtitles">Hi there!</h1>
        <p className="font-menlo font-light text-sm dark:text-title text-subtitles leading-relaxed mb-6 mt-6">
          I'm <span className='dark:text-content text-content2'>Claudia Saldivar</span> a Full-stack developer specializing in web applications and 
          microservices. I work with technologies like JavaScript, React, Next.js, Django, Flask, Laravel, and databases such as Postgres, Mongo, 
          and MySQL. I’m focused on creating user-friendly applications while enhancing my technical skills and expanding my knowledge in 
          Site Reliability Engineering (SRE). This space is my digital portfolio, where I share my projects and insights from my developer journey.
        </p>
        
        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <span className="font-menlo font-light text-sm dark:text-title text-subtitles">Find me on</span>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-content dark:text-title text-subtitles dark:hover:text-title transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </section>

      {/* Work Section */}
      <section className="mb-12">
        <h2 className="text-md md:text-2xl font-bold font-menlo dark:text-title text-subtitles">Work</h2>
        <div className="font-menlo font-light text-sm dark:text-title text-subtitles leading-relaxed mb-6 mt-6">
          {workExperience.map((work, index) => (
            <div key={index} className='flex py-2'>
              <a
                href={work.url}
                className="dark:text-title text-subtitles underline font-medium pr-2"
              >
                {work.company}
              </a>
              <p className="dark:text-title text-subtitles">&nbsp;{work.description}</p>
            </div>
          ))}
          <a href="https://www.linkedin.com/in/claudia-saldivar/" target="_blank" className="dark:text-title text-subtitles font-bold hover:underline block py-2">
            More Places I've worked
          </a>
        </div>
      </section>

      {/* Posts Section */}
      <section>
        <h2 className="text-md md:text-2xl font-bold font-menlo dark:text-title text-subtitles">Posts</h2>
        <div className="font-menlo font-light text-sm dark:text-title text-subtitles leading-relaxed mb-6 mt-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col md:flex-row py-1">
            <div className="flex items-center md:pr-2 min-w-[120px]">
              <span className="dark:text-title text-subtitles">
                {post.date}
              </span>
            </div>
            <div className="flex items-start md:pl-2">
              <a
                href={post.url}
                className="dark:text-title text-subtitles underline font-medium flex-1"
              >
                {post.title}
              </a>
            </div>
          </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;