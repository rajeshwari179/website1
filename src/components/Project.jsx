import React from 'react';
import Link from 'next/link';

import styles from "./Project.module.css"; // Import your CSS module
import Image from "next/image";

const Projects = ({ project }) => {
  return (
    <Link href={`/project/${project.id}`} passHref>
      <div className={styles.project} role="link" tabIndex={0}>
        <div className={styles.top}>
          <Image
            src={project.image}
            alt={project.name}
            layout="fill" // Use fill layout to cover the parent div
            className={styles.image} // Apply the image class
            priority
          />
        </div>
        <div className={styles.right}>
          <h1>{project.name}</h1>
        </div>
      </div>
    </Link>
  );
};

export default Projects;
