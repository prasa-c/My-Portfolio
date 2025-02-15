"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Orchid Foods",
    description: "Food delivery application for a local shop called 'Orchid Foods' using technologies like React+Vite, Express, Node JS, Tailwind CSS, MongoDB and Stripe",
    image: "./images/projects/1.png",
    alt:"image",
    tag: ["All", "Projects"],
    gitUrl: "https://github.com/prasa-c/Orchid-Foods-Complete",
    previewUrl: "./images/projects/1.png",
  },
  {
    id: 2,
    title: "BiteVote",
    description: "Simple voting app that allows users to vote on a list of options. Build using Flutter, FireBase and FireStore",
    image: "./images/projects/2.png",
    alt:"image",
    tag: ["All", "Projects"],
    gitUrl: "https://github.com/prasa-c/biteVote/tree/main",
    previewUrl: "./images/projects/2.png",
  },
  {
    id: 3,
    title: "Library_Management_System",
    description: "Web-based application designed to streamline the management of libraries by offering features like book management, user management, and efficient tracking of borrowed and returned books. Used technologies were React, JSP and MySQL",
    image: "./images/projects/3.png",
    alt:"image",
    tag: ["All", "Projects"],
    gitUrl: "https://github.com/prasa-c/Library_Management_System",
    previewUrl: "./images/projects/3.png",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS to showcase my projects, skills, and achievements. It’s fast, responsive, and easy to navigate, with a clean design and smooth user experience. ",
    image: "./images/projects/4.png",
    alt:"image",
    tag: ["All", "Projects"],
    gitUrl: "https://github.com/prasa-c/My-Portfolio",
    previewUrl: "./images/projects/4.png",
  },
  {
    id: 5,
    title: "Mini Projects",
    description: "Minimalist and useful small applications built by using JavaScript.  1️⃣ Fixed_Deposit_Calculator. 2️⃣ Live_Character_Counting_App. 3️⃣ NewsLetter_Popup_Application. 4️⃣ Random_Number_Generator. 5️⃣ Weight_Converter.",
    image: "./images/projects/5.png",
    alt:"image",
    tag: ["All", "Projects"],
    gitUrl: "https://github.com/prasa-c/JavaScript-Mini-Projects",
    previewUrl: "./images/projects/5.png",
  },
  {
    id: 6,
    title: "Netflix Clone",
    description: "Clone page of NEtflix using Tailwind CSS.",
    image: "./images/projects/6.png",
    alt:"image",
    tag: ["All", "Projects"],
    gitUrl: "https://github.com/prasa-c/Netflix-Landing-Page-Design",
    previewUrl: "./images/projects/6.png",
  },
  {
    id: 7,
    title: "BiteVote",
    description: "Simple voting app that allows users to vote on a list of food options. ",
    image: "./images/projects/2.png",
    alt:"image",
    tag: ["All", "UI/UX Designs"],
    gitUrl: "https://www.figma.com/design/J4hzDv0yQxN7A48MUlc4N8/BiteVote?node-id=0-1&t=2JPUtFd4oeW0Wfss-1",
    previewUrl: "https://www.figma.com/proto/J4hzDv0yQxN7A48MUlc4N8/BiteVote?node-id=1-8&p=f&t=hb2HUhmDwgeZtkkS-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A5&show-proto-sidebar=1",
  },
  {
    id: 8,
    title: "Food Delivery Application",
    description: "A user-friendly food delivery app UI with smooth navigation, vibrant design, and easy ordering.",
    image: "./images/projects/8.png",
    alt:"image",
    tag: ["All", "UI/UX Designs"],
    gitUrl: "https://www.figma.com/design/8V4qzSSv5EIcAEopHHtj1W/Food-Delivery-App?node-id=0-1&p=f&t=c24cysERuikvT0yp-0",
    previewUrl: "https://www.figma.com/proto/8V4qzSSv5EIcAEopHHtj1W/Food-Delivery-App?node-id=2-640&p=f&t=Ii8Di9gUjHuuDx8N-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A640",
  },
  {
    id: 9,
    title: "Orchid Foods",
    description: "This is the 1st suggested design for the 'Orchid Foods' App.",
    image: "./images/projects/9.png",
    alt:"image",
    tag: ["All", "UI/UX Designs"],
    gitUrl: "https://www.figma.com/design/viJZ0bThFUtAn93ZTv7itM/Design---1?node-id=4-135&t=QkImJfvrwng3LVdD-1",
    previewUrl: "https://www.figma.com/proto/viJZ0bThFUtAn93ZTv7itM/Design---1?node-id=4-136&t=mFR7mwonteek2Pwy-1&scaling=scale-down&content-scaling=fixed&page-id=4%3A135&starting-point-node-id=4%3A136&show-proto-sidebar=1",
  },
  {
    id: 10,
    title: "Plex TV",
    description: "UI for the Movies & Tv Series streaming website.",
    image: "./images/projects/10.png",
    alt:"image",
    tag: ["All", "UI/UX Designs"],
    gitUrl: "https://www.figma.com/design/bbsLauWKGJEkPTHAgsJ7MZ/Design---2?node-id=1-84&p=f&t=QkImJfvrwng3LVdD-0",
    previewUrl: "https://www.figma.com/proto/bbsLauWKGJEkPTHAgsJ7MZ/Design---2?node-id=1-89&p=f&t=PSAnGJOth3gL9hLi-1&scaling=contain&content-scaling=fixed&page-id=1%3A84&starting-point-node-id=1%3A85&show-proto-sidebar=1",
  },
  {
    id: 11,
    title: "Musify",
    description: "UI for Music streaming platform.",
    image: "./images/projects/11.png",
    alt:"image",
    tag: ["All", "UI/UX Designs"],
    gitUrl: "https://www.figma.com/design/c9MYtrH6pRGcPHlbdURsVY/Design---3?node-id=0-1&t=QkImJfvrwng3LVdD-1",
    previewUrl: "https://www.figma.com/proto/c9MYtrH6pRGcPHlbdURsVY/Design---3?node-id=1-297&t=qN1veJcA9S2w52je-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A297&show-proto-sidebar=1",
  },
  {
    id: 12,
    title: "Summari Z",
    description: "Article Summarizing website that use Open Ai Technologies with React JS, Vite, Tailwind CSS and Redux Toolkit",
    image: "./images/projects/12.png",
    alt:"image",
    tag: ["All", "Projects"],
    gitUrl: "https://github.com/prasa-c/Summari-Z",
    previewUrl: "./images/projects/12.png",
  },
  {
    id: 13,
    title: "Food App",
    description: "Simple yet user-friendly food delivery application designed for seamless navigation and convenience.",
    image: "./images/projects/13.png",
    alt:"image",
    tag: ["All", "UI/UX Designs"],
    gitUrl: "https://www.figma.com/proto/kuA2kXHa3AtN8I2PsYcz3W/Untitled?node-id=1-3&p=f&t=kqq6hGMql1JUDsN4-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3",
    previewUrl: "./images/projects/13.png",
  },
  {
    id: 14,
    title: "RootVPN",
    description: "A visually appealing landing page designed for the VPN service, “RootVPN”.",
    image: "./images/projects/14.png",
    alt:"image",
    tag: ["All", "UI/UX Designs"],
    gitUrl: "https://www.figma.com/proto/zloBOhbrRFkG8E30wIQfqG/Landing-page-for-a-VPN?node-id=1-2&p=f&t=GgczCx0GceDILvul-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    previewUrl: "./images/projects/14.png",
  },
  {
    id: 15,
    title: "Coffee Shop",
    description: "Mobile application designed for an international coffee company, offering an engaging and immersive user experience.",
    image: "./images/projects/15.png",
    alt:"image",
    tag: ["All", "UI/UX Designs"],
    gitUrl: "https://www.figma.com/proto/fQq5ZSYrlulP6oeSzJilh3/Coffee-Shop?node-id=1-498&p=f&t=ePk7fMvaj7GERIuj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A498",
    previewUrl: "./images/projects/15.png",
  },
  {
    id: 16,
    title: "ChatBot",
    description: "Modern chatbot UI design showcasing interactive animations, created using Figma.",
    image: "./images/projects/16.png",
    alt:"image",
    tag: ["All", "UI/UX Designs"],
    gitUrl: "https://www.figma.com/proto/z2yGkmJC03N9Oq9CGFdjaa/Chatbot-App?node-id=35-49&p=f&t=UcqHq1P3OSIojRzC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A133",
    previewUrl: "./images/projects/16.png",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-5 md:mb-10">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Projects"
          isSelected={tag === "Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX Designs"
          isSelected={tag === "UI/UX Designs"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
