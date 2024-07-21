import React from 'react';
import ContentLoader from 'react-content-loader';

const CustomProfileLoader: React.FC = () => (
    <ContentLoader
        speed={2}
        height={600}
        viewBox="0 0 400 600"
        backgroundColor="#B4B4B8"
        foregroundColor="#ecebeb"
        style={{
            width: "100%",
        }}
    >

        <circle cx="200" cy="100" r="80" />
        <rect x="100" y="200" rx="5" ry="5" width="200" height="20" />
        <rect x="150" y="230" rx="5" ry="5" width="100" height="15" />
        <rect x="160" y="260" rx="10" ry="10" width="80" height="30" />
        <rect x="50" y="310" rx="5" ry="5" width="300" height="10" />
        <rect x="50" y="330" rx="5" ry="5" width="300" height="10" />
        <rect x="50" y="350" rx="5" ry="5" width="300" height="10" />
        <rect x="50" y="370" rx="5" ry="5" width="300" height="10" />
        <rect x="50" y="390" rx="5" ry="5" width="300" height="10" />
        <rect x="120" y="430" rx="10" ry="10" width="160" height="40" />
    </ContentLoader>
);

export default CustomProfileLoader;
