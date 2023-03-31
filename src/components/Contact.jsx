import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async (e) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <div
      name="contact"
      className="w-full h-[120vh] bg-[black] flex justify-center items-center p-4"
    >
      <form
        action="https://formsubmit.co/tatojvania.03@gmail.com"
        onSubmit={onSubmit}
        method="POST"
        target="_blank"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
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
            <p className="font-bold text-[#9f38f9] text-4xl border-b-4 border-[#00d8ff] max-w-[140px] mt-8">
              Contact
            </p>
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
            <p className="text-gray-300 py-4">
              {'//'} Submit the form below or shoot me an email -
              tatojvania.03@gmail.com
            </p>
          </motion.div>
        </div>

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
          <input
            className="bg-[#f0f0f0] p-2 placeholder-[#1c1c1c] rounded-sm w-full"
            required
            type="text"
            placeholder="Name"
            name="name"
            {...register('name', {
              require: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="text-red mt-1">
              {errors.name.type === 'required' && 'This field is required.'}
              {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
            </p>
          )}
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
          <input
            className="my-4 p-2 bg-[#f0f0f0] placeholder-[#1c1c1c] rounded-sm w-full"
            required
            type="email"
            placeholder="Email"
            name="email"
            {...register('email', {
              require: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="text-red mt-1">
              {errors.email.type === 'required' && 'This field is required.'}
              {errors.email.type === 'pattern' && 'Inavlid email address!'}
            </p>
          )}
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
          <textarea
            className="bg-[#f0f0f0] p-2 max-h-[200px] placeholder-[#1c1c1c] rounded-sm w-full"
            required
            name="message"
            rows="10"
            placeholder="Message..."
            {...register('message', {
              require: true,
              maxLength: 2000,
            })}
          ></textarea>
          {errors.message && (
            <p className="text-red mt-1">
              {errors.message.type === 'required' && 'This field is required.'}
              {errors.message.type === 'maxLength' &&
                'Max length is 2000 char!'}
            </p>
          )}
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
          <button
            className="max-w-[170px] mx-auto py-3 text-[#fff] cursor-pointer border-2 px-7  my-4 flex items-center transition duration-250 ease-in-out hover:bg-[#7838f9] hover:border-[#7838f9]"
            type="submit"
          >
            Contact Me
          </button>
        </motion.div>
      </form>
    </div>
  )
}

export default Contact
