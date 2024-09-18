import React from 'react';
import '../css/Sobre.css';


const Sobre: React.FC = () => {
    return ( 
            <section id="Sobre" className="section-sobre">
                <div className="containerSobre">
                    <div className="heading-Sobre">
                        <h2 className="text-Sobre">
                            Sobre mim
                        </h2>
                        <p className="text-Sobre">Sobre mim</p>
                    </div>
                    <div className="row-Sobre">
                        <div className="coluna-Sobre">
                            <h2 className="textoColuna"> Meu nome é <span className="textoPrimario"> Matheus Medeiros</span>, sou um desenvolvedor de software</h2>
                            <p className="textoSobre">Sou um profissional de Ciência da Computação em formação, com experiência em desenvolvimento de software utilizando Java, Spring Boot, e front-end com Bootstrap. Tenho habilidades em análise de sistemas e desenvolvimento full-stack, e estou sempre focado em aplicar meu conhecimento para resolver problemas técnicos de maneira eficiente.
                            Atualmente, estou buscando oportunidades que me permitam contribuir para o desenvolvimento de soluções em TI, especialmente em áreas de sistemas e desenvolvimento de software. </p>
                        </div>
                    <div className="coluna2">
                        <div className="colunaContatos">
                            <ul className="lista-Sobre">
                                <li><span>Nome:</span> Matheus Medeiros</li>
                                
                                <li><span>Email:</span> <a href="mailto:mts12mad@gmail.com" title="email">mts12mad@gmail.com</a></li>
                                <li><span>Formação:</span> Ciência da Computação - Estácio</li>
                                <li><span>Idade:</span> 20 anos</li>
                                <li><span>De:</span> Rio de Janeiro, Rio de Janeiro</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
    )
}

export default Sobre