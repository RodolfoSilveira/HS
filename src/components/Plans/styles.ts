import styled from "styled-components"
import plans from "../../images/plans.png"
import media from "styled-media-query";

export const Section = styled.section`
  background: url(${plans}) center no-repeat;

  ${media.lessThan("medium")`
    background-attachment: fixed;
    background-size: cover;
  `}

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
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 40px;
    }
  }
`
