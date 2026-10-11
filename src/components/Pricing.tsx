import { CheckCircle, PaintBrush, Devices, WhatsappLogo, RocketLaunch } from '@phosphor-icons/react';
import '../styles/components/_pricing.scss';

const Pricing = () => {
    return (
        <section className="pricing-section" id="pacote">
            <div className="container">
                <div className="pricing-header">
                    <h2>Investimento <span>Único</span></h2>
                    <p>A estrutura digital definitiva para quem não tem tempo a perder.</p>
                </div>

                <div className="pricing-wrapper">
                    {/* Efeito de brilho/sombra atrás do card para dar profundidade */}
                    <div className="glow-effect"></div>

                    <div className="pricing-card">
                        
                        <div className="card-top">
                            <span className="badge">Pacote Presença Digital</span>
                            <h3>Transforme sua empresa hoje.</h3>
                        </div>

                        <div className="pricing-value">
                            <span className="de-price">De R$ 1.500</span>
                            <div className="por-price">
                                <span className="currency">R$</span>
                                <span className="amount">500</span>
                            </div>
                            <span className="condicao">*Valor promocional à vista</span>
                        </div>

                        <div className="benefits-list">
                            <div className="benefit-item">
                                <PaintBrush size={24} weight="duotone" className="icon-blue" />
                                <span>Design de Logo & Brandbook</span>
                            </div>
                            <div className="benefit-item">
                                <Devices size={24} weight="duotone" className="icon-blue" />
                                <span>Landing Page Responsiva</span>
                            </div>
                            <div className="benefit-item">
                                <WhatsappLogo size={24} weight="duotone" className="icon-blue" />
                                <span>Otimização para WhatsApp</span>
                            </div>
                            <div className="benefit-item">
                                <RocketLaunch size={24} weight="duotone" className="icon-blue" />
                                <span>Hospedagem Rápida e Configuração</span>
                            </div>
                        </div>

                        <button className="btn-garantir">
                            GARANTIR VALOR PROMOCIONAL
                            <CheckCircle size={20} weight="bold" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;