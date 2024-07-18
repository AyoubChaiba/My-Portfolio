import { TimelineInfoProps } from "../../../types";
import CustomTimeline from "./CustomTimeline";


const TimelineInfoProfile: React.FC<TimelineInfoProps> = ({ title, icon, className, children }) => {
    return (
        <CustomTimeline
            title={title}
            icon={icon}
            style={{
                sizeIcon: 60,
                marginLeft: -26,
                headHeight: "140px",
            }}
            className={className}
        >
        {children}
    </CustomTimeline>
    );
};

export default TimelineInfoProfile;