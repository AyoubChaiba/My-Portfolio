import { TextWithProps } from "../../../types/index.ts";
import { Typography } from "@mui/material";

export const TextWithSpaces: React.FC<TextWithProps>  = ({text}) => {
    const formattedText = text.split('. ').join('.<span></span> ');
    return (
        <Typography
            variant="body2"
            className="text-container"
            fontSize={13}
            dangerouslySetInnerHTML={{ __html: formattedText }}
        />
    )
}
