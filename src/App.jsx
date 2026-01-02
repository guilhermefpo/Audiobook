import { useState, useRef, useEffect } from 'react';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import brasCubasImg from './assets/bras_cubas.jpeg';
import Capa  from './capa';
import SeletorCapitulos from './SeletorCapitulos';
import BotoesControle from './BotoesControle';
import livro from './assets/capitulos/livro';
import { use } from 'react';
import GerenciadorFaixa from './GerenciadorFaixa';


function App() {
  // O React ele reage a mudanças de variáveis de estado.
  // Hook == funcionalidades do React.js, definidas abaixo do App()
  const [taTocando, definirTaTocando] = useState(false)
  const [faixaAtual, definirFaixaAtual] = useState(0)
  const tagAudio = useRef(null)

  useEffect(() => {
    if (taTocando === true) {
      tocarFaixa()
    }
  }, [
    faixaAtual
  ])

 

  const informacoesLivro = {
    nome:'Memórias Postumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: 2,
    capa: brasCubasImg,
    capitulos: livro,
    textoAlternativo: 'Capa do livro Memórias Postumas de Brás Cubas.'
  }

  function tocarFaixa() {
    tagAudio.current.play();
    definirTaTocando(true);
  };

  const pausarFaixa = () => {
    tagAudio.current.pause();
    definirTaTocando(false);
  };

  const tocarOuPausarFaixa = () => {
    if(taTocando) {
      pausarFaixa()
    } else {
      tocarFaixa()
    }
  };

  const avancarFaixa = () => {
    if (informacoesLivro.totalCapitulos === faixaAtual + 1) {
      definirFaixaAtual(0)
    } else {
      definirFaixaAtual(faixaAtual + 1)
    } 
  }

  const retrocederFaixa = () => {
    if (faixaAtual === 0) {
       definirFaixaAtual(informacoesLivro.totalCapitulos - 1)
    } else {
      definirFaixaAtual(faixaAtual - 1)
    }
  } 

  const avancar15s = () => {
    tagAudio.current.currentTime += 15
  }
  
  const retroceder15s = () => {
    tagAudio.current.currentTime += 15
  }

  
  return ( <> 
      <Capa imagemCapa={informacoesLivro.capa} textoAlternativo={informacoesLivro.textoAlternativo}/>

      <SeletorCapitulos capituloAtual={faixaAtual + 1}  />
      <GerenciadorFaixa faixa={informacoesLivro.capitulos[faixaAtual]} referencia={tagAudio}/>

      <BotoesControle taTocando={taTocando} tocarOuPausarFaixa={tocarOuPausarFaixa}
      avancarFaixa={avancarFaixa} retrocederFaixa={retrocederFaixa} avancar15s={avancar15s} retroceder15s={retroceder15s}/>
    </>     
  )
}

export default App; 
