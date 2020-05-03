import React from "react"
import * as S from "./styled"
import { RiSecurePaymentLine } from "react-icons/ri"

type Props = {
  tam: number;
  anual: boolean;
  plan: string;
  price: number;
  position: number;
}

const Cards: React.FC = ({ tam, anual, price, plan, position }: Props) => {
  return (
    <S.Card tam={tam} position={position}>
      {anual && (
        <div className="header">
          <h3>Opção mais vendida</h3>
        </div>
      )}
      <div className="body">
        <h3>Plano {plan}</h3>
        <RiSecurePaymentLine />
        <p className="price">
          <span>R$</span> {String(price).replace(".", ",")}
        </p>
        <p>Garanta por um preço especial de lançamento.</p>
      </div>
      <div>
        <button>Comprar</button>
      </div>
    </S.Card>
  )
}

export default Cards
