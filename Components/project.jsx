"use client";
import { useRef, useState } from "react";
import styles from "../app/page.module.css";
import Modal from "@mui/material/Modal";
import { Box, IconButton, Typography, Link} from "@mui/material";
import { IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from 'next/image';


const softwareProjects = [
  {
    title: "Stars",
    description: "A comprehensive digital platform designed to monitor, analyze, and optimize maritime operations in real time",
    description2: "A comprehensive digital solution that integrates advanced technologies to monitor, analyze, and optimize maritime activities in real time. Designed for ports, shipping companies, and logistics operators, the platform enhances safety, efficiency, and compliance across maritime ecosystems. Visit  https://stars.avegabros.org",
    images: ["/stars/1.png", "/stars/2.png", "/stars/3.png", "/stars/4.png", "/stars/5.png", "/stars/6.png", 
      "/stars/7.png", "/stars/8.png", "/stars/9.png", "/stars/10.png", "/stars/11.png", "/stars/12.png", "/stars/13.png"],
    languages: [
      { name: "Next.js", logo: "/icons/nextjs.png" }
    ],
    web: "https://stars.avegabros.org",
  },
  
  {
    title: "Nayuta Inquiry",
    description: "A digital platform that automates request management, enabling users to submit, and resolve queries in real time",
    description2: "A dynamic digital platform that streamlines request management, empowering users to effortlessly submit, track, and resolve queries in real-time with enhanced efficiency and transparency.",
    images: ["/inquiry/1.png", "/inquiry/2.jpg", "/inquiry/3.jpg", "/inquiry/4.jpg", "/inquiry/5.jpg", "/inquiry/6.jpg", "/inquiry/7.jpg"],
    languages: [
      { name: "php", logo: "/icons/php.png" }
    ]
  },
  {
    title: "Ehome",
    description: "A cutting-edge ecosystem that seamlessly integrates smart appliance control with robust security protocols",
    description2: "A cutting-edge mobile IoT ecosystem that seamlessly integrates smart appliance control with advanced security protocols, enabling real-time automation, remote monitoring, and AI-driven insights for a smarter and more secure connected experience.",
    images: ["/ehome/1.jpg", "/ehome/2.jpg", "/ehome/3.jpg", "/ehome/4.jpg", "/ehome/5.jpg", "/ehome/6.jpg", "/ehome/7.jpg"],
    languages: [
      { name: "Kotlin", logo: "/icons/kotlin.png" }
    ]
  },
];

const hardwareProjects = [
  {
    title: "GPS",
    description: "The hardware system used for my STARS project, used for retrieving NMEA data",
    description2: "GPS that enables real-time location tracking, smart navigation, and seamless data integration, ensuring precise positioning, enhanced security, and optimized fleet or personal mobility management.",
    images: ["/gps/1.jpg", "/gps/5.mp4", "/gps/3.jpg", "/gps/4.jpg", "/gps/2.jpg", "/gps/6.mp4"],
    languages: [
      { name: "Java", logo: "/icons/java.png" }
    ]
  },
  {
    title: "Disaster",
    description: "A hardware system used in remote locations to detect floods, rain, wind, and alarm",
    description2: "A rugged IoT-enabled hardware system designed for remote locations, capable of detecting floods, rainfall, and wind conditions in real time. Equipped with smart sensors and an automated alarm system, it ensures early warnings, enhances disaster preparedness, and enables rapid response to environmental hazards.",
    images: ["/disaster/1.jpg", "/disaster/2.jpg", "/disaster/3.jpg", "/disaster/4.jpg", "/disaster/5.jpg"],
    languages: [
      { name: "Java", logo: "/icons/Java.png" }
    ],
  },
  {
    title: "Cloud Biometrics",
    description: "A biometrics prototype used for remote locations directly connected to Firebase",
    description2: "A biometrics prototype designed for remote locations, seamlessly integrated with Firebase for real-time authentication and secure data storage. Equipped with advanced fingerprint recognition technology, it enables instant identity verification, remote access control, and centralized user management with cloud-based synchronization.",
    images: ["/bio/1.jpg", "/bio/2.jpg", "/bio/3.mp4", "/bio/4.mp4"],
    languages: [
      { name: "Java", logo: "/icons/Java.png" }
    ]
  },
  {
    title: "IP Cam",
    description: "ESP32 Camera prototype used for remote streaming and recording",
    description2: "ESP32 Camera prototype used for remote streaming and recording",
    images: ["/cam/1.jpg", "/cam/2.jpg", "/cam/3.jpg", "/cam/5.mp4"],
    languages: [
      { name: "Java", logo: "/icons/Java.png" }
    ]
  },
];


export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("software");
  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);
  

  const projectsToDisplay = selectedCategory === "software" ? softwareProjects : hardwareProjects;
  const swiperRef = useRef(null);
  

  const handleCardClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index, 500);
    }
  };


  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>My Projects</h2>

      <div className={`${styles.toggleContainer} ${selectedCategory === "hardware" ? styles.hardware : ""}`}>
  <button 
    className={`${styles.toggleButton} ${selectedCategory === "software" ? styles.active : ""}`} 
    onClick={() => setSelectedCategory("software")}
  >
    Software
  </button>
  <button 
    className={`${styles.toggleButton} ${selectedCategory === "hardware" ? styles.active : ""}`} 
    onClick={() => setSelectedCategory("hardware")}
  >
    Hardware
  </button>
