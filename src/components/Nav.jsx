import { NavLink } from 'react-router-dom';
import cv from '../../public/Curriculum_Vitae.pdf';
const Nav = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="bg-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - Left aligned */}
        <div className="flex items-center">
          <img 
            src="https://us.123rf.com/450wm/mmfcreative/mmfcreative2101/mmfcreative210116289/162907912-icono-de-logotipo-de-vector-de-letra-inicial-de-mp.jpg?ver=6" 
            alt="logo" 
            width={40} 
            className="rounded-full mr-3" 
          />
        </div>
        {/* Navigation Links - Right aligned */}
        <ul className="flex space-x-8">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `text-gray-600 font-medium text-sm uppercase tracking-wider transition-colors ${isActive ? 'text-amber-600 border-b-2 border-amber-500' : 'hover:text-black'}`
                }
                end={item.href === '/'}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Download CV Button */}
        <button>
        <a
          href={cv}
          download
          className="ml-6 px-4 py-2 bg-amber-500 text-white rounded-full font-semibold text-sm shadow hover:bg-amber-600 transition-colors"
        >
          Download CV
        </a>
        </button>
      </nav>
    </div>
  )
}

export default Nav