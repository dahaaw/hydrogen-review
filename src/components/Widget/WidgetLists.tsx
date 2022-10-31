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

export interface IWidgetListsProps {
    text?: string;
    reviews?: any;
}
export const WidgetLists: React.FunctionComponent<IWidgetListsProps> = (props) => {
    const [sortBy, setSortBy] = useState(sortLists[0]);
    return (
        <div className="os-widget-review__lists" style={{ position: 'relative', paddingTop: '10px' }}>
            <div className="" style={{ position: 'absolute', minWidth: '200px', right: 0 }}>
                <Listbox value={sortBy} onChange={setSortBy}>
                    <Listbox.Button
                        style={{ borderRadius: '4px' }}
                        className="relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                    >
                        <span className="block truncate">{sortBy.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </Listbox.Button>
                    <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Listbox.Options
                            style={{ borderRadius: '4px' }}
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                            {sortLists.map((sort) => (
                                <Listbox.Option
                                    key={sort.id}
                                    className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`}
                                    value={sort}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{sort.name}</span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </Listbox>
            </div>
            <div style={{ marginTop: '50px' }}>
                <hr />
            </div>
            <div className="">
                {!props.reviews.length && (
                    <div style={{ textAlign: 'center', margin: '40px 0 20px' }}>
                        <p style={{ fontSize: '18px' }}>Be the first to review this product</p>
                    </div>
                )}
                {props.reviews.map((v: any) => (
                    <div style={{ textAlign: 'left', margin: '20px 0' }} key={v.id}>
                        <span style={{ fontSize: 'var(--font-size-lead)', fontWeight: 700 }}>{v.user_name}</span>
                        <Rating style={{ maxWidth: 130 }} readOnly={true} value={v.star} />
                        <span style={{ fontSize: 'var(--font-size-lead)', fontWeight: 700 }}>{v.title}</span>
                        <p>{v.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WidgetLists;
