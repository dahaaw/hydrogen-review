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
import cfg from '../../config';
export const Widget = (props) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fillReviewWidget(props.productId, props.osToken, setReviews);
    }, []);
    return (React.createElement("div", { className: "os-review-widget", style: { margin: '50px 0 80px' } },
        React.createElement("div", { style: { maxWidth: '90%', textAlign: 'center', margin: 'auto' }, className: "os-review-widget__wrapper" }, React.Children.map(props.children, (child) => React.cloneElement(child, { reviews })))));
};
export default Widget;
export const fillReviewWidget = (productId, osToken, setReviews) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let id = productId === null || productId === void 0 ? void 0 : productId.split('/');
    if (id.length)
        id = id[id.length - 1];
    let response = yield fetch(`${cfg.APP_URL}/review/${osToken}?product_id=${id}`, {});
    response = yield response.json();
    if (!((_a = response.data) === null || _a === void 0 ? void 0 : _a.length))
        return;
    setReviews(response.data);
});
//# sourceMappingURL=Widget.js.map