import React from 'react';
import Loading from '../Atoms/Loading';
import Star from '../Atoms/Star';

export interface IWidgetListsProps {
    text?: string;
    reviews?: any;
    sortLists?: any;
    setSortBy?: any;
    isLoading?: boolean;
}
export const WidgetLists: React.FunctionComponent<IWidgetListsProps> = (props) => {
    const { sortLists, setSortBy } = props;
    return (
        <div className="os-widget-review__lists">
            <div className="os-widget-review__lists-filter">
                {sortLists.length > 0 && (
                    <select className="os-widget-review__lists-sort" onChange={(e) => setSortBy(e.target.value)}>
                        {sortLists.map((v: any, i: number) => (
                            <option key={i} value={v.value}>
                                {v.name}
                            </option>
                        ))}
                    </select>
                )}
            </div>
            <div className="os-widget-review__lists-hr">
                <hr />
            </div>
            <div className="os-widget-review__lists-wrapper">
                {props.isLoading && <Loading />}

                {!props.isLoading && !props.reviews.length && (
                    <div className="os-widget-review__lists-empty">
                        <p>Be the first to review this product</p>
                    </div>
                )}

                {!props.isLoading &&
                    props.reviews.map((v: any) => (
                        <div className="os-widget-review__list" key={v.id}>
                            <span className="os-widget-review__name">{v.user_name}</span>
                            <Star readonly={true} rating={v.rating} size="20px" />
                            <span className="os-widget-review__title">{v.title}</span>
                            <p>{v.review}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default WidgetLists;
