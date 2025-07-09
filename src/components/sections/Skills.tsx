import { Section } from "../layout/Section";
import { motion } from "framer-motion";

interface SkillsProps {
  skills: string[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section id="competencias" title="Principais Competências">
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <motion.span key={skill} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }} className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            {skill}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}