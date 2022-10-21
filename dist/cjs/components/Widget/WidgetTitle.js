"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetTitle = void 0;
const react_1 = __importDefault(require("react"));
const WidgetTitle = (props) => {
    return react_1.default.createElement("h2", { style: Object.assign({ fontSize: 'var(--font-size-heading)', fontWeight: 700, marginBottom: '30px' }, props.style) }, props.text || 'Customer Reviews');
};
exports.WidgetTitle = WidgetTitle;
exports.default = exports.WidgetTitle;
//# sourceMappingURL=WidgetTitle.js.map