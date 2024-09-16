import React from 'react'
import { Link } from 'react-router-dom'

export default function Skills() {
  return (
    <>

    <section className="bg-gray-800 text-white p-4 lg:p-8">
      <div className="container mx-auto lg:w-2/3">
    
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8">Skills and Technologies</h2>
        
        <h3 className="text-xl lg:text-2xl font-semibold mb-2">JavaScript and MERN Stack</h3>
        <ul className="list-disc pl-5 mb-4">
          <li><strong>Frontend:</strong> HTML, CSS, Tailwind CSS, JavaScript (ReactJS)</li>
          <li><strong>Backend:</strong> Node.js, Express.js, Mongoose</li>
          <li><strong>Database:</strong> MongoDB</li>
        </ul>

        <h3 className="text-xl lg:text-2xl font-semibold mb-2">Java, Spring, and Spring Boot</h3>
        <ul className="list-disc pl-5 mb-4">
          <li><strong>Core Java:</strong> JDBC, Servlets, JSP, Hibernate, JPA</li>
          <li><strong>Backend:</strong> Spring Framework, Spring Boot</li>
          <li><strong>Database:</strong> SQL</li>
        </ul>

        <h3 className="text-xl lg:text-2xl font-semibold mb-2">Mobile App Development</h3>
        <ul className="list-disc pl-5 mb-4">
          <li><strong>React Native</strong></li>
        </ul>

        <h3 className="text-xl lg:text-2xl font-semibold mb-2">Technologies</h3>
        <ul className="list-disc pl-5 mb-4">
          <li><strong>Languages:</strong> C, Python, PHP, AJAX</li>
          <li><strong>Software:</strong> Visual Studio Code, Eclipse</li>
          <li><strong>Version Control:</strong> Git, GitHub</li>
          <li><strong>API Development & Testing:</strong> Postman</li>
        </ul>


        <h3 className="text-xl lg:text-2xl font-semibold mb-2">Course Certificate</h3>
        <ul className="list-disc pl-5 mb-4">
        <li><u><Link to="https://www.udemy.com/certificate/UC-d3fb5ed3-9194-4e81-b5e5-c9a6577b5c04/" target='_blank'>
          Java Spring Framework 6 with Spring Boot 3</Link></u></li>
        <li><u><Link to="https://www.udemy.com/certificate/UC-a7c04706-f577-48d7-8efb-cdfa42cb311d/" target='_blank'>
          Git and Github</Link></u></li>
        </ul>
      </div>
    </section>
    </>
  )
}
