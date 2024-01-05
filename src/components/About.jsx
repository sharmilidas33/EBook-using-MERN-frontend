import React from 'react'
import AboutImg from '../assets/aboutimg.jpg'
import { Link } from 'react-router-dom'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'

const About = () => {
  return (
    <section className="text-gray-600 body-font bg-amber-100 lg:mt-[-30px]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5 md:mb-0 space-y-8 lg:ml-20 lg:mt-16">
          <img className="object-cover object-center rounded-lg" alt="hero" src={AboutImg} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center gap-5">
          <h2 className="text-5xl font-bold leading-snug text-pink-800">About The Website</h2>
          <p className="md:w-4/5 text-black font-bold">Welcome to my MERN stack-powered book website, offering a comprehensive set of features for a seamless user experience. From secure user authentication to dynamic book fetching, users can explore an extensive library and contribute by uploading, editing, or deleting books. The technology stack includes MongoDB for efficient data storage, Express.js for server-side operations, React.js for dynamic front-end interfaces, and Node.js for high-performance server development. With a responsive design, our platform ensures accessibility across devices, providing readers and authors alike with a user-friendly and feature-rich environment for all things related to books.</p>
          <p className="md:w-4/5 text-amber-900 font-bold">Hello, I'm Sharmili Das, the developer behind this project. For any inquiries or collaboration opportunities, feel free to reach out to me through the following information below:</p>
          <div className='flex flex-row items-center'>
            <a href="https://github.com/sharmilidas33" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="h-16 w-16 object-cover rounded-lg gap-10 transform hover:scale-90" />
            </a>
            <a href="https://www.linkedin.com/in/sharmili-das-980984220/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="h-16 w-16 object-cover rounded-lg gap-10 transform hover:scale-90" />
            </a>
            <a href="mailto:sharmilidas06@gmail.com">
              <img src={gmail} alt="gmail" className="h-16 w-16 object-cover rounded-lg gap-10 transform hover:scale-90" />
            </a>
          </div>
          <a href="https://sharmiliportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className='bg-amber-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-pink-300 transition-all duration-300 inline-flex items-center gap-2'>
            Portfolio
          </a>


        </div>

      </div>
    </section>
  )
}

export default About
