import styles from '../app/page.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiC } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className={styles.html} /> },
  { name: "CSS", icon: <FaCss3Alt className={styles.css} /> },
  { name: "JavaScript", icon: <FaJs className={styles.js} /> },
  { name: "React", icon: <FaReact className={styles.react} /> },
  { name: "Node.js", icon: <FaNodeJs className={styles.node} /> },
  { name: "Next.js", icon: <SiNextdotjs className={styles.next} /> },
  { name: "Python", icon: <FaPython className={styles.python} /> },
  { name: "C", icon: <SiC className={styles.c} /> },
  { name: "Java", icon: <FaJava className={styles.java} /> },
  { name: "MySQL", icon: <FaDatabase className={styles.mysql} /> },
];

const certificates = [
  {
    name: "HTML/CSS",
    provider: "TestDome",
    url: "https://www.testdome.com/certificates/4413a8aca3b341999ba9e3eed92fd813",
  },
];

export default function About() {
    useEffect(() => {
    // Dynamically add TestDome CSS for certificate styling
    const link = document.createElement("link");
    link.href = "https://www.testdome.com/content/certificates/embed.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.head.appendChild(link);
    }, []);
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
      <h2 className={styles.title}>My Skillset</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillItem}>
            {skill.icon}
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
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

            {/* Certificates Section */}
      <section className={styles.certificatesSection}>
        <h2>Certificates</h2>
        <div className={styles.certificatesContainer}>
          {certificates.map((certificate) => (
            <a 
              key={certificate.name} 
              href={certificate.url} 
              className="testdome-certificate-stamp gold"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="testdome-certificate-name">Marvin Toh</span>
              <span className="testdome-certificate-test-name">{certificate.name}</span>
              <span className="testdome-certificate-card-logo">TestDome<br/>Certificate</span>
            </a>
          ))}
        </div>
      </section>

    </section>
  );
}
