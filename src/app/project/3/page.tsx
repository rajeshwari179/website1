import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';
import sccl1 from '../../../sccl1.png';
import sccl2 from '../../../sccl2.png';
import sccl3 from '../../../sccl3.png';

const Project1Page = () => {
  const projects = [
    {
      projectName: 'Introduction',
      imageUrl: sccl1,
      description: (
        <>
         Unsupervised clustering seeks to identify meaningful groups in data based on distances within
a representation space. However, the initial overlap of distinct categories in the representation
space presents a considerable challenge for achieving clear separation in distance-based clustering.
Unsupervised learning faces a fundamental challenge in clustering, a topic extensively explored
for many years. Traditional clustering methods like K-means and Gaussian Mixture Models rely
on distance metrics in the data space, proving less effective for high-dimensional data. Our class
discussions highlighted the sensitivity of K-means to initial centroids, as depicted in Figure 1,
where it struggles to cluster accurately. In contrast, there is a growing interest in leveraging
deep neural networks to map data into a lower-dimensional, more distinguishable representation
space. To address these challenges, we introduce Supporting Clustering with Contrastive Learning
(SCCL), a novel approach that optimizes both top-down clustering loss and bottom-up instance-
wise contrastive loss concurrently. Our evaluation focuses on the increasingly crucial task of short
text clustering. Through detailed analysis, we illustrate how SCCL successfully combines top-down
clustering with bottom-up instance-wise contrastive learning, resulting in improved inter-cluster
and intra-cluster distances.
Figure 1: Failure of K-means.


        <ul>
        <li>This project is the implemenetation of the paper &quot;Supporting Clustering with Contrastive Learning&quot;</li>
        
        </ul>
        </>
      ),
      imageDescription: 'Figure 1:TSNE visualization of the embedding space learned on SearchSnippets',
    },
    {
      projectName: 'Experimental Setup',
      imageUrl: sccl2,
      description: (
        <>
        We aim at developing a joint model that leverages the beneficial properties of Instance-CL to
improve unsupervised clustering. As illustrated in Figure 2, our model consists of three components.
A neural network ψ(·) first maps the input data to the representation space, which is then followed
by two different heads g(·) and f (·) where the contrastive loss and the clustering loss are applied,
respectively. Our data consists of both the original and the augmented data. Specifically, for a randomly sampled minibatch B of size M,  we randomly generate a pair of augmentations for each data instance in B, yielding an augmented batch B&apos; with size 2M
           <ul>
            <li>Topics: The dataset comprises four distinct topics 
</li>
            <li>Number of Clusters (K): K-means and SCCL are both configured with K = 4</li>
            <li>Sentence Transformers: We utilize BERT-based Sentence Transformers for feature extraction and representation</li>
            <li>Text Augmenter: NLP Augmenter is employed for data augmentation</li>
            <li>Training Data: The training dataset consists of 10,000 short text samples</li>
            <li>System Used: 2 GPU node on PACE ICE cluster</li>
          </ul>
          The evaluation metric used to measure the performance of the clustering algorithms is accuracy.
          </>
      ),
      imageDescription: 'Figure 2:Training framework SCCL',
    },
    
    
    {
      projectName: 'Inferences',
      imageUrl: sccl3,
      description: (
        <>
        CL, we monitor both intra-
cluster distance and inter-cluster distance in the representation space throughout the learning
process. In the context of a specific cluster, intra-cluster distance refers to the average distance
between the centroid and all samples within that cluster, while inter-cluster distance is the distance
to the nearest neighboring cluster. In Figure, we present each distance type along with its mean
value obtained by averaging across all clusters. Clusters are defined either based on ground truth
labels (solid line). Figure 3 illustrates that Clustering achieves a smaller intra-cluster distance and
a larger inter-cluster distance when evaluated on predicted clusters. This highlights Clustering&apos;s
capability to tighten each self-learned cluster and separate different clusters effectively. However,
when evaluated on ground truth clusters, along with poor Accuracy and NMI scores, we observe
the opposite trend. One possible explanation is that data from different ground-truth clusters often
exhibit significant overlap in the embedding space before clustering begins making it challenging
for our distance-based clustering approach to effectively separate them
       
            

        </>
      ),
      imageDescription: 'Figure 3: Cluster-level evaluation on SearchSnippets. Each plot is summarized over five random runs',
    },
 
  ];

  return (
    <div style={{ border: '2px solid #000', padding: '20px', borderRadius: '10px' }}>
      <h1>Clustering with Contrastive Learning</h1>
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
