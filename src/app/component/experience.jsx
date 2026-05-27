"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Globe,
  LayoutDashboard,
} from "lucide-react"

const skills = [
  {
    title: "Frontend Development",
    icon: <Code2 size={22} />,
    tools: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
  },

  {
    title: "UI Engineering",
    icon: <LayoutDashboard size={22} />,
    tools: ["Responsive Design", "Framer Motion", "Dark Mode", "Accessibility"],
  },

  {
    title: "Backend & APIs",
    icon: <Database size={22} />,
    tools: ["REST APIs", "Axios", "Context API", "Authentication"],
  },

  {
    title: "Deployment & Tools",
    icon: <Globe size={22} />,
    tools: ["GitHub", "Vercel", "Figma", "VS Code"],
  },
]

const Experience = () => {
  return (
    <section className="w-full px-5 sm:px-8 py-10 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">

          <p className="text-sm tracking-wide text-gray-500 dark:text-gray-400 font-medium mb-3">
            EXPERIENCE & TOOLS
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white max-w-3xl leading-tight">

            Technologies and tools I use to build modern web experiences.

          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border border-gray-200 dark:border-white/10 rounded-3xl p-6 bg-white dark:bg-white/5 backdrop-blur-xl hover:shadow-xl transition duration-300"
            >

              {/* ICON */}
              <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center text-black dark:text-white mb-5">
                {skill.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {skill.title}
              </h3>

              {/* TOOLS */}
              <div className="flex flex-wrap gap-3 mt-6">

                {skill.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 text-sm rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                  >
                    {tool}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Experience