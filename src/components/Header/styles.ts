import styled from "styled-components"
import media from "styled-media-query"

export const Header = styled.header`
  background-color: #0d0909;
  height: 135px;
  width: 100%;

  > div {
    height: 100%;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > div {
      &:hover {
        cursor: pointer;
      }
      > div.menu-toggle {
        display: none;
        width: 40px;
        height: 30px;
        /* margin-right: 55px; */
        ${media.lessThan("small")`
          display: block;
        `}

        div.one,
        div.two,
        div.three {
          background-color: #fff;
          height: 5px;
          width: 100%;
          margin: 6px auto;
          transition-duration: 0.3s;
        }
      }
    }

    > div.on {
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > div.on nav {
      display: block;
    }

    > div.on .menu-toggle {
      position: absolute;
      right: 20px;
      top: 45px;
    }

    > div.on .menu-toggle .one {
      transform: rotate(45deg) translate(7px, 7px);
    }

    > div.on .menu-toggle .two {
      opacity: 0;
    }

    > div.on .menu-toggle .three {
      transform: rotate(-45deg) translate(8px, -9px);
    }

    > div.on nav ul li {
      text-align: center;
      display: block;
    }

    > div.on nav ul li a {
      transition-duration: 0.5s;
      font-size: 1.8rem;
      line-height: 3rem;
      display: block;
    }
  }
`
