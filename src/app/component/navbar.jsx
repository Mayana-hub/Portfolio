"use client"

import Link from "next/link"
import { Mail, Menu, X } from "lucide-react"
import { FiGithub, FiLinkedin,FiFileText } from "react-icons/fi";
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-md">

      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-black"
        >
          Mayana.
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-4">

          <Link
            href="mailto:mayanajohn69@gmail.com"
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
          >
            <Mail size={18} />
           Contact Us
          </Link>
           <Link
            href="https://github.com"
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
          >
            <FiGithub size={18} />
            GitHub
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
          >
            <FiLinkedin size={18} />
            LinkedIn
          </Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition"
          >
            <FiFileText size={16} />
            Resume
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl"
          >

            <div className="flex flex-col px-5 py-5 gap-4">
             <Link href="mailto:mayanajohn69@gmail.com"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
          >
            <Mail size={18} />
           Contact Us
          </Link>

              <Link
                href="https://github.com/Mayana-hub"
                target="_blank"
                className="flex items-center gap-3 text-gray-700"
              >
                <FiGithub size={18} />
                GitHub
              </Link>

              <Link
                href="linkedin.com/in/john-mayana-3a94303b6"
                target="_blank"
                className="flex items-center gap-3 text-gray-700"
              >
                <FiLinkedin size={18} />
                LinkedIn
              </Link>

              <Link
                href="/resume.pdf"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl"
              >
                <FiFileText size={16} />
                Resume
              </Link>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </header>
  )
}

export default Navbar