import styled from "styled-components"
import wallpaper from "../../images/wallpaper.png"
import media from "styled-media-query";

export const Section = styled.section`
  height: 90vh;
  background: url(${wallpaper}) center no-repeat fixed;
  background-size: cover;

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      letter-spacing: 3%;
      color: #fff;
      font-size: 2.6rem;
      font-weight: bold;
    }
  }
`
