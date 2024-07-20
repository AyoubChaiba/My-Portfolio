import React from 'react';
import ContentLoader from 'react-content-loader';

const AboutContentLoader: React.FC = () => (
    <ContentLoader
        viewBox="0 0 500 140"
        speed={2}
        backgroundColor="#cccccc"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="13" rx="4" ry="4" width="100%" height="9" />
        <rect x="0" y="29" rx="4" ry="4" width="50%" height="9" />
        <rect x="0" y="50" rx="4" ry="4" width="100%" height="9" />
        <rect x="0" y="65" rx="4" ry="4" width="60%" height="9" />
        <rect x="0" y="79" rx="4" ry="4" width="40%" height="9" />
        <rect x="0" y="100" rx="4" ry="4" width="100%" height="9" />
        <rect x="0" y="115" rx="4" ry="4" width="50%" height="9" />
    </ContentLoader>
);

export default AboutContentLoader;
