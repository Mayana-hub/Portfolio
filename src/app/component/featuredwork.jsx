"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "CreditAlign",
    description:
      "A modern fintech dashboard focused on credit monitoring, financial analytics, and responsive user experiences.",
    image:"/Creditalignportfolioimg.png",

    stack: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://creditalign.vercel.app/",
  },

//   {
//     title: "SaaS Analytics",
//     description:
//       "A clean analytics interface built with scalable UI architecture and interactive data visualization.",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
//     stack: ["React", "Charts", "Responsive UI"],
//     link: "#",
//   },

//   {
//     title: "Finance Mobile UI",
//     description:
//       "A mobile-first finance application interface designed for simplicity, speed, and accessibility.",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
//     stack: ["Next.js", "Mobile UI", "Tailwind"],
//     link: "#",
//   },
]

const FeaturedWork = () => {
  return (
   <section className="w-full px-5 sm:px-8 py-10 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">

  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="mb-14">

      <p className="text-sm tracking-wide text-gray-500 dark:text-gray-400 font-medium mb-3">
        FEATURED WORK
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white">

        Selected projects built throughout my learning journey.

      </h2>

    </div>

    {/* PROJECT GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden bg-white dark:bg-white/5 hover:shadow-2xl dark:hover:shadow-black/30 transition duration-500 backdrop-blur-xl"
        >

          {/* IMAGE */}
          <div className="relative w-full h-[250px] overflow-hidden shadow-md">

            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition duration-700"
            />

          </div>

          {/* CONTENT */}
          <div className="p-6">

            <h3 className="text-2xl font-semibold text-black dark:text-white">
              {project.title}
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7 text-sm sm:text-base">
              {project.description}
            </p>

            {/* STACK */}
            <div className="flex flex-wrap gap-3 mt-6">

              {project.stack.map((item, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium px-3 py-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                >
                  {item}
                </span>
              ))}

            </div>

            {/* LINK */}
            <div className="mt-8">

              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center text-sm font-medium text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition"
              >
                View Project →
              </a>

            </div>

          </div>

        </motion.div>
      ))}

    </div>

  </div>

</section>
  )
}

export default FeaturedWork
