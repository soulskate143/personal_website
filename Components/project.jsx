"use client";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import styles from '../app/page.module.css'

const softwareProjects = [
  {
    title: "Software Project 1",
    description: "An innovative web app using Next.js and Three.js.sssss",
    imageUrl: "/logo2.png",
    link: "/projects/software1",
  },
  {
    title: "Software Project 2",
    description: "A data visualization dashboard for real-time analytics.",
    imageUrl: "/logo2.png",
    link: "/projects/software2",
  },
  {
    title: "Software Project 3",
    description: "A data visualization dashboard for real-time analytics.",
    imageUrl: "/software2.jpg",
    link: "/projects/software2",
  },
];

const hardwareProjects = [
  {
    title: "Hardware Project 1",
    description: "An innovative web app using Next.js and Three.js.sssss",
    imageUrl: "/logo2.png",
    link: "/projects/hardware1",
  },
  {
    title: "Hardware Project 2",
    description: "A wearable device for fitness tracking.",
    imageUrl: "/hardware2.jpg",
    link: "/projects/hardware2",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("software");

  // Conditionally render projects based on the selected category
  const projectsToDisplay =
    selectedCategory === "software" ? softwareProjects : hardwareProjects;

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>My Projects</h2>

      {/* Category Selection */}
      <div className={styles.categorySelector}>
        <button
          className={selectedCategory === "software" ? styles.active : ""}
          onClick={() => setSelectedCategory("software")}
        >
          Software Projects
        </button>
        <button
          className={selectedCategory === "hardware" ? styles.active : ""}
          onClick={() => setSelectedCategory("hardware")}
        >
          Hardware Projects
        </button>
      </div>

      {/* Project Cards */}
      <div className={styles.gridContainer}>
        {projectsToDisplay.map((project, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.3}
            className={styles.card}
          >
            <div className={styles.cardContent}>
              <div
                className={styles.projectImageBackground}
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className={styles.projectLink}>
                View Project
              </a>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
