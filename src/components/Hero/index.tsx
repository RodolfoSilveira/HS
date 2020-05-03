import React from "react"
import * as S from "./styles"
import hero from "../../images/hero.png"

const Hero: React.FC = () => {
  return (
    <S.Section>
      <div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            vestibulum tincidunt at ullamcorper nullam. Sapien orci vel, lectus
            orci, mattis nunc urna, diam. Et, ac arcu, aliquam ut ut consequat
            senectus. Nunc, mi sagittis nam urna. Hendrerit quis eget quis
            cursus et. Facilisi vitae massa, tellus nec placerat eu. Eget nibh
            cras odio eu eget est vestibulum. Vehicula ut elementum dictum et
            semper sit congue orci. Arcu neque facilisis ut vivamus nisi,
            sollicitudin dolor. Eget nisl aliquam habitasse mauris, at eget
            tincidunt quisque tincidunt. Habitasse pulvinar volutpat, senectus
            mi neque id pulvinar facilisi sit. Pharetra, in nisi ac in nulla
            sollicitudin condimentum mollis nunc. Est orci etiam gravida ut.
            Pellentesque viverra tristique orci integer quis quisque tristique
            ante proin.
          </p>
        </div>
        <img src={hero} alt="hero" />
      </div>
    </S.Section>
  )
}

export default Hero
