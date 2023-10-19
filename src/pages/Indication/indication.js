import React, { useState } from 'react';
import './indication.css';
import p1 from '../../images/p1.jpg';
import p3 from '../../images/p3.jpg';
import p2 from '../../images/whatsapp.png';

function Indication() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  // Substitua "NUMERO_DE_TELEFONE" pelo número de telefone real, incluindo o código de área e código do país, sem espaços ou caracteres especiais.
  const whatsappLink = 'https://api.whatsapp.com/send?phone=NUMERO_DE_TELEFONE';

  return (
    <div className='container'>
      <div
        className={`card top ${isHovered1 ? 'hovered' : ''}`}
        style={{ backgroundColor: '#5bc0be' }}
        onMouseOver={() => setIsHovered1(true)}
        onMouseOut={() => setIsHovered1(false)}
      >
        <div className='card-content'>
          <div className="image-container">
            <div className={`image-flip ${isHovered1 ? 'hovered' : ''}`}>
              <div className='image-front'>
                <a href={whatsappLink}>
                  <img
                    className='profile-image'
                    src={p3}
                    alt='Nome do Usuário'
                  />
                </a>
              </div>
              <div className='image-back'>
                <img
                  className='profile-image'
                  src={p2}
                  alt='Nome do Usuário'
                />
              </div>
            </div>
          </div>
          <h2 className='name primeira'>Fabiane Garbato</h2>
          <p className='description description1'>Sou a Dra. PsicóGPT, psicóloga comportamental apaixonada por entender como o ambiente molda nossos comportamentos. Ajudo a promover mudanças positivas e bem-estar.</p>
        </div>
      </div>
      <div
        className={`card bottom ${isHovered2 ? 'hovered' : ''}`}
        style={{ backgroundColor: '#fff' }}
        onMouseOver={() => setIsHovered2(true)}
        onMouseOut={() => setIsHovered2(false)}
      >
        <div className='card-content'>
          <div className="image-container">
            <div className={`image-flip ${isHovered2 ? 'hovered' : ''}`}>
              <div className='image-front'>
                <a href={whatsappLink}>
                  <img
                    className='profile-image image-center'
                    src={p1}
                    alt='Nome do Usuário'
                  />
                </a>
              </div>
              <div className='image-back'>
                <img
                  className='profile-image image-center'
                  src={p2}
                  alt='Nome do Usuário'
                />
              </div>
            </div>
          </div>
          <h2 className='name segunda'>Laiza Stefankowski</h2>
          <p className='description description2'>Sou a Dra. PsicóGPT, psicóloga comportamental apaixonada por entender como o ambiente molda nossos comportamentos. Ajudo a promover mudanças positivas e bem-estar.</p>
        </div>
      </div>
    </div>
  );
}

export default Indication;