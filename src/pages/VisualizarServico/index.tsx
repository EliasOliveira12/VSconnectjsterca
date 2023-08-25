//estilização
import "./style.css";
//rotas
import { Link,useParams } from "react-router-dom";

//hooks

import{useState,useEffect} from "react"


import api from "../../utils/api"

function VisualiarServico () {

    const{idServico} = useParams()

    const[nome,setNome] = useState<string>("")
    const[discricao,setDiscricao] = useState<string>("")
    const[valor,setValor] = useState<string>("")
    const[techs,setTechs] = useState<string[]>([])
    
    

    useEffect(()=>{

        document.title = "servicos" + nome + "- VSConnect"

        visualizarServicoId()
        
    },[])
    
    function visualizarServicoId(){
        

        api.get("servicos/"+ idServico).then((response: any) =>{ 
            setNome(response.data.nome)
            setDiscricao(response.data.discricao)
            setValor(response. data.valor)
            setTechs(response.data.techs)
            
            
    }).catch((error) => {

        console.log(error)

        
    })
  }


    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{nome}</h2>
                        <span>{valor}</span>
                    </div>
                    <p>{discricao}</p>
                    <div className="techs">
                           
                    {
                        techs.map((tech:any,index: number) =>{
                         return <span key={index}>{tech}</span>
                     })                   
                }   
  
                
    
                        
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualiarServico;