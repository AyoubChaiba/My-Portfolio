export const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
            delay: 0.2,
            duration: 0.5,
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8, rotate: 10 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
            delay: index * 0.1,
            duration: 0.4,
            type: "spring",
            stiffness: 100,
        },
    }),
};

export const cardContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
            delay: 0.2,
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export const cardItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: index * 0.1,
            duration: 0.2,
            ease: "easeOut",
        },
    }),
};


export const ResumeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};