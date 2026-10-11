import Logo from '../assets/Logo.png';
import '../styles/components/_header.scss';

const Header = () => {
    return (
        <header>
            <div className="header-right">
                <img src={Logo} alt="Logo GJRM Engenharia" />
            </div>
            
            <span className="separator"></span>
            
            <div className="header-left">
                <p>GJRM Engenharia</p>
                 <p>Soluções Web</p>
            </div>
        </header>

    );

}

export default Header