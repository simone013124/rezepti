import React from 'react';
import { Heart } from 'lucide-react';

type HeartButtonProps = {
    isHearted: boolean;
    onClick: () => void;
};

const HeartButton: React.FC<HeartButtonProps> = ({ isHearted, onClick }) => {
    return (
        <button type="button" className="icon-button" onClick={onClick}>
            {isHearted ? <Heart strokeWidth={1.5} fill="white" /> : <Heart strokeWidth={1.5} />}
        </button>
    );
};

export default HeartButton;
