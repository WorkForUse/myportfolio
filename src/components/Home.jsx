import React from 'react'

const Home = () => {

  const projects = {
    fullStack: [
      {
        id: 1,
        title: "MyAirbnb Under Deployement (MERN Stack)",
        description: "A full-stack accommodation booking platform using MongoDB, Express, React, and Node.js. Features user authentication, booking system, and admin dashboard. Fully responsive design with backend functionality.",
        image: "https://thumbs.dreamstime.com/b/reservation-form-hotel-reception-dark-desk-background-room-161175856.jpg",
        link: "#",
        tags: ["MERN Stack", "MongoDB", "Express", "React", "Node.js", "Full-stack"],
        isMern: true
      },
      {
        id: 2,
        title: "E-commerce Platform Under Development (MERN)",
        description: "Complete e-commerce solution with product management, shopping cart, and payment integration. Built with MERN stack and Redux for state management.",
        image: "https://img.freepik.com/free-vector/ecommerce-web-store-hand-drawn-illustration_107791-10966.jpg",
        link: "#",
        tags: ["MERN Stack", "Redux", "Full-stack"],
        isMern: true
      }
    ],
    frontend: [
      {
        id: 3,
        title: "Blogging Platform",
        description: "A responsive blogging platform built with React.js that uses Context API for state management. Features rich text editing and responsive design.",
        image: "https://st2.depositphotos.com/1006899/8421/i/450/depositphotos_84219350-stock-photo-word-blog-suspended-by-ropes.jpg",
        link: "https://workforuse.github.io/DeehTee/",
        tags: ["React", "Context API", "Responsive"],
        isMern: false
      },
      {
        id: 4,
        title: "Social Media Static Web",
        description: "A lightweight social media interface built with pure Tailwind CSS. Features a clean, responsive design that works seamlessly across all device sizes.",
        image: "https://img.freepik.com/free-vector/modern-background-social-media-icons_1017-4839.jpg",
        link: "https://workforuse.github.io/MyBindle/",
        tags: ["React", "Tailwind CSS", "Responsive"],
        isMern: false
      }
    ]
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-16">
      <div className="max-w-7xl mx-auto w-full">
        {/* Hero Section (Banner) */}
        <section className="relative text-center mb-24 bg-white/90 rounded-2xl shadow-xl border border-gray-200 py-16 px-6 md:px-16">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-pink-400 rounded-t-2xl" />
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-gray-900">Hi, I'm <span className="text-amber-500">Hamza</span></h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 italic mb-6">I'm a Junior MERN Stack Developer</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-10 leading-relaxed text-lg">
            Passionate about building modern web applications with MongoDB, Express, React, and Node.js. Dedicated to creating efficient, user-friendly solutions with clean code.
          </p>
          <div className="mb-10">
            <button className="px-8 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-500 hover:text-white transition-colors duration-300 text-base tracking-wider shadow-sm">
              <a href="#projects">VIEW MY WORKS</a>
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com" className="text-gray-500 hover:text-amber-500 transition-colors font-medium text-base">
              LinkedIn
            </a>
            <a href="https://github.com/WorkForUse" className="text-gray-500 hover:text-amber-500 transition-colors font-medium text-base">
              GitHub
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="mt-24 px-4">
          <h3 className="text-sm font-bold text-amber-400 mb-4 uppercase tracking-wider">What I Do</h3>
          <h1 className='text-5xl md:text-7xl font-extrabold mb-12 text-gray-900'>WORKS</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col items-center hover:shadow-2xl transition-shadow">
              <img 
                src="https://demo.gethugothemes.com/icelab/site/images/icon-1.svg" 
                alt="UI/UX Design" 
                className="w-14 h-14 mb-5"
              />
              <h5 className="text-xl font-bold mb-2 text-gray-800">UI/UX Design</h5>
              <p className="text-gray-600 text-center">
                Familiar with UI/UX design principles and creating intuitive web and mobile app interfaces.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col items-center hover:shadow-2xl transition-shadow">
              <img 
                src="https://demo.gethugothemes.com/icelab/site/images/icon-3.svg" 
                alt="API Development" 
                className="w-14 h-14 mb-5"
              />
              <h5 className="text-xl font-bold mb-2 text-gray-800">API Development</h5>
              <p className="text-gray-600 text-center">
                Familiar building RESTful APIs and working with state management using Redux.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col items-center hover:shadow-2xl transition-shadow">
              <img 
                src="https://demo.gethugothemes.com/icelab/site/images/icon-2.svg" 
                alt="Web Development" 
                className="w-14 h-14 mb-5"
              />
              <h5 className="text-xl font-bold mb-2 text-gray-800">Web Development</h5>
              <p className="text-gray-600 text-center">
                Skilled in full-stack development using the MERN stack (MongoDB, Express, React, and Node.js).
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-24 px-4" id="projects">
          <h3 className="text-sm font-bold text-amber-400 mb-4 uppercase tracking-wider">Our Recents</h3>
          <h1 className='text-5xl md:text-7xl font-extrabold mb-12 text-gray-900'>PROJECTS</h1>
          {/* Full Stack Projects */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-8 h-1 bg-amber-400 mr-4"></span>
              Full Stack Projects
              <span className="ml-auto text-sm font-normal bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                MERN Stack Highlighted
              </span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {projects.fullStack.map((project) => (
                <div 
                  key={project.id} 
                  className={`relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 ${project.isMern ? 'border-amber-400' : 'border-gray-200'}`}
                >
                  {project.isMern && (
                    <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs px-3 py-1 rounded-full shadow">MERN</span>
                  )}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-7">
                    <h5 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h5>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className={`px-2 py-1 text-xs rounded-full ${tag === 'MERN Stack' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-600'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-base">{project.description}</p>
                    <div className="flex justify-end items-center">
                      <a 
                        href={project.link} 
                        className="px-5 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-amber-500 hover:text-gray-900 transition-colors font-semibold shadow"
                      >
                        Visit Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Frontend Projects */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="w-8 h-1 bg-blue-400 mr-4"></span>
              Frontend Projects
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              {projects.frontend.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-200"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-7">
                    <h5 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h5>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-base">{project.description}</p>
                    <div className="flex justify-end items-center">
                      <a 
                        href={project.link} 
                        className="px-5 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-colors font-semibold shadow"
                      >
                        Visit Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
  
    </div>
  )
}

export default Home