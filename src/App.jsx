import { useState, useRef, useEffect } from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import brasCubasImg from './assets/bras_cubas.jpeg';
import Capa from './Capa';
import SeletorCapitulos from './SeletorCapitulos';
import BotoesControle from './BotoesControle';
import GerenciadorFaixa from './GerenciadorFaixa';
import ContainerProgresso from './ContainerProgresso';
import livro from './assets/capitulos/livro';

function App() {
  const [taTocando, definirTaTocando] = useState(false);
  const [faixaAtual, definirFaixaAtual] = useState(0);
  const [tempoTotalFaixa, definirTempoTotalFaixa] = useState(0);
  const [tempoAtualFaixa, definirTempoAtualFaixa] = useState(0);
  const tagAudio = useRef(null);
  const barraProgresso = useRef(null);


  useEffect(() => {
    if (taTocando) {
      tocarFaixa();
    }
  }, [faixaAtual, taTocando]);

  const informacoesLivro = {
    nome: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: livro.length,
    capa: brasCubasImg,
    capitulos: livro,
    textoAlternativo: 'Capa do livro Memórias Póstumas de Brás Cubas'
  };

  function tocarFaixa() {
    tagAudio.current.play();
    definirTaTocando(true);
  }

  function pausarFaixa() {
    tagAudio.current.pause();
    definirTaTocando(false);
  }

  function tocarOuPausarFaixa() {
    taTocando ? pausarFaixa() : tocarFaixa();
  }

  function avancarFaixa() {
    definirFaixaAtual(
      faixaAtual + 1 === informacoesLivro.totalCapitulos ? 0 : faixaAtual + 1
    );
  }

  function retrocederFaixa() {
    definirFaixaAtual(
      faixaAtual === 0
        ? informacoesLivro.totalCapitulos - 1
        : faixaAtual - 1
    );
  }

  function avancar15s() {
    tagAudio.current.currentTime += 15;
  }

  function retroceder15s() {
    tagAudio.current.currentTime -= 15;
  }

  const avancarPara = (evento) => {
    const largura = barraProgresso.current.clientWidth; // Largura em pixels.
    const novoTempo = (evento.nativeEvent.offsetX / largura) * tempoTotalFaixa;
    tagAudio.current.currentTime = novoTempo;
  }

  return (
    <>
      <Capa
        imagemCapa={informacoesLivro.capa}
        textoAlternativo={informacoesLivro.textoAlternativo}
      />

      <SeletorCapitulos capituloAtual={faixaAtual + 1} />

      <GerenciadorFaixa
        faixa={informacoesLivro.capitulos[faixaAtual]}
        referencia={tagAudio}
        definirTempoTotalFaixa={definirTempoTotalFaixa}
        definirTempoAtualFaixa={definirTempoAtualFaixa}
      />

      <ContainerProgresso
        tempoTotalFaixa={tempoTotalFaixa}
        tempoAtualFaixa={tempoAtualFaixa}
        referencia={barraProgresso}
        avancarPara={avancarPara}
      />

      <BotoesControle
        taTocando={taTocando}
        tocarOuPausarFaixa={tocarOuPausarFaixa}
        avancarFaixa={avancarFaixa}
        retrocederFaixa={retrocederFaixa}
        avancar15s={avancar15s}
        retroceder15s={retroceder15s}
      />
    </>
  );
}

export default App;

