import React from 'react';
import '../css/Portifolio.css'
import breve from '../assets/breve.png'
const Portifolio: React.FC = () =>{
    return (
        <section id="portifolio" className="portifolio">
            <div className="container-Portifolio">
                <div className="heading-Portifolio">
                    <h2>Portifolio</h2>
                    <p>Portifolio</p>
                </div>
                <div className="popup-Portifolio">
                    <div className="rowPortiolio">
                        <div className="imgPortifolio">
                            <img src={breve}/>
                            <div className="portifolio-overlay">
                                <a className="portifolio-popUp-">
                                    <div className="portifolio-overlayDetalhes">
                                        <h5>Em breve</h5>
                                    </div>
                                </a>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portifolio