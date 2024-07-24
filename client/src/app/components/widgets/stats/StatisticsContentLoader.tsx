import { Grid, Skeleton } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const StatisticsContentLoader = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    const isTablet = useMediaQuery(theme.breakpoints.up('sm')) && !isDesktop;

    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }} className="statistics-items">
            {[...Array(6)].map((_, index) => (
                <Grid item xs={12} sm={isTablet ? 6 : 12} md={6} lg={isDesktop ? 3 : 6} key={index}>
                    <div className="stats-card">
                        <Skeleton variant="text" width={100} height={40} />
                        <Skeleton variant="text" width={80} />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default StatisticsContentLoader;
