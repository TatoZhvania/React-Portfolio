import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import git from '../assets/git.png'
import firebase from '../assets/firebase.png'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div name="skills" className="bg-[rgb(4,13,25)] text-gray-300 pt-[200px]">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
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
            <p className="font-bold text-[#9f38f9] text-4xl border-b-4 border-[#00d8ff] max-w-[195px] mb-2">
              Experience
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
            <p className="py-2">
              {'//'} These are technologies I've worked with
            </p>
          </motion.div>
        </div>

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
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-10 text-center py-8">
            <div className="shadow-lg shadow-[#e34c26bf] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={html} alt="html-icon" />
              <p className="my-4">HTML</p>
            </div>

            <div className="shadow-lg shadow-[#00d9ff43] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={css} alt="css-icon" />
              <p className="my-4">CSS</p>
            </div>

            <div className="shadow-lg shadow-[#f0da4f94] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src={javascript}
                alt="javascript-icon"
              />
              <p className="my-4">Javascript</p>
            </div>

            <div className="shadow-lg shadow-[#00d9ff43] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={react} alt="react-icon" />
              <p className="my-4">React</p>
            </div>

            <div className="shadow-lg shadow-[#00d9ff43] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src={tailwind}
                alt="tailwind-icon"
              />
              <p className="my-4">Tailwind</p>
            </div>

            <div className="shadow-lg shadow-[#767676c2] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={github} alt="github-icon" />
              <p className="my-4">Github</p>
            </div>

            <div className="shadow-lg shadow-[#ff4b4bab] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={git} alt="git-icon" />
              <p className="my-4">GIT</p>
            </div>

            <div className="shadow-lg shadow-[#ffa811ac] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src={firebase}
                alt="firebase-icon"
              />
              <p className="my-4">Firebase</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
