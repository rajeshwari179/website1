import React from 'react';
import styles from "../../components/Project.module.css"; 
import { useRouter } from 'next/router';
import Projects from "../../components/Project.jsx"; // Import your CSS module
import sift from "../../sift.png";
import graph from "../../graph.jpg";
import svd from "../../svd.png";
import modsim from "../../modsim.png";
import cda from "../../cda.png";
import particle from "../../particle.jpeg";

const Project = () => {
    const projects = [
        {
            id: '1',
            name: 'A GPU-Accelerated Fast Scale-Invariant Feature Transform',
            description: 'Description 1',
            image: sift,
        },
        {
            id: '2',
            name: 'Core Maintenance in Dynamic Graphs',
            description: 'Description 2',
            image: graph,
        },
        {
            id: '3',
            name: 'Short Text Clustering with Contrastive learning and Data Augmentation',
            description: 'Description 5',
            image: cda,
        },
        {
            id: '4',
            name: 'Toy Particle Simulation through Shared Memory Programming',
            description: 'Description 3',
            image: particle,
        },
        {
            id: '5',
            name: 'Aircraft Modelling and Simulation',
            description: 'Description 3',
            image: modsim,
        },
        {
            id: '6',
            name: 'Generalizing Discriminant Analysis Using the Generalized Singular Value Decomposition',
            description: 'Description 4',
            image: svd,
        }
    ];

    return (
        <div className={styles.gallery}>
            {projects.map((project, index) => (
                <Projects key={index} project={project} />
            ))}
        </div>
    );
};

export default Project;
