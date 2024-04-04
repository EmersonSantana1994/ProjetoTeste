import React, { useState, useEffect} from 'react';/*eslint-disable*/
import '../../css/login/upload.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';


export default function LigasCadastrados() {

//VARIAVEIS

const [itens, setItens] = useState([]);
const [itens2, setItens2] = useState([]);
const [itens3, setItens3] = useState([]);
const [itens4, setItens4] = useState([]);

const [liga1, setLiga1] = useState('');
const [liga2, setLiga2] = useState('');
const [liga3, setLiga3] = useState('');
const [liga4, setLiga4] = useState('');

const [nomeParaAlterar, setNomeParaAlterar] = useState('');
const [idParaAlterar, setIdParaAlterar] = useState(0);
const [paraAlterarAlgo, setParaAlterarAlgo] = useState(false);
const [novoNome, setNovoNome] = useState('');
const [paraDeletarAlgo, setParaDeletarAlgo] = useState(false);
const navigate = useNavigate();

let contador = 0
let itensVar = []
let itensVar2 = []
let itensVar3 = []
let itensVar4 = []
let token = JSON.parse(localStorage.getItem("keyToken"))



useEffect(() => {

    async function buscarLigas(e) {
        await apiC.post("listar/ligas", {
        headers: {
                'x-access-token': token,
            }
        })
        .then(response => {
            if (response.status === 200) {
                inserirData(response.data, "1")
            }
        })
        .catch((error) => {
                alert(error.response.data)

        });
                    
    }       
    buscarLigas()
}, [])

useEffect(() => {
    async function autenticar(e) {
        await apiC.post("autenticacao/autenticar")
        .then(response => {
  console.log("esta autenticado")
        })
        .catch((error) => {
            if(error.response.data === 'não autenticado'){
                navigate('/')
            }
        });
    }
    setTimeout(autenticar, 5000);
}, [])



    // FUNÇÃO ABAIXO TEM O DEVER DE SALVAR OS DADOS TRAZIDOS DO BANCO PARA SEREM APRESENTADOS NA TABELA
    function inserirData(data, liga) {
        for (let i = 0; i < data.length; i++) {
           
                if(liga == "1"){
                    if (contador == i) {
                        let k = i
                        for (let j = 0; j < data.length; j++) {
                            itensVar[k] = data[j]
                            k++
                        }
                    }
                    console.log("eu sou otariaaaaaaa", itensVar )
                    setItens(JSON.parse(JSON.stringify(itensVar)))
                }
                
        }

    }

// ABAIXO SÃO AS COLUNAS DE ACORDO COM O ARQUIVO ENVIADO (A TAMBÉM OS ID DE CADA DADO)
    const colunas = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Ligas
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
    ]


    async function alterarNome() {
        await apiC.post("cadastrar/alterarNomeLiga", {
            "id": idParaAlterar,
            "nome": novoNome,
            headers: {
                'x-access-token': token,
            }
        }).then(response => {
            if (response.status === 200) {
                alert("nome da liga alterada")
                location.reload()
            }
        })
        .catch((error) => {
            alert("erro, nome não alterado, verificar console de erro")
            console.log("erro ",error)
        });
    }

    async function deletarNome() {
        await apiC.post("cadastrar/deletarNomeLiga", {
            "id": idParaAlterar,
            headers: {
                'x-access-token': token,
            }
        }).then(response => {
            if (response.status === 200) {
                alert("liga deletada")
                location.reload()
            }
        })
        .catch((error) => {
            alert("erro, liga não deletado, verificar console de erro")
            console.log("erro ",error)
        });

    }

    function handleSelecionar(id, nome) {
        setIdParaAlterar(id)
        setNomeParaAlterar(nome)
}
    const selecaoLinhas = {
        mode: 'radio',
        onSelect: (row, isSelect, rowIndex, e) => {
            if (isSelect) {
                handleSelecionar(row.id, row.nome)
            }
        },
        selectionRenderer: ({ mode, ...rest }) => {
            return (
                <>
                    <input type={mode} class="input-checkbox-simcard" {...rest} />
                    <label class="label-checkbox-simcard"></label>
                </>
            )
        },
        selectionHeaderRenderer: ({ mode, ...rest }) => {
            return (
                <>
                    <input type={mode} class="input-checkbox-header-simcard" {...rest} />
                    <label class="label-checkbox-header-simcard"></label>
                </>
            )
        },
        bgColor: 'row-index-bigger-than-2101'
    };


    return (

        <>
        <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                        <div>Home</div>
                    </Button>
{paraDeletarAlgo &&
                    <h3> Realmente deseja deletar a liga {nomeParaAlterar} ? </h3>

                }

{paraDeletarAlgo &&
                
<Button onClick={(e) => deletarNome()}>
<div>Sim</div>
<div className="espaco4"></div>
</Button>
            }

{paraDeletarAlgo &&
                <Button onClick={(e) => setParaDeletarAlgo(!paraDeletarAlgo)}>
                <div>Não</div>
                </Button>
            }

{paraAlterarAlgo &&
<h3> Deseja alterar {nomeParaAlterar} para qual nome? </h3>
}

{paraAlterarAlgo &&
  <Form.Control
  onChange={e => { setNovoNome(e.target.value) }}
  value={novoNome}
/>
}
           {paraAlterarAlgo &&
<Button onClick={(e) => alterarNome()}>
<div>Enviar</div>
<div className="espaco4"></div>
</Button>
           }  

            {/* {carregando &&
                <h1>carregando..</h1>
            } */}
            <div>
             <Button onClick={(e) => setParaAlterarAlgo(!paraAlterarAlgo)}>
                    <div>Alterar nome do time</div>
                </Button>
                 <div className="espaco4"></div>
                <Button onClick={(e) => setParaDeletarAlgo(!paraDeletarAlgo)}>
                    <div>Deletar time</div>
                </Button>
                <div className="espaco4"></div>
            </div>
             
            <div className="lado"></div>

{/* {carregando &&
                <h1>carregando..</h1>
            } */}
            <div className="lado">
           
                    <div>
                    <h3>Ligas</h3>
                    {console.log("llllllv ", itens )}
                        <BootstrapTable
                            hover={true}
                            classes="tabela"
                            condensed={true}
                            keyField='id'
                            data={itens}
                            columns={colunas}
                            selectRow={selecaoLinhas}
                            bootstrap4={true}
                            bordered={false}
                        />
                    </div>
                    <div className="espaco2"></div>
            </div>
            
         </>
         
    )

}