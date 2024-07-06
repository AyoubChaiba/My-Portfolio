import './App.scss';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import { Profile } from "./components"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Portfolio, Resume, Home } from './pages';
import Layout from './layout';


const App = () => {

  return (
    <>
      <Container className='app'>
          <Grid container className='appGrid' >
            <Grid item xs={12} sm={12} md={4} lg={3} className='widgets-profile'>
              <Profile />
            </Grid>
            <Grid item xs className='widgets-main'>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="resume" element={<Resume />} />
                  <Route path="portfolio" element={<Portfolio />} />
                  <Route path="contact" element={<Portfolio />} />
                </Route>
              </Routes>
            </BrowserRouter>
            </Grid>
          </Grid>
      </Container>
    </>
  )
}

export default App
