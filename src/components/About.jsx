import React from 'react'


const About = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-16"
      style={{ backgroundImage: 'url(https://img.freepik.com/premium-psd/abstract-geometric-background-with-yellow-black-stripes-squares-white_161754-91624.jpg?semt=ais_hybrid&w=740)' }}
    >
      <div className="max-w-3xl w-full bg-white/90 shadow-2xl rounded-2xl p-10 md:p-16 border border-gray-200 backdrop-blur-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gray-100 border-4 border-yellow-400 flex items-center justify-center mb-4 shadow-lg">
            <span className="text-4xl font-bold text-gray-800">HS</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 tracking-tight">Muhammad Hamza Shahid</h1>
          <h2 className="text-lg md:text-xl font-medium text-yellow-500 mb-2">Junior MERN Stack Developer <span className="text-gray-400">|</span> UI/UX Enthusiast</h2>
        </div>
        <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 text-justify">
          <p className="mb-4">
            I am a passionate and dedicated <span className="font-semibold text-gray-900">Junior MERN Stack Web Developer</span> with the ability to build complete web applications from concept to deployment. My expertise spans both frontend and backend development, along with experience in UI/UX design and collaboration tools.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Frontend</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>HTML5, CSS3, JavaScript</li>
                <li>React.js, Bootstrap, React-Bootstrap</li>
                <li>Tailwind CSS, ShadCN-UI</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Backend</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Node.js, Express.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Tools & Platforms</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>VS Code, Git, GitHub</li>
                <li>Cloud deployment familiarity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Design</h3>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Figma (Web & Mobile UI Design)</li>
              </ul>
            </div>
          </div>
          <p className="mb-4">
            I have recently completed a <span className="font-semibold text-gray-900">two-year Diploma in Web Development from Aptech</span>, during which I worked on several projects, including social media static apps and job test applications. My experience also includes a short-term remote role as a <span className="font-semibold text-gray-900">Junior UI/UX Designer</span>, where I designed a web layout and a mobile restaurant app prototype. This opportunity helped me understand real-world design workflows and improved my creative thinking.
          </p>
          <p className="mb-4">
            I'm a quick learner, hard-working, and adaptable—always eager to upgrade my skills. I believe in combining smart work with AI tools to improve productivity. Currently, I'm following a disciplined daily coding routine to sharpen my full-stack development abilities.
          </p>
          <p>
            <span className="font-semibold text-gray-900">I’m actively seeking a challenging and growth-oriented opportunity</span> where I can contribute meaningfully, apply my skills, and continue to grow as a Full Stack Developer.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
        </div>
      </div>
    </section>
  )
}

export default About