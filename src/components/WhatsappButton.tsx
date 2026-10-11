import { WhatsappLogoIcon } from '@phosphor-icons/react';
import '../styles/components/_whatsapp.scss';

const WhatsAppButton = () => {
    // Substitua pelo número real da GJRM com código do país (55) e DDD
    const phoneNumber = "5521995488908"; 
    const message = "Olá! Gostaria de saber mais sobre as soluções web da GJRM Engenharia.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-floating-btn"
            aria-label="Falar com um especialista no WhatsApp"
        >
            <WhatsappLogoIcon size={32} weight="fill" />
        </a>
    );
};

export default WhatsAppButton;