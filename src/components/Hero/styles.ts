import styled from "styled-components"
import media from "styled-media-query";

export const Section = styled.section`
  height: 700px;
  width: 100%;
  display: flex;

  ${media.lessThan("medium")`
    height: auto;
  `}

  > div {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    > div {
      width: 50%;
      margin: 10px auto;
      ${media.lessThan("medium")`
        width: 100%;
        margin-bottom: 10px;
      `}
      p {
        letter-spacing: 3%;
        line-height: 25px;
        text-align: center;
        font-size: 1.2rem;
        ${media.lessThan("medium")`
          font-size: .9rem;
          text-align: left;
          margin-bottom: 20px;
        `}
      }
    }

    img {
      margin: 0 auto;
      ${media.lessThan("medium")`
        margin-bottom: 40px;
        margin-top: 20px;
      `}
    }
  }
`
