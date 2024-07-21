import './App.scss';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Profile  from "./layout/profile/Profile"
import RouterApp from './router/RouterApp';

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
              <RouterApp />
            </Grid>
          </Grid>
      </Container>
    </>
  )
}

export default App
