import React from 'react';
import Timeline from '../../components/Timeline';
import gt from "/src/gt.jpeg";
import at from "/src/at.png";
import iisc from "../../iisc.jpeg";


const events = [
  { 
    role: 'Computational Neuroscience Researcher',
    title: 'Georgia Institute of Technology',
    date: 'May 2024 - Present',
    description: 'Working on Topographic Deep Artificial Neural Networks to understand and predict the functional organization within cortical areas. Task-General Sensory Representation: Developing and learning sensory representations that are generalizable across different tasks. Ensuring that sensory representations and smoothness optimization contribute to a cohesive functional organization within the cortical areas. Utilizing CUDA for GPU acceleration and PyTorch for deep learning model development and training',
    image: gt
  },
  {
    role: 'Teaching Assistant,CSE Algorithms',
    title: 'Georgia Institute of Technology',
    date: 'Jan 2024 - May 2024',
    description: 
      'TA for a graduate-level course at the Georgia Institute of Technology. Supported a class of 150 students.Assisted in preparing and grading assignments and exams.',
      
    image: gt
  },
  {
    role: 'Machine Learning and Simulations, Coop',
    title: 'Altair Engineering',
    date: 'August 2022 - May 2023',
    description:  'Utilized data from 2500 MSA-driven Monte-Carlo Runs to train a feed forward Neural Networks, improving efficiency in predicting NVH responses of an automobile. Trained individual models for 8 different automobile tests, achieving a testing accuracy of 90.4%. Developed a GUI with Python and Tkinter for process integration, from importing MSA runs to model parameter tuning',
    image: at
  },
  {
    role: 'Summer Internship, Machine Learning',
    title: 'Altair Engineering',
    date: 'May 2022 - July 2022',
    description: 'Implemented fine tuned Random Forest algorithm to optimize the automobile chassis design process, enhancing efficiency and precision with 20,000 design parameters. Conducted in-depth analysis on the response to varied design parameters across 250 diverse frequency ranges. Spearheaded the development and seamless integration of a multivariate Neural Network model for predictive analysis into Altair HyperWorks, achieving an testing accuracy rate of 89.23%',
    image: at
  },
  {
    role: 'Computaional Mechanics Researcher',
    title: 'Indian Institute of Science',
    date: '2020 - 2021',
    description: 'Worked in the lab of Mechanics and computations on designing meta-structures with quasi-zero dynamic stiffness for vibration isolation. Performed mathematical simulations on single-cell meta-structure',
    image: iisc
  },
 
  // Add more events as needed
];

const Home: React.FC = () => {
  return (
    <div>
      <Timeline events={events} />
    </div>
  );
};

export default Home;
// Worked in the lab of Mechanics and computations on designing meta-structures with quasi-zero dynamic stiffness for vibration isolation.
// • Performed mathematical simulations on single-cell meta-structure
// • Supervised Machine learning algorithms to classify the unit cells by changing different parameter values.