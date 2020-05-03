import React from "react"
import image from "../images/404.gif"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as S from "./styles"

const NotFoundPage = () => (
  <S.Gif>
    <SEO title="404: Not found" />
    <img src={image} alt="gif"/>
  </S.Gif>
)

export default NotFoundPage
