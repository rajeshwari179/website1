import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';
import gsvd from '../../../gsvd.png';
import gsvd1 from '../../../gsvd1.png';
import gsvd2 from '../../../gsvd2.png';

const Project1Page = () => {
  const projects = [
    {
      projectName: 'Introduction',
      imageUrl: gsvd1,
      description: (
        <>
         
         Discriminant analysis, a long-standing method for extracting features that maintain class separability, has traditionally relied on an optimization problem involving covariance matrices representing scatter within and between clusters. However, its application has been constrained by the necessity for one of these matrices to be nonsingular, limiting its use to datasets with specific dimensional characteristics. In this project , we explore various optimization criteria and broaden the applicability of discriminant analysis by leveraging the generalized singular value decomposition to overcome the requirement for non singularity. This results in an enhanced discriminant analysis approach that can be employed even when the sample size is smaller than the dimension of the sample data. To assess the effectiveness of this modified approach, we compare classification results from the reduced representation with alternative methods. We conclude with a discussion of the relative merits of these approaches. 
       
        </>
      ),
      imageDescription: 'GSVD Cluster Plot',
    },
    {
      projectName: 'Inferences',
      imageUrl: gsvd2,
      description: (
        <>
          GSVD extends the applicability to cases that classical discriminant analysis cannot handle. In addition, LDA/GSVD algorithm never explicitly forms the scatter matrices, which results in two advantages
          <ul>
            <li> We avoid the numerical problems inherent in forming cross-product matrices 
</li>
            <li>We reduce the storage requirements considerably.</li>
            </ul>
            Orthogonal decomposition is found to be cheaper than LDA/GSVD as we just need to compute Qk instead of computing the eigenvectors.
        </>
      ),
      imageDescription: 'PCA Cluster Plot ',
    },
    
    
  
  ];

  return (
    <div style={{ border: '2px solid #000', padding: '20px', borderRadius: '10px' }}>
      <h1>Generalizing Discriminant Analysis Using the Generalized Singular Value Decomposition</h1>
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
