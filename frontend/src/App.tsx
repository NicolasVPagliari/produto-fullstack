import { Box } from "@mui/material"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRouter from "./routes"

function App() {
  return (
    <Box sx={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
      <Header title="Hub de Produtos"/>

      <Box component='main' sx={{flexGrow: 1, p: 2}}>
        <AppRouter></AppRouter>
      </Box>
      
      <Footer/>
    </Box>
  )
}

export default App
