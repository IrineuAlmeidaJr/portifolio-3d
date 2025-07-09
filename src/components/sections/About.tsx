import { useRef } from "react";
import { Section } from "../layout/Section";
import { motion, useInView } from "framer-motion";

interface AboutProps {
  content: string;
}

export function About({ content }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <Section id="sobre" title="Sobre Mim">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="text-lg text-gray-300 leading-relaxed"
      >
        <div className="max-w-4xl mx-auto">        
          {content}
        </div>      
      </motion.div>
    </Section>
  );
}