import styled from 'styled-components';
import media from "styled-media-query";

export const Footer = styled.footer`
  background-color: #0D0909;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;

  ${media.lessThan("medium")`
    padding-bottom: 80px;
  `}

  > div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    ${media.between("medium", "large")`
      width: 50%;
    `}

    div.location {
      background-color: #211A1A;
      height: 377px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      ${media.lessThan("medium")`
        margin-bottom: 20px;
      `}

      > div {

        h4 {
          color: #B51212;
          font-size: 1.3rem;
          font-weight: bold;
        }

        p {
          color: #FFF;
          letter-spacing: 3%;
          font-size: 1.2rem;
          margin: 5px;
          ${media.lessThan("medium")`
            font-size: .8rem;
            width: 150px;
          `}
        }

        svg {
          color: #FFF;
          height: 30px;
          width: 30px;
          margin: 10px;

          &:hover {
            cursor: pointer;
          }

          ${media.lessThan("medium")`
            height: 20px;
            width: 20px;
            margin: 5px;
          `}
        }
      }

      > div.contato {
        display: flex;

        > div {
          margin: 10px;
        }
      }
    }

    div.form {
      height: 377px;

      h3 {
        color: #FFF;
        letter-spacing: 3%;
        font-size: 1.3rem;
        margin-bottom: 10px;
        span {
          color: #B51212;
          letter-spacing: 3%;
          font-weight: bold;
        }
      }

      > div {
        form {
          input {
            border-radius: 12px;
            border: none;
            padding: 0px 15px;
            height: 40px;
            margin: 10px 0px 10px 0;
            width: 100%;
          }

          input.name {
            margin-right: 10px;
            ${media.lessThan("medium")`
              margin-right: 0px;
            `}
          }

          > div.intro {
            display: flex;
            ${media.lessThan("medium")`
              flex-wrap: wrap;
            `}
            width: 100%;
          }

          textarea {
            width: 100%;
            height: 150px;
            border-radius: 12px;
            border: none;
            padding: 15px;
            margin-top: 10px;
            margin-bottom: 10px;
          }

          button.send {
            border-radius: 12px;
            border: none;
            outline: 0;
            margin-top: 10px;
            width: 60%;
            background-color: #EB5050;
            height: 50px;
            color: #FFF;
            font-weight: bold;
            font-size: 1rem;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`
