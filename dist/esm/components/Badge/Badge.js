var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useEffect } from 'react';
import { Rating } from '@smastrom/react-rating';
import cfg from '../../config';
export const Badge = (props) => {
    const [rating, setRating] = useState(0);
    const [totalReview, setTotalReview] = useState(0);
    const { showtext, starcolor, style } = props;
    let _style = style || {};
    if (starcolor)
        _style.color = starcolor;
    useEffect(() => {
        setReviewBadge(props.productId, props.osToken, setRating, setTotalReview);
    }, []);
    let reviewText;
    if (totalReview) {
        reviewText = `${totalReview} reviews`;
    }
    else {
        reviewText = `Be the first to review`;
    }
    return (React.createElement("div", { className: "os-review-badge", style: { display: 'flex', gap: '10px' } },
        React.createElement("div", { className: "os-review-badge__star" },
            React.createElement(Rating, { readOnly: true, value: rating, style: Object.assign({}, style) })),
        showtext && (React.createElement("div", { className: "os-review-badge__text", style: { fontSize: '18px' } }, reviewText)),
        React.createElement("style", null, `.rr--box { --rr--fill-off-color: transparent !important }`)));
};
export default Badge;
export const setReviewBadge = (productId, osToken, setRating, setTotalReview) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let id = productId === null || productId === void 0 ? void 0 : productId.split('/');
    if (id.length)
        id = id[id.length - 1];
    let response = yield fetch(`${cfg.APP_URL}/review/${osToken}?product_id=${id}`, {});
    response = yield response.json();
    if (!((_a = response.data) === null || _a === void 0 ? void 0 : _a.length))
        return setRating(0);
    setTotalReview(response.data.length);
    let total = 0;
    for (const rev of response.data) {
        total += rev.star;
    }
    const average = total / response.data.length;
    setRating(average);
});
//# sourceMappingURL=Badge.js.map