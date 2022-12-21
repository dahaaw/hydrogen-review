import React, { useState, useEffect, useRef } from 'react';
import WidgetLists from './WidgetLists';
import WidgetTitle from './WidgetTitle';
import WidgetSummary from './WidgetSummary';

import './Widget.css';
import cfg from '../../config';

declare global {
    interface Window {
        os_review_badge_update: any;
    }
}

type WidgetType = React.FunctionComponent<IWidgetProps> & {
    Lists?: React.FC;
    Title?: React.FC;
    Summary?: React.FC;
};

export interface IWidgetProps {
    showtext?: boolean;
    starcolor?: string;
    style?: React.CSSProperties;
    productId: any;
    osToken: string;
    children: JSX.Element | JSX.Element[];
}

export const Widget: WidgetType = (props) => {
    const [reviews, setReviews] = useState([]);
    const [sortLists, setSortLists] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showForm, setShowForm] = useState(true);

    const formRef = useRef();
    let url;
    if (typeof window !== 'undefined') {
        url = window?.location?.href;
    }

    useEffect(() => {
        fillReviewWidget(props.productId, props.osToken, setReviews);
    }, [sortBy, url]);

    const fillReviewWidget: any = async () => {
        let id = props.productId?.split('/');
        if (id.length) id = id[id.length - 1];
        setIsLoading(true);

        let response: any = await fetch(`${cfg.APP_URL}/review/${props.osToken}/${id}?${sortBy && 'sort=' + sortBy}`, {});
        response = await response.json();
        setIsLoading(false);
        setReviews(response.data);
        if (!response.data?.length) return;

        setSortLists(response.sorts);
    };

    return (
        <div className="os-review-widget">
            <div className="os-review-widget__wrapper">
                {React.Children.map(props.children, (child) => React.cloneElement(child, { reviews, fillReviewWidget, sortLists, setSortBy, isLoading, showForm, setShowForm, formRef }))}
            </div>
        </div>
    );
};

Widget.Lists = WidgetLists;
Widget.Title = WidgetTitle;
Widget.Summary = WidgetSummary;
