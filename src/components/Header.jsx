import React from 'react';
import { Link } from 'react-router-dom';
import LinkedinLogo from './assets/linkedin.svg';
import GithubLogo from './assets/github.svg';
import DipuKumarSah_Resume from './assets/Dipu_Kumar_Sah_Resume.pdf'


export default function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex-grow lg:flex lg:justify-center space-x-4 lg:space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:font-bold text-white"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="hover:font-bold text-white"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="hover:font-bold text-white"
            >
              Skills
            </button>


            <button
              onClick={() => scrollToSection('contact')}
              className="hover:font-bold text-white"
            >
              Contact
            </button>
          </div>

          <div className="flex space-x-4 lg:space-x-8 ml-auto">
            <Link to="https://www.linkedin.com/in/sahd7929/" target="_blank">
              <img src={LinkedinLogo} alt="LinkedIn Logo" width={30} />
            </Link>

            <Link to="https://github.com/dsah567/" target="_blank">
              <img src={GithubLogo} alt="Github Logo" width={30} className="bg-slate-50 p-0.5" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Placeholders for sections */}
      <section id="home">
      <div className="container mx-auto p-4 grid grid-cols-1 gap-6">
    
  <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold" >About Me</h2>
        <p >
        Full stack developer and recent graduate in Computer Science with practical experience in Android development through a three-month internship, where I focused on API handling, backend development with PHP and MySQL, and designing layouts for Android apps. I further advanced my skills as a MERN stack developer, leading a team to create a timetable generation system using genetic algorithms. My expertise also extends to batch management systems, where I implemented student record management with JWT authentication and CORS policies. Additionally, I've worked with Spring Boot and React Native, enhancing my ability to build robust web applications and collaborate effectively across teams.
        </p> <br />
        <a className="inline-block px-6 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300" href={DipuKumarSah_Resume} download="Dipu_Kumar_Sah_Resume">Download Resume</a>
      </div>
      </div>
      </section>
      <section id="projects">
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
  <div className="bg-white p-4 shadow-md rounded-lg">
    
    <h2 className="text-xl font-semibold">Batch Management</h2>
        
        <p >
        <br/>
        <Link 
        className="inline-block px-6 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
         to="https://batchmanagemnt.vercel.app/" target="_blank">
         <u> Project Link</u>
        </Link> <br />
        <br/>
        <Link 
        className="inline-block px-6 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
         to="https://github.com/dsah567/BatchManagemntFrontend" target="_blank">
         <u> Frontend Github Link</u>
        </Link> <br />
        <br/>
        <Link 
        className="inline-block px-6 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
         to="https://github.com/dsah567/BatchManagemntBackend" target="_blank">
          <u>Backend Github Link </u>
        </Link>
       
          
         <p>Developed a robust web application for student batch management, leveraging Reactjs, Redux, NodeJS, ExpressJS, tailwind css
            and MongoDB. Implemented secure authentication using JWT and cookies, ensuring sensitive information is protected.
            Designed and implemented RESTful APIs to facilitate efficient management of student data, including CRUD operations, error
            handling and security measures to protect user data. Utilized Formik and Yup for robust form validation and user input handling.
            Successfully deployed the application on cloud based services Vercel and Render, overcoming CORS challenges to ensure
            seamless communication between front-end and back-end components.
          </p>
     
        </p>
        </div>
        
  <div className="bg-white p-4 shadow-md rounded-lg">
    
    <h2 className="text-xl font-semibold" >Timetable Generating System</h2>
        <p >
        <br/>
        <Link 
        className="inline-block px-6 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
         to="https://github.com/dsah567/Timetable-Generating-Frontend" target="_blank">
         <u> Frontend Github Link</u>
        </Link> <br />
        <br/>
        <Link 
        className="inline-block px-6 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
         to="https://github.com/dsah567/Timetable-Generating-Backend" target="_blank">
          <u>Backend Github Link </u>
        </Link>
        <br />
        <br />
            <p> Developed a web app for schools and universities using a custom-built genetic algorithm to automate timetable generation
              based on teacher inputs, ensuring conflict-free scheduling.
              Implemented back end functionalities with javascript, nodejs, Expressjs, and mongodb for user authentication, data storage, and
              Restful API; and built a responsive react front end with React Router for smooth navigation.
              Overcame challenges in designing and writing the genetic algorithm to manage multiple constraints efficiently, reducing manual
              workload and improving scheduling accuracy for educational institutions.
            </p>
        </p>
        <br />
        <br />
        <p>Note Timetable Generating System is haevy compute process to deploy on simple server.  <Link 
        className="inline-block px-6 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
         to="https://www.linkedin.com/posts/sahd7929_mernstack-timetablegeneratingsystem-educationtechnology-activity-7209192425867681794-hAbe?utm_source=share&utm_medium=member_desktop" target="_blank">
         <u>click here for Timetable generating system project demo video</u>
        </Link></p>
        <br />
        </div>
      </div>
      
      </section>
      <section id="skills">
        <h1>Skills Section</h1>
      </section>
      <section id="contact">
        <div className="container mx-auto p-4 grid grid-cols-1 gap-6">
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">Contact Section</h2>
              
          <a href="mailto:sahd7929@gmail.com"><u>Send Mail :</u></a> <>sahd7929@gmail.com</>
          <br />
          <a href="tel:+917892957459"><u>Call Now. :</u></a> <> +91 7892957459</>
          <br />

            </div>
            
          </div>
      </section>
    </>
  );
}
