import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';
import sift from '../../../sift.png'; // Example image import, you can add more images similarly
import graph1 from '../../../graph1.png';
import graph2 from '../../../graph2.png';
import kcores from '../../../kcores.png';
import table2 from '../../../table2.png';
import table from '../../../table.png';
import ppercent from '../../../ppercent.png';


const Project1Page = () => {
  const projects = [
    {
      projectName: 'Introduction',
      imageUrl: kcores,
      description: "In this project, we aimed to implement a parallel algorithm for maintaining core numbers in dynamic graphs. Core numbers are important indicators of graph cohesion. Our investigation reveals a structure called the superior edge set, where edge insertions can be processed concurrently. Superior edge set is an important component of our algorithm. We explore parallelism in the core update process, particularly in simul- taneous multiple edge and vertex insertions. We demonstrate the efficiency of parallel algorithms and show their scalability through experiments on graphs of various density. We achieve speedups on existing serial and parallel implementations using multithreading on OpenMP and vectorization. Compared to sequential methods, our algorithm achieves significant speedup in processing time for edge and vertex insertions. we propose an efficient algorithm for in- cremental core maintenance. We introduce the concept of a superior edge set, where inserting such edges can change every vertex’s core number by at most 1. By identifying vertices affected by the insertion of each edge in parallel and updating their core numbers accordingly, we can maintain vertex core numbers efficiently. Our algorithm iteratively handles the insertions of split superior edge sets to achieve parallelism.",
      imageDescription: ' Graph Visualization for Core Number Computation',
    },
    {
      projectName: 'Implementation',
      imageUrl: table,
      description: " This project aimed to implement a parallel algorithm for maintaining core numbers in dynamic graphs. Core numbers are important indicators of graph cohesion. Our investigation reveals a structure called the superior edge set, where edge insertions can be processed concurrently. Superior edge set is an important component of our algorithm. We explore parallelism in the core update process, particularly in simul- taneous multiple edge and vertex insertions. We demonstrate the efficiency of parallel algorithms and show their scalability through experiments on graphs of various density. We achieve speedups on existing serial and parallel implementations using multithreading on OpenMP and vectorization. Compared to sequential methods, our algorithm achieves significant speedup in processing time for edge and vertex insertions. worked on an algorithm to identify superior edges andcompute changes in core numbers. Here’s a brief overview. We developed an algorithm to identify superior edges and compute changes in core numbers in graphs, with our current implementation being serial. The process begins with generating graphs to test and evaluate the algorithms. In each iteration, the algorithm identifies a superior edge set from the inserted edges. For each k-superior edge set \( E_k \), another algorithm determines the set of vertices whose core numbers change. A critical aspect is the negative Depth-First Search (DFS), which is essential for core maintenance. Initially, we compute SD values for each vertex in the ExPath Tree of \( E_k \). Then, for each edge \( e_i = \langle u_i, v_i \rangle \), we find vertices whose core numbers change due to its insertion. A positive DFS is conducted from the root vertex \( r \) in the K Path Tree rooted at \( r \). If a vertex \( v \) is found where its core number cannot increase, a negative DFS removes \( v \) and updates CSD values of other vertices with core number \( k \). After traversing the K Path Tree, vertices not removed have their core numbers increased by 1. For edge insertion, we implemented serial edge insertion and three algorithms for core maintenance: SuperiorEdgeInsert, Core Calculation Algorithm, and K-SuperiorInsert.",
      imageDescription: 'Parallel Implementation Results. ',
    },

    {
      projectName: 'Results',
      imageUrl: table2,
      description: "As mentioned earlier, we used OpenMP for parallelization. The code was written in C++ and compiled using GCC. Instructions and more information on how to run the code is available on our Github page. We ran the tests for all the graphs on a single node in the PACE cluster",
      imageDescription: 'Run Time with Increase in Inserted Edge Set',
    },

    {
      projectName: 'Scaling using Multiple Graphs',
      imageUrl: graph1,
      description: "First, we ran the serial implementation for the Wiki-Vote graph, and the run time was 419.5569 seconds. We then ran the OpenMP parallel implementation which reduced the run time by 96% to 16.3729 seconds. Then, we ran the parallelized code for all of the graphs and recorded the results for all the graphs, as seen in Figure. The time increases as the number of inserted edges increases. There is a steep increase in the run time between the last two graphs because the number of vertices increases from 54k to 200k as the edges double from 500k to 1M. Interestingly, there is a decrease in the run time as we go from 198k edges to 223k edges in the table(Musae-Wiki to Deezer-Hu). The number of vertices increases from 5.2k to 47.5k – ideally the run time should have increased too. However, a drastic increase in the number of nodes with a slightly low increase in number of edges makes the graph sparser, so the run time decreases",
      imageDescription: 'Parallel Run Time vs. No. of Edges',
    },
    {
      projectName: 'Scaling Density using Single Graph',
      imageUrl: ppercent,
      description: "We performed another test, where we used the deezer-hr graph (54,573 nodes and 498,202 edges) to test the effect of inserting P% of edges while keeping the number of vertices constant. The results are given in Figure 8 and Figure 9. Initially, the run time increases as the number of edges in- serted increases, as we would expect. However, the processing time decreases as we go from 80% to 100% edges inserted, which shows that our implementation achieves a good amount of parallelization for a large edge set, which is useful in real world cases where we deal with extremely dense graphs. This is because more edges are present in the superior edge set in each iteration, so there is higher parallelism.",
      imageDescription: 'Inserted Edges vs Run Time',
    },

    


    
      // Add more projects as needed
  ];

  return (
    <div style={{ border: '2px solid #000', padding: '20px', borderRadius: '10px' }}>
      <h1>Core Maintenance in Dynamic Graphs</h1>
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

// we propose an efficient algorithm for in- cremental core maintenance. We introduce the concept of a superior edge set, where inserting such edges can change every vertex’s core number by at most 1. By identifying vertices affected by the insertion of each edge in parallel and updating their core numbers accordingly, we can maintain vertex core numbers efficiently. Our algorithm iteratively handles the insertions of split superior edge sets to achieve parallelism.
// worked on an algorithm to identify superior edges andcompute changes in core numbers. Here’s a brief overview
// First, we ran the serial implementation for the Wiki-Vote graph, and the run time was 419.5569 seconds. We then ran the OpenMP parallel implementation which reduced the run time by 96% to 16.3729 seconds.
// Then, we ran the parallelized code for all of the graphs and recorded the results in the table below
// 