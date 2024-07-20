import Button from '@mui/material/Button';
import React, { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { ButtonProps } from "../../../types/index.ts";

const buttonVariants = {
    hover: { scale: 1.05, rotate: 2 },
    tap: { scale: 0.95, rotate: -2 }
};

const MainButton: React.FC<ButtonProps> = ({ text, className, icon, handleClick, link, type }) => {
    const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        if (link) {
            window.open(link, '_blank');
        } else if (handleClick) {
            handleClick(event);
        }
    };

    return (
        <motion.div
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
        >
            <Button
                variant="contained"
                className={`btn ${className}`}
                endIcon={icon}
                type={type as 'button' | 'submit' | 'reset'}
                sx={{
                    borderRadius: 50,
                    padding: "5px 10px 5px 20px",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    transition: "all 0.3s ease-in-out",
                    '& .MuiButton-endIcon': {
                        color: "#000",
                        marginLeft: 2,
                        transition: "all 0.3s ease-in-out",
                        backgroundColor: "#fff",
                        padding: .9,
                        borderRadius: 50,
                        '& :nth-of-type(1)': {
                            fontSize: '13px',
                        }
                    },
                }}
                onClick={onClickHandler}
            >
                {text}
            </Button>
        </motion.div>
    );
}

export default MainButton;
