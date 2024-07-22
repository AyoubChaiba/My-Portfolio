import { useInView } from "react-intersection-observer";

export const useCustomInView = (options = { triggerOnce: true, threshold: 0.1 }) => {
    return useInView(options);
};
