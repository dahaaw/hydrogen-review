import React, { useEffect } from 'react';
import ProgressBar from '../Atoms/ProgressBar';
import Star from '../Atoms/Star';

export interface IWidgetSummaryProps {
    setShowForm?: any;
    showForm?: boolean;
    formRef?: any;
}

export const WidgetSummary: React.FunctionComponent<IWidgetSummaryProps> = (props) => {
    const { showForm, setShowForm, formRef } = props;
    useEffect(() => {
        setShowForm(false);
    }, []);

    return (
        <div className="os-review-summary__wrapper">
            <div className="os-review-summary__item os-review-summary__star">
                <div className="summary-star__wrapper">
                    <span className="summary-star-text">5.0</span>
                    <span className="summary-star">
                        <Star rating={5} />
                    </span>
                </div>
                <span className="summary-star-count">Based on 3 Reviews</span>
            </div>
            <div className="os-review-summary__item os-review-summary__rating">
                {[5, 4, 3, 2, 1].map((v) => {
                    return (
                        <div className="os-review-summary__rating-wrapper">
                            <Star rating={v} readonly={true} size="20px" />
                            <ProgressBar completed="60" bgColor="red" />
                            <div className="os-review-summary__rating-count">{v * 250}</div>
                        </div>
                    );
                })}
            </div>
            <div className="os-review-summary__item os-review-summary__action">
                <button
                    onClick={() => {
                        setShowForm(!showForm);
                        setTimeout(() => {
                            if (formRef && !showForm)
                                formRef.current.scrollIntoView({
                                    behavior: 'smooth'
                                });
                        }, 500);
                    }}
                >
                    Write Review
                </button>
            </div>
        </div>
    );
};

export default WidgetSummary;
