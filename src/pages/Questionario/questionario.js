import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './questionario.css'
import Descricao from "../../images/descricao.png"

const opcoes = [
  { value: "opcao1", label: "0 - Nunca Acontece" },
  { value: "opcao2", label: "1 - Acontece uma vez no mês" },
  { value: "opcao3", label: "2 - Acontece a cada 15 dias" },
  { value: "opcao4", label: "3 - Acontece uma vez na semana" },
  { value: "opcao5", label: "4 - Acontece mais de duas vezes na mesma semana" },
  { value: "opcao6", label: "5 - Acontece o tempo todo" },
]

function ComboBox() {
  return (
    <select>
      {opcoes.map((opcao) => (
        <option key={opcao.value} value={opcao.value}>
          {opcao.label}
        </option>
      ))}
    </select>
  )
}

function Questionario() {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const apelido = searchParams.get('apelido');
  const avatar = searchParams.get('avatar');

  const enviarRespostas = () => {
    // Configuração da requisição
    const requestOptions = {
      method: 'GET', // Você pode ajustar o método HTTP conforme necessário
      mode: 'cors',
      headers: { 
        'Content-Type': 'application/json'},
      //body: JSON.stringify({ /* Coloque aqui os dados que deseja enviar para a API */ })
    };

    // Faz a chamada da API
    fetch('http://127.0.0.1:5000/api/data', requestOptions)
      .then(response => {
        if (response.ok) {
          // A resposta da API foi bem-sucedida
          // Você pode fazer alguma ação aqui, como redirecionar o usuário para a próxima página
          console.log('Dados enviados com sucesso');
        } else {
          // A resposta da API não foi bem-sucedida
          console.error('Erro ao enviar os dados para a API');
        }
      })
      .catch(error => {
        console.error('Erro ao fazer a chamada da API', error);
      });
  }

  return (
    <div className='container_questionario'>
      <div className='header_quest'> 
        <h2 className='title_quest'>QUESTIONÁRIO</h2>
        <div className="img_logo"></div>
        <div className="img_usuario"></div>
        <Link to="/form" className="back_button"></Link>
      </div>
      <div className='form_quest-container'> 
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Não me sinto acolhido e pertencente nos grupos sociais em que participo</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Quase todos os dias demoro a pegar no sono, não consigo me desligar</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Ao despertar, acordo cansado</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Sinto-me cansado durante o dia, mesmo sem fazer esforço físico</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Tenho vontade de ficar sozinho em um canto</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Sinto-me irritado comigo mesmo e com os outros</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Não sinto vontade de acordar pela manhã</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Penso que as pessoas estariam melhores sem mim</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Sinto vontade de me machucar quando acontece algo ruim</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Não costumo fazer minha higiene pessoal diariamente</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Tenho notado que não consigo focar muito bem nas coisas que tenho que fazer diariamente</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Me olho no espelho e não me agrado com o que vejo</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Não sinto vontade de comer, ou como excessivamente</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Sinto que venho me esquecendo das coisas com mais facilidade</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Tive planos de tirar a minha própria vida</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Me sinto ansioso a maior parte do tempo</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Perdi o interesse em atividades que sempre gostei de realizar</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Sinto que a maior parte das coisas que acontecem na minha vida, é minha culpa</div>
        </div>
        <div className='lookup'>
          <ComboBox />
          <div className='questionary-text'>Sinto que tudo sempre da errado, e não vejo perspectiva de mudança.</div>
        </div>
        <Link to={{
                            pathname: "/chat",
                            search: `?apelido=${apelido}`, 
                        }} className="button_quest" onClick={enviarRespostas}>Continuar</Link>
      </div>
    </div>                      
  )
}

export default Questionario;
