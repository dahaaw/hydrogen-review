import React, { useState, useEffect } from 'react';
import { Rating } from '@smastrom/react-rating';

import cfg from '../../config';
import './Badge.css';
import Star from '../Star';

export interface IBadgeProps {
    showtext?: boolean;
    starcolor?: string;
    style?: React.CSSProperties;
    productId: any;
    osToken: string;
}

export const Badge: React.FunctionComponent<IBadgeProps> = (props) => {
    const [rating, setRating] = useState(0);
    const [totalReview, setTotalReview] = useState(0);
    const { showtext, starcolor, style } = props;

    let _style: React.CSSProperties = style || {};

    if (starcolor) _style.color = starcolor;

    useEffect(() => {
        setReviewBadge(props.productId, props.osToken, setRating, setTotalReview);
    }, []);

    let reviewText;
    if (totalReview) {
        reviewText = `${totalReview} reviews`;
    } else {
        reviewText = `Be the first to review`;
    }
    return (
        <>
            <div className="os-review-badge">
                <Star />
                <div className="os-review-badge__star"></div>
                {showtext && <div className="os-review-badge__text">{reviewText}</div>}
            </div>
            <Rating readOnly={true} value={rating} style={{ ...style, maxWidth: 130 }} />
        </>
    );
};

export default Badge;

export const setReviewBadge: any = async (productId: any, osToken: string, setRating: any, setTotalReview: any) => {
    let id = productId?.split('/');
    if (id.length) id = id[id.length - 1];

    let response: any = await fetch(`${cfg.APP_URL}/review/${osToken}/${id}`, {});
    response = await response.json();
    if (!response.data?.length) return setRating(0);
    setTotalReview(response.data.length);
    let total = 0;
    for (const rev of response.data) {
        total += rev.rating;
    }
    const average = total / response.data.length;
    setRating(average);
};
