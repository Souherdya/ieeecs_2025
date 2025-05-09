import {motion, useScroll} from 'framer-motion';
import { Routes, Route } from "react-router-dom";
import { Hero } from "./pages/Hero";
import { Gallery } from "./pages/Gallery";
import { Footer } from "./components/Footer";
 


export default function App() {

  const { scrollYProgress } = useScroll();


  return (
    <main aria-selected="false">
      <motion.div className="z-30 sticky h-[10px] bg-green-300 top-0" style={{scaleX: scrollYProgress, transformOrigin: "left"}} />
      
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      <Footer />
    </main>
  )
}