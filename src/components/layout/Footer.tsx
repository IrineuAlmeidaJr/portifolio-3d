import { Section } from "./Section";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import type { Contact } from "../../types/contact";

interface FooterProps {
  contact: Contact;
  name: string;
}

export function Footer({ contact, name }: FooterProps) {
  return (
    <Section id="contato" title="Vamos Conversar?">
      <div className="text-center">
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Estou sempre aberto a novas oportunidades e colaborações. Entre em contato para discutirmos como posso contribuir com seu projeto.</p>
        <motion.a href={`mailto:${contact.email}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors mb-8">Enviar um E-mail</motion.a>
        <div className="flex justify-center space-x-6 mb-8">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors"><FaLinkedin size={24} /></a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors"><FaGithub size={24} /></a>
        </div>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} {name}. Todos os direitos reservados.</p>
      </div>
    </Section>
  );
}