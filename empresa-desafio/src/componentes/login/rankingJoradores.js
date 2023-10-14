import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/login.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';


export default function RankingJogadores() {

        //VARIAVEIS
        const [priLugLiga, setPriLugLiga] = useState('');
        const [valorPriLiga, setValorPriLiga] = useState(0);
        const [segLugLiga, setSegLugLiga] = useState('');
        const [valorSegLiga, setValorSegLiga] = useState(0);
        const [terLugLiga, seTerLugLiga] = useState('');
        const [valorTerLiga, setValorTerLiga] = useState(0);
        const [carregando, setCarregando] = useState(false);
        const [itens, setItens] = useState([]);
            
        let totalItens = 0
        let contador = 0
        let itensVar = []


        useEffect(() => {
            inserirData() 
        }, [])

    // FUNÇÃO ABAIXO TEM O DEVER DE SALVAR OS DADOS TRAZIDOS DO BANCO PARA SEREM APRESENTADOS NA TABELA
   async function inserirData() {
        setCarregando(true)
        await apiC.get("rankingJogadores/buscar")
            .then(response => {
                if (response.status === 200) {
                    for (let i = 0; i < response.data.length; i++) {
                        if (contador === i) {
                            let k = i
                            for (let j = 0; j < response.data.length; j++) {
                                itensVar[k] = response.data[j]
                                k++
                            }
                        }
                            setItens(JSON.parse(JSON.stringify(itensVar)))

                    }
                    setMostrarTabela(true)
                }
                setCarregando(false)
            })
            .catch((error) => {
                setCarregando(false)
            });

    }

    // ABAIXO SÃO AS COLUNAS DE ACORDO COM O ARQUIVO ENVIADO (A TAMBÉM OS ID DE CADA DADO)
    const colunas = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Jogador
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        {
            dataField: 'pontos',
            headerClasses: 'nao-selecionavel',
            text: <p>
                Pontos
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
        
    ]

    async function atualizaArquivo(item, i, torneio) {
        setCarregando(true)
            await apiC.put("rankingJogadores/atualiza", {
                "id": item[0].id,
                "nome": item[0].nome,
                "pontos": i == 0 ? item[0].pontos + valorPriLiga : i == 1 ? 
                item[0].pontos + valorSegLiga : i == 2 ?  item[0].pontos + valorTerLiga : ""
            })
                .then(response => {
                    if (response.status === 200) {
                        inserirData()
                    }
                    setCarregando(false)
                })
                .catch((error) => {
                    setCarregando(false)
                });
        }
    

    async function inserirNovoTime(nome, i, torneio) {
       const verificar = verificaString(nome)
        if(verificar){
                await apiC.post("rankingJogadores/inserir", {
                    "nome": nome,
                    "pontos": i == 0 ? valorPriLiga : i == 1 ? 
                    valorSegLiga : i == 2 ?  valorTerLiga : ""
                })
                inserirData()
        }else{
            alert("Valor digitado não corresponde aos jogadores cadastrados")
        }
    }

    const verificaString = (nomeJogador) => {
        return ['Cris', 'Axe', 'Super Homem', 'Hulk', 'Filipe', 'Wilham', 'Taylor', 'Maçaneta', 
        'Sundown', 'Theo', 'Buzz', 'Dony', 'Monstro', 'Controle da tv', 'Rivelino', 'Renan', 
        'Pente Cinza', 'Perna Longa', 'Raul', 'Sensodyni', 'Sabrina', 'Jhonsons', 'Cindy', 
        'Loriel', 'Ufe', 'Sr Incrivel', 'Lucas', 'Hammer', 'Livia', 'Rafael', 'Tiago', 
        'Rodrigo', 'Pente Laranja', 'Rildo', 'Pente Rosa', 'Net', 'Cristian', 'Pepe', 
        'Homem de Ferro', 'Vinicius', 'Lacan', 'Condicionador', 'Telefone', 'Rozinha', 
        'Coringa', 'Michel', 'Mostarda', 'Thanos', 'Pantene', 'Leonardo', 'Pente Preto', 
        'Tati', 'Pente Azul', 'Mathias', 'Azeite', 'Varicel', 'Titan', 'Eva', 'Hugo', 
        'Azuzinho', 'Rita', 'David', 'Azulão', 'Shampo', 'Orlof', 'Branquinho', 'Kevin', 
        'Crystal', 'Izakson', 'Sky', 'Gradiente', 'Escuro', 'Edson', 'Katchup', 'Luiza'].includes(nomeJogador)
    }

    async function handleSalvar(torneio) {
        let liga = []
            liga.push(priLugLiga, segLugLiga, terLugLiga)
        for (let i = 0; i < liga.length; i++) {
            await apiC.post("rankingJogadores/encontrar/nome", {
                "nome": liga[i]
            })
                .then(response => {
                    if (response.status === 200) {
                        if (response.data.length > 0) {
                            atualizaArquivo(response.data, i, torneio )
                        }else{
                            inserirNovoTime(liga[i], i, torneio)
                        }
                        // CASO ENVIO ACONTEÇA A FUNÇÃO ABAIXO TEM O DEVER DE REALIZAR O GET PARA TRAZER OS ARQUIVOS

                    }
                    setCarregando(false)
                })
                .catch((error) => {
                    setCarregando(false)
                });
        }
        liga = []
}

    return (
        <>
         {carregando &&
                <h1>carregando..</h1>
            }

            <>
                <div>
                    <div>
                        <label>Quem foi o melhor jogador do torneio?</label>
                        <Form.Control
                            onChange={e => { setPriLugLiga(e.target.value); setValorPriLiga(23) }}
                            value={priLugLiga}
                        />
                    </div>
                    <div>
                        <label>Quem foi o segundo melhor jogador do torneio?</label>
                        <Form.Control
                            onChange={e => { setSegLugLiga(e.target.value); setValorSegLiga(12) }}
                            value={segLugLiga}
                        />
                    </div>
                    <div>
                        <label>Quem foi o terceiro melhor jogador do torneio?</label>
                        <Form.Control
                            onChange={e => { seTerLugLiga(e.target.value); setValorTerLiga(5) }}
                            value={terLugLiga}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => handleSalvar("SuperCopa")}>
                        <div>Enviar Arquivo</div>
                    </Button>
                   
                </div>

                <div className="espaco" ></div>
                <div className="campos-texto-login">
                  
                </div>

               
                    <div>
                        <BootstrapTable
                            hover={true}
                            classes="tabela"
                            condensed={true}
                            keyField='id'
                            data={itens}
                            columns={colunas}
                            bootstrap4={true}
                            bordered={false}
                        />
                    </div>
                

            </>

        </>
    )
}