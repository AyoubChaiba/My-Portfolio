import { useState } from "react";

export const useVisibility = (initialVisibleItems: number, increment: number) => {
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);

    const handleLoadMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + increment);
    };

    return { visibleItems, handleLoadMore };
};
