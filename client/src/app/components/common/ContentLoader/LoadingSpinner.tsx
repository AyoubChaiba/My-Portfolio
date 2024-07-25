import Lottie from 'react-lottie';
import animationData from './coding-animation.json';
import './LoadingSpinner.scss';

const LoadingSpinner: React.FC<{ loading: boolean }> = ({ loading }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        loading && (
        <div className="loading-spinner">
            <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        )
    );
};

export default LoadingSpinner;
