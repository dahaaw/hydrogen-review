import React from 'react';

export interface IWidgetTitleProps {
    text?: string;
    style?: React.CSSProperties;
}
export const WidgetTitle: React.FunctionComponent<IWidgetTitleProps> = (props) => {
    return <h2 style={{ fontSize: 'var(--font-size-heading)', fontWeight: 700, marginBottom: '30px', ...props.style }}>{props.text || 'Customer Reviews'}</h2>;
};

export default WidgetTitle;
