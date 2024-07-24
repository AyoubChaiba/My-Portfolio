
import { Grid, Skeleton } from '@mui/material';

const GitHubContributionContentLoader = () => {

    return (
        <Grid container rowSpacing={2} className="contribution-items">
            {[...Array(1)].map((_, index) => (
                <Grid item xs={12} key={index}>
                    <div className="contribution-card">
                        <Skeleton variant="rectangular" width="100%" height={120} />
                    </div>
                </Grid>
            ))}
        </Grid>
    );
};

export default GitHubContributionContentLoader;
