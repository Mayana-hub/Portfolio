"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="w-full px-5 sm:px-8 py-10 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
        >

          {/* LEFT CONTENT */}
          <div>

            <p className="text-sm tracking-wide text-gray-500 dark:text-gray-400 font-medium mb-4">
              ABOUT ME
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white leading-tight">

              Passionate about building clean, scalable, and user-focused web experiences.

            </h2>

          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-8 text-base sm:text-lg">

            <p>
              I started my frontend development journey a little over a year ago,
              driven by curiosity for modern web technologies and interactive user interfaces.
            </p>

            <p>
              Since then, I’ve focused on building responsive fintech dashboards,
              SaaS applications, and modern frontend experiences using React,
              Next.js, Tailwind CSS, and Framer Motion.
            </p>

            <p>
              I enjoy transforming ideas into polished digital products while paying
              close attention to performance, responsiveness, accessibility,
              and clean component architecture.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default About