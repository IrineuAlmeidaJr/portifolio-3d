import { PortfolioData } from "@/types/portfolio-data";

export const portfolioData: PortfolioData = {
  name: "Irineu de Almeida Júnior",
  title: "Desenvolvedor Fullstack",
  stack: ".NET | Angular | Microservices | Kafka |<br/> Elasticsearch | ScyllaDB | SQL Server | MySQL",
  location: "Presidente Prudente, São Paulo, Brasil",
  contact: {
    email: "irineu.almeida.jr@icloud.com",
    linkedin: "https://www.linkedin.com/in/irineu-almeida-junior",
    github: "https://github.com/IrineuAlmeidaJr",
  },
  profileImage: "/profile.jpg",
  about: "Sou um Desenvolvedor Fullstack com experiência na entrega de soluções de software robustas e escaláveis. " +
         "Especializado em tecnologias .NET, Angular e arquitetura de microservices, tenho paixão por criar aplicações " + 
         "que fazem a diferença na vida das pessoas. Sempre em busca de novos desafios e oportunidades para crescer " +
         "profissionalmente.",
  skills: [
    "API REST", "ASP.NET Core", ".NET", "C#", "Angular", "Microservices",
    "Kafka", "RabbitMQ", "Elasticsearch", "ScyllaDB", "SQL Server",
    "MySQL", "Redis", "Docker", "xUnit",
  ],
  experiences: [
    {
      title: "Desenvolvedor de Software",
      company: "SmartHint by Magalu Cloud",
      period: "Setembro 2024 - Presente",
      description: "Desenvolvimento de soluções de software robustas...",
    },
    {
      title: "Desenvolvedor Fullstack",
      company: "Cobamais",
      period: "Junho 2023 - Agosto 2024",
      description: "Desenvolvimento de aplicações web completas...",
    },
  ],
  projects: [
    {
      title: "Point Crafters",
      description: "Sistema de gestão de pontos e recompensas com interface moderna e funcionalidades avançadas.",
      github: "https://github.com/irineu/front-point-crafters",
      demo: "https://pointcrafters.com.br",
    },
    {
      title: "InstaBrothers Mobile App",
      description: "App para monitorar o crescimento diário dos participantes do BBB nas redes sociais.",
      github: "https://github.com/irineu/instabrothers-mobile-app",
      demo: null,
    },
    {
      title: "Easy Boy Shop",
      description: "Backend de E-commerce com microserviço.",
      github: "https://github.com/irineu/easy-boy-shop",
      demo: null,
    },
    {
      title: "MLP",
      description: "Sistema de machine learning para processamento de dados e análise preditiva.",
      github: "https://github.com/irineu/MLP",
      demo: null,
    },
    {
      title: "8-Puzzle Backend",
      description: "API para resolução do quebra-cabeça 8-puzzle utilizando algoritmos de busca inteligente.",
      github: "https://github.com/irineu/8-puzzle-back",
      demo: null,
    },
    {
      title: "Busca Via CEP",
      description: "Serviço para consulta de endereços através de CEP com integração a APIs externas.",
      github: "https://github.com/irineu/busca-via-cep",
      demo: null,
    },
  ],
  education: [
    {
      institution: "UTFPR",
      course: "MBA em Engenharia de Software",
      period: "2025 - 2026",
    },
    {
      institution: "Universidade do Oeste Paulista",
      course: "Bacharelado em Ciência da Computação",
      period: "2020 - 2024",
    },
  ],
};