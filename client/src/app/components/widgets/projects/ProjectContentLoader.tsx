import { Grid, Skeleton } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const ProjectContentLoader = () => {
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

    const skeletons = Array.from({ length: 6 }, (_, index) => (
        <Grid item xs={12} sm={6} md={12} lg={6} key={index} display="flex">
            <Skeleton
                variant="rectangular"
                width="100%"
                height={isSmUp ? 250 : 140}
                animation="wave"
            />
        </Grid>
    ));

    return (
        <Grid container columnSpacing={2} rowSpacing={4}>
            {skeletons}
        </Grid>
    );
};

export default ProjectContentLoader;
