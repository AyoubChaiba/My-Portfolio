import { TextWithProps } from "../../../types/componentType";
import { Typography } from "@mui/material";

const TextWithSpaces: React.FC<TextWithProps>  = ({text}) => {
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

export default TextWithSpaces;