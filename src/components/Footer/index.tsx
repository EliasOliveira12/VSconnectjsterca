
import "./style.css"
import Logo from "../../assets/img/logo.svg"
// import Dev from "../../assets/img/dev.png"
import Facebook from "../../assets/img/facebook.svg"
import Instagram from "../../assets/img/instagram.svg"
import Linkedin from "../../assets/img/linkedin.svg"

function Footer(){
    return(
        <>
        <footer>
                <div className="container rodape">
                    <div className="rodape_conteudo">
                        <div className="rodape_conteudo_paginas">
                            <h2>Páginas</h2>
                            <ul>
                                <li>Login</li>
                                <li>Home</li>
                                <li>Listar Serviços</li>
                                <li>Cadastrar Cliente</li>
                                <li>Cadastrar Desenvolvedor</li>
                            </ul>
                        </div>
                        <img src={Logo}alt=""/>
                            <div className="rodape_conteudo_contatos">
                                <h2>Contatos</h2>
                                <div>
                                    <a href="#"><img src={Facebook} alt=""/></a>
                                    <a href="#"><img src={Instagram} alt=""/></a>
                                    <a href="#"><img src={Linkedin} alt=""/></a>
                                </div>
                                <a href="mailto:">contato@vsconnect.com</a>
                            </div>
                    </div>
                    <p>todos os direitos reservados ©.</p>
                </div>
            </footer>
        </>
    )
}
export default Footer




