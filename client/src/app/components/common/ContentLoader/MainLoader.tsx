import ContentLoader from 'react-content-loader';

export const ServicesLoader = () => (
    <ContentLoader
        viewBox="0 0 1200 300"
        speed={2}
        backgroundColor="#cccccc"
        foregroundColor="#ecebeb"
    >
        <rect x="100" y="20" rx="10" ry="10" width="300" height="250" />
        <rect x="450" y="20" rx="10" ry="10" width="300" height="250" />
        <rect x="800" y="20" rx="10" ry="10" width="300" height="250" />
    </ContentLoader>
);

export const SkillsLoader = () => (
    <ContentLoader
        viewBox="0 0 400 150"
        speed={2}
        backgroundColor="#cccccc"
        foregroundColor="#ecebeb"
        style={{
            width: "100%",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}
    >
        <rect x="20" y="10" rx="8" ry="8" width="110" height="40" />
        <rect x="140" y="10" rx="8" ry="8" width="110" height="40" />
        <rect x="260" y="10" rx="8" ry="8" width="110" height="40" />

        <rect x="20" y="60" rx="8" ry="8" width="110" height="40" />
        <rect x="140" y="60" rx="8" ry="8" width="110" height="40" />
        <rect x="260" y="60" rx="8" ry="8" width="110" height="40" />

        <rect x="20" y="110" rx="8" ry="8" width="110" height="40" />
        <rect x="140" y="110" rx="8" ry="8" width="110" height="40" />
        <rect x="260" y="110" rx="8" ry="8" width="110" height="40" />
    </ContentLoader>
);


export const AboutContentLoader: React.FC = () => (
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


