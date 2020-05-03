import React, {useState, useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyle from "../styles/global"
import Banner from "../components/Banner"
import Hero from "../components/Hero"
import Modality from "../components/Modality"
import Plans from "../components/Plans"
import Footer from "../components/Footer"

const IndexPage: React.FC = () => {
  const [userHasScrolled, setUserHasScrolled] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      setUserHasScrolled(true)
      document.body.style.overflow = userHasScrolled ? "hidden" : "initial"
      const menuSection = document.querySelector(".menu-section")
      menuSection?.classList.toggle("on", userHasScrolled)
    }
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Banner />
      <Hero />
      <Modality />
      <Plans />
      <Footer />
      <GlobalStyle />
    </Layout>
  )
}

export default IndexPage
