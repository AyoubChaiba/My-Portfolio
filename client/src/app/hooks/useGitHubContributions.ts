import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiResponse, Contribution } from '../types/apiTypes';

const useGitHubContributions = (username: string) => {
    const [values, setValues] = useState<{ [key: string]: number }>({});
    const [totalContributions, setTotalContributions] = useState(0);
    const [loading, setLoading] = useState(true);

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
            } finally {
                setLoading(false);
            }
        };
        fetchContributions();
    }, [username]);

    return { values, totalContributions, loading };
};

export default useGitHubContributions;
