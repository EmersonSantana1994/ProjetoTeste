import React, { useState } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';

export default function Transferencia() {


    const [nomeTime, setNomeTime] = useState('');
    const [novoJogador, setNovoJogador] = useState('');
    const [jogadoSaindo, setJogadoSaindo] = useState('');


   async function transferirJogador(){

    await apiC.post("transferir/jogador", {
        "nomeTime": nomeTime,
        "novoJogador": novoJogador,
        "jogadorSaindo": jogadoSaindo
    })
    .then(response => {
        if (response.status === 200) {
        }
        setCarregando(false)
    })
    .catch((error) => {
        setCarregando(false)
    });
    }

    return (
        <>
        <h1>Informa abaixo os jogadores que sairam e entraram no time</h1>

        <h3>Nome do time realizando a trânsferência</h3>
        <Form.Control
                    onChange={e => { setNomeTime(e.target.value) }}
                    value={nomeTime}
                />
                 <h3>Nome do novo jogador do time</h3>
        <Form.Control
                    onChange={e => { setNovoJogador(e.target.value) }}
                    value={novoJogador}
                />
                <h3>Nome do jogador de saida do time</h3>
        <Form.Control
                    onChange={e => { setJogadoSaindo(e.target.value) }}
                    value={jogadoSaindo}
                />
                <Button className="btn-filtro-arquivo" onClick={(e) => transferirJogador("1")}>
                        <div>Enviar</div>
                    </Button>
        </>
        
    )
}