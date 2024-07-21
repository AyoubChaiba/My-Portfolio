import { useState, useEffect } from "react";

export const useFetchData = <T>(fetchFunction: (type: string) => Promise<T>, type: string, initialData: T) => {
    const [data, setData] = useState<T>(initialData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataAsync = async () => {
            setLoading(true);
            try {
                const result = await fetchFunction(type);
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDataAsync();
    }, [fetchFunction, type]);

    return { data, loading };
};
