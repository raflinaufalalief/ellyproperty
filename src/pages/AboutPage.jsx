import { useEffect } from "react"
import AboutHero from "../components/about/AboutHero"
const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <AboutHero />
    </>
  )
}
export default AboutPage
