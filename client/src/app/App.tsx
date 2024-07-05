import './App.scss';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import { Profile, Footer, Header } from "./components"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Portfolio, Resume, Home } from './pages';


const App = () => {

  return (
    <>
      <Container className='main'>
          <Grid container className='mainGrid' >
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <Profile />
            </Grid>
            <Grid item xs >
              <BrowserRouter>
                <Header />
                  <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/resume" index element={<Resume />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Portfolio />} />
                  </Routes>
              <Footer />
              </BrowserRouter>
            </Grid>
          </Grid>
      </Container>
    </>
  )
}

export default App
