import React, { useState } from 'react';
import './Star.css';

export interface IStarProps {
    text?: string;
    style?: React.CSSProperties;
}

const Star: React.FunctionComponent<IStarProps> = (props) => {
    const [rating, setRating] = useState(2.5);
    const [hover, setHover] = useState(0);
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={`btn-star ${index <= (hover || rating) ? 'on' : 'off'}`}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">
                            <svg stroke-width="2" aria-hidden="true" className="rr--svg" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 27 25.81" preserveAspectRatio="xMidYMid meet">
                                {index < rating && index + 1 > rating && (
                                    <defs>
                                        <linearGradient id="grad">
                                            <stop offset="50%" stop-color="#ffb23f" />
                                            <stop offset="50%" stop-color="transparent" />
                                        </linearGradient>
                                    </defs>
                                )}
                                <g fill={(index < rating && index + 1 > rating && "url('#grad')") || ''}>
                                    <polygon points="25 9.02 16.4 7.75 12.46 0 8.59 7.79 0 9.14 6.21 15.23 4.85 23.81 12.55 19.79 20.3 23.74 18.85 15.17 25 9.02"></polygon>
                                </g>
                            </svg>
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default Star;
