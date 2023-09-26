import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './questionario.css'
import dog1 from "../../images/form/dog1.png";
import dog2 from "../../images/form/dog2.png";
import dog3 from "../../images/form/dog3.png";
import cat1 from "../../images/form/cat1.png";
import cat2 from "../../images/form/cat2.png";
import cat3 from "../../images/form/cat3.png";

const opcoes = [
  { value: 0, label: "0 - Nunca Acontece" },
  { value: 1, label: "1 - Acontece uma vez no mês" },
  { value: 2, label: "2 - Acontece a cada 15 dias" },
  { value: 3, label: "3 - Acontece uma vez na semana" },
  { value: 4, label: "4 - Acontece mais de duas vezes na mesma semana" },
  { value: 5, label: "5 - Acontece o tempo todo" },
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

  var respostas = [];
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const apelido = searchParams.get('apelido');
  let avatar = searchParams.get('avatar');
  let avatarQuestionario

  if (avatar === "dog1"){
    avatarQuestionario = dog1;
  } else if (avatar === "dog2"){
    avatarQuestionario = dog2;
  } else if (avatar === "dog3"){
    avatarQuestionario = dog3;
  } else if (avatar === "cat1"){
    avatarQuestionario = cat1;
  } else if (avatar === "cat2"){
    avatarQuestionario = cat2;
  } else if (avatar === "cat3"){
    avatarQuestionario = cat3;
  }

  const pegarRespostas = () => {
    const selectElements = document.querySelectorAll('select');

    const respostasSelecionadas = [];
    respostas[0] = [];

    selectElements.forEach((select) =>
    {
      const selectOption = select.value;
      respostasSelecionadas.push(selectOption);
    });

    for(var i = 0; i < respostasSelecionadas.length; i++)
    {
      respostas[0].push(respostasSelecionadas[i]);
    }
  };

  const enviarRespostas = () => {
    pegarRespostas();

    var jsonData = { "respostas": respostas }; 
    
    const requestOptions = {
      method: 'POST', 
      mode: 'cors',
      headers: { 
        'Content-Type': 'application/json'},
      body: JSON.stringify(jsonData)
    };

    fetch('http://127.0.0.1:5000/api/data', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
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
        <h1 className="apelido">{apelido}</h1>
        <div className="img_usuario"><img src={avatarQuestionario} className="avatar-image" /></div>
        <Link to="/form" className="back_button"></Link>
      </div>
      <div className='form_quest-container'> 
        <div className='lookup'>
          <div className='numero'>1</div>
          <ComboBox />
          <div className='questionary-text'>Não me sinto acolhido e pertencente nos grupos sociais em que participo</div>
        </div>
        <div className='lookup'>
        <div className='numero'>2</div>
          <ComboBox />
          <div className='questionary-text'>Quase todos os dias demoro a pegar no sono, não consigo me desligar</div>
        </div>
        <div className='lookup'>
        <div className='numero'>3</div>
          <ComboBox />
          <div className='questionary-text'>Ao despertar, acordo cansado</div>
        </div>
        <div className='lookup'>
        <div className='numero'>4</div>
          <ComboBox />
          <div className='questionary-text'>Sinto-me cansado durante o dia, mesmo sem fazer esforço físico</div>
        </div>
        <div className='lookup'>
        <div className='numero'>5</div>
          <ComboBox />
          <div className='questionary-text'>Tenho vontade de ficar sozinho em um canto</div>
        </div>
        <div className='lookup'>
        <div className='numero'>6</div>
          <ComboBox />
          <div className='questionary-text'>Sinto-me irritado comigo mesmo e com os outros</div>
        </div>
        <div className='lookup'>
        <div className='numero'>7</div>
          <ComboBox />
          <div className='questionary-text'>Não sinto vontade de acordar pela manhã</div>
        </div>
        <div className='lookup'>
        <div className='numero'>8</div>
          <ComboBox />
          <div className='questionary-text'>Penso que as pessoas estariam melhores sem mim</div>
        </div>
        <div className='lookup'>
        <div className='numero'>9</div>
          <ComboBox />
          <div className='questionary-text'>Sinto vontade de me machucar quando acontece algo ruim</div>
        </div>
        <div className='lookup'>
        <div className='numero'>10</div>
          <ComboBox />
          <div className='questionary-text'>Não costumo fazer minha higiene pessoal diariamente</div>
        </div>
        <div className='lookup'>
        <div className='numero'>11</div>
          <ComboBox />
          <div className='questionary-text'>Tenho notado que não consigo focar muito bem nas coisas que tenho que fazer diariamente</div>
        </div>
        <div className='lookup'>
        <div className='numero'>12</div>
          <ComboBox />
          <div className='questionary-text'>Me olho no espelho e não me agrado com o que vejo</div>
        </div>
        <div className='lookup'>
        <div className='numero'>13</div>
          <ComboBox />
          <div className='questionary-text'>Não sinto vontade de comer, ou como excessivamente</div>
        </div>
        <div className='lookup'>
        <div className='numero'>14</div>
          <ComboBox />
          <div className='questionary-text'>Sinto que venho me esquecendo das coisas com mais facilidade</div>
        </div>
        <div className='lookup'>
        <div className='numero'>15</div>
          <ComboBox />
          <div className='questionary-text'>Me sinto ansioso a maior parte do tempo</div>
        </div>
        <div className='lookup'>
        <div className='numero'>16</div>
          <ComboBox />
          <div className='questionary-text'>Tive planos de tirar a minha própria vida</div>
        </div>
        <Link to={{
                  pathname: "/chat",
                  search: `?apelido=${apelido}&avatar=${avatar}`, 
              }} className="button_quest" onClick={enviarRespostas}>Continuar</Link>
      </div>
    </div>                      
  )
}

export default Questionario;
