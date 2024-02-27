import React, { useEffect, useState, useRef } from 'react';/*eslint-disable*/
import '../../css/torneio/torneio.css';
import { Button, Image, Form, InputGroup, FormControl, Col, Carousel, Alert } from 'react-bootstrap';
import { apiC } from "../../conexoes/api";
import BootstrapTable from 'react-bootstrap-table-next';
import {setaDropdown } from '../../utils/alternanciaIcones';
import SelectStatusContrato from '../login/selectStatusContrato'
import '../../assets/css/carrossel.css';
import '../../assets/css/conteudo.css';
import '../../assets/css/style.css';
import icone1 from '../../icones/icone-seta-dropdown.svg';
import icone2 from '../../icones/logo192.png';
import icone3 from '../../icones/Captura-de-tela-2023-11-24 193610.png';
// import Navbar from "../../NavBar/NavBar";
export default function Healf() {


    const [nomeTime, setNomeTime] = useState('');
    const [novoJogador, setNovoJogador] = useState('');
    const [jogadoSaindo, setJogadoSaindo] = useState('');
    const [revelarSelectContrato, setRevelarSelectContrato] = useState(false);
    const [nomeContrato, setNomeContrato] = useState('');
    const [resetContrato, setResetContrato] = useState(false);
    const [cdContrato, setCdContrato] = useState();
    const [filtroSituacaoContrato, setFiltroSituacaoContrato] = useState('')
    const [data, setData] = useState([]);
    const carousel = useRef(null);
    const carousel2 = useRef(null);
    const carousel3 = useRef(null);


    useEffect(() => {
        fetch('http://localhost:8081/static/shoes.json')
          .then((response) => response.json())
          .then(setData);
      }, []);

     const setaDropdown = () => {  
            return icone1
    }

    const setaDropdown2 = () => {  
        return icone2
}

const setaDropdown3 = () => {  
    return icone3
}

    const handleLeftClick = (e) => {
        console.log("jksdsndkjnd", e)
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
      };
    
      const handleRightClick = (e) => {
        e.preventDefault();
    
        carousel.current.scrollLeft += carousel.current.offsetWidth;
      };

      const handleLeftClick2 = (e) => {
        console.log("jksdsndkjnd", e)
        e.preventDefault();
        carousel2.current.scrollLeft -= carousel2.current.offsetWidth;
      };
    
      const handleRightClick2 = (e) => {
        e.preventDefault();
    
        carousel2.current.scrollLeft += carousel2.current.offsetWidth;
      };
    
      const handleLeftClick3 = (e) => {
        console.log("jksdsndkjnd", e)
        e.preventDefault();
        carousel3.current.scrollLeft -= carousel3.current.offsetWidth;
      };
    
      const handleRightClick3 = (e) => {
        e.preventDefault();
    
        carousel3.current.scrollLeft += carousel3.current.offsetWidth;
      };

      if (!data || !data.length) return null;

      const nav = document.getElementById("nav");
    window.addEventListener('scroll', () => {
            if(window.scrollY >= 100){
                nav.classList.add('nav__black');
            } else {
                nav.classList.remove('nav__black');
            }
        })


        var scrollPerClick;
var imagePadding = 20;

showMovieData("#nutricao");
showMovieData("#movimento");
showMovieData("#sono");
showMovieData("#mental");
showMovieData("#longevidade");

var scrollAmount = 0;

function sliderScrollLeft(id__carrossel) {
    

    const sliders = document.querySelector(id__carrossel);

    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth"
    });

    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
}

function sliderScrollRight(id__carrossel) {

    

    const sliders = document.querySelector(id__carrossel);

    if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth"
        });
    }
}


async function showMovieData(id__carrossel) {

    /*
    const s = document.querySelector(id__carrossel);

    const api_key = "1268590fd0b518ebdddbeb4a3e70199c";
    /

    var result = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key + "&sort_by=popularity.desc"
    );

    result = result.data.results;

    result.map(function (cur, index) {
        s.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" onclick="carregarPaginaEAlterarConteudo(${index})" />`
        );
    });
    */
    scrollPerClick = document.querySelector(".img-1").clientWidth + imagePadding;
}

