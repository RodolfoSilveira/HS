import React from 'react'
import * as S from './styles'
import boxe from '../../images/boxe.png'
import youga from '../../images/youga.png'
import calistenia from '../../images/calistenia.png'
import musculacao from '../../images/musculacao.png'

const Modality: React.FC = () => {
  return (
    <S.Section id="modality">
      <div>
        <h2>Modalidades</h2>
        <div>
          <img src={boxe} alt="boxe" />
          <img src={youga} alt="youga" />
          <img src={calistenia} alt="calistenia" />
          <img src={musculacao} alt="musculacao" />
        </div>
      </div>
    </S.Section>
  )
}

export default Modality
