import React from 'react';
import ProjectTemplate from '../../../components/ProjectTemplate';
import A1 from '../../../A1.png';
import A2 from '../../../A2.png';
import A3 from '../../../A3.png';
import A4 from '../../../A4.png';
import A5 from '../../../A5.png';


const Project1Page = () => {
  const projects = [
    {
      projectName: 'Introduction',
      imageUrl: A1,
      description: (
        <>
         
This project focuses on the modeling and optimization of variable-geometry aircraft, specifically exploring the dynamic adjustment of wing sweep angle, twist angle, and chord length to adapt to varying flight conditions such as pitch, altitude, and velocity. Using Dymos simulation software, our work defines parameters, path constraints, and boundaries to accurately capture aircraft behavior. The primary parameters include wing surface area, specific impulse, and throttle, while path constraints regulate altitude and Mach number to maintain realistic flight trajectories. Our experiments each aim to optimize one of two objective functions: minimization of flight time and maximization of fuel efficiency. Through comprehensive simulations across climb, descent, and cruise flight phases, we compare the performance of variable and fixed-geometry aircraft models. Results indicate that variable-geometry aircraft consistently outperform fixed-geometry counterparts in terms of both airtime and fuel efficiency. This underscores the adaptability and optimality of variable-geometry designs while highlighting the challenges associated with achieving comparable performance with fixed-geometry configurations. These findings emphasize the potential benefits of variable-geometry aircraft in adapting to diverse flight conditions, achieving optimal performance across various objectives.
        <ul>
        <li>To enhance the performance of the particle simulation, parallel computing techniques using OpenMP and CUDA are employed.</li>
        <li> OpenMP allows for efficient distribution of the workload across multiple CPU threads, while CUDA enables offloading computations to the GPU, leveraging its massively parallel architecture. These technologies significantly speed up the simulation, enabling the handling of larger particle systems with greater detail</li>
        </ul>
        </>
      ),
      imageDescription: 'Aircraft Supersonic Model',
    },
    {
      projectName: 'Backgorund',
      imageUrl: A2,
      description: (
        <>
          Climb and Decent
          <ul>
            <li>Accelerated flight under a flight path angle γ
 
</li>
            <li>1st equation: Force summation parallel to the flight path
            </li>
            <li>2nd equation: Force summation perpendicular to the flight path</li>
            <li>3rd equation: Velocity in vertical direction
            </li>
            <li>4th equation: Velocity in horizontal direction</li>
            <li> 5th equation: Fuel mass decrease</li>
          </ul>
         
        </>
      ),
      imageDescription: 'Equations',
    },
    {
      projectName: 'Simulation',
      imageUrl: A3,
      description: (
        <>
          Dymos uses the concept of phases to allow for the enforcement of intermediate boundary and path constraints on the various state and control variables that are present in our simulation model. This phase module within Dymos is where we define the parameters, path constraints, and boundaries on the states and controls. Recall that there are two broad types of variables that Dymos recognizes: state and control variables. State variables define the current condition of the simulation model at each time-step. In our case, state variables include aircraft altitude, velocity, etc. Control variables are inputs to the simulation model that can be adjusted to control the outcome of the simulation. However, unlike state variables, control variables don’t define the simulation model itself. In our case, control variables include aircraft angle of attack, twist, etc. In this section, we will introduce these components of our simulation model.
          <ul>
            <li> Inputs:
 
</li>
            <li>Mach Number:The Mach number represents the ratio of the speed of an aircraft to the speed of sound in the surrounding air. It categorizes the aircraft’s flight regime, such as subsonic, transonic, supersonic, or hypersonic.
            </li>
            <li>Altitude: Altitude refers to the vertical distance of an aircraft above a reference point, typically sea level. It affects the air density, temperature, and pressure, which in turn influence aerodynamic per- formance.
            </li>
            <li>Sweep: Wing sweep refers to the angle at which the aircraft’s wings are oriented relative to the fuselage. Variable sweep wings allow adjustments to optimize performance at different speeds and altitudes.
            </li>
            <li>Twist: Wing twist refers to the change in angle of incidence along the span of the wing, from the root to the tip. It helps in distributing lift more efficiently across the wing, reducing induced drag.</li>
            <li> Tip Chord: The tip chord is the width of the wing at its outermost point, perpendicular to the leading edge. Variable tip chord can modify the wing’s lift distribution and aerodynamic characteristics</li>
          </ul>
         
We rely on OpenVSP for modeling aircraft with parametric geometry configurations and Dymos, an extension of OpenMDAO, for encoding our physics model and conducting trajectory optimization. The system dynamics are governed by basic aerodynamics and account for the influence of four forces on the aircraft: lift, drag, thrust, and weight
        </>
      ),
      imageDescription: 'Parameter Setting',
    },
    
    {
      projectName: 'Experimental Results',
      imageUrl: A4,
      description: (
        <>
          We will focus on optimizing one of two objective functions which we use to determine the optimal geometry for the aircraft. The objectives are:
          <ul>
            <li>Flight Time: We set up this objective function by setting Dymos to find values to minimize the time it takes the plane to reach its final altitude.
 
</li>
            <li>Fuel Efficiency: We set up this objective function by setting Dymos to find values to maximize the mass of the plane by the end of the simulation given our set of constraints. Observe that in this scenario, maximization of the final mass is equivalent to minimization of fuel used to reach the destination.

            </li>
            <li>Phase and Geometry Parametrization: we allow different parameters to control the geometry of the plane. The ones we are working with are twist (deg), tip chord (m), and sweep (deg).

            </li>
            <li><li>State, Control, and Parameter Variables: State - Vertical Position, Altitude, VElocity, Flight path angle, Mass; Control- Angle of attack, Twist, Tip chord, sweep; Parameter:  Throttle; Parameter- Wing area, Specific impulse, Fuel mass</li>
            </li>
            <li>Boundary and Path Constraints: In the case of boundary constraints, the most relevant pieces of information are the constraint itself and the value enforced, since all our constraints are enforced only at the end of the simulation (they are final boundary constraints). In the case of path constraints, we enforced upper and lower values for the variable of interest. Moreover, we impose invariability on a value at the practical level, since attempting to enforce exact constraints on some variables for cruise, such as altitude and mach, will lead to the simulation to fail - which is erroneous in practice.</li>
            <li> Tip Chord: The tip chord is the width of the wing at its outermost point, perpendicular to the leading edge. Variable tip chord can modify the wing’s lift distribution and aerodynamic characteristics</li>
          </ul>
         As seen in the figure, he variable-geometry
         geometry aircraft. This, in theory, is expected, given the variable-geometry aircraft’s ability to shape its wing structure based on its needs. Moreover, through a diverse set of experiments, it became clear that there is a significant additional layer of complexity when attempting to create a model of a fixed-geometry aircraft that performs well with respect to different objectives.

        </>
      ),
      imageDescription: 'Results – Cruise (Minimum Airtime) ',
    },
    
    
    {
      projectName: 'Conclusion',
      imageUrl: A5,
      description: (
        <>The initial goal of this project was to optimize the flight trajectory for aircraft with fixed and variable-geometry wings across different flight phases and under various objective functions. In light of doing this, it was discovered that variable-geometry aircraft perform better in terms of both airtime and fuel efficiency than fixed-geometry aircraft.Furthermore, a fixed-geometry aircraft is unable to complete all the different flight stages. For example, the fixed-geometry aircraft is able to fly the climb mission but is unable to meet the cruise and descent mission constraints. This is more apparent for cruise, where flying supersonically is impossible for the given configu- ration. This is likely due to the low value of the sweep angle, as typical supersonic configuration have sweep angles above 60 degrees. In contrast to this, the variable-geometry aircraft can successfully fly all 3 flight stages without issue, in large part due to the flexibility that variable geometry offers.
         <ul>
            <li>Use a more complex wing geometry discretization with multiple sections instead of a simple trapezoidal wing.
</li>
            <li>Include more variable geometry degrees of freedom (e.g. airfoil camber, dihedral).</li>
            <li>Use higher fidelity tools to represent the aerodynamics.</li>
            <li>Model other flight phases inside Dymos such as takeoff and landing.</li>
          </ul>

        </>
      ),
      imageDescription: 'Results – Descent (Minimum Airtime)',
    },

  ];

  return (
    <div style={{ border: '2px solid #000', padding: '20px', borderRadius: '10px' }}>
      <h1>Variable-Geometry Aircraft Modelling and Simulation</h1>
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