</div>


      {/* Project Cards with Swiper Carousel */}
      <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, EffectCoverflow]}
          breakpoints={{
            
            320: {
              slidesPerView: 1.5,
              spaceBetween: 5
            },
           
            640: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 20
            }
          }}
          spaceBetween={10}
          slidesPerView={2.5}
          navigation={false}
         
          effect="coverflow"
          centeredSlides={true}
          coverflowEffect={{
            rotate: 20,
            stretch: 50,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={styles.swiperContainer}
      >
        {projectsToDisplay.map((project, index) => (
          <SwiperSlide key={index}  className={styles.cardSlide}>
            <div className={styles.cardContent} onClick={() => handleCardClick(index)}>
              <div
                className={styles.projectImageBackground}
                style={{
                  backgroundImage: `url(${project.images[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "200px",
                  width: "100%",
                  borderRadius: "10px 10px 0px 0px",
                }}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className={styles.projectLink} onClick={() => handleOpen(project)}>
                View Project
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for Project Details */}
      <Modal 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="project-modal-title" 
        aria-describedby="project-modal-description"
      >
        <Box 
          sx={{
            width: { xs: "95%", sm: "80%", md: "60%" },
            maxWidth: "800px",
            margin: "auto",
            backgroundColor: "#fff",
            padding: { xs: "16px", sm: "24px", md: "32px" },
            borderRadius: "12px",
            marginTop: "5%",
            position: "relative",
            boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.3)",
          }}
        >
    {/* Close Button */}
    <IconButton 
      onClick={handleClose} 
      sx={{ 
        position: "absolute", 
        top: 16, 
        right: 16, 
        color: "#333",
        transition: "0.3s",
        "&:hover": { color: "#ff5722" }
      }}
    >
      <IoClose size={28} />
    </IconButton>

    {/* Modal Content */}
    {selectedProject && (
      <>
        <Typography 
          id="project-modal-title" 
          variant="h5" 
          fontWeight="bold" 
          textAlign="center" 
          gutterBottom
        >
          {selectedProject.title}
        </Typography>
        <Typography 
          id="project-modal-description" 
          variant="body1" 
          textAlign="center" 
          color="text.secondary"
          sx={{ marginBottom: "16px" }}
        >
          {selectedProject.description2}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            marginBottom: 3,
          }}
        >
          {/* "Language Use:" Text */}
          <Typography variant="h6">
            Language Use:
          </Typography>

          {/* Logos of Used Programming Languages */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {selectedProject.languages?.map((language, index) => (
              <Box key={index} sx={{ width: 40, height: 40, position: 'relative' }}>
                <Image 
                  src={language.logo} 
                  alt={language.name} 
                  layout="fill" 
                  objectFit="contain" 
                />
              </Box>
            ))}
          </Box>

          {/* Website Link */}
          {selectedProject.web && (
            <Link 
              href={selectedProject.web} 
              target="_blank" 
              rel="noopener noreferrer"
              underline="hover"
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              Visit Website
            </Link>
          )}
        </Box>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{ delay: 3000 }}
          className={styles.swiperContainer}
          style={{ borderRadius: "8px", overflow: "hidden" }}
        >
          {selectedProject.images.map((image, index) => (
            <SwiperSlide key={index}>
              {image.endsWith(".mp4") ? (
                <video
                  controls
                  style={{
                    width: "100%",
                    height: "350px",
                    maxHeight: "400px",
                    objectFit: "contain",
                    borderRadius: "8px",
                    backgroundColor: "#000",
                  }}
                >
                  <source src={image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                  }}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )}
  </Box>
</Modal>



    </section>
  );
}
