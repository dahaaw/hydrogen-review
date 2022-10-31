import React from 'react';

export interface IFormAction {
    children?: JSX.Element;
}

export const FormAction: React.FunctionComponent<IFormAction> = (props) => {
    return <div className="os-review-form__action-wrapper">{props.children}</div>;
};
