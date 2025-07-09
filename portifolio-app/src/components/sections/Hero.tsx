import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MapPin, Mail } from "lucide-react";
import { GeometricShapes } from "../3d/GeometricShapes";
import { PortfolioData } from "@/types/portfolio-data";
import { useRef } from "react";

interface HeroProps {
  data: Pick<PortfolioData, 'name' | 'stack' | 'location' | 'contact' | 'profileImage'>;
}

export function HeroSection({ data }: HeroProps) {
  const leftRef = useRef(null);
  const isInViewLeft = useInView(leftRef, { amount: 0.5 });

  const rightRef = useRef(null);
  const isInViewRight = useInView(rightRef, { amount: 0.5 });


  return (
    <section className="h-[93vh] relative overflow-hidden">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <GeometricShapes />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="relative z-10 h-full pt-8 flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8">
          {/* Coluna da foto */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isInViewLeft ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl">
                <img src="/profile.jpg" alt={`${data.name}`} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/10 to-purple-500/10"></div>
            </div>
          </motion.div>

          {/* Coluna do texto */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isInViewRight ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white"> {data.name} </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-300" dangerouslySetInnerHTML={{ __html: data.stack }} />
            <div className="flex items-center justify-center lg:justify-start mb-8 text-gray-400">
              <MapPin size={20} className="mr-2" />
              <span> {data.location} </span>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href={data.contact.linkedin} target="_blank" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <FaLinkedin size={32} />
              </a>
              <a href={data.contact.github} target="_blank" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <FaGithub size={32} />
              </a>
              <a href={`mailto:${data.contact.email}`}  className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Mail size={32} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}