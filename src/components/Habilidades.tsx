import React from 'react';
import '../css/Habilidades.css';
import html48 from '../assets/html48.png';
import sql from '../assets/sql48.png'
import css from '../assets/css48.png'
import typeScript from '../assets/ts48.png'
import Java from '../assets/java48.png'
import JavaScript from '../assets/js48.png'
import Spring from '../assets/spring48.png'
import react from '../assets/react48.png'
import bootstrap from '../assets/bootstrap48.png'
import git from '../assets/git48.png'


const Habilidades: React.FC = () => {
    return (
        <section id="habilidades" className="Habilidades">
            <div className="container-Habilidades">
                <div className="heading-Habilidades">
                    <h2>Habilidades</h2>
                    <p>Habilidades</p>
                </div>

                <div className="row-Habilidades">
                    <div className="coluna-Habilidades">
                        <div className = "caixa-Habilidades">
                            
                        <div className="JavaBox"> <img src={Java}/> </div>
                        <div className="hoverText">Linguagem de Programação</div>
                            <h3>Java</h3>
                        </div>
                        <div className = "caixa-Habilidades">
                        <div className="JavaScriptBox"> <img src = {JavaScript}/> </div>
                        <div className="hoverText">Linguagem de Programação</div>
                            <h3>JavaScript</h3>
                        </div>
                        <div className = "caixa-Habilidades">
                        <div className="TSBox"> <img src={typeScript}/> </div>
                        
                        <div className="hoverText">Linguagem de Programação</div>
                            <h3>TypeScript</h3>
                        </div>

                        <div className = "caixa-Habilidades">
                        <div className="SpringBox"> <img src = {Spring}/> </div>
                        <div className="hoverText">Framework</div>
                            <h3>Springboot</h3>
                        </div>
                        <div className = "caixa-Habilidades">
                        <div className="ReactBox"><img src={react}/></div>
                        <div className="hoverText">Framework</div>
                            <h3>ReactJs</h3>
                        </div>
                        <div className = "caixa-Habilidades">
                        <div className="BooTBox"> <img src={bootstrap}/> </div>
                        <div className="hoverText">Framework</div>
                            <h3>Bootstrap</h3>
                        </div>
                        <div className = "caixa-Habilidades">
                        <div className="HTMLBox"> <img src={html48}/> </div>
                        <div className="hoverText">Linguagem de Marcação</div>
                            <h3>HTML</h3>
                        </div>
                        <div className = "caixa-Habilidades">
                        <div className="CSSBox"> <img src={css}/> </div>
                        <div className="hoverText">Linguagem de Estilização</div>
                            <h3>CSS</h3>
                        </div>
                        <div className = "caixa-Habilidades">
                        <div className="SQLBox"> <img src={sql}/> </div>
                        <div className="hoverText">Banco de Dados</div>
                            <h3>PostgreSQL</h3>
                        </div>
                        <div className = "caixa-Habilidades">
                        <div className="gitBox"> <img src={git}/> </div>
                        <div className="hoverText">Software de Versionamento</div>
                            <h3>Git</h3>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}
export default Habilidades