import React, { useState, useEffect } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import { useNavigate } from 'react-router-dom';

export default function Torneio() {


    //VARIAVEIS
    const navigate = useNavigate();
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
    const [time177, setTime177] = useState('');
    const [time188, setTime188] = useState('');
    const [placarSalvo1, setPlacarSalvo1] = useState('');
    const [placarSalvo2, setPlacarSalvo2] = useState('');
    const [placarSalvo3, setPlacarSalvo3] = useState('');
    const [placarSalvo4, setPlacarSalvo4] = useState('');
    const [placarSalvo5, setPlacarSalvo5] = useState('');
    const [placarSalvo6, setPlacarSalvo6] = useState('');
    const [placarSalvo7, setPlacarSalvo7] = useState('');
    const [placarSalvo8, setPlacarSalvo8] = useState('');
    const [placarSalvo9, setPlacarSalvo9] = useState('');
    const [placarSalvo10, setPlacarSalvo10] = useState('');
    const [placarSalvo11, setPlacarSalvo11] = useState('');
    const [placarSalvo12, setPlacarSalvo12] = useState('');
    const [placarSalvo13, setPlacarSalvo13] = useState('');
    const [placarSalvo14, setPlacarSalvo14] = useState('');
    const [placarSalvo15, setPlacarSalvo15] = useState('');
    const [placarSalvo16, setPlacarSalvo16] = useState('');
    const [placarSalvo17, setPlacarSalvo17] = useState('');
    const [placarSalvo18, setPlacarSalvo18] = useState('');
    const [placarSalvo19, setPlacarSalvo19] = useState('');
    const [placarSalvo20, setPlacarSalvo20] = useState('');
    const [placarSalvo21, setPlacarSalvo21] = useState('');
    const [placarSalvo22, setPlacarSalvo22] = useState('');
    const [placarSalvo23, setPlacarSalvo23] = useState('');
    const [placarSalvo24, setPlacarSalvo24] = useState('');
    const [mostrarPlacarSalvo1, setMostrarPlacarSalvo1] = useState(false);
    const [mostrarPlacarSalvo2, setMostrarPlacarSalvo2] = useState(false);
    const [mostrarPlacarSalvo3, setMostrarPlacarSalvo3] = useState(false);
    const [mostrarPlacarSalvo4, setMostrarPlacarSalvo4] = useState(false);
    const [mostrarPlacarSalvo5, setMostrarPlacarSalvo5] = useState(false);
    const [mostrarPlacarSalvo6, setMostrarPlacarSalvo6] = useState(false);
    const [mostrarPlacarSalvo7, setMostrarPlacarSalvo7] = useState(false);
    const [mostrarPlacarSalvo8, setMostrarPlacarSalvo8] = useState(false);
    const [mostrarPlacarSalvo9, setMostrarPlacarSalvo9] = useState(false);
    const [mostrarPlacarSalvo10, setMostrarPlacarSalvo10] = useState(false);
    const [mostrarPlacarSalvo11, setMostrarPlacarSalvo11] = useState(false);
    const [mostrarPlacarSalvo12, setMostrarPlacarSalvo12] = useState(false);
    const [mostrarPlacarSalvo13, setMostrarPlacarSalvo13] = useState(false);
    const [mostrarPlacarSalvo14, setMostrarPlacarSalvo14] = useState(false);
    const [mostrarPlacarSalvo15, setMostrarPlacarSalvo15] = useState(false);
    const [mostrarPlacarSalvo16, setMostrarPlacarSalvo16] = useState(false);
    const [mostrarPlacarSalvo17, setMostrarPlacarSalvo17] = useState(false);
    const [mostrarPlacarSalvo18, setMostrarPlacarSalvo18] = useState(false);
    const [mostrarPlacarSalvo19, setMostrarPlacarSalvo19] = useState(false);
    const [mostrarPlacarSalvo20, setMostrarPlacarSalvo20] = useState(false);
    const [mostrarPlacarSalvo21, setMostrarPlacarSalvo21] = useState(false);
    const [mostrarPlacarSalvo22, setMostrarPlacarSalvo22] = useState(false);
    const [mostrarPlacarSalvo23, setMostrarPlacarSalvo23] = useState(false);
    const [mostrarPlacarSalvo24, setMostrarPlacarSalvo24] = useState(false);
    const [dataPlacar1, setDataPlacar1] = useState('');
    const [dataPlacar2, setDataPlacar2] = useState('');
    const [dataPlacar3, setDataPlacar3] = useState('');
    const [dataPlacar4, setDataPlacar4] = useState('');
    const [dataPlacar5, setDataPlacar5] = useState('');
    const [dataPlacar6, setDataPlacar6] = useState('');
    const [dataPlacar7, setDataPlacar7] = useState('');
    const [dataPlacar8, setDataPlacar8] = useState('');
    const [dataPlacar9, setDataPlacar9] = useState('');
    const [dataPlacar10, setDataPlacar10] = useState('');
    const [dataPlacar11, setDataPlacar11] = useState('');
    const [dataPlacar12, setDataPlacar12] = useState('');


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
    const [campeao, setCampeao] = useState('');
    const [mostrarCampeao, setMostrarCampeao] = useState(false);

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
    let dadosSelecionados = []
    let dadosSelecionadosSorteados = []

    useEffect(() => {
        verificaSeTemTimeCadastrado()
    }, [])


    useEffect(() => {
        console.log("ggggg")
        verificaPlacares()
    }, [])

    useEffect(() => {
        async function autenticar(e) {
            await apiC.post("autenticacao/autenticar")
            .then(response => {
      console.log("esta autenticado")
            })
            .catch((error) => {
                if(error.response.data == 'não autenticado'){
                    navigate('/')
                }
            });
        }
        setTimeout(autenticar, 5000);
    }, [])

    async function formatarData(data){
        const formData = new Date(data)
        let dt = formData.toLocaleString('pt-BR')
return dt
    }

    async function verificaPlacares() {
        console.log("mas e aqui foi???")
let posicaoPlacar = []

        await apiC.post("torneio/buscarPlacares", {
        })
            .then(response => {
                console.log("ppppppp", response.data.result )
                for(let i = 0; i < response.data.result.length; i++){
                    console.log("response.data.result[i].id", response.data.result[i].id)
                    if (response.data.result[i].id == 1 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo1(response.data.result[i].resultado)
                        setMostrarPlacarSalvo1(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar1(dt)
                    }else if (response.data.result[i].id == 2 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo2(response.data.result[i].resultado)
                        setMostrarPlacarSalvo2(true)
                    }else if (response.data.result[i].id == 3 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo3(response.data.result[i].resultado)
                        setMostrarPlacarSalvo3(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar2(dt)
                    }else if (response.data.result[i].id == 4 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo4(response.data.result[i].resultado)
                        setMostrarPlacarSalvo4(true)
                    }else if (response.data.result[i].id == 5 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo5(response.data.result[i].resultado)
                        setMostrarPlacarSalvo5(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar3(dt)
                    }else if (response.data.result[i].id == 6 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo6(response.data.result[i].resultado)
                        setMostrarPlacarSalvo6(true)
                    }else if (response.data.result[i].id == 7 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo7(response.data.result[i].resultado)
                        setMostrarPlacarSalvo7(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar4(dt)
                    }else if (response.data.result[i].id == 8 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo8(response.data.result[i].resultado)
                        setMostrarPlacarSalvo8(true)
                    }else if (response.data.result[i].id == 9 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo9(response.data.result[i].resultado)
                        setMostrarPlacarSalvo9(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar5(dt)
                    }else if (response.data.result[i].id == 10 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo10(response.data.result[i].resultado)
                        setMostrarPlacarSalvo10(true)
                    }else if (response.data.result[i].id == 11 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo11(response.data.result[i].resultado)
                        setMostrarPlacarSalvo11(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar6(dt)
                    }else if (response.data.result[i].id == 12 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo12(response.data.result[i].resultado)
                        setMostrarPlacarSalvo12(true)
                    }else if (response.data.result[i].id == 13 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo13(response.data.result[i].resultado)
                        setMostrarPlacarSalvo13(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar7(dt)
                    }else if (response.data.result[i].id == 14 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo14(response.data.result[i].resultado)
                        setMostrarPlacarSalvo14(true)
                    }else if (response.data.result[i].id == 15 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo15(response.data.result[i].resultado)
                        setMostrarPlacarSalvo15(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar8(dt)
                    }else if (response.data.result[i].id == 16 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo16(response.data.result[i].resultado)
                        setMostrarPlacarSalvo16(true)
                    }else if (response.data.result[i].id == 17 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo17(response.data.result[i].resultado)
                        setMostrarPlacarSalvo17(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar9(dt)
                        console.log("mmmmggggmm", response.data.result[i].data)
                    }else if (response.data.result[i].id == 18 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo18(response.data.result[i].resultado)
                        setMostrarPlacarSalvo18(true)
                    }else if (response.data.result[i].id == 19 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo19(response.data.result[i].resultado)
                        setMostrarPlacarSalvo19(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar10(dt)
                    }else if (response.data.result[i].id == 20 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo20(response.data.result[i].resultado)
                        setMostrarPlacarSalvo20(true)
                    }else if (response.data.result[i].id == 21 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo21(response.data.result[i].resultado)
                        setMostrarPlacarSalvo21(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar11(dt)
                    }else if (response.data.result[i].id == 22 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo22(response.data.result[i].resultado)
                        setMostrarPlacarSalvo22(true)
                    }else if (response.data.result[i].id == 23 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        console.log("passou aquii???")
                        setPlacarSalvo23(response.data.result[i].resultado)
                        setMostrarPlacarSalvo23(true)
                        const formData = new Date(response.data.result[i].data)
                        let dt = formData.toLocaleString('pt-BR')
                        setDataPlacar12(dt)
                    }else if (response.data.result[i].id == 24 && response.data.result[i].resultado != '' && response.data.result[i].resultado != null && response.data.result[i].resultado != 'null'){
                        setPlacarSalvo24(response.data.result[i].resultado)
                        setMostrarPlacarSalvo24(true)
                    }
                }
             
            })
            .catch((error) => {
              console.log("erro ao chamar os placlares", error )
            });
    }

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

    async function anunciarCampeao() {
        console.log("passou simmmmmmm")
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
                            setCampeao(JSON.parse(JSON.stringify(itensVar[0].nome)))
                        }
                        setMostrarCampeao(true)
                    }
                }
                setCarregando(false)
            })
            .catch((error) => {
                setCarregando(false)
            });
    }

    const selecaoLinhas = {
        mode: 'checkbox',
        onSelect: (row, isSelect, rowIndex, e) => {
            if (isSelect) {
                handleSelecionar(row.id, row.nome)
            } else {
                handleDesselecionar(row.id, row.nome)
            }
        },
        onSelectAll: (isSelect, rows, e) => {
            if (isSelect) {
                handleSelecionarTodos()
            } else {
                handleDesselecionarTodos()
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

    function handleSelecionar(simcard, nome) {
        for (let i = 0; i < itens.length; i++) {
            if (itens[i].id == simcard) {
                dadosSelecionados.push(itens[i].id);
                dadosSelecionadosSorteados.push(itens[i].nome);
                break;
            }
        }
    }

    async function handleDeletar() {
        setCarregando(true)

            await apiC.post("torneio/deletar", {
            })
                .then(response => {
                    if (response.status === 200) {
                        AtualizaTabela()
                    }
                })
                .catch((error) => {
                    alert('erro ao deletar jogador da tabela de pontos corridos')
                    setCarregando(false)
                });

            await apiC.post("torneio/deletartimesorteado", {
            })
                .then(response => {
                    if (response.status === 200) {
                        location.reload()
                    }
                })
                .catch((error) => {
                    alert('erro ao deletar jogador da tabela de times sorteados')
                    setCarregando(false)
                });


    }

    async function deletarTimeSorteado(item) {
        await apiC.post("torneio/deletarTimeSorteado", {
            "id": item[0].id,
        })
    }

    function handleSelecionarTodos() {
        itens.map((item, i) => {
            if (itens[i].id) {
                dadosSelecionados.push(itens[i].id);
                dadosSelecionadosSorteados.push(itens[i].nome);
            }
        })
    }

    function handleDesselecionar(simcard, nome) {
        for (let i = 0; i < dadosSelecionados.length; i++) {
            if (dadosSelecionados[i] == simcard) {
                dadosSelecionados.splice(i, 1);
                break;
            }
            if (dadosSelecionadosSorteados[i] == nome) {
                dadosSelecionadosSorteados.splice(i, 1);
                break;
            }
        }
    }

    function handleDesselecionarTodos() {
    }

    async function buscarTimesSorteados() {
        await apiC.post("torneio/buscarTimeSorteado")
            .then(response => {
                if (response.status === 200) {
                    if (response.data.length > 0) {
                        if (!timesS.length > 0) {
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
        console.log("novos pontos", pontos )
        console.log("pontos anteriores", dados[0].pontos )
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


    async function VerificaParaAtualizaTime(nome, pontos, saldo, timeperdedor) {
        console.log("quantas vezes?")
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

    async function limparPlacar(p1, p2){
        if(p1 == 1){
setPlacar1('')
console.log("........ 11")
        }
        if(p2 == 2){
            setPlacar2('')
            console.log("........ 2222")
                    }
    }

    async function rodada(rod) {
        if (placar1 == "3" && placar2 == "2" && rod == "1") {
            VerificaParaAtualizaTime(timesSorteadosArray1, 1, 1, timesSorteadosArray2)
            setPlacar1('') 
            setPlacar2('')
        } else if (placar1 == "3" && placar2 == "1" && rod == "1") {
            VerificaParaAtualizaTime(timesSorteadosArray1, 2, 2, timesSorteadosArray2)
            setPlacar1('') 
            setPlacar2('')
        } else if (placar1 == "4" && placar2 == "0" && rod == "1") {
            VerificaParaAtualizaTime(timesSorteadosArray1, 3, 4, timesSorteadosArray2)
            setPlacar1('') 
            setPlacar2('')
        }
        if (placar1 == "3" && placar3 == "2" && rod == "2") {
            console.log("22222222")
            placarTime1 = placarTime1 + 1
            VerificaParaAtualizaTime(timesSorteadosArray1, 1, 1, timesSorteadosArray3)
            setPlacar1('') 
            setPlacar3('')
        } else if (placar1 == "3" && placar3 == "1" && rod == "2") {
            placarTime1 = placarTime1 + 2
            VerificaParaAtualizaTime(timesSorteadosArray1, 2, 2, timesSorteadosArray3)
            setPlacar1('') 
            setPlacar3('')
        } else if (placar1 == "4" && placar3 == "0" && rod == "2") {
            placarTime1 = placarTime1 + 3
            VerificaParaAtualizaTime(timesSorteadosArray1, 3, 4, timesSorteadosArray3)
            setPlacar1('') 
            setPlacar3('')
        }
        if (placar1 == "3" && placar4 == "2" && rod == "3") {
            console.log("333333333")
            placarTime1 = placarTime1 + 1
            VerificaParaAtualizaTime(timesSorteadosArray1, 1, 1, timesSorteadosArray4)
            setPlacar1('') 
            setPlacar4('')
        } else if (placar1 == "3" && placar4 == "1" && rod == "3") {
            placarTime1 = placarTime1 + 2
            VerificaParaAtualizaTime(timesSorteadosArray1, 2, 2, timesSorteadosArray4)
            setPlacar1('') 
            setPlacar4('')
        } else if (placar1 == "4" && placar4 == "0" && rod == "3") {
            placarTime1 = placarTime1 + 3
            VerificaParaAtualizaTime(timesSorteadosArray1, 3, 4, timesSorteadosArray4)
            setPlacar1('') 
            setPlacar4('')
        }
        if (placar2 == "3" && placar1 == "2" && rod == "1") {
            setPlacar1('') 
            setPlacar2('')
            console.log("entrou aqui simmmmmmmmmmm", placar1)
            placarTime2 = placarTime2 + 1
           await limparPlacar(1,2)
            console.log("entrou aqui simmmmmmmmmmm 222", placar1)
            VerificaParaAtualizaTime(timesSorteadosArray2, 1, 1, timesSorteadosArray1)
        } else if (placar2 == "3" && placar1 == "1" && rod == "1") {
            placarTime2 = placarTime2 + 2
            VerificaParaAtualizaTime(timesSorteadosArray2, 2, 2, timesSorteadosArray1)
            setPlacar1('') 
            setPlacar2('')
        } else if (placar2 == "4" && placar1 == "0" && rod == "1") {
            placarTime2 = placarTime2 + 3
            VerificaParaAtualizaTime(timesSorteadosArray2, 3, 4, timesSorteadosArray1)
            setPlacar1('') 
            setPlacar2('')
        }
        if (placar2 == "3" && placar3 == "2" && rod == "3") {
            console.log("6666666666")
            VerificaParaAtualizaTime(timesSorteadosArray2, 1, 1, timesSorteadosArray3)
            setPlacar3('') 
            setPlacar2('')
        } else if (placar2 == "3" && placar3 == "1" && rod == "3") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 2, 2, timesSorteadosArray3)
            setPlacar3('') 
            setPlacar2('')
        } else if (placar2 == "4" && placar3 == "0" && rod == "3") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 3, 4, timesSorteadosArray3)
            setPlacar3('') 
            setPlacar2('')
        }
        if (placar2 == "3" && placar4 == "2" && rod == "2") {
            console.log("77777777777")
            VerificaParaAtualizaTime(timesSorteadosArray2, 1, 1, timesSorteadosArray4)
            setPlacar4('') 
            setPlacar2('')
        } else if (placar2 == "3" && placar4 == "1" && rod == "2") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 2, 2, timesSorteadosArray4)
            setPlacar4('') 
            setPlacar2('')
        } else if (placar2 == "4" && placar4 == "0" && rod == "2") {
            VerificaParaAtualizaTime(timesSorteadosArray2, 3, 4, timesSorteadosArray4)
            setPlacar4('') 
            setPlacar2('')
        }
        if (placar3 == "3" && placar1 == "2" && rod == "2") {
            console.log("88888888888", placar1 )
            VerificaParaAtualizaTime(timesSorteadosArray3, 1, 1, timesSorteadosArray1)
            setPlacar3('') 
            setPlacar1('')
        } else if (placar3 == "3" && placar1 == "1" && rod == "2") {
            VerificaParaAtualizaTime(timesSorteadosArray3, 2, 2, timesSorteadosArray1)
            setPlacar3('') 
            setPlacar1('')
        } else if (placar3 == "4" && placar1 == "0" && rod == "2") {
            VerificaParaAtualizaTime(timesSorteadosArray3, 3, 4, timesSorteadosArray1)
            setPlacar3('') 
            setPlacar1('')
        }
        if (placar3 == "3" && placar2 == "2" && rod == "3") {
            console.log("999999999999")
            placarTime3 = placarTime3 + 1
            VerificaParaAtualizaTime(timesSorteadosArray3, 1, 1, timesSorteadosArray2)
            setPlacar3('') 
            setPlacar2('')
        } else if (placar3 == "3" && placar2 == "1" && rod == "3") {
            placarTime3 = placarTime3 + 2
            VerificaParaAtualizaTime(timesSorteadosArray3, 2, 2, timesSorteadosArray2)
            setPlacar3('') 
            setPlacar2('')
        } else if (placar3 == "4" && placar2 == "0" && rod == "3") {
            placarTime3 = placarTime3 + 3
            VerificaParaAtualizaTime(timesSorteadosArray3, 3, 4, timesSorteadosArray2)
            setPlacar3('') 
            setPlacar2('')
        }
        if (placar3 == "3" && placar4 == "2" && rod == "1") {
            console.log("ddddddddddd")
            placarTime3 = placarTime3 + 1
            VerificaParaAtualizaTime(timesSorteadosArray3, 1, 1, timesSorteadosArray4)
            setPlacar3('') 
            setPlacar4('')
        } else if (placar3 == "3" && placar4 == "1" && rod == "1") {
            placarTime3 = placarTime3 + 2
            VerificaParaAtualizaTime(timesSorteadosArray3, 2, 2, timesSorteadosArray4)
            setPlacar3('') 
            setPlacar4('')
        } else if (placar3 == "4" && placar4 == "0" && rod == "1") {
            placarTime3 = placarTime3 + 3
            VerificaParaAtualizaTime(timesSorteadosArray3, 3, 4, timesSorteadosArray4)
            setPlacar3('') 
            setPlacar4('')
        }
        if (placar4 == "3" && placar1 == "2" && rod == "3") {
            console.log("çççççççççç")
            placarTime4 = placarTime4 + 1
            VerificaParaAtualizaTime(timesSorteadosArray4, 1, 1, timesSorteadosArray1)
            setPlacar1('') 
            setPlacar4('')
        } else if (placar4 == "3" && placar1 == "1" && rod == "3") {
            placarTime4 = placarTime4 + 2
            VerificaParaAtualizaTime(timesSorteadosArray4, 2, 2, timesSorteadosArray1)
            setPlacar1('') 
            setPlacar4('')
        } else if (placar4 == "4" && placar1 == "0" && rod == "3") {
            placarTime4 = placarTime4 + 3
            VerificaParaAtualizaTime(timesSorteadosArray4, 3, 4, timesSorteadosArray1)
            setPlacar1('') 
            setPlacar4('')
        }
        if (placar4 == "3" && placar2 == "2" && rod == "2") {
            console.log("bbbbbbbbbb")
            placarTime4 = placarTime4 + 1
            VerificaParaAtualizaTime(timesSorteadosArray4, 1, 1, timesSorteadosArray2)
            setPlacar2('') 
            setPlacar4('')
        } else if (placar4 == "3" && placar2 == "1" && rod == "2") {
            placarTime4 = placarTime4 + 2
            VerificaParaAtualizaTime(timesSorteadosArray4, 2, 2, timesSorteadosArray2)
            setPlacar2('') 
            setPlacar4('')
        } else if (placar4 == "4" && placar2 == "0" && rod == "2") {
            placarTime4 = placarTime4 + 3
            VerificaParaAtualizaTime(timesSorteadosArray4, 3, 4, timesSorteadosArray2)
            setPlacar2('') 
            setPlacar4('')
        }
        if (placar4 == "3" && placar3 == "2" && rod == "1") {
            console.log("zzzzzzzzzz")
            placarTime4 = placarTime4 + 1
            VerificaParaAtualizaTime(timesSorteadosArray4, 1, 1, timesSorteadosArray3)
            setPlacar3('') 
            setPlacar4('')
        } else if (placar4 == "3" && placar3 == "1" && rod == "1") {
            placarTime4 = placarTime4 + 2
            VerificaParaAtualizaTime(timesSorteadosArray4, 2, 2, timesSorteadosArray3)
            setPlacar3('') 
            setPlacar4('')
        } else if (placar4 == "4" && placar3 == "0" && rod == "1") {
            placarTime4 = placarTime4 + 3
            VerificaParaAtualizaTime(timesSorteadosArray4, 3, 4, timesSorteadosArray3)
            setPlacar3('') 
            setPlacar4('')
        }
        console.log("testeeeeeeddddd", )
        if (!placar1 == "1" && !placar1 == "2" && !placar1 == "3" && !placar1 == "4"
            && !placar2 == "1" && !placar2 == "2" && !placar2 == "3" && !placar2 == "4"
            && !placar3 == "1" && !placar3 == "2" && !placar3 == "3" && !placar3 == "4"
            && !placar4 == "1" && !placar4 == "2" && !placar4 == "3" && !placar4 == "4") {
            alert("Placar de um dos resultados não corresponde ao que campeonato exige")
        }
        salvarPlacar()
    }

    async function deletarPlacarRodada(p1, p2,p3,p4){
        let idPlacar = []
        idPlacar.push(p1,p2,p3,p4)
      await apiC.post("torneio/deletarPlacar", {
            "id": idPlacar,
        })
            .then(response => {
                location.reload()
            })
            .catch((error) => {
                alert('erro ao trazer ao deletar o placar ')
            });
            
    }



    async function salvarPlacar() {
        if (time1 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 1,
                "resultado": time1
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 1,
                    })
                        .then(response => {
                            setPlacarSalvo1(response.data.resultado)
                            setMostrarPlacarSalvo1(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time1)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time1)
                });
        }
        if (time2 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 2,
                "resultado": time2
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 2,
                    })
                        .then(response => {
                            setPlacarSalvo2(response.data.resultado)
                            setMostrarPlacarSalvo2(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time2)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time2)
                });
        }
        if (time3 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 3,
                "resultado": time3
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 3,
                    })
                        .then(response => {
                            setPlacarSalvo3(response.data.resultado)
                            setMostrarPlacarSalvo3(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time3)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time3)
                });
        }
        if (time4 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 4,
                "resultado": time4
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 4,
                    })
                        .then(response => {
                            setPlacarSalvo4(response.data.resultado)
                            setMostrarPlacarSalvo4(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time4)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time4)
                });
        }
        if (time5 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 5,
                "resultado": time5
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 5,
                    })
                        .then(response => {
                            setPlacarSalvo5(response.data.resultado)
                            setMostrarPlacarSalvo5(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time5)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time5)
                });
        }
        if (time6 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 6,
                "resultado": time6
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 6,
                    })
                        .then(response => {
                            setPlacarSalvo6(response.data.resultado)
                            setMostrarPlacarSalvo6(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time6)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time6)
                });
        }
        if (time7 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 7,
                "resultado": time7
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 7,
                    })
                        .then(response => {
                            setPlacarSalvo7(response.data.resultado)
                            setMostrarPlacarSalvo7(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time7)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time7)
                });
        }
        if (time8 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 8,
                "resultado": time8
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 8,
                    })
                        .then(response => {
                            setPlacarSalvo8(response.data.resultado)
                            setMostrarPlacarSalvo8(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time8)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time8)
                });
        }
        if (time9 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 9,
                "resultado": time9
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 9,
                    })
                        .then(response => {
                            setPlacarSalvo9(response.data.resultado)
                            setMostrarPlacarSalvo9(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time9)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time9)
                });
        }
        if (time10 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 10,
                "resultado": time10
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 10,
                    })
                        .then(response => {
                            setPlacarSalvo10(response.data.resultado)
                            setMostrarPlacarSalvo10(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time10)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time10)
                });
        }
        if (time11 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 11,
                "resultado": time11
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 11,
                    })
                        .then(response => {
                            setPlacarSalvo11(response.data.resultado)
                            setMostrarPlacarSalvo11(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time11)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time11)
                });
        }
        if (time12 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 12,
                "resultado": time12
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 12,
                    })
                        .then(response => {
                            setPlacarSalvo12(response.data.resultado)
                            setMostrarPlacarSalvo12(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time12)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time12)
                });
        }
        if (time13 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 13,
                "resultado": time13
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 13,
                    })
                        .then(response => {
                            setPlacarSalvo13(response.data.resultado)
                            setMostrarPlacarSalvo13(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time13)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time13)
                });
        }
        if (time14 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 14,
                "resultado": time14
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 14,
                    })
                        .then(response => {
                            setPlacarSalvo14(response.data.resultado)
                            setMostrarPlacarSalvo14(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time14)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time14)
                });
        }
        if (time15 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 15,
                "resultado": time15
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 15,
                    })
                        .then(response => {
                            setPlacarSalvo15(response.data.resultado)
                            setMostrarPlacarSalvo15(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time15)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time15)
                });
        }
        if (time16 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 16,
                "resultado": time16
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 16,
                    })
                        .then(response => {
                            setPlacarSalvo16(response.data.resultado)
                            setMostrarPlacarSalvo16(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time16)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time16)
                });
        }
        if (time17 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 17,
                "resultado": time17
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 17,
                    })
                        .then(response => {
                            setPlacarSalvo17(response.data.resultado)
                            setMostrarPlacarSalvo17(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time17)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time17)
                });
        }
        if (time18 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 18,
                "resultado": time18
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 18,
                    })
                        .then(response => {
                            setPlacarSalvo18(response.data.resultado)
                            setMostrarPlacarSalvo18(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time18)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time18)
                });
        }
        if (time19 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 19,
                "resultado": time19
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 19,
                    })
                        .then(response => {
                            setPlacarSalvo19(response.data.resultado)
                            setMostrarPlacarSalvo19(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time19)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time19)
                });
        }
        if (time20 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 20,
                "resultado": time20
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 20,
                    })
                        .then(response => {
                            setPlacarSalvo20(response.data.resultado)
                            setMostrarPlacarSalvo20(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time20)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time20)
                });
        }
        if (time21 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 21,
                "resultado": time21
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 21,
                    })
                        .then(response => {
                            setPlacarSalvo21(response.data.resultado)
                            setMostrarPlacarSalvo21(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time21)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time21)
                });
        }
        if (time22 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 22,
                "resultado": time22
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 22,
                    })
                        .then(response => {
                            setPlacarSalvo22(response.data.resultado)
                            setMostrarPlacarSalvo22(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time22)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time22)
                });
        }
        if (time177 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 23,
                "resultado": time177
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 23,
                    })
                        .then(response => {
                            setPlacarSalvo23(response.data.resultado)
                            setMostrarPlacarSalvo23(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time177)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time177)
                });
        }
        if (time188 != '') {
            await apiC.post("torneio/salvarPlacar", {
                "id": 24,
                "resultado": time188
            })
                .then(response => {
                    apiC.post("torneio/buscarPlacar", {
                        "id": 24,
                    })
                        .then(response => {
                            setPlacarSalvo24(response.data.resultado)
                            setMostrarPlacarSalvo24(true)
                        })
                        .catch((error) => {
                            alert('erro ao trazer o placar ', time188)
                        });
                })
                .catch((error) => {
                    alert('erro ao salvar o placar ', time188)
                });
        }
        verificaPlacares()
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
                "pontos": 0,
                "saldo": 0
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
        <Button className="btn-filtro-arquivo" onClick={(e) => navigate('/home')}>
                        <div>Home</div>
                    </Button>
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
                        selectRow={selecaoLinhas}
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
            <Button className="deletar-jogadorr" onClick={(e) => handleDeletar()}>
                <div>Deletar todos os times das tabelas</div>
            </Button>
            {mostrarCampeao && 
            <div><h1 className="campeao"> O campeoao do torneio é o(a) {campeao} </h1></div>
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
                            value={mostrarPlacarSalvo1 ? placarSalvo1 : time1}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime2(e.target.value); setPlacar2(e.target.value) }}
                            value={mostrarPlacarSalvo2 ? placarSalvo2 : time2}
                        />
                        <label>{timesSorteadosArray2} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar1}
                        />
                    </div>
                    <div>
                        <label>{timesSorteadosArray3} </label>
                        <Form.Control
                            onChange={e => { setTime3(e.target.value); setPlacar3(e.target.value) }}
                            value={mostrarPlacarSalvo3 ? placarSalvo3 : time3}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime4(e.target.value); setPlacar4(e.target.value) }}
                            value={mostrarPlacarSalvo4 ? placarSalvo4 : time4}
                        />
                        <label>{timesSorteadosArray4} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar2}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada("1")}>
                        <div>Enviar Resultado</div> 
                    </Button>
                    <Button className="botao-deletar" onClick={(e) => deletarPlacarRodada(1,2,3,4)}>
                        <div>Deletar placares desta rodada</div> 
                    </Button>
                    <div>
                        <label>{timesSorteadosArray3} </label>
                        <Form.Control
                            onChange={e => { setTime22(e.target.value); setPlacar3(e.target.value) }}
                            value={mostrarPlacarSalvo22 ? placarSalvo22 : time22}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime5(e.target.value); setPlacar1(e.target.value) }}
                            value={mostrarPlacarSalvo5 ? placarSalvo5 : time5}
                        />
                        <label>{timesSorteadosArray1} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar3}
                        />
                    </div>
                    <div>
                        <label>{timesSorteadosArray2} </label>
                        <Form.Control
                            onChange={e => { setTime6(e.target.value); setPlacar2(e.target.value) }}
                            value={mostrarPlacarSalvo6 ? placarSalvo6 : time6}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime7(e.target.value); setPlacar4(e.target.value) }}
                            value={mostrarPlacarSalvo7 ? placarSalvo7 : time7}
                        />
                        <label>{timesSorteadosArray4} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar4}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada("2")}>
                        <div>Enviar Resultado</div>
                    </Button>
                    <Button className="botao-deletar" onClick={(e) => deletarPlacarRodada(22,5,6,7)}>
                        <div>Deletar placares desta rodada</div> 
                    </Button>
                    <div>
                        <label>{timesSorteadosArray4} </label>
                        <Form.Control
                            onChange={e => { setTime8(e.target.value); setPlacar4(e.target.value) }}
                            value={mostrarPlacarSalvo8 ? placarSalvo8 : time8}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime9(e.target.value); setPlacar1(e.target.value) }}
                            value={mostrarPlacarSalvo9 ? placarSalvo9 : time9}
                        />
                        <label>{timesSorteadosArray1} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar5}
                        />
                    </div>
                    <div>
                        <label>{timesSorteadosArray2} </label>
                        <Form.Control
                            onChange={e => { setTime10(e.target.value); setPlacar2(e.target.value) }}
                            value={mostrarPlacarSalvo10 ? placarSalvo10 : time10}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime11(e.target.value); setPlacar3(e.target.value) }}
                            value={mostrarPlacarSalvo11 ? placarSalvo11 : time11}
                        />
                        <label>{timesSorteadosArray3} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar6}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada("3")}>
                        <div>Enviar Resultado</div>
                    </Button>
                     <Button className="botao-deletar" onClick={(e) => deletarPlacarRodada(8,9,10,11)}>
                        <div>Deletar placares desta rodada</div> 
                    </Button>
                    <h1>Segundo turno</h1>
                    <div>
                        <label>{timesSorteadosArray1} </label>
                        <Form.Control
                            onChange={e => { setTime12(e.target.value); setPlacar1(e.target.value) }}
                            value={mostrarPlacarSalvo12 ? placarSalvo12 : time12}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime13(e.target.value); setPlacar4(e.target.value) }}
                            value={mostrarPlacarSalvo13 ? placarSalvo13 : time13}
                        />
                        <label>{timesSorteadosArray4} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar7}
                        />
                    </div>
                    <div>
                        <label>{timesSorteadosArray3} </label>
                        <Form.Control
                            onChange={e => { setTime14(e.target.value); setPlacar3(e.target.value) }}
                            value={mostrarPlacarSalvo14 ? placarSalvo14 : time14}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime15(e.target.value); setPlacar2(e.target.value) }}
                            value={mostrarPlacarSalvo15 ? placarSalvo15 : time15}
                        />
                        <label>{timesSorteadosArray2} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar8}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada("3")}>
                        <div>Enviar Resultado</div>
                    </Button>
                     <Button className="botao-deletar" onClick={(e) => deletarPlacarRodada(12,13,14,15)}>
                        <div>Deletar placares desta rodada</div> 
                    </Button>
                    <div>
                        <label>{timesSorteadosArray1} </label>
                        <Form.Control
                            onChange={e => { setTime16(e.target.value); setPlacar1(e.target.value) }}
                            value={mostrarPlacarSalvo16 ? placarSalvo16 : time16}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime177(e.target.value); setPlacar3(e.target.value) }}
                            value={mostrarPlacarSalvo23 ? placarSalvo23 : time177}
                        />
                        <label>{timesSorteadosArray3} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar9}
                        />
                    </div>
                    <div>
                        <label>{timesSorteadosArray4} </label>
                        <Form.Control
                            onChange={e => { setTime188(e.target.value); setPlacar4(e.target.value) }}
                            value={mostrarPlacarSalvo24 ? placarSalvo24 : time188}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime17(e.target.value); setPlacar2(e.target.value) }}
                            value={mostrarPlacarSalvo17 ? placarSalvo17 : time17}
                        />
                        <label>{timesSorteadosArray2} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar10}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => rodada("2")}>
                        <div>Enviar Resultado</div>
                    </Button>
                     <Button className="botao-deletar" onClick={(e) => deletarPlacarRodada(16,23,24,17)}>
                        <div>Deletar placares desta rodada</div> 
                    </Button>
                    <div>
                        <label>{timesSorteadosArray2} </label>
                        <Form.Control
                            onChange={e => { setTime18(e.target.value); setPlacar2(e.target.value) }}
                            value={mostrarPlacarSalvo18 ? placarSalvo18 : time18}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime19(e.target.value); setPlacar1(e.target.value) }}
                            value={mostrarPlacarSalvo19 ? placarSalvo19 : time19}
                        />
                        <label>{timesSorteadosArray1} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar11}
                        />
                    </div>
                    <div>
                        <label>{timesSorteadosArray4} </label>
                        <Form.Control
                            onChange={e => { setTime20(e.target.value); setPlacar4(e.target.value) }}
                            value={mostrarPlacarSalvo20 ? placarSalvo20 : time20}
                        />
                        <label>X</label>
                        <Form.Control
                            onChange={e => { setTime21(e.target.value); setPlacar3(e.target.value) }}
                            value={mostrarPlacarSalvo21 ? placarSalvo21 : time21}
                        />
                        <label>{timesSorteadosArray3} </label>
                        <label className="label-data">Data</label>
                        <Form.Control
                            className="label-data-label"
                            value={dataPlacar12}
                        />
                    </div>
                    <Button className="btn-filtro-arquivo" onClick={(e) => {rodada("1"); anunciarCampeao()}}>
                        <div>Enviar Resultado</div>
                    </Button>
                     <Button className="botao-deletar" onClick={(e) => deletarPlacarRodada(18,19,20,21)}>
                        <div>Deletar placares desta rodada</div> 
                    </Button>
                </div>

                <div className="espaco" ></div>
                <div className="campos-texto-login">

                </div>
            </>

        </>
    )
}