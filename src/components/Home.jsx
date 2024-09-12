import React from 'react'

export default function Home() {
  return (
    <section className="bg-gray-800 text-white p-4 lg:p-8">
      <div className="container mx-auto lg:w-2/3">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8">About Myself</h2>
        <p className="mb-2 lg:mb-4 text-base lg:text-lg">
          My name is Dipu Kumar Sah, and I hold a Bachelor of Engineering (B.E.) degree in Computer Science from R R Institute of Technology,
          affiliated with Visvesvaraya Technological University (VTU). With a solid educational background and hands-on experience, I specialize
          in both frontend and backend development, particularly as a MERN stack backend focus and React Native developer. Additionally, I have extensive experience 
          with Java and Spring Boot, focusing more on backend development.
        </p>
        <br/>
        <p>
        Throughout my academic and professional journey, I have worked on various projects, including a Timetable Generating System and a Travel and 
        Tourism Management System, which have honed my skills in creating efficient and user-friendly applications. My internship in Mobile Application 
        Development for Android further solidified my understanding of mobile technologies and application deployment.
        </p>
        <br/>
        <p>
        I am well-versed in several programming languages, including Java, C, TypeScript, and JavaScript, and I have completed specialized courses 
        such as 'The Complete Git Guide' and 'Java Spring Framework 6 with Spring Boot 3' on Udemy. My expertise extends to full stack development
         with technologies like React, Node.js, Express.js, and MongoDB, and I am adept at writing CSS with Tailwind CSS in React.
        </p>
        <br/>

        <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8">About Tech Stack Of Portfolio</h2>
        <p className="mb-2 lg:mb-4 text-base lg:text-lg">
        I have developed a portfolio using React, leveraging the power of React Router DOM for efficient routing and Tailwind CSS for 
        styling and ensuring a responsive design. React, a robust JavaScript library, allows for a component-based architecture,
         which makes the code reusable and maintainable while improving development efficiency and rendering speed.
          React Router DOM facilitates seamless navigation within the application, creating a dynamic and interactive user experience.
           Tailwind CSS, a utility-first CSS framework, accelerates the styling process with a comprehensive set of pre-defined classes,
            ensuring a consistent and visually appealing design. Additionally, Tailwind CSS makes it easier to implement responsive design,
             ensuring the portfolio is accessible and functional across various devices.
        </p>
      </div>
    </section>
  )
}
