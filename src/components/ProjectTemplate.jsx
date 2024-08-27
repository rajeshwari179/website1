import React from 'react';
import Image from 'next/image';
import styles from './ProjectTemplate.module.css';

const ProjectTemplate = ({ projectName, imageUrl, description, imageDescription }) => {
  return (
    <div className={styles.box}>
      <div style={{ flex: 1 }}>
        <div className={styles.descriptionContainer}>
          <h2>{projectName}</h2>
          <p className={styles.projectDescription}>{description}</p>
        </div>
      </div>
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <div className={styles.customImage}>
            <Image
              src={imageUrl}
              alt={`Project ${projectName}`}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>
        <p className={styles.imageDescription}>{imageDescription}</p>
      </div>
    </div>
  );
}

export default ProjectTemplate;
