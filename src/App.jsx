import { useState, useRef } from 'react';
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

  const [taTocando, definirTaTocando] = useState(false)
  const [faixaAtual, definirFaixaAtual] = useState(0)
  const tagAudio = useRef(null)

 

  const informacoesLivro = {
    nome:'Memórias Postumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: 2,
    capa: brasCubasImg,
    capitulos: livro,
    textoAlternativo: 'Capa do livro Memórias Postumas de Brás Cubas.'
  }

  const tocarFaixa = () => {
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

  
  return ( <> 
      <Capa imagemCapa={informacoesLivro.capa} textoAlternativo={informacoesLivro.textoAlternativo}/>

      <SeletorCapitulos capituloAtual={faixaAtual + 1}  />
      <GerenciadorFaixa faixa={informacoesLivro.capitulos[faixaAtual]} referencia={tagAudio}/>
      <BotoesControle taTocando={taTocando} tocarOuPausarFaixa={tocarOuPausarFaixa}/>
    </>
      
  )
}

export default App
