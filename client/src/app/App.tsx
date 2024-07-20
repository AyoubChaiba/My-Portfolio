import './App.scss';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import { Profile } from "./components/index.ts"
import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Portfolio, Resume, Home, Contact, Stats } from './pages/index.ts';
import Layout from './layout/index.tsx';

const App = () => {
  return (
    <>
      <Container
          className='app'
          sx={{
            marginTop: 8,
            marginX: "auto",
          }}
        >
          <Grid container className='appGrid' columnSpacing={3} rowSpacing={3} >
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
                  <Route path="contact" element={<Contact />} />
                  <Route path="stats" element={<Stats />} />
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
