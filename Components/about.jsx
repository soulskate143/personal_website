import styles from '../app/page.module.css'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h2>About Me</h2>
      <p>
      I’m a developer passionate about merging the digital and physical worlds. 
      As a developer, I specialize in architecting immersive web applications and scalable IoT ecosystems, 
      bridging the gap between elegant software interfaces and intelligent hardware systems.
      </p>

      {/* Skills Section */}
      <section className={styles.skillsSection}>
        <h2>My Skills</h2>
        <div className={styles.skillItem} data-skill="HTML">
          <label>HTML</label>
          <progress value="90" max="100"></progress>
        </div>
        <div className={styles.skillItem} data-skill="CSS">
          <label>CSS</label>
          <progress value="85" max="100"></progress>
        </div>
        <div className={styles.skillItem} data-skill="JavaScript">
          <label>JavaScript</label>
          <progress value="80" max="100"></progress>
        </div>
        <div className={styles.skillItem} data-skill="React">
          <label>React</label>
          <progress value="75" max="100"></progress>
        </div>
        <div className={styles.skillItem} data-skill="Node.js">
          <label>Node.js</label>
          <progress value="70" max="100"></progress>
        </div>
        <div className={styles.skillItem} data-skill="Next.js">
          <label>Next.js</label>
          <progress value="85" max="100"></progress>
        </div>
      </section>

      <h2>Work Experience</h2>
      <div className={styles.experienceList}>
        <div className={styles.experienceItem}>
          <h4>Full-Stack Developer</h4>
          <p className={styles.company}>Tech Innovators Inc.</p>
          <p className={styles.duration}>Jan 2022 - Present</p>
          <ul>
            <li>Developed scalable web applications using Next.js and React, reducing load times by 30%.</li>
            <li>Integrated Three.js for immersive 3D visualizations, enhancing user engagement.</li>
            <li>Collaborated with cross-functional teams to deliver IoT solutions for smart home devices.</li>
          </ul>
        </div>

        <div className={styles.experienceItem}>
          <h4>IoT Developer</h4>
          <p className={styles.company}>FutureTech Labs</p>
          <p className={styles.duration}>Jun 2020 - Dec 2021</p>
          <ul>
            <li>Designed and implemented firmware for IoT devices, improving energy efficiency by 25%.</li>
            <li>Built a real-time monitoring system using MQTT and Node.js for industrial IoT applications.</li>
            <li>Optimized device communication protocols, reducing latency by 40%.</li>
          </ul>
        </div>

        <div className={styles.experienceItem}>
          <h4>Frontend Developer</h4>
          <p className={styles.company}>WebCraft Studios</p>
          <p className={styles.duration}>Mar 2018 - May 2020</p>
          <ul>
            <li>Created responsive and interactive user interfaces using React and CSS3.</li>
            <li>Improved website performance by implementing lazy loading and code splitting.</li>
            <li>Worked closely with designers to ensure pixel-perfect implementations.</li>
          </ul>
        </div>
      </div>

    </section>
  );
}
