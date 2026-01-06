const ContainerProgresso = ({ tempoAtualFaixa, tempoTotalFaixa, referencia, avancarPara }) => {
  const formatarTempo = (segundos = 0) => {
    const tempo = new Date(null);
    tempo.setSeconds(segundos);
    return tempo.toISOString().slice(14, 19);
  };

  const progresso =
    tempoTotalFaixa > 0
      ? (tempoAtualFaixa * 100) / tempoTotalFaixa
      : 0;

  return (
    <section className="container-progresso" onClick={avancarPara}>
      <div className="progresso-total" ref={referencia} onClick={avancarPara}>
        <div
          className="progresso-atual"
          style={{ width: `${progresso}%` }}
        ></div>
        <div
          className="marcador-posicao"
          style={{ left: `${progresso}%` }}
        ></div>
      </div>

      <div className="metricas-tempo">
        <p>{formatarTempo(tempoAtualFaixa)}</p>
        <p>{formatarTempo(tempoTotalFaixa)}</p>
      </div>
    </section>
  );
};

export default ContainerProgresso;
