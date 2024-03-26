import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/login/upload.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';


export default function TimesCadastrados() {

    //VARIAVEIS

    const [itens, setItens] = useState([]);
    const [itens2, setItens2] = useState([]);
    const [itens3, setItens3] = useState([]);
    const [itens4, setItens4] = useState([]);
    const [itens5, setItens5] = useState([]);
    const [itens6, setItens6] = useState([]);
    const [itens7, setItens7] = useState([]);
    const [itens8, setItens8] = useState([]);
    const [itens9, setItens9] = useState([]);
    const [itens10, setItens10] = useState([]);
    const [itens11, setItens11] = useState([]);
    const [itens12, setItens12] = useState([]);
    const [itens13, setItens13] = useState([]);
    const [itens14, setItens14] = useState([]);
    const [itens15, setItens15] = useState([]);
    const [itens16, setItens16] = useState([]);

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

    let contador = 0
    let itensVar = []

    useEffect(() => {

        async function buscarTimes(e) {

            await apiC.post("listar/time", {
            })
                .then(response => {
                    setTime1(response.data[0].nome)
                    setTime2(response.data[1].nome)
                    setTime3(response.data[2].nome)
                    setTime4(response.data[3].nome)
                    setTime5(response.data[4].nome)
                    setTime6(response.data[5].nome)
                    setTime7(response.data[6].nome)
                    setTime8(response.data[7].nome)
                    setTime9(response.data[8].nome)
                    setTime10(response.data[9].nome)
                    setTime11(response.data[10].nome)
                    setTime12(response.data[11].nome)
                    setTime13(response.data[12].nome)
                    setTime14(response.data[13].nome)
                    setTime15(response.data[14].nome)
                    setTime16(response.data[15].nome)
                    if (response.status === 200) {
                        async function times() {
                            await apiC.post("listar/jogadores", {
                                time: response.data[0].nome
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "1")
                                    }
                                })
                                .catch((error) => {
                                });

                            await apiC.post("listar/jogadores", {
                                time: response.data[1].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "2")
                                    }
                                })
                                .catch((error) => {
                                });

                            await apiC.post("listar/jogadores", {
                                time: response.data[2].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "3")
                                    }
                                })
                                .catch((error) => {
                                });

                            await apiC.post("listar/jogadores", {
                                time: response.data[3].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "4")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[4].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "5")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[5].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "6")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[6].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "7")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[7].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "8")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[8].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "9")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[9].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "10")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[10].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "11")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[11].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "12")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[12].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "13")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[13].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "14")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[14].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "15")
                                    }
                                })
                                .catch((error) => {
                                });
                            await apiC.post("listar/jogadores", {
                                time: response.data[15].nome,
                            })
                                .then(response => {
                                    if (response.status === 200) {
                                        inserirData(response.data, "16")
                                    }
                                })
                                .catch((error) => {
                                });
                        } times()

                    }
                })
                .catch((error) => {
                });
        }
        buscarTimes()
    }, [])



    // FUNÇÃO ABAIXO TEM O DEVER DE SALVAR OS DADOS TRAZIDOS DO BANCO PARA SEREM APRESENTADOS NA TABELA
    function inserirData(data, time) {
        for (let i = 0; i < data.length; i++) {
            if (contador == i) {
                let k = i
                for (let j = 0; j < data.length; j++) {
                    itensVar[k] = data[j]
                    k++
                }
            }

            if (i == (data.length - 1)) {
                if (time == "1") {
                    setItens(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "2") {
                    setItens2(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "3") {
                    setItens3(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "4") {
                    setItens4(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "5") {
                    setItens5(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "6") {
                    setItens6(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "7") {
                    setItens7(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "8") {
                    setItens8(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "9") {
                    setItens9(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "10") {
                    setItens10(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "11") {
                    setItens11(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "12") {
                    setItens12(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "13") {
                    setItens13(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "14") {
                    setItens14(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "15") {
                    setItens15(JSON.parse(JSON.stringify(itensVar)))
                } else if (time == "16") {
                    setItens16(JSON.parse(JSON.stringify(itensVar)))
                }

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
                Jogadores
            </p>,
            formatter: (cell, row) => {
                return <p>{cell === null ? '-' : cell}</p>;
            },
        },
    ]


    return (

        <>

            {/* {carregando &&
                <h1>carregando..</h1>
            } */}
            <div className="lado">

                <div>
                    <h3>{time1}</h3>
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
                <div className="espaco2"></div>
                <div>
                    <h3>{time2}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens2}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time3}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens3}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time4}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens4}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
               

            </div>
            <div className="espaco2"></div>
            <div className="lado"> 
            <div>
                    <h3>{time5}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens5}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time6}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens6}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time7}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens7}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time8}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens8}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
            </div>
            <div className="espaco2"></div>
            <div className="lado"> 
            <div>
                    <h3>{time9}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens9}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time10}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens10}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time11}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens11}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time12}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens12}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
            
            </div>
            <div className="espaco2"></div>
            <div className="lado">
                
            <div>
                    <h3>{time13}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens13}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time14}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens14}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time15}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens15}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div>
                <div className="espaco2"></div>
                <div>
                    <h3>{time16}</h3>
                    <BootstrapTable
                        hover={true}
                        classes="tabela"
                        condensed={true}
                        keyField='id'
                        data={itens16}
                        columns={colunas}
                        bootstrap4={true}
                        bordered={false}
                    />
                </div> 
                 </div>
           
                
               

        </>

    )

}