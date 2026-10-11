import { ArrowUpRightIcon } from '@phosphor-icons/react'; // Corrigido para ArrowUpRight (nome atualizado na lib)
import gjrm from '../assets/projects/gjrm.png';
import unno from '../assets/projects/unno.png';
import dash from '../assets/projects/dash.png';
import pub from '../assets/projects/pub.png';
import '../styles/components/_projects.scss'; 

const projectsData = [
    {
        id: 1,
        title: 'PUB DO MARUJO',
        category: 'Identidade Visual',
        image: pub,
        url: 'https://www.behance.net/gallery/256295505/Pub-do-Marujo-Brand-Identity-Editorial-Design'
    },
    {
        id: 2,
        title: 'GJRM Engenharia',
        category: 'Site Institucional Responsivo',
        image: gjrm,
        url: 'https://gjrm-v2.vercel.app/'       
    },
    {
        id: 3,
        title: 'Construtora Unno',
        category: 'Site Institucional Responsivo',
        image: unno,
        url: 'https://construtora-unno-landing.vercel.app/'
    },
    {
        id: 4,
        title: 'Sistema de Gestão (OS)',
        category: 'Dashboard & Interface Web',
        image: dash,
        url: 'https://gjrm-dashboard-react.vercel.app/'
    }
];

const Projects = () => {
    return (
        <section className="projects-section" id="projetos">
            <div className="container">
                <div className="projects-header">
                    <h2>Projetos <span>Recentes</span></h2>
                    <p>Conheça as estruturas digitais que já transformaram outros negócios.</p>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        // Transformado em uma tag <a> para que todo o card seja clicável
                        <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-item" 
                            key={project.id}
                        >
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={`Mockup do projeto ${project.title}`} loading="lazy" />
                                
                                {/* Overlay com botão moderno */}
                                <div className="project-overlay">
                                    <div className="view-btn">
                                        <span className="btn-text">Ver Projeto</span>
                                        <div className="icon-circle">
                                            <ArrowUpRightIcon size={20} weight="bold" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <span>{project.category}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;