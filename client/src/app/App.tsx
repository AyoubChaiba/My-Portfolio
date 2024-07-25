import { useState, useEffect, Suspense, lazy } from 'react';
import './App.scss';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LoadingSpinner from './components/common/ContentLoader/LoadingSpinner';

const Profile = lazy(() => import('./layout/profile/Profile'));
const RouterApp = lazy(() => import('./router/RouterApp'));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner loading={loading} />
      ) : (
        <Suspense fallback={<LoadingSpinner loading={true} />}>
          <Container
            className='app'
            sx={{
              marginTop: 5,
              marginX: 'auto',
            }}
            maxWidth={'lg'}
          >
            <Grid container className='appGrid' columnSpacing={3} rowSpacing={3}>
              <Grid item xs={12} sm={12} md={4} lg={3} className='widgets-profile'>
                <Profile />
              </Grid>
              <Grid item xs className='widgets-main'>
                <RouterApp />
              </Grid>
            </Grid>
          </Container>
        </Suspense>
      )}
    </>
  );
};

export default App;
