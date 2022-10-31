import React from 'react';

export interface IFormActionSubmit {
    text?: String;
}

export const FormActionSubmit: React.FunctionComponent<IFormActionSubmit> = (props) => {
    return (
        <div className="os-review-form__action os-review-form__action-submit">
            <button className="os-btn os-btn-submit">{props.text || 'submit'}</button>
        </div>
    );
};
