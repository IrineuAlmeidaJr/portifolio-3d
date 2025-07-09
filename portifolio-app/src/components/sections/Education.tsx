import { Section } from "../layout/Section";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import type { Education as EducationType } from "../../types/education";

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
    return (
    <Section id="formacao" title="Formação Acadêmica">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="max-h-4/8 absolute left-6 top-4.5 rounded-full bottom-0 w-0.5 bg-indigo-800/30"></div>
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ delay: index * 0.2 }} 
              className="relative pl-12 pb-10 ml-4"
            >
              <span className="absolute -left-[0.5rem] top-1 flex items-center justify-center w-8 h-8 bg-gray-900 rounded-full border-2 border-indigo-500/50">
                <GraduationCap size={20} className="w-6 h-6 text-indigo-400" />
              </span>
              <h3 className="text-xl font-bold text-white mb-1">
                {edu.course}
              </h3>
              <p className="text-indigo-400 mb-2">
                {edu.institution} | {edu.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}