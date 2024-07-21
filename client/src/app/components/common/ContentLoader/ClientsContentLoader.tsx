import React from "react";
import ContentLoader from "react-content-loader";

const ClientsContentLoader: React.FC = () => {
    return (
        <ContentLoader
            speed={2}
            height={160}
            viewBox="0 0 800 160"
            backgroundColor="#B4B4B8"
            foregroundColor="#ecebeb"
            style={{
                width: "100%",
            }}
        >
            {Array.from({ length: 9 }).map((_, index) => (
                <rect
                    key={index}
                    x={90 * index}
                    y="40"
                    rx="10"
                    ry="10"
                    width="80"
                    height="80"
                />
            ))}
        </ContentLoader>
    );
};

export default ClientsContentLoader;

