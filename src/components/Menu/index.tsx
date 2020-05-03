import React from "react"
import { Link } from "gatsby"
import * as S from "./styles"

const Menu: React.FC = () => {
  return (
    <S.Nav>
      <ul>
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#modality">Modalidades</Link>
        </li>
        <li>
          <Link to="#plans">Planos</Link>
        </li>
        <li>
          <Link to="#contato">Contato</Link>
        </li>
      </ul>
    </S.Nav>
  )
}

export default Menu
