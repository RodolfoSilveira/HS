import styled from "styled-components"
import media from "styled-media-query"

export const Nav = styled.nav`
  ${media.lessThan("small")`
    display: none;
  `}

  > ul > li > a {
    color: #fff;
  }

  > ul {
    > li {
      display: inline-block;
      margin: 20px;

      &:hover::after {
        content: "";
        display: block;
        color: #fa6161;
        border: 1px solid #fa6161;
        width: auto;
      }
    }
  }
`
