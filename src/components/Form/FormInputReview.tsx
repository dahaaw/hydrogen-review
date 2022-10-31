import React from 'react';

export interface IFormInputReview {
    formValues: any;
    setFormValue: any;
    formMessages: any;
    label?: String;
    placeholder?: any;
}

export const FormInputReview: React.FunctionComponent<IFormInputReview> = (props) => {
    return (
        <div className="os-review-form__input-review os-review-form__input-field">
            {props.label && <label>{props.label}</label>}
            <textarea
                value={props.formValues.review || ''}
                onChange={(e) => props.setFormValue('review', e.target.value)}
                name="review"
                placeholder={props.placeholder}
                style={props.formMessages?.review && { border: '1px solid red' }}
            />
            {props.formMessages?.review && <span className="os-form-messages os-form-messages-textarea">{props.formMessages.review}</span>}
        </div>
    );
};
