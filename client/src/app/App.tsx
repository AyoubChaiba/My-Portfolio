import './App.scss';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import { Profile, Footer, Header } from "./components"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Portfolio, Resume, Home } from './pages';


const App = () => {

  return (
    <>
      <Container>
          <Grid container >
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <Profile />
            </Grid>
            <Grid item xs >
              <Header />
              <BrowserRouter>
                <Routes>
                  <Route path="/" index element={<Home />} />
                  <Route path="/resume" index element={<Resume />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
              </BrowserRouter>
              <Footer />
            </Grid>
          </Grid>
      </Container>
    </>
  )
}

export default App
