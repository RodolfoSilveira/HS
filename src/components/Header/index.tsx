import React, {useState} from "react"
import * as S from "./styles"
import logo from "../../images/logo.png"
import Menu from "../Menu"

const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  function hendleMenu() {
    setShow(true)
    const menuSection = document.querySelector(".menu-section")
    const menuToggle = menuSection?.querySelector(".menu-toggle")

    menuToggle?.addEventListener("click", () => {
      document.body.style.overflow = show ? "hidden" : "initial"
      menuSection?.classList.toggle("on", show)
      setShow(!show)
    })
  }

  return (
    <S.Header>
      <div>
        <img src={logo} alt="logo" />
        <div className="menu-section" onClick={() => hendleMenu()}>
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <Menu />
        </div>
      </div>
    </S.Header>
  )
}

export default Header
