import React, { useState, useEffect } from 'react';

import cfg from '../../config';
import './Badge.css';
import Star from '../Atoms/Star';

export interface IBadgeProps {
    showtext?: boolean;
    starcolor?: string;
    style?: React.CSSProperties;
    productId: any;
    osToken: string;
}

declare global {
    interface Window {
        os_review_badge_update: any;
    }
}

export const Badge: React.FunctionComponent<IBadgeProps> = (props) => {
    const [rating, setRating] = useState(0);
    const [totalReview, setTotalReview] = useState(0);
    const { showtext, starcolor, style } = props;

    if (typeof window !== 'undefined') {
        if (window.os_review_badge_update) delete window.os_review_badge_update;
        window.os_review_badge_update = () => setReviewBadge(props.productId, props.osToken, setRating, setTotalReview);
        window.os_review_badge_update();
    }

    useEffect(() => {
        setReviewBadge(props.productId, props.osToken, setRating, setTotalReview);
    }, [rating]);

    let _style: React.CSSProperties = style || {};

    if (starcolor) _style.color = starcolor;

    let reviewText;
    if (totalReview) {
        reviewText = `${totalReview} reviews`;
    } else {
        reviewText = `Be the first to review`;
    }

    return (
        <>
            <div className="os-review-badge">
                <Star readonly={true} rating={rating} />
                <div className="os-review-badge__star"></div>
                {showtext && <div className="os-review-badge__text">{reviewText}</div>}
            </div>
        </>
    );
};

export default Badge;

export const setReviewBadge: any = async (productId: any, osToken: string, setRating: any, setTotalReview: any) => {
    let id = productId?.split('/');
    if (id.length) id = id[id.length - 1];

    let response: any = await fetch(`${cfg.APP_URL}/review/${osToken}/${id}`, {});
    response = await response.json();
    if (!response.data?.length) {
        setRating(0);
        setTotalReview(0);
        return;
    }
    setTotalReview(response.data.length);
    let total = 0;
    for (const rev of response.data) {
        total += rev.rating;
    }
    const average = total / response.data.length;
    setRating(average);
    console.log({ average });
};
