import Button from '@mui/material/Button';
import { ButtonProps } from "../../../types";
import React, { MouseEvent } from 'react';

const MainButton: React.FC<ButtonProps> = ({ text, className, icon, handleClick }) => {

    const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => handleClick && handleClick(event);

    return (
        <Button
            variant="contained"
            className={`btn ${className}`}
            endIcon={icon}
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
    );
}

export default MainButton;
