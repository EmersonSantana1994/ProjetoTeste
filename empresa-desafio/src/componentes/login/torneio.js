import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/login.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';


export default function Torneio() {


    //VARIAVEIS
    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [time3, setTime3] = useState('');
    const [time4, setTime4] = useState('');
    const [time5, setTime5] = useState('');
    const [time6, setTime6] = useState('');
    const [time7, setTime7] = useState('');
    const [time8, setTime8] = useState('');
    const [time9, setTime9] = useState('');
    const [time10, setTime10] = useState('');
    const [time11, setTime11] = useState('');
    const [time12, setTime12] = useState('');
    const [time13, setTime13] = useState('');
    const [time14, setTime14] = useState('');
    const [time15, setTime15] = useState('');
    const [time16, setTime16] = useState('');
    const [time17, setTime17] = useState('');
    const [time18, setTime18] = useState('');
    const [time19, setTime19] = useState('');
    const [time20, setTime20] = useState('');
    const [time21, setTime21] = useState('');
    const [time22, setTime22] = useState('');
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);
    const [numero3, setNumero3] = useState(0);
    const [numero4, setNumero4] = useState(0);
    const [carregando, setCarregando] = useState(false);
    const [placar1, setPlacar1] = useState('');
    const [placar2, setPlacar2] = useState('');
    const [placar3, setPlacar3] = useState('');
    const [placar4, setPlacar4] = useState('');
    const [clube1, setClube1] = useState('');
    const [clube2, setClube2] = useState('');
    const [clube3, setClube3] = useState('');
    const [clube4, setClube4] = useState('');
    const [cadastrarTime, setCadastrarTime] = useState(false);
    const [itens, setItens] = useState([]);
    const [itensSorteados, setItensSorteados] = useState([]);
    const [novoTime, setNovoTime] = useState([]);
    const [novoTime2, setNovoTime2] = useState([]);
    const [novoTime3, setNovoTime3] = useState([]);
    const [novoTime4, setNovoTime4] = useState([]);
    const [timesM, setTimesM] = useState([]);
    const [timesS, setTimesS] = useState([]);
    const [teste, setTeste] = useState('');
    const [testeArray, setTesteArray] = useState([]);
    const [timesSorteadosArray1, setTimesSorteadosArray1] = useState('');
    const [timesSorteadosArray2, setTimesSorteadosArray2] = useState('');
    const [timesSorteadosArray3, setTimesSorteadosArray3] = useState('');
    const [timesSorteadosArray4, setTimesSorteadosArray4] = useState('');

    

    let totalItens = 0
    let contador = 0
    let contadorSorteado = 0
    let itensVar = []
    let itensVarSorteado = []
    let placarTime1 = 0
    let placarTime2 = 0
    let placarTime3 = 0
    let placarTime4 = 0
    let times = []
    let timesSor = []
    let timesSorteadosArray = []

    useEffect(() => {
        verificaSeTemTimeCadastrado()
    }, [])

    async function verificaSeTemTimeCadastrado() {
        await apiC.post("torneio/buscar")
            .then(response => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
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
                        buscarTimesSorteados()
                    }

                    else {
                        alert('nenhum time cadatrado, por favor faça o cadastro dos times')
                        setCadastrarTime(true)
                    }
                }
                setCarregando(false)
            })
            .catch((error) => {
                setCarregando(false)
            });
    }

    async function buscarTimesSorteados() {
        await apiC.get("torneio/buscarTimeSorteado")
            .then(response => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
                        if(!timesS.length > 0){
                            for (let i = 0; i < response.data.length; i++) {
                                timesM.push(response.data[i].nome)
                                timesS.push(response.data[i].id)
                                timesSorteadosArray.push(response.data[i].nome)
                            }
                        }
                        
                        setTimesM(timesM)
                        setTesteArray(timesM)
                        setTeste("Testeeee")
                        setTimesS(timesS)
                        setTimesSorteadosArray1(response.data[0].nome)
                        setTimesSorteadosArray2(response.data[1].nome)
                        setTimesSorteadosArray3(response.data[2].nome)
                        setTimesSorteadosArray4(response.data[3].nome)
                        for (let i = 0; i < response.data.length; i++) {
                            if (contadorSorteado === i) {
                                let k = i
                                for (let j = 0; j < response.data.length; j++) {
                                    itensVarSorteado[k] = response.data[j]
                                    k++
                                }
                            }
                            setItensSorteados(JSON.parse(JSON.stringify(itensVarSorteado)))
                        }
                    }

                    else {
                        alert('nenhum time cadatrado na tabela de times sorteados, por favor faça o cadastro dos times')
                        setCadastrarTime(true)
                    }
                }
                setCarregando(false)
            })
            .catch((error) => {
                setCarregando(false)
            });
    }

    async function AtualizaTabela() {
        await apiC.post("torneio/buscar")
            .then(response => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
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

                    } else {
                        alert('erro ao atualizar a tabela')
                        setCadastrarTime(true)
                    }
                }
                setCarregando(false)
            })
            .catch((error) => {
                setCarregando(false)
            });
    }

    async function sortearTimes() {
        let numeroSorteado = []
        let sorteado1 = Math.floor(Math.random() * timesM.length)
        let sorteado2 = Math.floor(Math.random() * timesM.length)
        while (sorteado2 == sorteado1) {
            sorteado2 = Math.floor(Math.random() * timesM.length)
        }
        let sorteado3 = Math.floor(Math.random() * timesM.length)
        while (sorteado3 == sorteado2 || sorteado3 == sorteado1) {
            sorteado3 = Math.floor(Math.random() * timesM.length)
        }
        let sorteado4 = Math.floor(Math.random() * timesM.length)
        while (sorteado4 == sorteado1 || sorteado4 == sorteado2 || sorteado4 == sorteado3) {
            sorteado4 = Math.floor(Math.random() * timesM.length)
        }
        numeroSorteado.push(sorteado1, sorteado2, sorteado3, sorteado4)
        for (let i = 0; i < timesM.length; i++) {
            setCarregando(true)
            await apiC.put("torneio/atualizaTimeSorteado", {
                "id": timesS[i],
                "nome": timesM[numeroSorteado[i]]
            }).then(response => {
                if (response.status === 200) {
                    
                }
                setCarregando(false)
            })
                .catch((error) => {
                    setCarregando(false)
                    alert('Erro ao atualizar sorteio do time ', timesM[numeroSorteado[i]])
                });
        }
        buscarTimesSorteados()
        }

     

    // useEffect(() => {

    //     sortearTimes()

    // }, [])

    // FUNÇÃO ABAIXO TEM O DEVER DE SALVAR OS DADOS TRAZIDOS DO BANCO PARA SEREM APRESENTADOS NA TABELA

    async function atualizaTime(dados, pontos, saldo) {
        setCarregando(true)
        await apiC.put("torneio/atualizaTime", {
            "id": dados[0].id,
            "nome": dados[0].nome,
            "pontos": dados[0].pontos + pontos,
            "saldo": dados[0].saldo + saldo
        }).then(response => {
            if (response.status === 200) {
                AtualizaTabela()
            }
            setCarregando(false)
        })
            .catch((error) => {
                setCarregando(false)
                alert('Erro ao atualizar pontos do time ', dados[0].nome)
            });
    }

    async function atualizaTimePerdedor(dados, saldo) {
        setCarregando(true)
        await apiC.put("torneio/atualizaTime", {
            "id": dados[0].id,
            "nome": dados[0].nome,
            "pontos": dados[0].pontos,
            "saldo": dados[0].saldo - saldo
        }).then(response => {
            if (response.status === 200) {
                AtualizaTabela()
            }
            setCarregando(false)
        })
            .catch((error) => {
                setCarregando(false)
                alert('Erro ao atualizar pontos do time ', dados[0].nome)
            });
    }


    async function VerificaParaAtualizaTime(nome, pontos, saldo, timeperdedor ) {
        await apiC.post("torneio/bucarNome", {
            "nome": nome
        })
            .then(response => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
                        atualizaTime(response.data, pontos, saldo)
                    } else {
                        alert('nome do time não encontrado')
                    }
                    // CASO ENVIO ACONTEÇA A FUNÇÃO ABAIXO TEM O DEVER DE REALIZAR O GET PARA TRAZER OS ARQUIVOS

                }
                setCarregando(false)
            })
            .catch((error) => {
                setCarregando(false)
            });
            await apiC.post("torneio/bucarNome", {
                "nome": timeperdedor
            })
                .then(response => {
                    if (response.status === 200) {
                        if (response.data.length > 0) {
                            atualizaTimePerdedor(response.data, saldo)
                        } else {
                            alert('nome do time perdedor não encontrado')
                        }
                        // CASO ENVIO ACONTEÇA A FUNÇÃO ABAIXO TEM O DEVER DE REALIZAR O GET PARA TRAZER OS ARQUIVOS
    
                    }
                    setCarregando(false)
                })
                .catch((error) => {
                    setCarregando(false)
                });


    }

    async function rodada() {
        if (placar1 == "3" && placar2 == "2") {
            VerificaParaAtualizaTime(timesSorteadosArray1, 1, 1, timesSorteadosArray2)
        } else if (placar1 == "3" && placar2 == "1") {
            VerificaParaAtualizaTime(timesSorteadosArray1, 2, 2, timesSorteadosArray2)
        } else if (placar1 == "4" && placar2 == "0") {
            VerificaParaAtualizaTime(timesSorteadosArray1, 3, 4, timesSorteadosArray2)
        }
        if (placar1 == "3" && placar3 == "2") {
            placarTime1 = placarTime1 + 1
            VerificaParaAtualizaTime(timesSorteadosArray1, 1, 1, timesSorteadosArray3)
        } else if (placar1 == "3" && placar3 == "1") {
            placarTime1 = placarTime1 + 2
            VerificaParaAtualizaTime(timesSorteadosArray1, 2, 2, timesSorteadosArray3)
        } else if (placar1 == "4" && placar3 == "0") {
            placarTime1 = placarTime1 + 3
            VerificaParaAtualizaTime(timesSorteadosArray1, 3, 4, timesSorteadosArray3)
        }
        if (placar1 == "3" && placar4 == "2") {
            placarTime1 = placarTime1 + 1
            VerificaParaAtualizaTime(timesSorteadosArray1, 1, 1, timesSorteadosArray4)
        } else if (placar1 == "3" && placar4 == "1") {
            placarTime1 = placarTime1 + 2
            VerificaParaAtualizaTime(timesSorteadosArray1, 2, 2, timesSorteadosArray4)
        } else if (placar1 == "4" && placar4 == "0") {
            placarTime1 = placarTime1 + 3
            VerificaParaAtualizaTime(timesSorteadosArray1, 3, 4, timesSorteadosArray4)
        }
        if (placar2 == "3" && placar1 == "2") {
            placarTime2 = placarTime2 + 1
            VerificaParaAtualizaTime(timesSorteadosArray2, 1, 1, timesSorteadosArray1)
        } else if (placar2 == "3" && placar1 == "1") {
            placarTime2 = placarTime2 + 2
            VerificaParaAtualizaTime(timesSorteadosArray2, 2, 2, timesSorteadosArray1)
        } else if (placar2 == "4" && placar1 == "0") {
            placarTime2 = placarTime2 + 3
            VerificaParaAtualizaTime(timesSorteadosArray2, 3, 4, timesSorteadosArray1)
        }
        if (placar2 == "3" && placar3 == "2") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 1, 1, timesSorteadosArray3)
        } else if (placar2 == "3" && placar3 == "1") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 2, 2, timesSorteadosArray3)
        } else if (placar2 == "4" && placar3 == "0") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 3, 4, timesSorteadosArray3)
        }
        if (placar2 == "3" && placar4 == "2") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 1, 1, timesSorteadosArray4)
        } else if (placar2 == "3" && placar4 == "1") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 2, 2, timesSorteadosArray4)
        } else if (placar2 == "4" && placar4 == "0") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 3, 4, timesSorteadosArray4)
        }
        if (placar3 == "3" && placar1 == "2") {
            VerificaParaAtualizaTime(timesSorteadosArray3, 1, 1, timesSorteadosArray1)
        } else if (placar3 == "3" && placar1 == "1") {
            VerificaParaAtualizaTime(timesSorteadosArray3, 2, 2, timesSorteadosArray1)
        } else if (placar3 == "4" && placar1 == "0") {
            VerificaParaAtualizaTime(timesSorteadosArray3, 3, 4, timesSorteadosArray1)
        }
        if (placar3 == "3" && placar2 == "2") {
            placarTime3 = placarTime3 + 1
            VerificaParaAtualizaTime(timesSorteadosArray3, 1, 1, timesSorteadosArray2)
        } else if (placar3 == "3" && placar2 == "1") {
            placarTime3 = placarTime3 + 2
            VerificaParaAtualizaTime(timesSorteadosArray3, 2, 2, timesSorteadosArray2)
        } else if (placar3 == "4" && placar2 == "0") {
            placarTime3 = placarTime3 + 3
            VerificaParaAtualizaTime(timesSorteadosArray3, 3, 4, timesSorteadosArray2)
        }
        if (placar3 == "3" && placar4 == "2") {
            placarTime3 = placarTime3 + 1
            VerificaParaAtualizaTime(timesSorteadosArray3, 1, 1, timesSorteadosArray4)
        } else if (placar3 == "3" && placar4 == "1") {
            placarTime3 = placarTime3 + 2
            VerificaParaAtualizaTime(timesSorteadosArray3, 2, 2, timesSorteadosArray4)
        } else if (placar3 == "4" && placar4 == "0") {
            placarTime3 = placarTime3 + 3
            VerificaParaAtualizaTime(timesSorteadosArray3, 3, 4, timesSorteadosArray4)
        }
        if (placar4 == "3" && placar1 == "2") {
            placarTime4 = placarTime4 + 1
            VerificaParaAtualizaTime(timesSorteadosArray4, 1, 1, timesSorteadosArray1)
        } else if (placar4 == "3" && placar1 == "1") {
            placarTime4 = placarTime4 + 2
            VerificaParaAtualizaTime(timesSorteadosArray4, 2, 2, timesSorteadosArray1)
        } else if (placar4 == "4" && placar1 == "0") {
            placarTime4 = placarTime4 + 3
            VerificaParaAtualizaTime(timesSorteadosArray4, 3, 4, timesSorteadosArray1)
        }
        if (placar4 == "3" && placar2 == "2") {
            placarTime4 = placarTime4 + 1
            VerificaParaAtualizaTime(timesSorteadosArray4, 1, 1, timesSorteadosArray2)
        } else if (placar4 == "3" && placar2 == "1") {
            placarTime4 = placarTime4 + 2
            VerificaParaAtualizaTime(timesSorteadosArray4, 2, 2, timesSorteadosArray2)
        } else if (placar4 == "4" && placar2 == "0") {
            placarTime4 = placarTime4 + 3
            VerificaParaAtualizaTime(timesSorteadosArray4, 3, 4, timesSorteadosArray2)
        }
        if (placar4 == "3" && placar3 == "2") {
            placarTime4 = placarTime4 + 1
            VerificaParaAtualizaTime(timesSorteadosArray4, 1, 1, timesSorteadosArray3)
        } else if (placar4 == "3" && placar3 == "1") {
            placarTime4 = placarTime4 + 2
            VerificaParaAtualizaTime(timesSorteadosArray4, 2, 2, timesSorteadosArray3)
        } else if (placar4 == "4" && placar3 == "0") {
            placarTime4 = placarTime4 + 3
            VerificaParaAtualizaTime(timesSorteadosArray4, 3, 4, timesSorteadosArray3)
        }
        if (!placar1 == "1" && !placar1 == "2" && !placar1 == "3" && !placar1 == "4"
            && !placar2 == "1" && !placar2 == "2" && !placar2 == "3" && !placar2 == "4"
            && !placar3 == "1" && !placar3 == "2" && !placar3 == "3" && !placar3 == "4"
            && !placar4 == "1" && !placar4 == "2" && !placar4 == "3" && !placar4 == "4") {
            alert("Placar de um dos resultados não corresponde ao que campeonato exige")
        }

    }


    // ABAIXO SÃO AS COLUNAS DE ACORDO COM O ARQUIVO ENVIADO (A TAMBÉM OS ID DE CADA DADO)
    const colunas = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Time
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
        {
            dataField: 'saldo',
            headerClasses: 'nao-selecionavel',
            text: <p>
                Saldo de Gols
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
    ]

    const colunasTimesSorteados = [
        {
            dataField: 'nome',
            headerClasses: 'nao-selecionavel',
            sort: true,
            text: <p>
                Time
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },

    ]

    async function cadastrarNovoTime() {
        setCarregando(true)
        let enviarBanco = []
        enviarBanco.push(novoTime, novoTime2, novoTime3, novoTime4)
        for (let i = 0; i < enviarBanco.length; i++) {
            await apiC.post("torneio/cadastrarTime", {
                "nome": enviarBanco[i],
                "pontos": 0
            }).then(response => {
                if (response.status === 200) {
                    setCarregando(false)
                    if (contador === i) {
                        let k = i
                        for (let j = 0; j < response.data.length; j++) {
                            itensVar[k] = response.data[j]
                            k++
                        }
                    }
                    setItens(JSON.parse(JSON.stringify(itensVar)))
                    verificaSeTemTimeCadastrado()
                    setCadastrarTime(false)
                }
            })
                .catch((error) => {
                    alert('Erro ao cadastrar times')
                    setCarregando(false)
                });
            await apiC.post("torneio/cadastrarTimeSorteado", {
                "nome": enviarBanco[i],
            }).then(response => {
                if (response.status === 200) {
                    for (let i = 0; i < response.data.length; i++) {
                        times.push(response.data[i].nome)
                    }
                    setCarregando(false)
                    if (contador === i) {
                        let k = i
                        for (let j = 0; j < response.data.length; j++) {
                            itensVarSorteado[k] = response.data[j]
                            k++
                        }
                    }
                    setItensSorteados(JSON.parse(JSON.stringify(itensVarSorteado)))
                    buscarTimesSorteados()
                }

            })
                .catch((error) => {
                    alert('Erro ao cadastrar times na tabela de sorteados')
                    setCarregando(false)
                });
        }

    }

    return (
        <>
            {carregando &&
                <h1>carregando..</h1>
            }
            {cadastrarTime &&
                <h1>Cadastre os times abaixo</h1>
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime(e.target.value) }}
                    value={novoTime}
                />
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime2(e.target.value) }}
                    value={novoTime2}
                />
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime3(e.target.value) }}
                    value={novoTime3}
                />
            }
            {cadastrarTime &&
                <Form.Control
                    onChange={e => { setNovoTime4(e.target.value) }}
                    value={novoTime4}
                />
            }
            {cadastrarTime &&
                <Button className="btn-filtro-arquivo" onClick={(e) => cadastrarNovoTime()}>
                    <div>Enviar times digitados</div>
                </Button>
            }
            {
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
            }

            {
                <BootstrapTable
                    hover={true}
                    classes="tabela"
                    condensed={true}
                    keyField='id'
                    data={itensSorteados}
                    columns={colunasTimesSorteados}
                    bootstrap4={true}
                    bordered={false}
                />
            }

            <>
                <div>


                    <h1> Primeiro turno</h1>
                    <Button className="btn-filtro-arquivo" onClick={(e) => sortearTimes()}>
                        <div>Sotear times</div>
                    </Button>
                    <div>
                        <label>{timesSorteadosArray1}</label>
                        <Form.Control
                            onChange={e => { setTime1(e.target.value); setPlacar1(e.target.value) }}
                            value={time1}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime2(e.target.value); setPlacar2(e.target.value) }}
                            value={time2}
                        />
                        <label>{timesSorteadosArray2} </label>
                    </div>
                    <div>
                        <label>{timesSorteadosArray3} </label>
                        <Form.Control
                            onChange={e => { setTime3(e.target.value); setPlacar3(e.target.value) }}
                            value={time3}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime4(e.target.value); setPlacar4(e.target.value) }}
                            value={time4}
                        />
                        <label>{timesSorteadosArray4} </label>
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada()}>
                        <div>Enviar Arquivo</div>
                    </Button>
                    <div>
                        <label>{timesSorteadosArray3} </label>
                        <Form.Control
                            onChange={e => { setTime22(e.target.value); setPlacar3(e.target.value) }}
                            value={time22}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime5(e.target.value); setPlacar1(e.target.value) }}
                            value={time5}
                        />
                        <label>{timesSorteadosArray1} </label>
                    </div>
                    <div>
                        <label>{timesSorteadosArray2} </label>
                        <Form.Control
                            onChange={e => { setTime6(e.target.value); setPlacar2(e.target.value) }}
                            value={time6}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime7(e.target.value); setPlacar4(e.target.value) }}
                            value={time7}
                        />
                        <label>{timesSorteadosArray4} </label>
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada()}>
                        <div>Enviar Arquivo</div>
                    </Button>
                    <div>
                        <label>{timesSorteadosArray4} </label>
                        <Form.Control
                            onChange={e => { setTime8(e.target.value); setPlacar4(e.target.value) }}
                            value={time8}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime9(e.target.value); setPlacar1(e.target.value) }}
                            value={time9}
                        />
                        <label>{timesSorteadosArray1} </label>
                    </div>
                    <div>
                        <label>{timesSorteadosArray2} </label>
                        <Form.Control
                            onChange={e => { setTime10(e.target.value); setPlacar2(e.target.value) }}
                            value={time10}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime11(e.target.value); setPlacar3(e.target.value) }}
                            value={time11}
                        />
                        <label>{timesSorteadosArray3} </label>
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada()}>
                        <div>Enviar Arquivo</div>
                    </Button>
                    <h1>Segundo turno</h1>
                    <div>
                        <label>{timesSorteadosArray1} </label>
                        <Form.Control
                            onChange={e => { setTime12(e.target.value); setPlacar1(e.target.value) }}
                            value={time12}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime13(e.target.value); setPlacar4(e.target.value) }}
                            value={time13}
                        />
                        <label>{timesSorteadosArray4} </label>
                    </div>
                    <div>
                        <label>{timesSorteadosArray3} </label>
                        <Form.Control
                            onChange={e => { setTime14(e.target.value); setPlacar3(e.target.value) }}
                            value={time14}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime15(e.target.value); setPlacar2(e.target.value) }}
                            value={time15}
                        />
                        <label>{timesSorteadosArray2} </label>
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada()}>
                        <div>Enviar Arquivo</div>
                    </Button>
                    <div>
                        <label>{timesSorteadosArray1} </label>
                        <Form.Control
                            onChange={e => { setTime16(e.target.value); setPlacar1(e.target.value) }}
                            value={time16}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime17(e.target.value); setPlacar3(e.target.value) }}
                            value={time17}
                        />
                        <label>{timesSorteadosArray3} </label>
                    </div>
                    <div>
                        <label>{timesSorteadosArray4} </label>
                        <Form.Control
                            onChange={e => { setTime18(e.target.value); setPlacar4(e.target.value) }}
                            value={time18}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime17(e.target.value); setPlacar2(e.target.value) }}
                            value={time17}
                        />
                        <label>{timesSorteadosArray2} </label>
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada()}>
                        <div>Enviar Arquivo</div>
                    </Button>
                    <div>
                        <label>{timesSorteadosArray2} </label>
                        <Form.Control
                            onChange={e => { setTime18(e.target.value); setPlacar2(e.target.value) }}
                            value={time18}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime19(e.target.value); setPlacar1(e.target.value) }}
                            value={time19}
                        />
                        <label>{timesSorteadosArray1} </label>
                    </div>
                    <div>
                        <label>{timesSorteadosArray4} </label>
                        <Form.Control
                            onChange={e => { setTime20(e.target.value); setPlacar4(e.target.value) }}
                            value={time20}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime21(e.target.value); setPlacar3(e.target.value) }}
                            value={time21}
                        />
                        <label>{timesSorteadosArray3} </label>
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada()}>
                        <div>Enviar Arquivo</div>
                    </Button>
                </div>

                <div className="espaco" ></div>
                <div className="campos-texto-login">

                </div>




            </>

        </>
    )
}