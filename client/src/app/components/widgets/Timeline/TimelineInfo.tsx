import { TimelineInfoProps } from "../../../types/componentType";
import CustomTimeline from "./CustomTimeline";


const TimelineInfoProfile: React.FC<TimelineInfoProps> = ({ title, icon, className, children }) => {
    return (
        <CustomTimeline
            title={title}
            icon={icon}
            style={{
                sizeIcon: 60,
                marginLeft: -26,
                headHeight: {
                    xs:"90px",
                    sm:"100px",
                    md:"120px",
                    lg:"120px",
                },
            }}
            className={className}
        >
        {children}
    </CustomTimeline>
    );
};

export default TimelineInfoProfile;