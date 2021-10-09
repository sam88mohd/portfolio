import React, { useState } from "react";
import styles from "../../styles/Work.module.css";
import Image from "next/image";
import Modal from "./Modal";
import { projectList } from "../../functions/constant";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);

  const handleClick = (id) => {
    setShowModal(true);
    setId(id);
  };

  return (
    <section id="projects" className={styles.work}>
      <div className="title">
        <h2>Recent Work</h2>
        <p>My previous projects</p>
      </div>
      <div className={styles.content}>
        {projectList.map((project, index) => (
          <div
            key={index}
            className={styles.workBox}
            onClick={() => handleClick(project.id)}
          >
            <div className={styles.imgBx}>
              <Image
                src={project.imgPath}
                alt={project.imgPath}
                width={600}
                height={400}
              />
            </div>
            <div className={styles.textBx}>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}

        {projectList
          .filter((project) => project.id === id)
          .map((project) => (
            <Modal
              key={project.id}
              onClose={() => setShowModal(false)}
              show={showModal}
            >
              <div>
                <h1>{project.title}</h1>
              </div>
              <div>
                <p>{project.description}</p>
              </div>
            </Modal>
          ))}
      </div>
    </section>
  );
};

export default Projects;
