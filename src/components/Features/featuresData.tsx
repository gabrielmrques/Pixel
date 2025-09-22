import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        {/* Ícone de Agulha para Bordados */}
        <path d="M30 10 L10 30" stroke="currentColor" strokeWidth="2"/>
        <circle cx="28" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: "Bordados Personalizados",
    paragraph:
      "Transforme suas ideias em peças únicas com nossos bordados de alta qualidade, perfeitos para roupas, acessórios e decoração.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/* Ícone para Revelação de Fotos */}
        <rect x="5" y="5" width="30" height="30" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M5 25 L15 15 L25 25 L35 15" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: "Revelação de Fotos",
    paragraph:
      "Imprima suas memórias com a qualidade que elas merecem. Oferecemos diversos formatos e tipos de papel para suas fotos.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/* Ícone de Câmera para Artigos Fotográficos */}
        <rect x="5" y="10" width="30" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="15" y="5" width="10" height="5" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: "Artigos Fotográficos",
    paragraph:
      "Encontre tudo o que você precisa para suas fotos, desde álbuns e porta-retratos até molduras e outros acessórios.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="42" viewBox="0 0 40 42" className="fill-current">
        {/* Ícone de Camiseta para Sublimação */}
        <path d="M5 10 L35 10 L32 35 L8 35 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M15 10 C15 5, 25 5, 25 10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M5 10 L2 15" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M35 10 L38 15" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: "Sublimação e Silk",
    paragraph:
      "Personalize canecas, camisetas e peças de roupas com suas fotos e designs. Também fazemos silk para criar produtos únicos.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        {/* Ícone de Lápis para Criação de Arte */}
        <path d="M30 5 L10 25 L5 35 L15 30 L35 10 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M25 10 L30 15" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Criação de Artes Digitais",
    paragraph:
      "Nossa equipe de designers cria artes personalizadas para suas redes sociais, materiais de marketing ou qualquer outra necessidade.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        {/* Ícone para Presentes Personalizados */}
        <path d="M5 10 L35 10 L35 40 L5 40 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M15 10 C 15 0, 25 0, 25 10" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    title: "Presentes Personalizados",
    paragraph:
      "Crie presentes únicos e memoráveis para qualquer ocasião, combinando nossos serviços de personalização.",
  },
];
export default featuresData;
