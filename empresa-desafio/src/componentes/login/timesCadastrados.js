import React, { useState, useEffect} from 'react';/*eslint-disable*/
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

const [liga1, setLiga1] = useState('');
const [liga2, setLiga2] = useState('');
const [liga3, setLiga3] = useState('');
const [liga4, setLiga4] = useState('');


let contador = 0
let itensVar = []

useEffect(() => {

    async function buscarTimes(e) {
        
        await apiC.post("listar/ligas", {
        })
        .then(response => {
            setLiga1(response.data[0].nome)
            setLiga2(response.data[1].nome)
            setLiga3(response.data[2].nome)
            setLiga4(response.data[3].nome)
            if (response.status === 200) {
                async function ligas(){                   
                    await apiC.post("listar/times", {
                        liga: response.data[0].nome
                    })
        .then(response => {
            if (response.status === 200) {
                inserirData(response.data, "1")
            }
        })
        .catch((error) => {
        });
                    
                    await apiC.post("listar/times", {
                        liga: response.data[1].nome,
                    })
        .then(response => {
            if (response.status === 200) {
                inserirData(response.data, "2")
            }
        })
        .catch((error) => {
        });
                    
                    await apiC.post("listar/times", {
                        liga: response.data[2].nome,
                    })
        .then(response => {
            if (response.status === 200) {
                inserirData(response.data, "3")
            }
        })
        .catch((error) => {
        });
                    
                    await apiC.post("listar/times", {
                        liga: response.data[3].nome,
                    })
        .then(response => {
            if (response.status === 200) {
                inserirData(response.data, "4")
            }
        })
        .catch((error) => {
        });
                }ligas()
                
            }
        })
        .catch((error) => {
        });   
    }
buscarTimes()
}, [])



    // FUNÇÃO ABAIXO TEM O DEVER DE SALVAR OS DADOS TRAZIDOS DO BANCO PARA SEREM APRESENTADOS NA TABELA
    function inserirData(data, liga) {
        for (let i = 0; i < data.length; i++) {
            if (contador == i) {
                let k = i
                for (let j = 0; j < data.length; j++) {
                    itensVar[k] = data[j]
                    k++
                }
            }
 
            if (i == (data.length - 1)) {
                if(liga == "1"){
                    setItens(JSON.parse(JSON.stringify(itensVar)))
                }else if(liga == "2"){
                    setItens2(JSON.parse(JSON.stringify(itensVar)))
                }else if(liga == "3"){
                    setItens3(JSON.parse(JSON.stringify(itensVar)))
                }else if(liga == "4"){
                    setItens4(JSON.parse(JSON.stringify(itensVar)))
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
                Times
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
                    <h3>{liga1}</h3>
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
                <h3>{liga2}</h3>
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
                <h3>{liga3}</h3>
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
                <h3>{liga4}</h3>
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
         
         </>
         
    )

}