import React from 'react'
import AIimg from '../assets/AI-img.PNG'
import tictactoe from '../assets/tictactoe.PNG'
import weatherApp from '../assets/weather-app.PNG'
import dataSecure from '../assets/data-secure.PNG'
import blockchain from '../assets/blockhain.PNG'
import space from '../assets/space.PNG'
import { motion } from 'framer-motion'

const Works = () => {
  return (
    <div
      name="works"
      className="w-full md:screen text-gray-300 bg-[rgb(4,13,25)] pt-[200px] pb-[200px]"
    >
      <div className="md:max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mx-auto">
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
            <p className="font-bold text-[#9f38f9] text-4xl border-b-4 border-[#00d8ff] max-w-[120px] mt-8 mx-auto">
              Works
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="py-5">{'//'} Check out some of my recent works</p>
          </motion.div>
        </div>

        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        > */}
        <div className="grid gap-2 sm:gap-3 md:grid-cols-2 xl:grid-cols-3 ">
          <div
            style={{
              backgroundImage: `url(${AIimg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '300px',
              height: '200px',
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div>
                <a
                  href="https://github.com/TatoZhvania/AI-App"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="mx-6 text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a
                  href="https://tatozhvania.github.io/AI-App/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="mx-6 text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${tictactoe})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '300px',
              height: '200px',
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                TicTacToe
              </span>
              <div>
                <a
                  href="https://github.com/TatoZhvania/TicTacToe"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="mx-6 text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a
                  href="https://tatozhvania.github.io/TicTacToe/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="mx-6 text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${weatherApp})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '300px',
              height: '200px',
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather App
              </span>
              <div>
                <a
                  href="https://github.com/TatoZhvania/Weather-App"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="mx-6 text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    COde
                  </button>
                </a>
                <a
                  href="https://tatozhvania.github.io/Weather-App/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="mx-6 text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${dataSecure})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '300px',
              height: '200px',
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Data Secure
              </span>
              <div>
                <a
                  href="https://github.com/TatoZhvania/Data-Secure"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="mx-6 text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a
                  href="https://data-secure-tz.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="mx-6 text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${blockchain})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '300px',
              height: '200px',
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Blockchain
              </span>
              <div>
                <a
                  href="https://github.com/TatoZhvania/blockchain"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="mx-6 text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a
                  href="https://blockchain-tz.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="mx-6 text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${space})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '300px',
              height: '200px',
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Space
              </span>
              <div>
                <a
                  href="https://github.com/TatoZhvania/Space"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="mx-6 text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a
                  href="https://space-tz.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="mx-6 text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* </motion.div> */}
      </div>
    </div>
  )
}

export default Works
