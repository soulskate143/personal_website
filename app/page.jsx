"use client";
import { useState, useEffect } from 'react';
import Header from '../Components/header';
import styles from '../app/page.module.css';
import Footer from '../Components/footer';
import About from '../Components/about';
import LogoHover from '../Components/LogoHover';
import Projects from '../Components/project';
import Contact from '../Components/contact';

export default function Home() {
  const words = ["Web", "IoT", "Software", "Hardware"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.container}>
      <Header />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGlass}>
          <LogoHover className={styles.logo2} />

          {/* Title with stacked layout */}
          <h1 className={styles.title}>
            <span>Building the Future of</span>
            <span className={styles.animatedWordContainer}>
              {words.map((word, index) => (
                <span
                  key={word}
                  className={`${styles.animatedWord} ${
                    index === currentWordIndex ? styles.show : styles.hide
                  }`}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>




          <p className={styles.subtitle}>
            Hello, I'm <span className={styles.bold}>Marvin</span>. A versatile Developer crafting immersive futuristic solutions that push boundaries.
          </p>

          <div className={styles.buttons}>
            <a href="#projects" className={styles.button} aria-label="Explore My Work">Explore My Work</a>
            <a href="#contacts" className={styles.buttonOutline} aria-label="Get in Touch">Get in Touch</a>
          </div>
        </div>
      </section>

      <About id="about" />
      <Projects id="projects" />
      <Contact id="contacts" />

      {/* Footer */}
      <Footer />
    </main>
  );
}
