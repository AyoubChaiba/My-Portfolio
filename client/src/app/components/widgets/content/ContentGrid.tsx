import { Typography, Grid } from "@mui/material";
import { ContentProps } from "../../../types";

export const ContentGrid: React.FC<ContentProps> = ({children, title, classContent }) => {

    return (
        <Grid container spacing={2} className={`content ${classContent}`}>
            <Grid item className="head-content">
                <Typography variant="h4" fontSize={18} fontWeight={800} className={"head-title"}>{title}</Typography>
            </Grid>
            <Grid item xs={12} className="body-content" >
                {children}
            </Grid>
        </Grid>
    )
}
