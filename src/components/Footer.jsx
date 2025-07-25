const Footer = () => {
  return (
    <footer
      className="relative text-white py-12 px-4 mt-20 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://demo.gethugothemes.com/icelab/site/images/shape-small.png)' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4 bg-black/60 rounded-xl py-8 px-4">
        <h5 className="text-2xl font-bold tracking-wide flex items-center">
          My<span className="text-yellow-300 ml-1">Portfolio</span>
        </h5>
        <div className="text-center text-sm text-white/80">
          Copyright © 2025 <span className="font-semibold">Hamza</span>. All Rights Reserved.
        </div>
        <div className="flex space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/mhmzashahid1921linkdin/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/></svg>
          </a>
          <a href="https://github.com/WorkForUse" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer