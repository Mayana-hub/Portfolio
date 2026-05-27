"use client"

import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="w-full pt-10 pb-12 px-5 sm:px-8 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="max-w-5xl mx-auto"
  >

    {/* SMALL LABEL */}
    <p className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400 mb-5">
      FRONTEND ENGINEER
    </p>

    {/* HEADING */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-tight">

      I build scalable{" "}
      <span className="text-gray-400 dark:text-gray-500">
        frontend experiences
      </span>
      {" "}for modern web applications.

    </h1>

    {/* DESCRIPTION */}
    <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300">

      I started my web development journey over a year ago and
      have focused on building modern fintech dashboards,
      SaaS interfaces, and responsive web applications with
      clean user experiences and scalable frontend architecture.

    </p>

  </motion.div>

</section>
  )
}

export default Hero