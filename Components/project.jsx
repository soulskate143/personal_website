"use client";
import { useState } from "react";
import styles from '../app/page.module.css'

const softwareProjects = [
  {
    title: "Stars",
    description: "A comprehensive digital platform designed to monitor, analyze, and optimize maritime operations in real time",
    imageUrl: "/stars/2.png",
    link: "/projects/software1",
  },
  {
    title: "Nayuta Inquiry",
    description: "A digital platform that automates request management, enabling users to submit, and resolve queries in real time",
    imageUrl: "/inquiry/1.png",
    link: "/projects/software2",
  },
  {
    title: "Ehome",
    description: "A cutting-edge ecosystem that seamlessly integrates smart appliance control with robust security protocols",
    imageUrl: "/ehome/4.jpg",
    link: "/projects/software2",
  },
];

const hardwareProjects = [
  {
    title: "GPS",
    description: "The hardware system for my STARS project, used for retrieving NMEA data",
    imageUrl: "/gps/1.jpg",
    link: "/projects/hardware1",
  },
  {
    title: "Disaster",
    description: "A hardware system used in remote locations to detect floods, rain, wind, and alarm",
    imageUrl: "/disaster/1.jpg",
    link: "/projects/hardware2",
  },
  {
    title: "Cloud Biometrics",
    description: "A biometrics prototype used for remote locations directly connected to Firebase",
    imageUrl: "/bio/2.jpg",
    link: "/projects/hardware2",
  },
  {
    title: "IP Cam",
    description: "ESP32 Camera prototype used for remote streaming and recording",
    imageUrl: "/cam/2.jpg",
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
          <div
            key={index}
            className={styles.card}
          >
            <div className={styles.cardContent}>
              {/* Project Image Background */}
              <div
                className={styles.projectImageBackground}
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                  backgroundSize: "cover", 
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                }}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className={styles.projectLink}>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
