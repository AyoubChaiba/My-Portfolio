import { Typography, Grid } from "@mui/material";
import { ContentGridProps } from "../../../types/index.ts";

export const ContentGrid: React.FC<ContentGridProps> = ({children, title, classContent, dataUpdate }) => {

    return (
        <Grid container spacing={2} className={`content ${classContent}`}>
            <Grid item className="head-content" style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Typography variant="h4" fontSize={18} fontWeight={800} className={"head-title"}>{title}</Typography>
                {dataUpdate && (
                    <Typography variant="caption" fontSize={12} color="textSecondary">
                        Last updated: {dataUpdate}
                    </Typography>
                    )}
            </Grid>
            <Grid item xs={12} className="body-content" >
                {children}
            </Grid>
        </Grid>
    )
}
