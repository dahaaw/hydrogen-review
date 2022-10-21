"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setReviewBadge = exports.Badge = void 0;
const react_1 = __importStar(require("react"));
const react_rating_1 = require("@smastrom/react-rating");
const config_1 = __importDefault(require("../../config"));
const Badge = (props) => {
    const [rating, setRating] = (0, react_1.useState)(0);
    const [totalReview, setTotalReview] = (0, react_1.useState)(0);
    const { showtext, starcolor, style } = props;
    let _style = style || {};
    if (starcolor)
        _style.color = starcolor;
    (0, react_1.useEffect)(() => {
        (0, exports.setReviewBadge)(props.productId, props.osToken, setRating, setTotalReview);
    }, []);
    let reviewText;
    if (totalReview) {
        reviewText = `${totalReview} reviews`;
    }
    else {
        reviewText = `Be the first to review`;
    }
    return (react_1.default.createElement("div", { className: "os-review-badge", style: { display: 'flex', gap: '10px' } },
        react_1.default.createElement("div", { className: "os-review-badge__star" },
            react_1.default.createElement(react_rating_1.Rating, { readOnly: true, value: rating, style: Object.assign({}, style) })),
        showtext && (react_1.default.createElement("div", { className: "os-review-badge__text", style: { fontSize: '18px' } }, reviewText)),
        react_1.default.createElement("style", null, `.rr--box { --rr--fill-off-color: transparent !important }`)));
};
exports.Badge = Badge;
exports.default = exports.Badge;
const setReviewBadge = (productId, osToken, setRating, setTotalReview) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let id = productId === null || productId === void 0 ? void 0 : productId.split('/');
    if (id.length)
        id = id[id.length - 1];
    let response = yield fetch(`${config_1.default.APP_URL}/review/${osToken}?product_id=${id}`, {});
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
exports.setReviewBadge = setReviewBadge;
//# sourceMappingURL=Badge.js.map