import { InstagramLogoIcon, WhatsappLogoIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react';
import '../styles/components/_footer.scss';

const Footer = () => {
    const phoneNumber = "5521995488908"; 
    const message = "Olá! Gostaria de saber mais sobre as soluções web da GJRM Engenharia.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    
                    {/* Coluna 1: Marca e Redes Sociais */}
                    <div className="footer-brand">
                        <div className="logo">
                            {/* Pode substituir este texto pela tag <img> com o vosso logótipo branco/vazado */}
                            <h2>GJRM <span>Engenharia</span></h2>
                        </div>
                        <p>A estrutura digital definitiva para negócios que procuram autoridade, credibilidade e conversão no mercado.</p>
                        
                        <div className="social-links">
                            <a href="https://instagram.com/gjrmengenharia" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <InstagramLogoIcon size={24} weight="duotone" />
                            </a>
                            {/* Insira o link do seu WhatsApp no href abaixo */}
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <WhatsappLogoIcon size={24} weight="duotone" />
                            </a>
                            <a href="mailto:contato@gjrmengenharia.com.br" aria-label="Email">
                                <EnvelopeSimpleIcon size={24} weight="duotone" />
                            </a>
                        </div>
                    </div>

                    {/* Coluna 2: Navegação Rápida */}
                    <div className="footer-links">
                        <h3>Navegação</h3>
                        <ul>
                            <li><a href="#hero">Início</a></li>
                            <li><a href="#features">O que está incluso</a></li>
                            <li><a href="#projetos">Projetos Recentes</a></li>
                            <li><a href="#processo">Nosso Processo</a></li>
                            <li><a href="#faq">Perguntas Frequentes</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Chamada Final */}
                    <div className="footer-contact">
                        <h3>Pronto para começar?</h3>
                        <p>Profissionalize a imagem da sua empresa em até 7 dias.</p>
                        <a href={whatsappUrl} target='_blank' className="btn-footer-cta">
                            Falar com Especialista
                        </a>
                    </div>

                </div>

                {/* Linha de Copyright e Botão Voltar ao Topo */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} GJRM Engenharia. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;