import React from "react";
import styles from "../../styles/Project.module.css";
import Image from "next/image";
import { projectList } from "../../functions/constant";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className={styles.project}>
      <div className="title">
        <h2>Previous Project</h2>
        <p>My previous projects</p>
      </div>
      <div className={styles.content}>
        {projectList.map((project, index) => (
          <div key={index} className={styles.projectBox}>
            <div className={styles.imgBx}>
              <Image
                src={project.imgPath}
                alt={project.imgPath}
                width={600}
                height={400}
              />
            </div>
            <div className={styles.textBx}>
              <Link href={project.url}>
                <a target="__blank">{project.title}</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
