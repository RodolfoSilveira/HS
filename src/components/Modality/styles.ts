import styled from "styled-components"
import media from "styled-media-query";

export const Section = styled.section`
  background: #171111;
  padding-top: 50px;
  padding-bottom: 70px;

  > div {
    padding-top: 20px;

    h2 {
      color: #FFF;
      letter-spacing: 3%;
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 60px;
    }

    > div {
      width: 90%;
      margin: auto;

      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      grid-gap: 20px;

      ${media.lessThan("medium")`
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      `}

      > img {
        margin: 0 auto;
        ${media.lessThan("medium")`
          height: 300px;
          width: 300px;
        `}
      }
    }
  }
`
