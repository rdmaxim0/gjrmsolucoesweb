import { useState } from 'react';
import { CaretDownIcon } from '@phosphor-icons/react';
import '../styles/components/_faq.scss';

const faqs = [
    {
        question: 'O prazo de 7 dias úteis é garantido?',
        answer: 'Sim! Nosso método expresso funciona porque trabalhamos com foco total. O prazo começa a contar assim que você nos envia as informações básicas do seu negócio através do nosso briefing inicial.'
    },
    {
        question: 'O valor de R$ 500 é um pagamento único?',
        answer: 'O valor do desenvolvimento da estrutura é único. Este pacote promocional é validado para pagamento à vista ou quando atrelado ao nosso plano de manutenção, garantindo que o seu site fique no ar, rápido e seguro o ano todo.'
    },
    {
        question: 'E se eu já tiver um logotipo pronto?',
        answer: 'Perfeito! Nós pulamos a etapa de criação visual e aplicamos a sua identidade atual na Landing Page, garantindo que toda a página reflita a essência e as cores da sua marca já existente.'
    },
    {
        question: 'Como essa página ajuda a captar mais clientes?',
        answer: 'Diferente de um site institucional antigo e confuso, nossa Landing Page é otimizada com técnicas de persuasão e gatilhos de vendas. O foco inteiro da página é direcionar o visitante rapidamente para o seu WhatsApp.'
    },
    {
        question: 'Eu preciso fornecer os textos e imagens?',
        answer: 'Nós ajudamos na estruturação dos textos focados em conversão, mas pediremos a você as informações vitais da sua empresa (seus serviços, diferenciais e fotos reais do seu trabalho) para deixar a página autêntica.'
    }
];

const Faq = () => {
    // Começa com a primeira pergunta aberta (índice 0)
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        // Se clicar no que já está aberto, ele fecha. Se não, abre o novo.
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <div className="faq-header">
                    <h2>Perguntas <span>Frequentes</span></h2>
                    <p>Tire suas dúvidas e dê o próximo passo para transformar sua presença digital.</p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <div className="icon-wrapper">
                                    <CaretDownIcon size={20} weight="bold" />
                                </div>
                            </div>
                            
                            {/* Wrapper necessário para a animação moderna em CSS Grid */}
                            <div className="faq-answer-wrapper">
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;