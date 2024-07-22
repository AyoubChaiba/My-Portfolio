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

export const CertificatesContentLoader = () => (
    <ContentLoader
        speed={2}
        viewBox="0 0 400 200"
        backgroundColor="#B4B4B8"
        foregroundColor="#ecebeb"
    >
        <rect x="10" y="10" rx="4" ry="4" width="380" height="50" />
        <rect x="10" y="70" rx="4" ry="4" width="380" height="50" />
        <rect x="10" y="130" rx="4" ry="4" width="380" height="50" />
    </ContentLoader>
);

export const ResumeContentLoader: React.FC = () => (
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

