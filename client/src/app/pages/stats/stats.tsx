import ContentGrid from "../../components/widgets/GridContent/ContentGrid";
import CalendarWrapper from "../../components/widgets/GitHubCalendar/calendarWrapper";
import { Grid, Typography } from '@mui/material';
import useGithubStats from "react-github-user-stats";
import useGitHubContributions from '../../hooks/useGitHubContributions';
import "./stats.scss";
import StatisticsContentLoader from "../../components/widgets/stats/StatisticsContentLoader";
import GitHubContributionContentLoader from "../../components/widgets/stats/GitHubContributionContentLoader";

const Stats = () => {
    const username = 'AyoubChaiba';
    const { userData, loading: userDataLoading } = useGithubStats(username);
    const { values, totalContributions, loading: contributionsLoading } = useGitHubContributions(username);

    const statistics = [
        { title: 'Total Contributions', value: totalContributions },
        { title: 'Followers', value: userData?.followers },
        { title: 'Stars', value: userData?.total_stars },
        { title: 'Public Repositories', value: userData?.public_repos },
        { title: 'Public Gists', value: userData?.public_gists },
        { title: 'Total Forks', value: userData?.total_forks },
    ];

    return (
        <main>
            <ContentGrid title={'Statistics'} classContent={'github-statistics'} updateNull={true}>
                {userDataLoading ? (
                    <StatisticsContentLoader />
                ) : (
                    <div>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }} className="statistics-items">
                            {statistics.map(stat => (
                                <Grid item xs={12} sm={6} md={6} lg={4} key={stat.title}>
                                    <div className="stats-card">
                                        <Typography variant="h5" fontWeight={600}>{stat.value ?? 'N/A'}</Typography>
                                        <Typography variant="body1">{stat.title}</Typography>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                )}
            </ContentGrid>
            <ContentGrid title={'GitHub Contribution'} classContent={'github-contribution'} updateNull={true}>
                {contributionsLoading ? (
                    <GitHubContributionContentLoader />
                ) : (
                    <CalendarWrapper
                        values={values}
                        until={new Date().toISOString().split('T')[0]}
                        totalContributions={totalContributions}
                    />
                )}
            </ContentGrid>
        </main>
    );
}

export default Stats;
