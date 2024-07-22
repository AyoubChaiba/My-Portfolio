import { motion } from "framer-motion";
import { useCustomInView } from "../../../hooks/useCustomInView";
import { Card, CardContent, CardActionArea, Typography } from "@mui/material";
import { urlFor } from "../../../sanityClient";
import { itemVariants } from "../../../utils/animationVariants";
import { CertificationProps } from "../../../types/componentType";



const CertificationCard: React.FC<CertificationProps> = ({ certification, index }) => {
    const { ref, inView } = useCustomInView();

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
        >
            <Card sx={{ marginBottom: 2 }} className="card-certificate">
                <CardActionArea href={certification.link} target="_blank">
                    <CardContent className="card-content">
                        <figure>
                            <img
                                src={urlFor(certification.photo.asset).url()}
                                alt={certification.title}
                            />
                        </figure>
                        <div>
                            <Typography variant="h6" fontSize={{ xs: 14, sm: 15, md: 16 }}>
                                {certification.title}
                            </Typography>
                            <Typography color="text.secondary" fontSize={{ xs: 13, sm: 14, md: 15 }}>
                                <Typography variant="caption" color="primary" fontWeight={900}>
                                    {certification.issuer}
                                </Typography>
                                • {certification.dates}
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </motion.div>
    );
};

export default CertificationCard;