function carregarPaginaEAlterarConteudo(fileURL) {
    /*window.location.href = "../my-test/conteudo.html?index=" + fileURL;*/
    window.location.href = "conteudo.html"
}



    return (

//         <div className="container">
//               <div className="App"> 
//               <Navbar>
// </Navbar>   
// </div>
//           <h1 className="tituloPrincipal">Health</h1>
//           <h1 className="titulo">Bem vindo!</h1>
//           <h1 className="subtitulo">Longevidade saudavel!</h1>
//           <h3 className="subtitulo2">Viver mais e melhor!</h3>
//           <h5 className="descricao">Escolha abaixo um tema do seu interesse!</h5>
//           <div className="carousel" ref={carousel}>
//             {data.map((item) => {
//               const { id, name, price, oldPrice, image, video } = item;
//               return (
//                 <div className="item zoom" key={id}>
//                     <a href={video}>
//                     <div className="image">
//                     <img src={image} alt={name} className="img-responsive"/>
//                   </div>
//                     </a>
//                   <div className="info">
//                     <span className="name">{name}</span>
//                     {/* <span className="oldPrice">U$ {oldPrice}</span>
//                     <span className="price">U$ {price}</span> */}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div>
//             <button className="botao" onClick={handleLeftClick}>
//             <img src={"/static/images/216151_left_chevron_icon.png"} alt="Scroll Left" />
//             </button>
//             <button className="botaoD" onClick={handleRightClick}>
//           <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
//         </button>
//           </div>
//           <div className="carousel" ref={carousel2}>
//             {data.map((item) => {
//               const { id, name, price, oldPrice, image } = item;
//               return (
//                 <div className="item" key={id}>
//                   <div className="image">
//                     <img src={image} alt={name} />
//                   </div>
//                   <div className="info">
//                     <span className="name">{name}</span>
//                     {/* <span className="oldPrice">U$ {oldPrice}</span>
//                     <span className="price">U$ {price}</span> */}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div>
//             <button className="botao" onClick={handleLeftClick2}>
//             <img src={"/static/images/216151_left_chevron_icon.png"} alt="Scroll Left" />
//             </button>
//             <button className="botaoD" onClick={handleRightClick2}>
//           <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
//         </button>
//           </div>
//           <div className="carousel" ref={carousel3}>
//             {data.map((item) => {
//               const { id, name, price, oldPrice, image } = item;
//               return (
//                 <div className="item" key={id}>
//                   <div className="image">
//                     <img src={image} alt={name} />
//                   </div>
//                   <div className="info">
//                     <span className="name">{name}</span>
//                     {/* <span className="oldPrice">U$ {oldPrice}</span>
//                     <span className="price">U$ {price}</span> */}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div>
//             <button className="botao" onClick={handleLeftClick3}>
//             <img src={"/static/images/216151_left_chevron_icon.png"} alt="Scroll Left" />
//             </button>
//             <button className="botaoD" onClick={handleRightClick3}>
//           <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
//         </button>
//           </div>
//         </div>
<>
 <header id="nav"> 

            <a href="#" id="logo"> <img class="nav__logo" src="assets/images/m-health_logo.png"></img></a> 
            
            <button id="openMenu">&#9776;</button>
            
            <nav id="menu"> 
                <button id="closeMenu">X</button>
                <a href="#">Início</a>
                <a href="#">Plano</a>
                <a href="#">Sobre</a>
                <a href="#"><img class="nav__avatar" src="assets/images/m-health_avatar.png"></img></a>
            </nav>
    </header>

    <main> 
        <div class="banner">
            <div class="banner__contents">
                <h1 class="banner__title">Longevidade</h1>
                <div class="banner__buttons">
                    <button class="banner__button">Assistir</button>
                    <button class="banner__button">Minha Lista</button>
                </div>
                
                <h1 class="banner__description">
                    A longevidade, fruto da complexa interação entre fatores genéticos e estilo de vida, continua a ser objeto de fascínio e pesquisa. 
                    Enquanto a genética estabelece um cenário inicial, a adoção de hábitos saudáveis, como uma dieta equilibrada e atividade física regular, 
                    emerge como determinante na busca por vidas mais longas e vibrantes. 
                </h1>
                
            </div>
            <div class="banner--fadeBottom"></div>
        </div>
    </main>

    <div class="container">
        <div class="carrossel">

            <div class="titulo">
                <h1>Nutrição</h1>
            </div>

            <div class="carrosselbox" id="nutricao">
                {/* <!--Random data will come here--> */}
                <a href="conteudo.html">
                    <img class="img-1  slider-img" src="assets/images/nutricao/nutricao-1.jpg"></img>
                    
                </a>
                <h4 class="posicaoH">Teste 1</h4>
                <img class="img-2  slider-img" src="assets/images/nutricao/nutricao-2.jpg" onclick=""></img>
                <img class="img-3  slider-img" src="assets/images/nutricao/nutricao-musculo-1.jpg" onclick=""></img>
                <img class="img-4  slider-img" src="assets/images/nutricao/nutricao-musculo-2.jpg" onclick=""></img>
                <img class="img-5  slider-img" src="assets/images/nutricao/nutricao-musculo-3.jpg" onclick=""></img>
                <img class="img-6  slider-img" src="assets/images/nutricao/nutricao-musculo-4.jpg" onclick=""></img>
                <img class="img-7  slider-img" src="assets/images/nutricao/nutricao-peso-1.jpg" onclick=""></img>
                <img class="img-8  slider-img" src="assets/images/nutricao/nutricao-peso-2.jpg" onclick=""></img>
                <img class="img-9  slider-img" src="assets/images/nutricao/nutricao-peso-3.jpg" onclick=""></img>
                <img class="img-10 slider-img" src="assets/images/nutricao/nutricao-restricao-1.jpg" onclick=""></img>
                <img class="img-11 slider-img" src="assets/images/nutricao/nutricao-restricao-2.jpg" onclick=""></img>
            </div>

            <a class="switchLeft sliderButton" onclick="sliderScrollLeft('#nutricao')">&#10094;</a>
            <a class="switchRight sliderButton" onclick="sliderScrollRight('#nutricao')">&#10095;</a>

        </div>
    </div>

    <div class="container">
        <div class="carrossel">

            <div class="titulo">
                <h1>Movimento</h1>
            </div>

            <div class="carrosselbox" id="movimento">
                {/* <!--Random data will come here-->

                <!--Random data will come here--> */}
                <img class="img-1  slider-img" src="assets/images/movimento/movimento-dor-1.jpeg" onclick=""></img>
                <img class="img-2  slider-img" src="assets/images/movimento/movimento-dor-2.jpeg" onclick=""></img>
                <img class="img-3  slider-img" src="assets/images/movimento/movimento-dor-3.jpeg" onclick=""></img>
                <img class="img-4  slider-img" src="assets/images/movimento/movimento-esporte-1.jpeg" onclick=""></img>
                <img class="img-5  slider-img" src="assets/images/movimento/movimento-esporte-2.jpeg" onclick=""></img>
                <img class="img-6  slider-img" src="assets/images/movimento/movimento-mobilidade-1.jpeg" onclick=""></img>
                <img class="img-7  slider-img" src="assets/images/movimento/movimento-mobilidade-2.jpeg" onclick=""></img>
                <img class="img-8  slider-img" src="assets/images/movimento/movimento-mobilidade-3.jpeg" onclick=""></img>
                <img class="img-9  slider-img" src="assets/images/movimento/movimento-performance-1.jpeg" onclick=""></img>
                <img class="img-10 slider-img" src="assets/images/movimento/movimento-performance-2.jpeg" onclick=""></img>
                <img class="img-11 slider-img" src="assets/images/movimento/movimento-performance-3.jpeg" onclick=""></img>

            </div>

            <a class="switchLeft sliderButton" onclick="sliderScrollLeft('#movimento')">&#10094;</a>
            <a class="switchRight sliderButton" onclick="sliderScrollRight('#movimento')">&#10095;</a>

        </div>
    </div>

    <div class="container">
        <div class="carrossel">

            <div class="titulo">
                <h1>Sono</h1>
            </div>

            <div class="carrosselbox" id="sono">
                {/* <!--Random data will come here--> */}
                <img class="img-1 slider-img" src="assets/images/sono/sono-1.jpg" onclick=""></img>
                <img class="img-2 slider-img" src="assets/images/sono/sono-2.jpg" onclick=""></img>
                <img class="img-3 slider-img" src="assets/images/sono/sono-3.jpg" onclick=""></img>
                <img class="img-4 slider-img" src="assets/images/sono/sono-4.jpg" onclick=""></img>
                <img class="img-5 slider-img" src="assets/images/sono/sono-5.jpg" onclick=""></img>
                <img class="img-6 slider-img" src="assets/images/sono/sono-6.jpg" onclick=""></img>
                <img class="img-7 slider-img" src="assets/images/sono/sono-7.jpg" onclick=""></img>
                <img class="img-8 slider-img" src="assets/images/sono/sono-8.jpg" onclick=""></img>
                <img class="img-9 slider-img" src="assets/images/sono/sono-9.jpg" onclick=""></img>
                
            </div>

            <a class="switchLeft sliderButton" onclick="sliderScrollLeft('#sono')">&#10094;</a>
            <a class="switchRight sliderButton" onclick="sliderScrollRight('#sono')">&#10095;</a>

        </div>
    </div>

    <div class="container">
        <div class="carrossel">

            <div class="titulo">
                <h1>Mental</h1>
            </div>

            <div class="carrosselbox" id="mental">
                {/* <!--Random data will come here--> */}
                <img class="img-1  slider-img" src="assets/images/mental/mental-1.jpg" onclick=""></img>
                <img class="img-3  slider-img" src="assets/images/mental/mental-3.jpg" onclick=""></img>
                <img class="img-4  slider-img" src="assets/images/mental/mental-4.jpg" onclick=""></img>
                <img class="img-5  slider-img" src="assets/images/mental/mental-5.jpg" onclick=""></img>
                <img class="img-6  slider-img" src="assets/images/mental/mental-6.jpg" onclick=""></img>
                <img class="img-7  slider-img" src="assets/images/mental/mental-7.jpg" onclick=""></img>
                <img class="img-8  slider-img" src="assets/images/mental/mental-8.jpg" onclick=""></img>
                <img class="img-9  slider-img" src="assets/images/mental/mental-9.jpg" onclick=""></img>
                <img class="img-10 slider-img" src="assets/images/mental/mental-10.jpg" onclick=""></img>
                <img class="img-11 slider-img" src="assets/images/mental/mental-11.jpg" onclick=""></img>
            </div>

            <a class="switchLeft sliderButton" onclick="sliderScrollLeft('#mental')">&#10094;</a>
            <a class="switchRight sliderButton" onclick="sliderScrollRight('#mental')">&#10095;</a>

        </div>
    </div>


    <div class="container">
        <div class="carrossel">

            <div class="titulo">
                <h1>Longevidade</h1>
            </div>

            <div class="carrosselbox" id="longevidade">
                {/* <!--Random data will come here--> */}
                <img class="img-1  slider-img" src="assets/images/longevidade/longevidade-1.jpg" onclick=""></img>
                <img class="img-2  slider-img" src="assets/images/longevidade/longevidade-2.jpg" onclick=""></img>
                <img class="img-3  slider-img" src="assets/images/longevidade/longevidade-3.jpg" onclick=""></img>
                <img class="img-4  slider-img" src="assets/images/longevidade/longevidade-4.jpg" onclick=""></img>
                <img class="img-5  slider-img" src="assets/images/longevidade/longevidade-5.jpg" onclick=""></img>
                <img class="img-6  slider-img" src="assets/images/longevidade/longevidade-6.jpg" onclick=""></img>
                <img class="img-7  slider-img" src="assets/images/longevidade/longevidade-7.jpg" onclick=""></img>
                <img class="img-8  slider-img" src="assets/images/longevidade/longevidade-8.jpg" onclick=""></img>
                <img class="img-9  slider-img" src="assets/images/longevidade/longevidade-9.jpg" onclick=""></img>
                <img class="img-10 slider-img" src="assets/images/longevidade/longevidade-10.jpg" onclick=""></img>
                <img class="img-11 slider-img" src="assets/images/longevidade/longevidade-11.jpg" onclick=""></img>
            </div>

            <a class="switchLeft sliderButton" onclick="sliderScrollLeft('#longevidade')">&#10094;</a>
            <a class="switchRight sliderButton" onclick="sliderScrollRight('#longevidade')">&#10095;</a>

        </div>
    </div>

    {/* <!--<aside> Relacionado </aside>--> */}
    <footer> 
    

              
    </footer>

<script type="text/javascript" src="../assets/js/menu.js"></script>

    
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.js"></script>
{/* <!--<script src="../../assets/js/axios.js"></script>--> */}
<script src="../../assets/js/carrossel.js"></script>
<script src="../../assets/js/menu.js"></script>
</>
      );
}