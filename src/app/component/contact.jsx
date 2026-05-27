"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { FaGithub } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
const Contact = () => {
  return (
    <section className="w-full px-5 sm:px-8 py-10 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">

      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 sm:p-12 bg-gray-50 dark:bg-white/5 backdrop-blur-xl"
        >

          {/* HEADER */}
          <div className="max-w-3xl">

            <p className="text-sm tracking-wide text-gray-500 dark:text-gray-400 font-medium mb-4">
              CONTACT
            </p>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-black dark:text-white leading-tight">

              Let’s build something modern and impactful together.

            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-8">

              I’m currently open to frontend development opportunities,
              collaborations, and freelance projects focused on modern,
              scalable, and user-focused web experiences.

            </p>

          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <a
              href="mailto:mayanajohn69@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              <Mail size={18} />
              Send Email
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-white/10 px-6 py-4 rounded-full text-sm font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              <FiGithub size={18} />
              GitHub
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-white/10 px-6 py-4 rounded-full text-sm font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              <FiLinkedin size={18} />
              LinkedIn
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact