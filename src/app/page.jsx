"use client"
import Image from "next/image";
import Navbar from "./component/navbar"
import { motion } from "framer-motion";
import Hero from "./component/hero";
import Featuredwork from "./component/featuredwork";
import Experience from "./component/experience";
import About from "./component/about";
import Contact from "./component/contact"
export default function Home() {
  return <>
              <Navbar/>
        <div>
          <Hero/>
          <Featuredwork/>
          <Experience/>
          <About/>
          <Contact/>
        </div>
  </>
  


}
