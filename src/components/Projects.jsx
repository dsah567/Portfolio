import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
   <div>
    <section className="bg-gray-800 text-white p-4 lg:p-8">
      <div className="container mx-auto lg:w-2/3">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8">About Portfolio Tools</h2>
        
        <p className="mb-2 lg:mb-4 text-base lg:text-lg">
        <Link to="https://github.com/dsah567/Portfolio" target="_blank">
         <u> Portfolio Github Link</u>
        </Link> <br />
        <br />
          
         <p>I have developed a portfolio using React, leveraging the power of React Router DOM for efficient routing and Tailwind CSS for styling and ensuring a responsive design. React, a robust JavaScript library, allows for a component-based architecture, which makes the code reusable and maintainable while improving development efficiency and rendering speed. React Router DOM facilitates seamless navigation within the application, creating a dynamic and interactive user experience. Tailwind CSS, a utility-first CSS framework, accelerates the styling process with a comprehensive set of pre-defined classes, ensuring a consistent and visually appealing design. Additionally, Tailwind CSS makes it easier to implement responsive design, ensuring the portfolio is accessible and functional across various dev</p>
     
        </p>
        
        <br />
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8">About my Timetable Generating System</h2>
        
        <p className="mb-2 lg:mb-4 text-base lg:text-lg">
        
          
        <Link to="https://github.com/dsah567/Timetable-Generating-Frontend" target="_blank">
         <u> Frontend Github Link</u>
        </Link> <br />
        <Link to="https://github.com/dsah567/Timetable-Generating-Backend" target="_blank">
          <u>Backend Github Link </u>
        </Link>
        <br />
        <br />
        
          
         <p>The Timetable Generating System project is designed with a clear separation between frontend and backend components, each contributing to the overall functionality of the system. The frontend provides an intuitive user interface where users can input their preferences and constraints for the timetable. It is crafted to be user-friendly and responsive, ensuring a seamless experience across various devices.
            The backend, on the other hand, handles the complex processing required to generate optimal timetables. It utilizes advanced genetic algorithms to solve the intricate problem of scheduling, which involves balancing numerous variables and constraints. Genetic algorithms are well-suited for this task due to their ability to efficiently explore large solution spaces and find near-optimal solutions. The backend processes the user inputs, applies the genetic algorithm to generate feasible schedules, and outputs the results to the frontend for user review.
            Overall, the project integrates sophisticated algorithmic techniques with a user-centric interface, providing a powerful tool for timetable generation that can adapt to various scheduling needs and constraints.</p>
        </p>
        <p>Note Timetable Generating System is haevy compute process to deploy on simple server.  <Link to="https://www.linkedin.com/posts/sahd7929_mernstack-timetablegeneratingsystem-educationtechnology-activity-7209192425867681794-hAbe?utm_source=share&utm_medium=member_desktop" target="_blank">
         <u>click here for Timetable generating system project demo video</u>
        </Link></p>
      </div>
      
    </section>

   </div>
  )
}
