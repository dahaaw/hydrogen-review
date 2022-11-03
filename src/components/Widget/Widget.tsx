import React, { useState, useEffect } from 'react';
import WidgetLists from './WidgetLists';
import WidgetTitle from './WidgetTitle';

import './Widget.css';
import cfg from '../../config';

type WidgetType = React.FunctionComponent<IWidgetProps> & {
    Lists?: React.FC;
    Title?: React.FC;
};

export interface IWidgetProps {
    showtext?: boolean;
    starcolor?: string;
    style?: React.CSSProperties;
    productId: any;
    osToken: string;
    children: JSX.Element;
}

export const Widget: WidgetType = (props) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fillReviewWidget(props.productId, props.osToken, setReviews);
    }, []);

    const fillReviewWidget: any = async () => {
        let id = props.productId?.split('/');
        if (id.length) id = id[id.length - 1];

        let response: any = await fetch(`${cfg.APP_URL}/review/${props.osToken}/${id}`, {});
        response = await response.json();
        if (!response.data?.length) return;

        setReviews(response.data);
    };

    return (
        <div className="os-review-widget">
            <div className="os-review-widget__wrapper">{React.Children.map(props.children, (child) => React.cloneElement(child, { reviews, fillReviewWidget }))}</div>
        </div>
    );
};

Widget.Lists = WidgetLists;
Widget.Title = WidgetTitle;
