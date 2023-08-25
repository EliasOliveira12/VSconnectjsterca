//estilização
import api from "../../utils/api";

import secureLocalStorage from "react-secure-storage"

import { useState } from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";


 

function Login() {

    const [email,setEmeil] = useState<string>("")
    const [ senha,SetSenha] = useState<string>("")
    const navigate = useNavigate()
        

    function fazerlogin(event:any){

        event.preventDefault()

        const usuario: object={
            email: email,
            password: senha,
        }

        console.log(email,senha)
    
            api.post("login", usuario).then((response) => {

                console.log(response)

                secureLocalStorage.setItem("user",response.data)

                navigate("/perfil" + response.data.id)

                

                

                

            })
        }       

    return (
        <main id="main_login">
            <div className="container container_login">
                <div className="login_conteudo">
                    <h1>Login</h1>
                    <hr />
                    <form onSubmit={fazerlogin}className="login_formulario" method="POST">
                        <div className="login_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                onChange={(event)=>setEmeil(event?.target.value)}
                                placeholder="Digite aqui seu e-mail:"
                                required
                            />
                        </div>
                        <div className="login_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                onChange={(event)=>SetSenha(event?.target.value)}
                                placeholder="Digite aqui sua senha:"
                                required
                            />
                        </div>
                        <button className="login_botao" type="submit">Logar</button>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default Login;