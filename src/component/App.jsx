import GlobalStyle from "../style/GlobalStyle"
import Description from "./Description"
import styled from "styled-components"
import Information from "./Information"
import { page } from "../style/animation"
import { motion } from "framer-motion";

function App() {

  return (
    <>
     <GlobalStyle />
       <Portfolio variants={page} initial="hidden" whileInView="show">
          <Description isFixed={false}  />
          <Information />
       </Portfolio>
    </>
  )
}
const Portfolio = styled(motion.div)`
  min-height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 1035px) {
    display: flex;
    flex-direction: column;
  }
`

export default App
