import { Typography, Grid } from "@mui/material";
import { ContentGridProps } from "../../../types/componentType";

export const ContentGrid: React.FC<ContentGridProps> = ({children, title, classContent, dataUpdate }) => {

    return (
        <Grid
            container
            spacing={2}
            className={`content ${classContent}`}
            sx={{
                paddingTop: 3,
                paddingBottom: 2,
                paddingX : { xs : "20px" , sm : "25px" , md : "30px", lg: "40px"  },
            }}
            >
            <Grid item className="head-content"
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Typography
                    variant="h4"
                    fontSize={{ xs : 18, sm: 20 }}
                    fontWeight={900}
                    className={"head-title"}
                    >
                        {title}
                </Typography>
                {dataUpdate && (
                    <Typography
                        variant="caption"
                        fontSize={{ xs : 10, sm: 12 }}
                        color="textSecondary"
                        >
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
