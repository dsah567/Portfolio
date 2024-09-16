import React from 'react';
import { Link } from 'react-router-dom';
import LinkedinLogo from './assets/linkedin.svg';
import GithubLogo from './assets/github.svg';
import DipuKumarSah_Resume from './assets/Dipu_Kumar_Sah_Resumee.pdf'
import JS from "./assets/js-svgrepo-com.svg"
import Rect from "./assets/react-javascript-js-framework-facebook-svgrepo-com.svg"
import NodeJS from "./assets/nodejs-svgrepo-com.svg"
import ExpressJS from "./assets/express-svgrepo-com.svg"
import Java from "./assets/java-svgrepo-com.svg"
import Spring from "./assets/spring-svgrepo-com.svg"
import Jpa from "./assets/jpa-svgrepo-com.svg"
import Hibernate from "./assets/hibernate-svgrepo-com.svg"
import Mongo from "./assets/mongo-svgrepo-com.svg"
import Mysql from "./assets/mysql-svgrepo-com.svg"
import Css from "./assets/css-3-svgrepo-com.svg"
import Html from "./assets/html-5-svgrepo-com.svg"


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
              onClick={() => scrollToSection('skills')}
              className="hover:font-bold text-white"
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="hover:font-bold text-white"
            >
              Projects
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
<div className='bg-gray-700'>
      {/* Placeholders for sections */}
      <section id="home">
      <div className="container mx-auto p-4 grid grid-cols-1 gap-6">
    
  <div className="bg-teal-100  p-4 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold" >About Me</h2>
        <p >
        Hi I am Dipu Kumar Sah, Full Stack Developer Backend Focus and recent graduate in Computer Science with practical experience in Android development through a three-month internship, where I focused on API handling, backend development with PHP and MySQL, and designing layouts for Android apps. I further advanced my skills as a MERN stack developer, leading a team to create a timetable generation system using genetic algorithms. My expertise also extends to batch management systems, where I implemented student record management with JWT authentication and CORS policies. Additionally, I've worked with Spring Boot and React Native, enhancing my ability to build robust web applications and collaborate effectively across teams.
        </p> <br />
        <a className="inline-block px-6 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300" href={DipuKumarSah_Resume} download="Dipu_Kumar_Sah_Resume">Download Resume</a>
      </div>
      </div>
      </section>

      <section id="skills">
        <div className="container mx-auto  p-4 bg-slate-500 rounded-lg">
        <h1 className="text-xl font-semibold" >Skills Section</h1>
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
        <div className="bg-teal-100 p-4 shadow-md rounded-lg">
          
          <h2 className="text-xl font-semibold">JavaScript Technologies</h2>
          <div className="container mx-auto p-4 grid grid-cols-4 gap-6">
              <div><img src={JS} alt=" JavaScript" width={150} /> JavaScript</div>
              <div><img src={Rect} alt=" React " width={150}  /> React </div>
              <div><img src={NodeJS} alt=" NodeJS " width={150} /> NodeJS </div>
              <div><img src={ExpressJS} alt=" ExpressJS " width={150}  /> ExpressJS </div>
          </div>
        </div>
        <div className="bg-teal-100 p-4 shadow-md rounded-lg">
          
          <h2 className="text-xl font-semibold">Java Technologies</h2>
          <div className="container mx-auto p-4 grid grid-cols-4 gap-6">
              <div><img src={Java} alt=" Java " width={150} />  Java </div>
              <div><img src={Spring} alt=" Spring " width={150}  />  Spring </div>
              <div><img src={Jpa} alt=" JPA " width={150} /> JPA  </div>
              <div><img src={Hibernate} alt=" Hibernate " width={150}  />  Hibernate </div>
          </div>
        </div>
        <div className="bg-teal-100 p-4 shadow-md rounded-lg">
          
          <h2 className="text-xl font-semibold">Database and style sheet language</h2>
          <div className="container mx-auto p-4 grid grid-cols-4 gap-6">
              <div><img src={Mongo} alt=" MongoBD" width={150} />  MongoBD</div>
              <div><img src={Mysql} alt=" MySql " width={150}  />  MySql </div>
              <div><img src={Html} alt=" html5 " width={150} />  html5 </div>
              <div><img src={Css} alt=" css3 " width={150}  />  css3 </div>
          </div>
        </div>
      </div>
      </div>
      </section>


      <section id="projects">
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
  <div className="bg-teal-100  p-4 shadow-md rounded-lg">
    
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
        
  <div className="bg-teal-100  p-4 shadow-md rounded-lg">
    
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
      
      <section id="contact">
        <div className="container mx-auto p-4 grid grid-cols-1 gap-6">
            <div className="card bg-teal-100 p-4 shadow-md rounded-lg">
              <h2 className="text-xl font-semibold">Contact Section</h2>
              
              <a href="mailto:sahd7929@gmail.com"><u>Send Mail :</u></a> <>sahd7929@gmail.com</>
              <br />
              <a href="tel:+917892957459"><u>Call Now. :</u></a> <> +91 7892957459</>
              <br />
              <a href="https://www.linkedin.com/in/sahd7929/"><u>Connect With Me</u></a> <> linkedin.com/in/sahd7929/</>
              <br />
              <a href="https://github.com/dsah567/"><u>Check My GitHub</u></a> <> https://github.com/dsah567/</>
              <br />

            </div>
            
          </div>

      </section>
      </div>
    </>
  );
}
