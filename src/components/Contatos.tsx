import React from 'react';
import '../css/Contatos.css';
import GitHub from '../assets/github.png';
import Linkedin from '../assets/linkedin.png';
import Email from '../assets/email.png';
import DownloadIcon from '../assets/download.png'; 
import MatheusCurriculo from '../assets/MatheusCurriculo.pdf';

const Contatos: React.FC = () => {
    return (
        <section id="contatos" className="contatos">
            <div className="container-Contatos">
                <div className="heading-Contatos">
                    <h2>Contatos</h2>
                    <p>Contatos</p>
                </div>
                <div className="row-Contatos">
                    <ul className="redesSociais">
                        <li>
                            <img src={Linkedin} alt="LinkedIn" className="icon" />
                            <a href="https://www.linkedin.com/in/mathmdrlimp/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                        <li>
                            <img src={GitHub} alt="GitHub" className="icon" />
                            <a href="https://github.com/MathLPblue" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                        <li>
                            <img src={Email} alt="Email" className="icon" />
                            <a href="mailto:mts12mad@gmail.com" title="Email">Email</a>
                        </li>
                    </ul>
                    
                    <a href={MatheusCurriculo} download className="button-download">
                        
                        <img src={DownloadIcon} alt="Download" />
                        Meu curriculo
                    </a>
                </div>


            </div>
            <div/>
                <div className="heading-Contatos">
                    <h2>Obrigado</h2>
                    <p>Obrigado por visitar meu site!</p>
                 </div>
        </section>
    );
}

export default Contatos;
