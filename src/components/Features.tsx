import { useState } from 'react';
import { PaletteIcon, DevicesIcon, RocketLaunchIcon, XIcon } from '@phosphor-icons/react';
import '../styles/components/_features.scss'; 

// Array com os dados de cada card atualizado para frente e verso
const featuresData = [
    {
        id: 1,
        icon: PaletteIcon,
        title: 'Identidade Visual',
        shortDescription: 'Profissionalize sua marca com um design exclusivo e moderno.',
        fullDescription: 'Criamos ou modernizamos a sua identidade visual do zero. Entregamos a vetorização do seu logotipo em alta resolução e um brandbook enxuto, definindo a paleta de cores ideal e a tipografia correta para transmitir credibilidade e padronizar toda a comunicação da sua empresa.'
    },
    {
        id: 2,
        icon: DevicesIcon,
        title: 'Landing Page Responsiva',
        shortDescription: 'Uma máquina de captação focada direto no seu WhatsApp.',
        fullDescription: 'Desenvolvemos uma página de alta performance, 100% responsiva para celulares e computadores. Em vez de um site institucional confuso, criamos uma estrutura otimizada com gatilhos mentais e botões estratégicos desenhados especificamente para transformar seus visitantes em clientes.'
    },
    {
        id: 3,
        icon: RocketLaunchIcon,
        title: 'Entrega Expressa',
        shortDescription: 'Seu projeto no ar funcionando em tempo recorde.',
        fullDescription: 'Sabemos que tempo é dinheiro. Nossa metodologia de trabalho permite que toda a sua estrutura digital (Identidade Visual + Landing Page) seja planejada, aprovada e colocada no ar funcionando perfeitamente em um prazo máximo de 7 dias úteis. Sem enrolação e direto ao ponto.'
    }
];

// Subcomponente que gerencia o estado de giro de cada card
const FeatureCard = ({ feature }: { feature: any }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const Icon = feature.icon;

    return (
        <div className={`feature-card ${isFlipped ? 'flipped' : ''}`}>
            <div className="card-inner">
                
                {/* LADO DA FRENTE */}
                <div className="card-front">
                    <div className="icon-wrapper">
                        <Icon size={32} color="#60a5fa" weight="regular" />
                    </div>
                    <h3>{feature.title}</h3>
                    <p className="short-desc">{feature.shortDescription}</p>
                    <button onClick={() => setIsFlipped(true)} className="btn-saiba-mais">
                        Saiba mais
                    </button>
                </div>

                {/* LADO DE TRÁS (DESCRIÇÃO COMPLETA) */}
                <div className="card-back">
                    <button onClick={() => setIsFlipped(false)} className="btn-close">
                        <XIcon size={20} color="#60a5fa" />
                    </button>
                    <h3>{feature.title}</h3>
                    <div className="back-content">
                        <p>{feature.fullDescription}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

// Componente Principal da Seção
const Features = () => {
    return (
        <section className="features-section" id="features">
            <div className="container">
                <div className="features-header">
                    <h2>O que está <span>incluso</span> no pacote?</h2>
                </div>
                <div className="features-grid">
                    {featuresData.map(feature => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;