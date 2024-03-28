import { sidebarLinks } from '../libs/constants.ts';
import { Link } from 'react-router-dom';
import vinkLogo from '../assets/vink.png';

const Sidebar = () => {
  return (
    <aside className="max-w-fit h-screen w-full p-4 bg-gray-dark text-white">
      <nav>
        <a
          href="https://www.vink.ru/"
          target="_blank"
          className="px-4 py-2 hover:opacity-80 transition-all duration-300"
        >
          <img src={vinkLogo} alt="log" />
        </a>
        <ul className="flex flex-col gap-1">
          {sidebarLinks.map((link) => (
            <li key={link.id} className="">
              <Link
                to={link.href}
                className="px-4 py-2 flex items-center gap-1 rounded hover:text-yellow transition-all duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
