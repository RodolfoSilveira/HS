import React from "react"
import * as S from "./styles"
import Cards from "../Cards"

const Plans: React.FC = () => {
  return (
    <S.Section id="plans">
      <div>
        <h2>Valores</h2>
        <div>
          <Cards
            tam={419}
            anual={false}
            plan="Mensal"
            price={170.99}
            position={40}
          />
          <Cards
            tam={500}
            anual={true}
            plan="Anual"
            price={999.99}
            position={0}
          />
          <Cards
            tam={419}
            anual={false}
            plan="Trimestral"
            price={400.99}
            position={40}
          />
        </div>
      </div>
    </S.Section>
  )
}

export default Plans
