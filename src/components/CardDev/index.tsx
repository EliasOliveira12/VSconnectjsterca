import "./style.css"

import { Link } from "react-router-dom"

export default function CardDev(props:any) {

    function parseListaTechs() {
        if (typeof props.techs ==="string"){
          return JSON.parse(props.techs)
    
        } else{
          return props.techs
        }
      }

    return (
        
            <div className="dev">
                <div className="grupo_contato">

                    <img src= {"http://localhost:3000/static/"+props.foto}alt= ""/>
                    <div className="contato_dev">
                        <Link to={"/perfil/" + props.id}> {props.nome}</Link>
                        {/* <h3>{props.nome}</h3> */}
                        <p>thiago@email.com</p>
                    </div>
                </div>
                <div className="techs">{

                    parseListaTechs().map((tech: string,index: number)=>{
                        return<span key={index}>{tech}</span>
                    })
                }
                    
                </div>
            </div>
        
        
    )
}