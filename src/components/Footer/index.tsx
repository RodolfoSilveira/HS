import React from 'react'
import * as S from './styles'
import {FaInstagram, FaLinkedin, FaFacebookSquare} from 'react-icons/fa';

const Footer:React.FC = () => {
  return (
    <S.Footer id="contato">
      <div>
        <div className="location">
          <div>
            <h4>Endereço:</h4>
            <p>Rua fulano de tal n° 45,</p>
            <p>Bahia, Salvador, fulano</p>
          </div>
          <div className="contato">
            <div>
              <h4>Telefone:</h4>
              <p>(71) xxxxx-xxxx</p>
              <p>xxxxx-xxxxx</p>
            </div>
            <div>
              <h4>Rede Sociais:</h4>
              <FaInstagram />
              <FaLinkedin />
              <FaFacebookSquare />
            </div>
          </div>
          <div>
            <h4>Email:</h4>
            <p>fulanodetal@contato.com.br</p>
          </div>
        </div>
        <div className="form">
          <h3><span>Fale</span> conosco</h3>
          <div>
            <form>
              <div className="intro">
                <input className="name" type="text" name="name" placeholder="Nome"/>
                <input type="text" name="phone" placeholder="Telefone"/>
              </div>
              <div>
                <input type="email" name="email" placeholder="E-mail"/>
              </div>
              <div>
                <textarea name="description" placeholder="Mensagem">

                </textarea>
              </div>
              <button className="send">Enviar mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </S.Footer>
  )
}

export default Footer
