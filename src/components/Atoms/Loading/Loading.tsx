import React from 'react';
import './Loading.css';

const Loading: React.FunctionComponent = (props) => {
    return (
        <div className="os-loading__wrapper">
            <div className="os-loading"></div>
        </div>
    );
};

export default Loading;
