import { portfolioData } from "../data/portfolio-data";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";
import { Education } from "../components/sections/Education";


export default function Home() {
  
  // Função para rolar suavemente até uma seção da página
  const scrollToSection = (sectionId: string): void => {
    // Caso especial para o topo da página (seção Hero)
    if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    // Rola para a seção com o ID correspondente
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Div principal com estilos de fundo e fonte
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans">
      
      {/* Componente da barra de navegação */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Conteúdo principal da página */}
      <main>
        {/* Cada seção é um componente que recebe os dados necessários via props */}
        <HeroSection data={portfolioData} />
        <About content={portfolioData.about} />
        <Skills skills={portfolioData.skills} />
        <Experience experiences={portfolioData.experiences} />
        <Projects projects={portfolioData.projects} />
        <Education education={portfolioData.education} />
      </main>

      {/* Componente do rodapé */}
      <Footer contact={portfolioData.contact} name={portfolioData.name} />
    </div>
  );
}
