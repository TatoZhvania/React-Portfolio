import React, { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import CV from '../assets/Tato-Zhvania-CV.pdf'
import { Link } from 'react-scroll'
import {
  AiOutlineHome,
  AiFillProject,
  AiOutlineMail,
  AiOutlineAppstore,
} from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[rgba(4,13,25,0.94)] text-gray-300 shadow-md shadow-[#00d9ff75] z-[99] ">
      <div className=" text-4xl font-bold text-[#9f38f9] py-4">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          Portf<span className=" text-[#00d8ff] text-2xl">olio</span>
        </Link>
      </div>
      {/* M E N U */}
      <ul className="hidden md:flex">
        <li className="nav-links ">
          <Link to="home" smooth={true} duration={500}>
            <p>Home</p>
          </Link>
        </li>
        <li className="nav-links ">
          <Link to="about" smooth={true} duration={500}>
            <p>About</p>
          </Link>
        </li>
        <li className="nav-links ">
          <Link to="skills" smooth={true} duration={500}>
            <p>Skills</p>
          </Link>
        </li>
        <li className="nav-links ">
          <Link to="works" smooth={true} duration={500}>
            <p>Works</p>
          </Link>
        </li>
        <li className="nav-links ">
          <Link to="contact" smooth={true} duration={500}>
            <p>Contact</p>
          </Link>
        </li>
      </ul>

      {/* H A M B U R G E R */}
      <div
        onClick={handleClick}
        className="text-[#00d8ff] md:hidden z-10 cursor-pointer"
      >
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen  text-[#fff] bg-[#0a192ff2] flex flex-col justify-center items-center'
        }
      >
        <li className="py-1 my-6 text-3xl border-b-4 border-[#9f38f9]">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            className="flex"
          >
            <AiOutlineHome size={30} className="mr-3" /> <p>Home</p>
          </Link>
        </li>
        <li className="py-1 my-6 text-3xl border-b-4 border-[#9f38f9] text-white">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            className="flex"
          >
            <BsPerson size={30} className="mr-3" />
            <p>About</p>
          </Link>
        </li>
        <li className="py-1 my-6 text-3xl border-b-4 border-[#9f38f9]">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            className="flex"
          >
            <AiOutlineAppstore size={30} className="mr-3" />
            <p>Skills</p>
          </Link>
        </li>
        <li className="py-1 my-6 text-3xl border-b-4 border-[#9f38f9]">
          <Link
            onClick={handleClick}
            to="works"
            smooth={true}
            duration={500}
            className="flex"
          >
            <AiFillProject size={30} className="mr-3" />
            <p>Works</p>
          </Link>
        </li>
        <li className="py-1 my-6 text-3xl border-b-4 border-[#9f38f9]">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            className="flex"
          >
            <AiOutlineMail size={30} className="mr-3" />
            <p>Contact</p>
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] lef-0">
        <ul className="flex flex-col gap-1 z-[-99]">
          <li className="rounded-r-md w-[160px] h-[40px] flex justify-between items-center ml-[-120px] hover:ml-[-20px] duration-300 bg-[#4267B2]">
            <a
              href="https://www.facebook.com/profile.php?id=100009092394563"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-fray-300"
            >
              Facebook <FaFacebook size={25} />
            </a>
          </li>

          <li className="rounded-r-md w-[160px] h-[40px] flex justify-between items-center ml-[-120px] hover:ml-[-20px] duration-300 bg-[#171515]">
            <a
              href="https://github.com/TatoZhvania"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-fray-300"
            >
              Github <FaGithub size={25} />
            </a>
          </li>

          <li className="rounded-r-md w-[160px] h-[40px] flex justify-between items-center ml-[-120px] hover:ml-[-20px] duration-300 bg-[#e95950]">
            <a
              href="https://www.instagram.com/tato_zhvaniaa/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-fray-300"
            >
              Instagram <FaInstagram size={25} />
            </a>
          </li>

          <li className="rounded-r-md w-[160px] h-[40px] flex justify-between items-center ml-[-120px] hover:ml-[-20px] duration-300 bg-[#0A66C2]">
            <a
              href="https://www.linkedin.com/in/tato-zhvania-07b320228/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-fray-300"
            >
              Linkeding <FaLinkedin size={25} />
            </a>
          </li>

          <li className="rounded-r-md w-[160px] h-[40px] flex justify-between items-center ml-[-120px] hover:ml-[-20px] duration-300 bg-[#DC143C]">
            <a
              target="_blank"
              rel="noreferrer"
              href={CV}
              className="flex justify-between items-center w-full text-fray-300"
            >
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>

          <li className="rounded-r-md w-[260px] h-[40px] flex justify-between items-center ml-[-220px] hover:ml-[-20px] duration-300 bg-[#EB8F00]">
            tatojvania.03@gmail.com
            <a
              href="mailto:tatojvania.03@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-fray-300 ml-5"
            >
              <HiOutlineMail size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
