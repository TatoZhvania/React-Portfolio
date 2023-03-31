import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { useScroll, motion, useMotionValue, useTransform } from 'framer-motion'
import devPhoto from '../assets/Web Developer_Monochromatic.png'

const Home = () => {
  const { scrollYProgress } = useScroll()

  return (
    <div
      id="home"
      name="home"
      className="bg-[rgb(4,13,25)] w-full h-screen flex"
    >
      <div className="max-w-[1500px] mx-auto pl-2 flex flex-col justify-center h-full lg:pl-[170px] md:pl-[100px]">
        <motion.div
          className="bg-[#770fd2] shadow-md shadow-[#770fd2] rounded-sm w-full h-[4px] fixed top-[80px] left-0"
          style={{ scaleX: scrollYProgress }}
        >
          {'.'}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-[#c087f2] text-lg border-b-4 border-[#00d8ff] max-w-[130px] mb-2">
            Hi, My name is-
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-[#fff]">
            Tato Zhvania.
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-[#fff]">
            I'm a Web Developer
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-[#c087f2] py-4 max-w-[600px] text-lg">
            Self-taught programmer. {'</>'}
          </p>
        </motion.div>
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -250 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link to="works" smooth={true} duration={500}>
              <buttom className="max-w-[170px] group text-[#fff] cursor-pointer border-2 px-7 py-3 my-2 flex items-center transition duration-250 ease-in-out hover:bg-[#7838f9] hover:border-[#7838f9]">
                <p>View Works</p>
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-1" />
                </span>
              </buttom>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="m-auto hidden sm:block">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img className="w-[300px]" src={devPhoto} alt="developer" />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
