import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

export function Navbar({ scrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navbarOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const navLinks = [{id: "sobre", label: "Sobre"}, {id: "competencias", label: "Competências"}, {id: "experiencia", label: "Experiência"}, {id: "projetos", label: "Projetos"}, {id: "formacao", label: "Formação"}];

  return (
    <motion.nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-800/50" style={{ backgroundColor: `rgba(10, 10, 10, ${navbarOpacity.get()})` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('hero')}>Irineu A. Júnior</div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((item) => (<button key={item.id} onClick={() => scrollToSection(item.id)} className="text-gray-300 hover:text-white transition-colors capitalize">{item.label}</button>))}
            <button onClick={() => scrollToSection("contato")} className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors">Contato</button>
          </div>
          <div className="md:hidden"><button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button></div>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-gray-900/90 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[...navLinks, {id: "contato", label: "Contato"}].map((item) => (
              <button key={item.id} onClick={() => { scrollToSection(item.id); setIsMenuOpen(false); }} className="block px-3 py-2 text-gray-300 hover:text-white transition-colors capitalize w-full text-left">{item.label}</button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}