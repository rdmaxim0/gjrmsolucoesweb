import { useState, useEffect } from 'react';
import cel1 from '../assets/hero/cel_1.png';
import cel2 from '../assets/hero/cel_2.png';
import cel3 from '../assets/hero/cel_3.png';
import cel4 from '../assets/hero/cel_4.png';
import cel5 from '../assets/hero/cel_5.png';
import '../styles/components/_hero.scss';

const Hero = () => {
    const phoneNumber = "5521995488908"; 
    const message = "Olá! Gostaria de saber mais sobre as soluções web da GJRM Engenharia.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Estado para controlar qual celular está em destaque
    const [activeIndex, setActiveIndex] = useState(0);
    
    // Array utilizando diretamente as variáveis importadas do topo
    const heroImages = [cel1, cel2, cel3, cel4, cel5]; 

    // Efeito para alternar automaticamente
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % heroImages.length);
        }, 1500); // 2.5 segundos para uma transição elegante

        return () => clearInterval(interval); 
    }, [heroImages.length]);

    return (
        <section className="hero-section" id="hero">
            <div className="hero-content container">
                
                {/* LADO ESQUERDO (Textos e Botão) */}
                <div className="hero-left">
                    <h1>Profissionalize a imagem da sua empresa em até <span>7 dias.</span></h1>
                    <p>Identidade Visual + Landing Page de alta conversão. A estrutura digital que seu negócio precisa para parar de perder clientes.</p>
                    <a href={whatsappUrl} target='_blank'> 
                        <button>FALAR COM ESPECIALISTA</button>
                    </a>
                </div>

                {/* LADO DIREITO (Mockups com classe dinâmica) */}
                <div className="hero-right">
                    {heroImages.map((imgSrc, index) => (
                        <img 
                            key={index}
                            src={imgSrc} // Aplica diretamente o import da imagem
                            alt={`Mockup ${index + 1}`}
                            className={activeIndex === index ? 'active' : ''} 
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Hero;