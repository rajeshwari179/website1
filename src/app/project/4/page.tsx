import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';
import hpc1 from '../../../hpc1.png';
import hpc2 from '../../../hpc2.jpg';
import hpc3 from '../../../hpc3.png';
import hpc4 from '../../../hpc4.png';



const Project1Page = () => {
  const projects = [
    {
      projectName: 'Introduction',
      imageUrl: hpc4,
      description: (
        <>
         This project focuses on parallelizing a toy particle simulation, a simplified model commonly used in mechanics, biology, and astronomy. In this simulation, particles interact by repelling each other when they come within a specified cutoff distance. This model helps in understanding the dynamics of particle systems and their interactions over time.
        <ul>
        <li>To enhance the performance of the particle simulation, parallel computing techniques using OpenMP and CUDA are employed.</li>
        <li> OpenMP allows for efficient distribution of the workload across multiple CPU threads, while CUDA enables offloading computations to the GPU, leveraging its massively parallel architecture. These technologies significantly speed up the simulation, enabling the handling of larger particle systems with greater detail</li>
        </ul>
        </>
      ),
      imageDescription: 'Grid based Interaction',
    },
    {
      projectName: 'Grid-Based Method for Optimization',
      imageUrl: hpc1,
      description: (
        <>
          Optimization of force calculations between particles is achieved through a grid-based method. In this approach, the 2D simulation space is divided into grid cells, with each cell&apos;s dimensions equal to the cutoff radius of the particles. This spatial partitioning confines the interaction calculations to particles within the same cell or adjacent cells, thus reducing the number of necessary calculations.
          <ul>
            <li>Efficient Force Calculation: The grid-based method reduces computational complexity by focusing only on interactions between nearby particles. 
</li>
            <li>Partitioning the Space: The 2D space is divided into grid cells, each matching the particle interaction cutoff distance</li>
            <li>Managing Particles with Sets: Particle indices within each grid cell are managed using sets, ensuring uniqueness within each cell</li>
            <li>Localized Force Computation: Forces are calculated only between particles in the same cell or neighboring cells, minimizing the number of interactions considered.</li>
          </ul>
          Combining the grid-based method with parallel computing techniques results in a highly efficient simulation, capable of handling large-scale particle systems with improved performance. This project demonstrates the effective use of spatial partitioning and parallelization to optimize computationally intensive simulations.
        </>
      ),
      imageDescription: ' Strong scalling for 50000 paricles  ',
    },
    
    
    {
      projectName: 'Methodologies used in the code',
      imageUrl: hpc2,
      description: (
        <>
         <ul>
            <li>Counting Particles per Bin (fill count kernel): Iterates over all particles to determine the number of particles in each bin. Uses atomic operations to increment bin counts to avoid race conditions.
</li>
            <li>Calculating Cumulative Offset (calc cumulative offset step function): Performs an inclusive scan operation on the bin count array to compute cumulative sums, generating offsets that indicate particle positions in the particles array.</li>
            <li>Binning Particles (binning kernel): Assigns each particle to its appropriate bin based on computed offsets. Uses atomic operations to ensure correct placement within the particles array.</li>
            <li>Efficient Binning with Offset Array: Utilizes an offset array to store cumulative offsets, optimizing particle assignment to bins without the need for sorting. This approach reduces memory overhead and maximizes GPU parallelism for efficient particle simulation.</li>
          </ul>

        </>
      ),
      imageDescription: 'Weak scaling for the machine with 64 cores',
    },
    {
      projectName: 'Performance Comparison: CUDA vs. OpenMP ',
      imageUrl: hpc3,
      description: (
        <>
         For a problem size of 3,200,000 particles, the CUDA implementation completes in 9.7852 seconds, leveraging GPU parallelism and benefiting from high memory bandwidth. In contrast, the OpenMP implementation takes 100 seconds on 64 threads, hindered by CPU limitations in parallelization and memory band- width. This significant performance difference is attributed to CUDA&apos;s utilization of GPU&apos;s massive parallelism and superior memory bandwidth compared to OpenMP’s reliance on CPU cores. The choice between CUDA and OpenMP depends on factors such as hardware availability and application requirements.
         
        </>
      ),
      imageDescription: 'Log-log plot of time taken vs number of particles',
    },
  ];

  return (
    <div style={{ border: '2px solid #000', padding: '20px', borderRadius: '10px' }}>
      <h1>Toy Particle Simulation through Shared Memory Programming</h1>
      {projects.map((project, index) => (
        <ProjectTemplate
          key={index}
          projectName={project.projectName}
          imageUrl={project.imageUrl}
          description={project.description}
          imageDescription={project.imageDescription}
        />
      ))}
    </div>
  );
};

export default Project1Page;
