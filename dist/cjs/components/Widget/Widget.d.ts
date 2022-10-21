import React from 'react';
export interface IWidgetProps {
    showtext?: boolean;
    starcolor?: string;
    style?: React.CSSProperties;
    productId: any;
    osToken: string;
    children: JSX.Element;
}
export declare const Widget: React.FunctionComponent<IWidgetProps>;
export default Widget;
export declare const fillReviewWidget: any;
