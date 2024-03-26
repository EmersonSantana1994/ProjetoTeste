import React, { useState } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';

export default function Cadastro() {


    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [time3, setTime3] = useState('');
    const [time4, setTime4] = useState('');
    const [liga, setLiga] = useState('');

    const [jogador1, setJogador1] = useState('');
    const [jogador2, setJogador2] = useState('');
    const [jogador3, setJogador3] = useState('');
    const [jogador4, setJogador4] = useState('');
    const [time, setTime] = useState('');



   async function cadastrarTime(){

    await apiC.post("cadastrar/time", {
        "liga": liga,
        "time1": time1,
        "time2": time2,
        "time3": time3,
        "time4": time4
    })
    .then(response => {
        if (response.status === 200) {
        }
    })
    .catch((error) => {
        alert(error.response.data)
    });
    }


    async function cadastrarJogador(){

        await apiC.post("cadastrar/jogador", {
            "time": time,
            "jogador1": jogador1,
            "jogador2": jogador2,
            "jogador3": jogador3,
            "jogador4": jogador4
        })
        .then(response => {
            if (response.status === 200) {
            }
        })
        .catch((error) => {
            alert(error.response.data)
        });
        }

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
        <h1>Cadastre a liga e os times desta liga</h1>
        <h3>Liga</h3>
        <Form.Control
                    onChange={e => { setLiga(e.target.value) }}
                    value={liga}
                />
        <h3>Time 1</h3>
        <Form.Control
                    onChange={e => { setTime1(e.target.value) }}
                    value={time1}
                />
                 <h3>Time 2</h3>
        <Form.Control
                    onChange={e => { setTime2(e.target.value) }}
                    value={time2}
                />
                <h3>Time 3</h3>
                <Form.Control
                    onChange={e => { setTime3(e.target.value) }}
                    value={time3}
                />
                <h3>Time 4</h3>
        <Form.Control
                    onChange={e => { setTime4(e.target.value) }}
                    value={time4}
                />
                <Button className="btn-filtro-arquivo" onClick={(e) => cadastrarTime()}>
                        <div>Enviar</div>
                    </Button>

                    <h1>Cadastre os jogadores abaixo</h1>
        <h3>Time</h3>
        <Form.Control
                    onChange={e => { setTime(e.target.value) }}
                    value={time}
                />
        <h3>Jogador 1</h3>
        <Form.Control
                    onChange={e => { setJogador1(e.target.value) }}
                    value={jogador1}
                />
                 <h3>Jogador 2</h3>
        <Form.Control
                    onChange={e => { setJogador2(e.target.value) }}
                    value={jogador2}
                />
                <h3>Jogador 3</h3>
                <Form.Control
                    onChange={e => { setJogador3(e.target.value) }}
                    value={jogador3}
                />
                <h3>Jogador 4</h3>
        <Form.Control
                    onChange={e => { setJogador4(e.target.value) }}
                    value={jogador4}
                />
                <Button className="btn-filtro-arquivo" onClick={(e) => cadastrarJogador()}>
                        <div>Enviar</div>
                    </Button>
        </>
        
    )
}