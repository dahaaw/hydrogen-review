import React from 'react';
export interface IBadgeProps {
    showtext?: boolean;
    starcolor?: string;
    style?: React.CSSProperties;
    productId: any;
    osToken: string;
}
export declare const Badge: React.FunctionComponent<IBadgeProps>;
export default Badge;
export declare const setReviewBadge: any;
