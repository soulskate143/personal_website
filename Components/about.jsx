import styles from '../app/page.module.css'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <h2>About Me</h2>
      <p>
      A developer passionate about merging the digital and physical worlds. 
      I specialize in architecting immersive web applications and scalable IoT ecosystems, 
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
          <progress value="90" max="100"></progress>
        </div>
        <div className={styles.skillItem} data-skill="JavaScript">
          <label>Java</label>
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
        <div className={styles.skillItem} data-skill="Python">
          <label>Python</label>
          <progress value="60" max="100"></progress>
        </div>
        <div className={styles.skillItem} data-skill="C">
          <label>C</label>
          <progress value="85" max="100"></progress>
        </div>
      </section>

      <h2>Work Experience</h2>
      <div className={styles.experienceList}>
      <div className={styles.experienceItem}>
          <h4>Jr. System Developer</h4>
          <p className={styles.company}>Avega Bros. Integrated Shipping Corp.</p>
          <p className={styles.duration}>Feb 2024 - Present</p>
          <ul>
            <li>Designed & deployed software solutions for maritime vessels, including real-time monitoring systems, navigation tools, and IoT-integrated platforms to optimize fleet performance</li>
            <li>Engineered robust hardware prototypes for maritime applications, from sensor networks for predictive maintenance to custom IoT devices enabling seamless ship-to-shore communication</li>
            <li>Led end-to-end hardware installation onboard vessels, including system configuration, and compliance testing to ensure seamless integration with existing maritime infrastructure</li>
            <li>Spearheaded rapid prototyping for hardware projects, conducting technical assessments, cost-benefit analyses, and scalability evaluations to align innovations with operational and business goals</li>
            <li>Developed vessel surveillance system for enhanced onboard surveillance and data-driven decision-making</li>
          </ul>
        </div>

        <div className={styles.experienceItem}>
          <h4>Developer & CEO</h4>
          <p className={styles.company}>DIS I.T. Services</p>
          <p className={styles.duration}>Jun 2020 - Aug 2022</p>
          <ul>
            <li>CEO of my own start up company</li>
            <li>Asses international clients (mostly Japanese companies)</li>
            <li>Developed and implemented systems and applications for Japanese companies</li>
            <li>Worked with AWS(LightSail, EC2, Route53)</li>
            <li>Assess prototyping for smart cameras for Japanese companies</li>
          </ul>
        </div>

        <div className={styles.experienceItem}>
          <h4>IT Staff</h4>
          <p className={styles.company}>LGU Valencia, Bohol</p>
          <p className={styles.duration}>Dec 2020 - May 2021</p>
          <ul>
            <li>Processed Municipal files on different platforms</li>
            <li>Asses technical troubleshooting on office equipment’s</li>
            <li>Edited Municipal banners, logos, and tarpaulins</li>
          </ul>
        </div>

        <div className={styles.experienceItem}>
          <h4>Volunteer IT Staff</h4>
          <p className={styles.company}>CTU IoT Laboratory</p>
          <p className={styles.duration}>Sep 2019 - Dec 2019</p>
          <ul>
            <li>Created various IoT projects</li>
            <li>Assembled solar batteries and panels</li>
            <li>Facilitated school meetings</li>
          </ul>
        </div>
      </div>

    </section>
  );
}
