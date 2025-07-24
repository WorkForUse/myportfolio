import { NavLink } from 'react-router-dom';
import cv from '../../public/Resume.pdf';
import { MdDownload } from "react-icons/md";

const Nav = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        {/* Logo - hide on small screens */}
        <div className="hidden sm:flex items-center">
          <img
            src="https://us.123rf.com/450wm/mmfcreative/mmfcreative2101/mmfcreative210116289/162907912-icono-de-logotipo-de-vector-de-letra-inicial-de-mp.jpg?ver=6"
            alt="logo"
            width={40}
            className="rounded-full mr-3"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4 sm:gap-8">
          {navigation.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                `block text-gray-600 font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'text-amber-600 border-b-2 border-amber-500'
                    : 'hover:text-black'
                }`
              }
              end={item.href === '/'}
            >
              {item.name}
            </NavLink>
          </li>
          ))}
        </ul>

        {/* Download CV Button */}
        <button
          type="button"
          onClick={handleDownload}
          className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-amber-500 text-white rounded-full font-semibold text-xs sm:text-sm shadow hover:bg-amber-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 flex-shrink-0"
        >
          Resume <MdDownload className="text-base" aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
};

export default Nav;