import React, { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Rating } from '@smastrom/react-rating';
const sortLists = [
    { id: 1, name: 'Most Recent', unavailable: false },
    { id: 2, name: 'Highest Rating', unavailable: false },
    { id: 3, name: 'Lowest Rating', unavailable: false },
    { id: 4, name: 'Only Pictures', unavailable: true },
    { id: 5, name: 'Pictures First', unavailable: false },
    { id: 6, name: 'Videos First', unavailable: false },
    { id: 7, name: 'Most Helpful', unavailable: false }
];
export const WidgetLists = (props) => {
    const [sortBy, setSortBy] = useState(sortLists[0]);
    console.log({ aaaa: props.reviews });
    return (React.createElement("div", { className: "os-widget-review__lists", style: { position: 'relative', paddingTop: '10px' } },
        React.createElement("div", { className: "relative mt-1", style: { position: 'absolute', minWidth: '200px', right: 0 } },
            React.createElement(Listbox, { value: sortBy, onChange: setSortBy },
                React.createElement(Listbox.Button, { style: { borderRadius: '4px' }, className: "relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm" },
                    React.createElement("span", { className: "block truncate" }, sortBy.name),
                    React.createElement("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" },
                        React.createElement(ChevronUpDownIcon, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" }))),
                React.createElement(Transition, { as: Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    React.createElement(Listbox.Options, { style: { borderRadius: '4px' }, className: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, sortLists.map((sort) => (React.createElement(Listbox.Option, { key: sort.id, className: ({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`, value: sort }, ({ selected }) => (React.createElement(React.Fragment, null,
                        React.createElement("span", { className: `block truncate ${selected ? 'font-medium' : 'font-normal'}` }, sort.name),
                        selected ? (React.createElement("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600" },
                            React.createElement(CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" }))) : null))))))))),
        React.createElement("div", { style: { marginTop: '50px' } },
            React.createElement("hr", null)),
        React.createElement("div", { className: "" },
            !props.reviews.length && (React.createElement("div", { style: { textAlign: 'center', margin: '40px 0 20px' } },
                React.createElement("p", { style: { fontSize: '18px' } }, "Be the first to review this product"))),
            props.reviews.map((v) => (React.createElement("div", { style: { textAlign: 'left', margin: '20px 0' } },
                React.createElement("span", { style: { fontSize: 'var(--font-size-lead)', fontWeight: 700 } }, v.user_name),
                React.createElement(Rating, { style: { maxWidth: 130 }, readOnly: true, value: v.star }),
                React.createElement("span", { style: { fontSize: 'var(--font-size-lead)', fontWeight: 700 } }, v.title),
                React.createElement("p", null, v.review)))))));
};
export default WidgetLists;
//# sourceMappingURL=WidgetLists.js.map