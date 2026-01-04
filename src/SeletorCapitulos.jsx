function SeletorCapitulos({ capituloAtual }) {
  return (
    <button className="seletor">
      <i className="bi bi-list-ul"></i>
      <p>{`Capítulo ${capituloAtual}`}</p>
    </button>
  );
}

export default SeletorCapitulos;
