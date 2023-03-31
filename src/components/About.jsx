import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[rgb(4,13,25)] text-gray-300 pb-[200px] pt-[200px]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1200px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-4xl font-bold inline border-b-4 border-[#00d8ff] text-[#9f38f9]">
                About
              </p>
            </motion.div>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
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
            <div className="sm:text-right text-4xl font-bold ">
              <p>Hi, and nice to meet you: {')'} PLease take a look around</p>
            </div>
          </motion.div>
          <div>
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
              <p>
                I'm learning at Business and Technology University in the IT
                field. I'm a self-taught programmer, very motivated, active, and
                responsible person. I'm a hardworking and ambitious front end (
                React ) developer from Georgia, who wants to learn as much as
                possible to enhance his skills as an individual and also as a
                team worker. I wish I had spent this enthusiasm of mine in the
                right company. Also, I am trying to learn blockchain and
                metaverse by myself and I have basic knowledge in the crypto
                world.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
