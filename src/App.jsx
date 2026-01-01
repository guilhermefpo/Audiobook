
import './App.css'
import brasCubasImg from './assets/bras_cubas.jpeg';
import Capa  from './capa';

function App() {

  const informacoesLivro = {
    nome:'Memórias Postumas de Brás Cubas',
    autor: 'Machado de Assis',
    totalCapitulos: 2,
    capa: brasCubasImg,
    textoAlternativo: 'Capa do livro Memórias Postumas de Brás Cubas.'
  }
  
  return ( <> 
      <Capa imagemCapa={informacoesLivro.capa} textoAlternativo={informacoesLivro.textoAlternativo}/>
    </>
  )
}

export default App
