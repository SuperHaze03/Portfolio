import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
<<<<<<< HEAD
import Background from "../components/background";
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
=======
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

>>>>>>> 12ead7e765aebaa0996dd3f08b4bb317d1060e61
import './About.css';

const About = () => {
    const [isVisibleAbout, setIsVisibleAbout] = useState(false);
    const [isVisiblePortfolio, setIsVisiblePortfolio] = useState(false);
    const [isVisibleContact, setIsVisibleContact] = useState(false);
    const [activeSkill, setActiveSkill] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);
    const marqueeRef = useRef(null);
    const reverseMarqueeRef = useRef(null);
    const animationFrame = useRef(null);
    const reverseAnimationFrame = useRef(null);
    const startTime = useRef(null);
    const reverseStartTime = useRef(null);
    const pauseTime = useRef(0);
    const reversePauseTime = useRef(0);
<<<<<<< HEAD
    const [scrollRatio, setScrollRatio] = useState(0);

  
=======

>>>>>>> 12ead7e765aebaa0996dd3f08b4bb317d1060e61


    const [ref, inView] = useInView({
      threshold: 0.3,      // seberapa banyak elemen harus masuk viewport
      triggerOnce: true    // hanya sekali aktif
    });
    
    const formRef = useRef(null);
    
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    const [formStatus, setFormStatus] = useState({
      submitting: false,
      submitted: false,
      error: false,
      message: ''
    });
<<<<<<< HEAD
    const interpolateColor = (ratio) => {
      const r = Math.round(255 * (1 - ratio)); // merah → biru
      const g = 0;
      const b = Math.round(255 * ratio);
      return `rgb(${r},${g},${b})`;
    };
    const controls = useAnimation();
    
    useEffect(() => {
      const onScroll = () => {
        if (!ref.current) return;
    
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        let ratio = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);
        setScrollRatio(ratio);
      };
    
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll(); // hitung awal
    
      // Tambahan: animasi masuk
      if (inView) {
        controls.start("visible");
      }
    
      return () => window.removeEventListener("scroll", onScroll);
    }, [controls, inView]);
    
