//estilização
import "./style.css";

import cardServicos from "../../components/CardServicos";

import api from "../../utils/api";

//Hook
import { useEffect,useState} from "react";


function CadastroServico() {
    const [techs, setTechs] = useState<string[]>(
        [
            "HTML",
            "CSS",
            "JAVASCRIPT"
        ]
    );

    const[nome,setNome] = useState<string> ("")
    const[discricao,setDiscricao] = useState<string> ("")
    const[proposta,setProposta] = useState<string> ("")
    const[listaSkills,setListaSkills] = useState<string[]>([])

    useEffect(() => {
        //Inserindo o título da guia de endereço da página atual.
        document.title = "VSConnect - Lista de Serviços";
    }, []);

    function CadastroServico(){
    const formdata = new FormData()
    formdata.append("nome",nome)
     formdata.append("descricao",discricao)
    formdata.append("proposta",proposta)
    

    api.post("users",formdata).then((response)=>{
        console.log(response)
        alert("usuario criado com sucesso")
    })

    .catch((error)=>{
    console.log(error)
})
    }

    return (
        <main className="main_cad_servico">
            <div className="container container_cad_serv">
                <div className="cad_serv_conteudo">
                    <h1>Cadastro de Serviço</h1>
                    <hr />
                    <form onSubmit={CadastroServico} className="cad_formulario" method="POST"></form>
                    <form className="cad_serv_formulario" action="">
                        <div className="cad_serv_box_input">
                            <label htmlFor="titulo">Titulo do serviço:</label>
                            <input
                                type="text"
                                id="titulo"
                                onChange={(event)=>{setNome(event.target.value)}}
                                placeholder="Ex: E-commerce para pizzaria"
                            />
                        </div>
                        <div className="cad_serv_box_input">
                            <label htmlFor="descricao">Descrição do serviço:</label>
                            <textarea
                                name=""
                                id="descricao"
                                onChange={(event)=>{setDiscricao(event.target.value)}}
                                placeholder="Digite aqui a descrição resumida do que você precisa:"
                            ></textarea>
                        </div>
                        <div className="cad_serv_box_input">
                            <label htmlFor="proposta">Proposta:</label>
                            <input
                                type="text"
                                id="proposta"
                                onChange={(event)=>{setProposta(event.target.value)}}
                                // onKeyUp={ }
                                maxLength={17}
                                placeholder="Digite o valor que deseja pagar:"
                            />
                        </div>

                        <span>Tecnologias Desejadas</span>
                        <hr />
                        <div className="cad_serv_box_skills">
                            <span>Selecione uma Skill para adicionar</span>
                            <div className="cad_linha_select">
                                <select defaultValue={"DEFAULT"} name="" id="cad_select_skill"onChange={(e) => setSelect(e.target.value)}>
                                    <option value="DEFAULT" disabled>Selecione</option>
                                    {
                                        techs.map((tech: any, index: number) => {
                                                return <option key={index} value={tech}>{tech}</option>
                                                    })
                                                }
                                </select>
                                <input
                                    type="button"
                                    value="Inserir"
                                    id="cad_btn_inserir"
                                />
                            </div>
                            <div id="cad_lista_skills">

                            </div>
                        </div>
                        <button type="submit" className="cad_botao">Cadastrar</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default CadastroServico;