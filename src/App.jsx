import { useState, useEffect } from 'react'
import { motivation, impression, expression, psychic, destiny, licoesCarmicas, culturedTrends, subconsciousResponse, degreeOfAscension, personalYear, personalMounth, personalDay, mission, ocultTalent } from './calculos';
import './app.css'
function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('')
  const [motivacao, setMotivacao] = useState('');
  const [impressao, setImpressao] = useState('');
  const [expressao, setExpressao] = useState('');
  const [psiquico, setPsiquico] = useState('');
  const [destino, setDestino] = useState('');
  const [licoesCarmics, setLicoesCarmics] = useState([]);
  const [tendenciasOcultas, setTendenciasOcultas] = useState('');
  const [respostaSubconciente, setRespostaSubconciente] = useState('');
  const [grauDeAscensao, setGrauDeAscensao] = useState('');
  const [anoPessoal, setAnoPessoal] = useState('');
  const [mesPessoal, setMesPessoal] = useState('');
  const [diaPessoal, setDiaPessoal] = useState('');
  const [missao, setMissao] = useState('');
  const [talentoOculto, setTalentoOculto] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log({name, date});
  }, [name, date])

  function HandleButton() {
    setMotivacao(motivation(name));
    setImpressao(impression(name));
    setExpressao(expression(name));
    setPsiquico(psychic(date));
    setDestino(destiny(date));
    setLicoesCarmics(licoesCarmicas(name));
    setTendenciasOcultas(culturedTrends(name));
    setRespostaSubconciente(subconsciousResponse(name));
    setGrauDeAscensao(degreeOfAscension(name));
    setAnoPessoal(personalYear(date));
    setMesPessoal(personalMounth(date));
    setDiaPessoal(personalDay(date));
    setMissao(mission(name, date));
    setTalentoOculto(ocultTalent(name));
    
    setIsOpen(true);
  }

  function handleClear() {
    setIsOpen(false);
    setName('');
    setDate('');
  }
  
  
  return (
    <div className="container">
       <div className='box-container'>
          <h1 className='title'>Numerologia</h1>
            <div className='input-container'>
              <label htmlFor="">insira seu nome:</label>
              <input
                type="text"
                className='text-input'
                placeholder='Seu nome aqui'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className='input-container'>
              <label htmlFor="">Insira sua data de nascimento:</label>
              <input
                type="date"
                name="date" id="1"
                className='date-input'
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </div>
            <div className='button-container'>
              <button
                onClick={handleClear}
              
              >
                Limpar
              </button>
              <button
                onClick={HandleButton}
              >
                salvar
              </button>
            </div>
       </div>
       <div className={isOpen ? 'open' : 'closed'}>
        <span className="item">Motivação: {motivacao[1]}</span>
        <span className="item">Impressão: {impressao[1]}</span>
        <span className="item">Expressão: {expressao[1]}</span>
        <span className="item">Psiquico: {psiquico}</span>
        <span className="item">Destino: {destino[1]}</span>
        <span className="item">Lições Cármicas: {licoesCarmics.map((item, index)=> {
          return (
            <span key={index}> {item} |</span>
          )
        })}</span>
        <span className="item">Tendencias Ocultas: {tendenciasOcultas.map((item, index)=> {
          return (
            <span key={index}> {item} |</span>
          )
        })}</span>
        <span className="item">Resposta Subconsciente: {respostaSubconciente}</span>
        <span className="item">Grau de ascensão: {grauDeAscensao}</span>
        <span className="item">Ano Pessoal: {anoPessoal[1]}</span>
        <span className="item">Mês pessoal: {mesPessoal}</span>
        <span className="item">Dia Pessoal: {diaPessoal}</span>
        <span className="item">Missão: {missao}</span>
        <span className="item">Talento oculto: {talentoOculto}</span>
       </div>
      
    </div>
  )
}

export default App