=======
    
    const controls = useAnimation();
    
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
>>>>>>> 12ead7e765aebaa0996dd3f08b4bb317d1060e61

    // Skill data
    const skills = [
        { name: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Next.js', 'Tailwind CSS'] },
        { name: 'Backend', items: ['Node.js', 'PHP', 'MySQL', 'MongoDB', 'Go'] },
        { name: 'Tools', items: ['Git',  'Figma', 'VS Code', 'NPM'] },
    ];

    // Portfolio projects data
    const projects = [
        {
            id: 1,
            title: "Inventory Gudang Dengan Fitur Scan Barcode",
            description: "Sistem manajemen inventaris gudang berbasis web dengan fitur scan barcode untuk memudahkan pencatatan barang masuk dan keluar. Dibangun dengan React, Node.js, dan MySQL untuk memastikan kinerja optimal dan keandalan data.",
            techStack: ["Laravel", "MySQL", "Bootstrap"],
            features: ["Scan Barcode", "Laporan Real-time", "Notifikasi Stok Minimum", "Ekspor Data Excel"],
            image: "/Portfolio/project/inventory.png",
            demoLink: "#",
            githubLink: "https://github.com/SuperHaze03/inventoryScan"
        },
        {
            id: 2,
            title: "Kopi Kadai Signature",
            description: "Sebuah pengalaman kopi yang revolusioner dengan desain yang modern, interaktif, dan visual yang memukau.",
            techStack: ["Vue.js", "PHP", "Laravel", "MySQL", "Tailwind CSS"],
            features: ["Mode Offline", "Multiple Payment Methods", "User Management", "Contact"],
            image: "/Portfolio/project/kopi.png",
            demoLink: "#",
            githubLink: "https://github.com/SuperHaze03/weatherApp"
        },
        {
            id: 3,
            title: "Galery Foto",
            description: "Platform aplikasi berbasis website galery foto atau Instagram dengan memiliki berbagai fitur menarik yang dapat digunakan untuk keseharian.",
            techStack: ["Laravel", "Sqlite", "Dbeaver", "Tailwind CSS"],
            features: ["Upload Image", "Add Friend", "Post image", "likes post"],
            image: "/Portfolio/project/galery.png",
            demoLink: "#",
            githubLink: "#"
        },
        {
            id: 4,
            title: "library App",
            description: "Aplikasi library yang sangat interaktif serta menarik yang memiliki berbagai fitur canggih seperti peminjaman dan pengembalian buku yang mudah, melihat daftar buku paling banyak dipinjam, serta adanya kurfanya yang memudahkan pengguna dalam mencari buku favorit mereka.",
            techStack: ["Laravel", "JavaScript", "MySQL", "BootstrapCSS"],
            features: ["Interaktif Website", "Data Books", "Analisys Favorite Book", "Rent Books"],
            image: "/Portfolio/project/library.png",
            demoLink: "#",
            githubLink: "#"
        },
        {
            id: 5,
            title: "Kabaroto Design",
            description: "Sebuah design website otomotif yang memberikan informasi sekedar otomotif yang sedang ramai dibicarakan oleh banyak orang.",
            techStack: ["HTML", "CSS", "Bootstrap", "MySQL"],
            features: ["Interactive Quizzes", "Progress Tracking", "Video Lectures", "Discussion Forums"],
            image: "/Portfolio/project/kabaroto.png",
            demoLink: "#",
            githubLink: "#"
        },
        {
            id: 6,
            title: "Weather Dashboard",
            description: "Aplikasi prakiraan cuaca real-time dengan visualisasi data yang menarik dan notifikasi perubahan cuaca ekstrem. Terintegrasi dengan API cuaca terkemuka untuk akurasi data yang tinggi.",
            techStack: ["ReactJS", "OpenWeatherAPI", "CSS Animation"],
            features: ["7-Day Forecast", "Location Detection", "Weather Alerts", "Historical Data"],
            image: "/Portfolio/project/gisApp.png",
            demoLink: "#",
            githubLink: "#"
        }
    ];
    
    // Contact information
    const contactInfo = {
        email: "glendlyreynaldy04@gmail.com",
        phone: "+62896-3192-4352",
        location: "Banten, Tanggerang Selatan, Pamulang",
        socialMedia: [
            { name: "LinkedIn", url: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit", icon: "/Portfolio/icon/linkin.png" },
            { name: "GitHub", url: "https://github.com/SuperHaze03", icon: "/Portfolio/icon/git.png" },
            { name: "Twitter", url: "https://twitter.com", icon: "/Portfolio/icon/x.png" },
            { name: "Instagram", url: "https://www.instagram.com/glenzly_/", icon: "/Portfolio/icon/ig.png" }
        ]
    };

    // Intersection Observer setup
    useEffect(() => {
        const aboutObserver = new IntersectionObserver(
            ([entry]) => {
                setIsVisibleAbout(entry.isIntersecting);
            },
            { threshold: 0.45 }
        );

        const portfolioObserver = new IntersectionObserver(
            ([entry]) => {
                setIsVisiblePortfolio(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const contactObserver = new IntersectionObserver(
            ([entry]) => {
                setIsVisibleContact(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (aboutRef.current) {
            aboutObserver.observe(aboutRef.current);
        }

        if (portfolioRef.current) {
            portfolioObserver.observe(portfolioRef.current);
        }

        if (contactRef.current) {
            contactObserver.observe(contactRef.current);
        }

        return () => {
            aboutObserver.disconnect();
            portfolioObserver.disconnect();
            contactObserver.disconnect();
        };
    }, []);

    // Scroll effect for color change
    useEffect(() => {
        const handleScroll = () => {
            const descriptions = document.querySelectorAll('.scroll-change-color');
            descriptions.forEach((desc) => {
                if (window.scrollY > 200) {
                    desc.classList.add('scrolled');
                } else {
                    desc.classList.remove('scrolled');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Right-to-left marquee animation
    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        const animate = (timestamp) => {
            if (!startTime.current) startTime.current = timestamp;
            const elapsed = timestamp - startTime.current - pauseTime.current;
            marquee.style.transform = `translateX(${-elapsed / 200}px)`;
            animationFrame.current = requestAnimationFrame(animate);
        };

        animationFrame.current = requestAnimationFrame(animate);

        const handleMouseEnter = () => {
            cancelAnimationFrame(animationFrame.current);
            pauseTime.current += performance.now() - startTime.current - pauseTime.current;
        };

        const handleMouseLeave = () => {
            startTime.current = performance.now();
            animationFrame.current = requestAnimationFrame(animate);
        };

        marquee.addEventListener('mouseenter', handleMouseEnter);
        marquee.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrame.current);
            marquee.removeEventListener('mouseenter', handleMouseEnter);
            marquee.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Left-to-right marquee animation
    useEffect(() => {
        const reverseMarquee = reverseMarqueeRef.current;
        if (!reverseMarquee) return;

        const animateReverse = (timestamp) => {
            if (!reverseStartTime.current) reverseStartTime.current = timestamp;
            const elapsed = timestamp - reverseStartTime.current - reversePauseTime.current;
            reverseMarquee.style.transform = `translateX(${elapsed / 10}px)`;
            reverseAnimationFrame.current = requestAnimationFrame(animateReverse);
        };

        reverseAnimationFrame.current = requestAnimationFrame(animateReverse);

        const handleReverseMouseEnter = () => {
            cancelAnimationFrame(reverseAnimationFrame.current);
            reversePauseTime.current += performance.now() - reverseStartTime.current - reversePauseTime.current;
        };

        const handleReverseMouseLeave = () => {
            reverseStartTime.current = performance.now();
            reverseAnimationFrame.current = requestAnimationFrame(animateReverse);
        };

        reverseMarquee.addEventListener('mouseenter', handleReverseMouseEnter);
        reverseMarquee.addEventListener('mouseleave', handleReverseMouseLeave);

        return () => {
            cancelAnimationFrame(reverseAnimationFrame.current);
            reverseMarquee.removeEventListener('mouseenter', handleReverseMouseEnter);
            reverseMarquee.removeEventListener('mouseleave', handleReverseMouseLeave);
        };
    }, []);

    
    

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const childVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const hoverVariants = {
        hover: { 
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus({
          submitting: true,
          submitted: false,
          error: false,
          message: 'Sending your message...'
        });
        
        // Konfigurasi EmailJS
        // Anda perlu mendaftar di emailjs.com dan mendapatkan:
        // 1. SERVICE_ID (dari Integration tab)
        // 2. TEMPLATE_ID (dari Email Templates tab)
        // 3. PUBLIC_KEY (dari Account tab)
        
        emailjs.sendForm(
          'service_82kfmip',
          'template_8aq0f6f',
          formRef.current,
          'trdG2aS-1vDZdJMkg'
        )
          .then((result) => {
            console.log('Email sent successfully:', result.text);
            setFormStatus({
              submitting: false,
              submitted: true,
              error: false,
              message: 'Your message has been sent! We will get back to you soon.'
            });
            
            // Reset form data
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
              setFormStatus(prev => ({ ...prev, submitted: false, message: '' }));
            }, 5000);
          })
          .catch((error) => {
            console.error('Error sending email:', error.text);
            setFormStatus({
              submitting: false,
              submitted: false,
              error: true,
              message: 'Failed to send message. Please try again or contact directly via email.'
            });
            
            // Hide error message after 5 seconds
            setTimeout(() => {
              setFormStatus(prev => ({ ...prev, error: false, message: '' }));
            }, 5000);
          });
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    return (
        <>
            <motion.section 
                ref={aboutRef} 
                className="about-section" 
                id="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div 
                    className="about-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisibleAbout ? "visible" : "hidden"}
                >
                    <motion.div 
                        className={`about-header ${isVisibleAbout ? 'visible' : ''}`}
                        variants={childVariants}
                    >
                        <h2 className="about-title">About Me</h2>
                    </motion.div>
                    <div className="about-content">
                        <motion.div 
                            className={`profile-container ${isVisibleAbout ? 'visible' : ''}`}
                            variants={childVariants}
                        >
                            <motion.div 
                                className="profile-wrapper"
                                whileHover={{ rotate: 0, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="profile-bg"></div>
                                <motion.img 
<<<<<<< HEAD
                                    src="me.jpeg" 
=======
                                    src="/Portfolio/me.jpeg" 
>>>>>>> 12ead7e765aebaa0996dd3f08b4bb317d1060e61
                                    alt="Glendly Raynaldy Kuma'at" 
                                    className="profile-image"
                                    initial={{ filter: "grayscale(100%)" }}
                                    whileHover={{ filter: "grayscale(0%)" }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            className={`about-text ${isVisibleAbout ? 'visible' : ''}`}
                            variants={childVariants}
<<<<<<< HEAD
                            ref={ref} style={{ color: interpolateColor(scrollRatio) }}
=======
>>>>>>> 12ead7e765aebaa0996dd3f08b4bb317d1060e61
                        >
                            <motion.h3 
                                className="about-subtitle-small"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                Hello, Welcome
                            </motion.h3>
                            <motion.h3 
                                className="about-subtitle"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                I'm Glendly Raynaldy Kuma'at
                            </motion.h3>
                            <motion.p 
                                className="about-description scroll-change-color"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
<<<<<<< HEAD
                                
=======
>>>>>>> 12ead7e765aebaa0996dd3f08b4bb317d1060e61
                            >
                              I am a Junior Web Developer with a passion for building web applications. With a foundational understanding of both frontend and backend development, I am continuously learning and honing my skills to become a Full-Stack Developer. I believe that the combination of appealing design, solid business logic, and optimal system performance is the key to creating an exceptional user experience.
                            </motion.p>
                            <motion.p 
                                className="about-description scroll-change-color"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
With a passion for learning and exploring new technologies, I am determined to build innovative and high-quality web solutions. As a Junior Developer, I have studied the following programming languages:
                            </motion.p>
                            <motion.div 
                                className="skills-section"
                                variants={childVariants}
                            >
                                <h4 className="skills-title">Keahlian Teknis</h4>
                                <div className="skills-container">
                                    {skills.map((skillGroup, index) => (
                                        <motion.div
                                            key={index}
                                            className={`skill-group skill-delay-${index + 1} ${isVisibleAbout ? 'visible' : ''}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 * index, duration: 0.5 }}
                                        >
                                            <motion.button
                                                onClick={() => setActiveSkill(activeSkill === skillGroup.name ? null : skillGroup.name)}
                                                className={`skill-button ${activeSkill === skillGroup.name ? 'active' : ''}`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {skillGroup.name}
                                            </motion.button>
                                            <AnimatePresence>
                                                {activeSkill === skillGroup.name && (
                                                    <motion.div 
                                                        className="skill-items"
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <motion.ul className="skill-list">
                                                            {skillGroup.items.map((item, i) => (
                                                                <motion.li 
                                                                    key={i} 
                                                                    className="skill-item"
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: 0.05 * i }}
                                                                    whileHover={{ scale: 1.1, color: '#FF5555' }}
                                                                >
                                                                    {item}
                                                                </motion.li>
                                                            ))}
                                                        </motion.ul>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
<<<<<<< HEAD
                                            
                                        </motion.div>
                                    ))}
                                </div>
                               
                            </motion.div>
                           
                        </motion.div>
                        <Background />  
=======
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
>>>>>>> 12ead7e765aebaa0996dd3f08b4bb317d1060e61
                    </div>
                    <motion.div 
                        className="tech-stack-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <div ref={marqueeRef} className="tech-stack-items">
                            {["html", "css", "js", "c++", "py"].map((tech, index) => (
                                <motion.div 
                                    key={index} 
                                    className="tech-stack-item"
                                    whileHover={{ 
                                        scale: 1.1, 
                                        backgroundColor: '#f8f8f8',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    <img src={`${tech}.png`} alt={tech} className="tech-icon" />
                                    <span>{tech}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="tech-stack-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                    >
                        <div ref={reverseMarqueeRef} className="tech-stack-items reverse-direction">
                            {["react", "vue", "next", "php", "go"].map((tech, index) => (
                                <motion.div 
                                    key={index} 
                                    className="tech-stack-item"
                                    whileHover={{ 
                                        scale: 1.1, 
                                        backgroundColor: '#f8f8f8',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    <img src={`${tech}.png`} alt={tech} className="tech-icon" />
                                    <span>{tech}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className={`fullstack-section ${isVisibleAbout ? 'visible' : ''}`}
                        initial={false}
                        animate={isVisibleAbout ? { opacity: 1, y: 50 } : { opacity: 0, y: 200 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.h3 
                            className="fullstack-title"
                            whileHover={{ color: '#FF7777' }}
                        >
                            Menjadi Full-Stack Developer
                        </motion.h3>
                        <motion.p className="fullstack-description">
                            Sebagai Full-Stack Developer, saya menguasai frontend dan backend, memungkinkan saya membangun aplikasi web yang efisien, responsif, dan terintegrasi.
                        </motion.p>
                        <motion.p className="fullstack-description">
                            Saya tidak hanya fokus pada tampilan antarmuka, tetapi juga memastikan logika bisnis, performa database, dan keamanan sistem berjalan optimal. Dengan pemahaman menyeluruh, saya dapat menyelesaikan bug, mengoptimalkan fitur, dan berkolaborasi efektif dalam tim. Saya juga selalu beradaptasi dengan teknologi terbaru agar aplikasi yang saya bangun tetap inovatif dan kompetitif.
                        </motion.p>
                    </motion.div>

                  
                </motion.div>
            </motion.section>

            <motion.section 
                ref={portfolioRef} 
                className={`portfolio-section ${isVisiblePortfolio ? 'visible' : ''}`} 
                id="portfolio"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={isVisiblePortfolio ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    My Projects
                </motion.h1>
                <motion.div 
                    className="portfolio-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisiblePortfolio ? "visible" : "hidden"}
                >
                    {projects.map((project) => (
                        <motion.div 
                            key={project.id} 
                            className="portfolio-item"
                            variants={childVariants}
                            whileHover="hover"
                            onClick={() => setSelectedProject(project)}
                        >
                            <motion.div className="project-image-container">
                                <motion.div 
                                    className="project-image-placeholder"
                                    whileHover={{ 
                                        filter: "brightness(1.2)",
                                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)"
                                    }}
                                    style={{ 
                                        backgroundColor: '#333', 
                                        height: '150px', 
                                        borderRadius: '8px',
                                        marginBottom: '15px',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                    backgroundImage: `url(${project.image})`,
                                    }}
                                >
                                    <motion.div 
                                        className="view-project-overlay"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        <span>View Details</span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                            <motion.h2
                                whileHover={{ color: '#FF5555' }}
                            >
                                {project.title}
                            </motion.h2>
                            <p>{project.description.substring(0, 100)}...</p>
                            <motion.div className="tech-tags">
                                {project.techStack.slice(0, 3).map((tech, index) => (
                                    <motion.span 
                                        key={index} 
                                        className="tech-tag"
                                        whileHover={{ scale: 1.1, backgroundColor: '#FF5555' }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                                {project.techStack.length > 3 && <span>+{project.techStack.length - 3}</span>}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
                
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div 
                            className="project-modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div 
                                className="project-modal"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                onClick={e => e.stopPropagation()}
                            >
                                <motion.button 
                                    className="close-modal"
                                    onClick={() => setSelectedProject(null)}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                >
                                    ✕
                                </motion.button>
                                <div className="project-modal-content">
                                    <div className="project-modal-header">
                                        <h2>{selectedProject.title}</h2>
                                    </div>
                                    <div className="project-modal-body">
                                        <div className="project-image-placeholder modal-image" style={{ backgroundColor: '#333', height: '250px', borderRadius: '8px ',
                                         backgroundImage: `url(${projects.find(project => project.id === selectedProject.id).image})`, backgroundPosition: 
                                         'center', backgroundSize:'cover',
                                         }}></div>
                                        <div className="project-details">
                                            <p>{selectedProject.description}</p>
                                            <div className="feature-list">
                                                <h3>Key Features:</h3>
                                                <ul>
                                                    {selectedProject.features.map((feature, index) => (
                                                        <motion.li 
                                                            key={index}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                        >
                                                            {feature}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="tech-stack">
                                                <h3>Technologies Used:</h3>
                                                <div className="tech-tags modal-tags">
                                                    {selectedProject.techStack.map((tech, index) => (
                                                        <motion.span 
                                                            key={index} 
                                                            className="tech-tag"
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            whileHover={{ scale: 1.1, backgroundColor: '#FF5555' }}
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-modal-footer">
                                        <motion.a 
                                            href={selectedProject.demoLink} 
                                            className="project-link demo-link"
                                            whileHover={{ scale: 1.05, backgroundColor: '#FF3333' }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Live Demo
                                        </motion.a>
                                        <motion.a 
                                            href={selectedProject.githubLink} 
                                            className="project-link github-link"
                                            whileHover={{ scale: 1.05, backgroundColor: '#333' }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Source Code
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.section>

            <motion.section 
          
      ref={ref}
      className="contact-section"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background elements */}
      <div className="contact-gradient-bg">
        <motion.div 
          className="floating-shape shape1"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="floating-shape shape2"
          animate={{
            y: [0, 40, 0],
            rotate: [0, -20, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="floating-shape shape3"
          animate={{
            x: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2 
          variants={itemVariants} 
          className="section-title"
          whileInView={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Let's Connect
        </motion.h2>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info-card" 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <h3>Contact Information</h3>
            
            <div className="contact-details">
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10, backgroundColor: "rgba(255, 85, 85, 0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">
                  <motion.i 
                    className="fa-solid fa-envelope"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatDelay: 5 }}
                  ></motion.i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <motion.p 
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.03 }}
                  >
                    {contactInfo.email}
                  </motion.p>
                </div>
              </motion.div>
              
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10, backgroundColor: "rgba(255, 85, 85, 0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">
                  <motion.i 
                    className="fa-solid fa-phone"
                    animate={{ rotate: [0, 15, 0, -15, 0] }}
                    transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 6 }}
                  ></motion.i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <motion.p 
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.03 }}
                  >
                    {contactInfo.phone}
                  </motion.p>
                </div>
              </motion.div>
              
              <motion.div 
                className="contact-item"
                whileHover={{ x: 10, backgroundColor: "rgba(255, 85, 85, 0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact-icon">
                  <motion.i 
                    className="fa-solid fa-location-dot"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatDelay: 5 }}
                  ></motion.i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <motion.p 
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.03 }}
                  >
                    {contactInfo.location}
                  </motion.p>
                </div>
              </motion.div>
            </div>
            
            <div className="social-media">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                {contactInfo.socialMedia.map((social, index) => (
                  <motion.a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -8, scale: 1.15, boxShadow: "0 10px 25px rgba(255, 85, 85, 0.5)" }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.8 + (index * 0.1),
                      type: "spring", 
                      stiffness: 300 
                    }}
                  >
                    <div className="social-icon">
                      <motion.img 
                        src={social.icon} 
                        alt={social.name} 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-wrapper w-full max-w-md h-auto"
            variants={itemVariants}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <h3>Send Me a Message</h3>
            
            {/* Form status notification */}
            {formStatus.message && (
              <motion.div 
                className={`form-notification ${formStatus.error ? 'error' : formStatus.submitted ? 'success' : ''}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="notification-icon">
                  {formStatus.submitted && <i className="fa-solid fa-check-circle"></i>}
                  {formStatus.error && <i className="fa-solid fa-exclamation-circle"></i>}
                  {formStatus.submitting && <i className="fa-solid fa-spinner fa-spin"></i>}
                </div>
                <p>{formStatus.message}</p>
              </motion.div>
            )}
            
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <motion.div 
                  className="form-group"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={formStatus.submitting}
                  />
                  <motion.span 
                    className="focus-indicator"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.div>
                
                <motion.div 
                  className="form-group"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={formStatus.submitting}
                  />
                  <motion.span 
                    className="focus-indicator"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="form-group"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="What is this regarding?"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={formStatus.submitting}
                />
                <motion.span 
                  className="focus-indicator"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="6" 
                  placeholder="Your message here..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={formStatus.submitting}
                ></textarea>
                <motion.span 
                  className="focus-indicator"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="submit-button"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 15px 30px rgba(255, 85, 85, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
                disabled={formStatus.submitting}
              >
                <span>
                  {formStatus.submitting ? "Sending..." : "Send Message"}
                </span>
                <motion.i 
                  className={formStatus.submitting ? "fa-solid fa-spinner fa-spin" : "fa-solid fa-paper-plane"}
                  animate={formStatus.submitting ? {} : { x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                ></motion.i>
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          className="contact-decoration"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="glow-circle"></div>
        </motion.div>
      </motion.div>
    </motion.section>    
        </>
    );
};



export default About;