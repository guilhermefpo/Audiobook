const GerenciadorFaixa = ({ faixa, referencia }) => {
   return <audio src={faixa} ref={referencia}></audio>
}

export default GerenciadorFaixa;