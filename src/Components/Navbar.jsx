import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className="w-full px-5 py-2 bg-blue-600 text-white h-[80px]
     flex justify-between items-center "
    >
      <h1 className="text-3xl text-green font-bold cursor-pointer ">
        My Company
      </h1>
      <nav>
        <ul className="lg:flex lg:flex-row lg:items-center lg:justify-center md:flex md:flex-row sm:flex sm:flex-row hidden  gap-8 text-lg font-semibold cursor-pointer ">
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Services</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <div className="icons lg:hidden md:hidden sm:hidden">
        {menu ? (
          <IoMdClose
            className="text-red-500 font-bold cursor-pointer"
            size={26}
            onClick={() => setMenu(!menu)}
          />
        ) : (
          <CiMenuBurger
            className="font-bold cursor-pointer"
            size={26}
            onClick={() => setMenu(!menu)}
          />
        )}
      </div>
      {/* Mobile Nav */}

      <nav
        className={` ${
          menu ? 'translate-x-0' : '-translate-x-full'
        }  flex flex-col absolute top-20 left-0  items-center  bg-blue-500 gap-10 w-full transition-transform duration-500 `}
      >
        <ul className="flex flex-col gap-5 my-2 text-lg font-semibold cursor-pointer ">
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Services</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
