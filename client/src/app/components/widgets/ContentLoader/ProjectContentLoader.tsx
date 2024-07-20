import React from 'react';
import ContentLoader from 'react-content-loader';

const ProjectContentLoader: React.FC = () => (
    <ContentLoader
        speed={2}
        width="100%"
        height={400}
        viewBox="0 0 100% 400"
        backgroundColor="#B4B4B8"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="200" />
        <rect x="0" y="220" rx="5" ry="5" width="80%" height="30" />
        <rect x="0" y="260" rx="5" ry="5" width="60%" height="30" />
    </ContentLoader>
);

export default ProjectContentLoader;
