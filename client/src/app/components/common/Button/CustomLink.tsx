import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { MouseEvent } from 'react';
import { LinkProps } from "../../../types/componentType";
import { Button } from '@mui/material';

export const CustomLink: React.FC<LinkProps> = ({ to, text, handleClick, className, icon }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    const onClickHandler = (event: MouseEvent<HTMLAnchorElement>) => handleClick && handleClick(event);

    return (
        <Button
            color="inherit"
            component={Link}
            to={to}
            onClick={onClickHandler}
            className={`${className} ${isActive ? "active" : ""}`}
        >
            {text}{icon}
        </Button>
    );
};

