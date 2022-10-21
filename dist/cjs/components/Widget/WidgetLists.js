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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetLists = void 0;
const react_1 = __importStar(require("react"));
const react_2 = require("@headlessui/react");
const solid_1 = require("@heroicons/react/20/solid");
const react_rating_1 = require("@smastrom/react-rating");
const sortLists = [
    { id: 1, name: 'Most Recent', unavailable: false },
    { id: 2, name: 'Highest Rating', unavailable: false },
    { id: 3, name: 'Lowest Rating', unavailable: false },
    { id: 4, name: 'Only Pictures', unavailable: true },
    { id: 5, name: 'Pictures First', unavailable: false },
    { id: 6, name: 'Videos First', unavailable: false },
    { id: 7, name: 'Most Helpful', unavailable: false }
];
const WidgetLists = (props) => {
    const [sortBy, setSortBy] = (0, react_1.useState)(sortLists[0]);
    console.log({ aaaa: props.reviews });
    return (react_1.default.createElement("div", { className: "os-widget-review__lists", style: { position: 'relative', paddingTop: '10px' } },
        react_1.default.createElement("div", { className: "relative mt-1", style: { position: 'absolute', minWidth: '200px', right: 0 } },
            react_1.default.createElement(react_2.Listbox, { value: sortBy, onChange: setSortBy },
                react_1.default.createElement(react_2.Listbox.Button, { style: { borderRadius: '4px' }, className: "relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm" },
                    react_1.default.createElement("span", { className: "block truncate" }, sortBy.name),
                    react_1.default.createElement("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" },
                        react_1.default.createElement(solid_1.ChevronUpDownIcon, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" }))),
                react_1.default.createElement(react_2.Transition, { as: react_1.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    react_1.default.createElement(react_2.Listbox.Options, { style: { borderRadius: '4px' }, className: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, sortLists.map((sort) => (react_1.default.createElement(react_2.Listbox.Option, { key: sort.id, className: ({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`, value: sort }, ({ selected }) => (react_1.default.createElement(react_1.default.Fragment, null,
                        react_1.default.createElement("span", { className: `block truncate ${selected ? 'font-medium' : 'font-normal'}` }, sort.name),
                        selected ? (react_1.default.createElement("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600" },
                            react_1.default.createElement(solid_1.CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" }))) : null))))))))),
        react_1.default.createElement("div", { style: { marginTop: '50px' } },
            react_1.default.createElement("hr", null)),
        react_1.default.createElement("div", { className: "" },
            !props.reviews.length && (react_1.default.createElement("div", { style: { textAlign: 'center', margin: '40px 0 20px' } },
                react_1.default.createElement("p", { style: { fontSize: '18px' } }, "Be the first to review this product"))),
            props.reviews.map((v) => (react_1.default.createElement("div", { style: { textAlign: 'left', margin: '20px 0' } },
                react_1.default.createElement("span", { style: { fontSize: 'var(--font-size-lead)', fontWeight: 700 } }, v.user_name),
                react_1.default.createElement(react_rating_1.Rating, { style: { maxWidth: 130 }, readOnly: true, value: v.star }),
                react_1.default.createElement("span", { style: { fontSize: 'var(--font-size-lead)', fontWeight: 700 } }, v.title),
                react_1.default.createElement("p", null, v.review)))))));
};
exports.WidgetLists = WidgetLists;
exports.default = exports.WidgetLists;
//# sourceMappingURL=WidgetLists.js.map