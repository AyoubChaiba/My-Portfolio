import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ContentGrid } from "../../components/widgets/Content/ContentGrid";
import CalendarWrapper from "../../components/widgets/GitHubCalendar/calendarWrapper";
import { ApiResponse, Contribution } from '../../types';
import useGithubStats from "react-github-user-stats";
import { Grid, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import "./stats.scss"

const Stats = () => {
    const [values, setValues] = useState<{ [key: string]: number }>({});
    const [totalContributions, setTotalContributions] = useState(0);
    const until = new Date().toISOString().split('T')[0];
    const username = 'AyoubChaiba';
    const { userData } = useGithubStats(username);

    const statistics = [
        { title: 'Total Contributions', value: totalContributions },
        { title: 'Followers', value: userData?.followers },
        { title: 'Stars', value: userData?.total_stars },
        { title: 'Public Repositories', value: userData?.public_repos },
        { title: 'Public Gists', value: userData?.public_gists },
        { title: 'Total Forks', value: userData?.total_forks },
    ];

    const ref2 = useRef<HTMLDivElement>(null);
    const isInView2 = useInView(ref2, { once: true });

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const containerVariants = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await axios.get<ApiResponse>(`https://github-contributions-api.deno.dev/${username}.json`);
                const contributions = response.data.contributions.flat();

                const values: { [key: string]: number } = {};
                contributions.forEach((contribution: Contribution) => {
                    values[contribution.date] = contribution.contributionCount;
                });

                setValues(values);
                setTotalContributions(response.data.totalContributions);
            } catch (error) {
                console.error("Error fetching GitHub contributions:", error);
            }
        };
        fetchContributions();
    }, [username]);

    return (
        <main>
            <ContentGrid title={'Statistics'} classContent={'github-statistics'}>
                <motion.div
                    ref={ref2}
                    initial="hidden"
                    animate={isInView2 ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }} className="statistics-items">
                        {statistics.map(stat => (
                            <Grid item xs={12} sm={6} md={6} lg={3} key={stat.title}>
                                <motion.div className="stats-card"
                                    variants={itemVariants}
                                >
                                    <Typography variant="h5" fontWeight={600}>{stat.value ?? 'N/A'}</Typography>
                                    <Typography variant="body1">{stat.title}</Typography>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </ContentGrid>
            <ContentGrid title={'GitHub Contribution'} classContent={'github-contribution'}>
                <CalendarWrapper
                    values={values}
                    until={until}
                    totalContributions={totalContributions}
                />
            </ContentGrid>
        </main>
    );
}

export default Stats;
