import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';
import sift from '../../../sift.png'; // Example image import, you can add more images similarly
import dataset from '../../../dataset.jpeg';
import gaussian from '../../../Gaussian.png';
import dog from '../../../DoG.png';
import resampling from '../../../Resample.png';
import lp from '../../../LP.png';
import gk from '../../../gk.png';
import result from '../../../result.png';

const Project1Page = () => {
  const projects = [
    {
      projectName: 'Introduction',
      imageUrl: sift,
      description: " The project focuses on accelerating the Scale-Invariant Feature Transform (SIFT) feature extraction process, a widely-used methodology for identifying interest points in images and videos. We aim to reduce the time required for this task by parallelizing various stages of the SIFT algorithm using CUDA-enabled GPUs. This approach substantially boosts the efficiency of video analysis, making it faster and more scalable compared to traditional methods. The motivation for our project arises from the growing demand for efficient video analysis across industries such as surveillance, entertainment, and healthcare. Our GPU-accelerated solution addresses this need by delivering significant efficiency gains, leading to cost savings and improved productivity for organizations that rely on video analysis for decision-making, monitoring, or research purposes. For our system, the expected input is a video file, and the output consists of the coordinates or descriptors of the interest points detected in each frame. Specifically, our system will generate a list of interest points along with their corresponding features for each frame. This output facilitates further analysis, object recognition, or tracking tasks, enabling researchers, analysts, and professionals to extract valuable insights from videos more efficiently. By improving the speed and accuracy of video analysis, we aim to enhance the overall efficiency and productivity of video analysis workflows.",
      imageDescription: 'Figure 1: SIFTwith CUDA',
    },
    {
      projectName: 'Capturing Videos for Dataset Creation',
      imageUrl: dataset, // Use a different image if available
      description: 'We curated our own dataset for the project, focusing on the Coda building. To maintain clarity and sharpness across the frames of the video, we used a gimbal during recording. This ensured minimal blurring and stable footage throughout, enhancing the quality of the video dataset. For accurate camera calibration, we use various checkerboard patterns. These patterns serve as a calibration tool due to their well-defined geometry and known dimensions. The known properties of the checkerboard patterns provides a ground truth reference helping in the precise estimation of camera parameters. To diversify our calibration dataset and avoid symmetrical patterns that could potentially skew the calibration results, we designed custom 3x3 grids.',
      imageDescription: 'Figure 2: Dataset',
    },
    {
      projectName: ' Gaussian Filtering and Separability',
      imageUrl: gaussian, // Use a different image if available
      description: 'In our project, we utilized a Gaussian filter for image blurring due to its separable nature, which offers computational advantages. Traditional 2D convolution filters require nxm multiplications for each pixel, where n and m are the dimensions of the kernel. In contrast, separable filters can be split into two one-dimensional filters applied sequentially along rows and columns. By taking advantage of this property, we divided the blurring process into horizontal and vertical stages. This method reduces the computational load to just n + m multiplications per pixel, making the Gaussian filter an efficient choice for image blurring while maintaining quality.',
      imageDescription: 'Figure3: Gaussian Filter Separability',
    },
    {
      projectName: ' Difference of Gaussian (DoG)',
      imageUrl: dog, // Use a different image if available
      description: 'Our primary metric for evaluating the success of our GPU-accelerated SIFT feature extraction approach is the time required to process each frame of the video. Specifically, we aim to achieve a significant reduction in processing time compared to traditional methods or serial implementations. Our key result demonstrates the successful parallelization of each stage of the SIFT (Scale-Invariant Feature Transform) algorithm, including processing up to the octaves, on our optimized GPU implementation. By adjusting the number of octaves and visualizing the impact of octave size, we optimized the SIFT algorithm\'s ability to detect features across various scales efficiently. This fine-tuning contributed to enhanced feature detection and robustness in diverse image datasets. We achieved a processing time of 0.00189 seconds for analyzing 64 images concurrently, with each image containing 5 layers and 3 octaves. The Difference of Gaussian (DoG) method is employed to effectively identify stable keypoint locations within the scale space of an image. This is achieved by convolving the image with the difference-of-Gaussian function, which is derived from the difference between two neighboring scales separated by a constant multiplicative factor k. One of the primary advantages of using this function is its computational efficiency. As the smoothed images L are already computed for scale space feature description, D can be easily obtained through straightforward image subtraction. Moreover, the DoG function closely approximates the scale-normalized Laplacian of Gaussian. In practice, the initial image undergoes incremental convolution with Gaussians to generate images at different scales, spaced by a constant factor k in scale space. For efficient octave processing, each octave is divided into s intervals, setting, k = 2^(1/s). To cover a complete octave during extrema detection, we produce (s+3) images in the blurred image stack for each octave. The DoG images, resulting from subtracting adjacent scales, are shown on the left. After processing a full octave, the Gaussian image with double the initial σ value is resampled by selecting every second pixel in each row and column. This resampling maintains accuracy relative to σ while significantly reducing computational overhead.',
      imageDescription:'Figure 4: Difference of Gaussian (DoG)',
    },
  

    {
      projectName: 'Large Parallelism',
      imageUrl: lp, // Use a different image if available
      description: 'In order to make our code more efficient, we utilized large parallelism to process multiple images/frames simultaneously. This approach allows us to take advantage of the high memory bandwidth of modern GPUs, significantly reducing the time required for image processing. By processing 128 images at once, we were able to achieve optimal performance and enhance the speed of our SIFT algorithm. This also makes the code more scalable to handle hardware with higher memory bandwidths and processing capabilities in the future. Processing multiple images in parallel is a nice way to process a video because videos are essentially a series of images. This parallel processing capability is crucial for accelerating the feature extraction process and improving the efficiency of video analysis tasks.   ',
      imageDescription: 'Figure 5: Large Parallelism',
    },    {
      projectName: ' Experiment Setup',
      imageUrl: gk, // Use a different image if available
      description: 'We first attempted to run 1024 threads per block. However, some kernels, such as the row convolution kernel, were not able to run with this configuration. We then tried lowering the threads per block, which worked for all kernels. We also experimented with different block sizes and found that 16x48 (768 threads per block) was the optimal block size for row kernel. This is because the number of times apron elements are loaded into shared memory is minimized, and the number of threads that are actually used is maximized. It also allows for a half-warp memory coallescing, making it more efficient for older and while still being efficient for newer GPUs. Although the grid dimensions do not matter, we used a nearly square grid for all kernel to maximize the dimension of a grid since there is a hard limit on the number of blocks in each direction. We used the occupancy API to determine the optimal block size for each kernel. The occupancy API provides information about the maximum number of threads that can be run on a multiprocessor, helping us optimize the performance of our CUDA kernels',
      imageDescription: 'Figure 6: Gaussian filter',
    },    
      {
        projectName: 'Results',
        imageUrl: result, // Use a different image if available
        description: 'Our primary metric for evaluating the success of our GPU-accelerated SIFT feature extraction approach is the time required to process each frame of the video. Specifically, we aim to achieve a significant reduction in processing time compared to traditional methods or serial implementations. Our key result demonstrates the successful parallelization of each stage of the SIFT (Scale-Invariant Feature Transform) algorithm, including processing up to the octaves, on our optimized GPU implementation. By adjusting the number of octaves and visualizing the impact of octave size, we optimized the SIFT algorithm\'s ability to detect features across various scales efficiently. This fine-tuning contributed to enhanced feature detection and robustness in diverse image datasets. We achieved a processing time of 0.00189 seconds for analyzing 64 images concurrently, with each image containing 5 layers and 3 octaves.',
        imageDescription: 'Figure 7: DoG Results',
      }
      
    // Add more projects as needed
  ];


  //As mentioned earlier, we used OpenMP for parallelization. The code was written in C++ and compiled using GCC. Instructions and more information on how to run the code is available on our Github page. We ran the tests for all the graphs on a single node in the PACE cluster

  return (
    <div style={{ border: '2px solid #000', padding: '20px', borderRadius: '10px' }}>
      <h1>A GPU-Accelerated Fast SIFT</h1>
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
}

export default Project1Page;


