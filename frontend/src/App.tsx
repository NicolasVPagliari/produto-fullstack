import { Box } from "@mui/material"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <Box sx={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
      <Header title="Hub de Produtos"/>
      <Footer/>
    </Box>
  )
}

export default App
