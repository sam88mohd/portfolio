import React from "react";
import styles from "../../styles/Project.module.css";
import Image from "next/image";
import { projectList } from "../../functions/constant";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects">
      <div className="title">
        <h2>Previous Project</h2>
        <p>My previous projects</p>
      </div>
      <div className={styles.content}>
        {projectList.map((project, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={project.imgUrl}
              alt={project.title}
              width={600}
              height={300}
            />
            <div className={styles.textContent}>
              <h4 className={styles.cardTitle}>{project.title}</h4>
              <div className={styles.btnContainer}>
                <motion.button
                  className={styles.btn}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href={project.url} target="_blank">
                    Page
                  </a>
                </motion.button>
                <motion.button
                  className={styles.btn}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href={project.githubUrl}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    Project Github
                  </a>
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
