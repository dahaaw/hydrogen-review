import React from 'react';

export interface IWidgetTitleProps {
    text?: string;
    style?: React.CSSProperties;
}

const WidgetTitle: React.FunctionComponent<IWidgetTitleProps> = (props) => {
    return (
        <h2 className="os-review-widget__title" style={{ ...props.style }}>
            {props.text || 'Customer Reviews'}
        </h2>
    );
};

export default WidgetTitle;
