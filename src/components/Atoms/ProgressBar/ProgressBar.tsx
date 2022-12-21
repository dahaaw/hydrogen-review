import React from 'react';
import './ProgressBar.css';

export interface IProgressBarProps {
    bgColor: string;
    completed: string;
}

const ProgressBar: React.FunctionComponent<IProgressBarProps> = (props) => {
    const { bgColor, completed } = props;
    return (
        <div className="progress-bar__container">
            <div className="progress-bar__filter" style={{ width: completed + '%', backgroundColor: bgColor }}></div>
        </div>
    );
};

export default ProgressBar;
