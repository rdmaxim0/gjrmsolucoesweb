import { ClipboardText, PenNib, Code, RocketLaunch } from '@phosphor-icons/react';
import '../styles/components/_process.scss';

const processSteps = [
    {
        id: 1,
        title: 'Briefing e Estratégia',
        description: 'Mergulhamos no seu negócio para entender seu público, seus objetivos e definir a melhor estratégia de conversão.',
        icon: ClipboardText
    },
    {
        id: 2,
        title: 'Identidade Visual',
        description: 'Criamos ou refinamos sua marca, definindo cores, tipografia e elementos visuais que transmitem autoridade.',
        icon: PenNib
    },
    {
        id: 3,
        title: 'Desenvolvimento Web',
        description: 'Codificamos sua Landing Page do zero, focando em velocidade extrema, responsividade e gatilhos de vendas.',
        icon: Code
    },
    {
        id: 4,
        title: 'Lançamento',
        description: 'Revisão final, configuração de domínio e entrega da sua nova máquina de vendas pronta para receber clientes.',
        icon: RocketLaunch
    }
];

const Process = () => {
    return (
        <section className="process-section" id="processo">
            <div className="container">
                <div className="process-header">
                    <h2>Nosso <span>Processo</span></h2>
                    <p>Do primeiro contato ao site no ar em apenas 4 passos simples e transparentes.</p>
                </div>

                <div className="process-grid">
                    {processSteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div className="process-card" key={step.id}>
                                {/* Número d'água no fundo */}
                                <span className="step-number">0{step.id}</span>
                                
                                <div className="step-icon">
                                    <Icon size={32} color="#60a5fa" weight="duotone" />
                                </div>
                                
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                                
                                {/* Linha conectora (aparece apenas no desktop entre os cards) */}
                                {index !== processSteps.length - 1 && (
                                    <div className="connector-line"></div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Process;