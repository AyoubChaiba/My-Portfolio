import React from 'react';
import ContentLoader from 'react-content-loader';

const ResumeContentLoader: React.FC = () => (
    <ContentLoader
        speed={2}
        width={800 / 2}
        height={300}
        viewBox="0 0 400 300"
        backgroundColor="#B4B4B8"
        foregroundColor="#ecebeb"
    >
        <circle cx="60" cy="40" r="20" />
        <rect x="90" y="20" rx="5" ry="5" width="200" height="20" />
        <rect x="90" y="50" rx="5" ry="5" width="150" height="15" />
        <rect x="90" y="75" rx="5" ry="5" width="180" height="10" />
        <rect x="90" y="95" rx="5" ry="5" width="160" height="10" />
        <rect x="20" y="120" rx="5" ry="5" width="360" height="10" />

        <circle cx="60" cy="180" r="20" />
        <rect x="90" y="160" rx="5" ry="5" width="200" height="20" />
        <rect x="90" y="190" rx="5" ry="5" width="150" height="15" />
        <rect x="90" y="215" rx="5" ry="5" width="180" height="10" />
        <rect x="90" y="235" rx="5" ry="5" width="160" height="10" />
        <rect x="20" y="260" rx="5" ry="5" width="360" height="10" />
    </ContentLoader>
);

export default ResumeContentLoader;
