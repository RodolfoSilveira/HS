import styled from "styled-components"
import media from "styled-media-query";

export const Card = styled.div`
  background-color: #fff;
  height: ${props => props.tam || 500}px;
  width: 390px;
  border-radius: 8px;
  box-shadow: 1px 12px 17px rgba(0, 0, 0, 0.3), 1px 12px 17px rgba(0, 0, 0, 0.4),
    1px 12px 17px rgba(0, 0, 0, 0.5);
  margin-top: ${props => props.position}px;

  ${media.lessThan("medium")`
    margin-top: 20px;
  `}

  > div.header {
    background-color: #171111;
    height: 34px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    > h3 {
      font-weight: bold;
      color: #fff;
    }
  }

  > div.body {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h3 {
      letter-spacing: 3%;
      font-size: 1.3rem;
      color: #4f4f4f;
    }

    svg {
      height: 120px;
      width: 120px;
      color: #4f4f4f;
    }

    p,
    span {
      letter-spacing: 3%;
      color: #4f4f4f;
    }

    p.price {
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    p {
      font-size: 0.9rem;
      ${media.lessThan("medium")`
        font-size: 0.8rem;
        font-size: center;
      `}
    }
  }

  div {
    display: flex;

    button {
      background-color: #eb5050;
      color: #fff;
      outline: 0;
      border: none;
      text-transform: uppercase;
      font-weight: bold;
      padding: 10px 60px;
      border-radius: 50px;
      margin: auto;

      &:hover {
        cursor: pointer;
      }
    }
  }
`
