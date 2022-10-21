import React, { useState, useEffect } from 'react';

import cfg from '../../config';

export interface IWidgetProps {
    showtext?: boolean;
    starcolor?: string;
    style?: React.CSSProperties;
    productId: any;
    osToken: string;
    children: JSX.Element;
}

export const Widget: React.FunctionComponent<IWidgetProps> = (props) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fillReviewWidget(props.productId, props.osToken, setReviews);
    }, []);

    return (
        <div className="os-review-widget" style={{ margin: '50px 0 80px' }}>
            <div style={{ maxWidth: '90%', textAlign: 'center', margin: 'auto' }} className="os-review-widget__wrapper">
                {React.Children.map(props.children, (child) => React.cloneElement(child, { reviews }))}
            </div>
        </div>
    );
};

export default Widget;

export const fillReviewWidget: any = async (productId: any, osToken: string, setReviews: any) => {
    let id = productId?.split('/');
    if (id.length) id = id[id.length - 1];

    let response: any = await fetch(`${cfg.APP_URL}/review/${osToken}?product_id=${id}`, {});
    response = await response.json();
    if (!response.data?.length) return;

    setReviews(response.data);
};
