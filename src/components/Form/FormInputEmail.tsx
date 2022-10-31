import React from 'react';

export interface IFormInputEmail {
    formValues: any;
    setFormValue: any;
    formMessages: any;
    label?: String;
    placeholder?: any;
}

export const FormInputEmail: React.FunctionComponent<IFormInputEmail> = (props) => {
    return (
        <div className="os-review-form__input-email os-review-form__input-field">
            {props.label && <label>{props.label}</label>}
            <input
                type="email"
                value={props.formValues.email || ''}
                onChange={(e) => props.setFormValue('email', e.target.value)}
                name="email"
                placeholder={props.placeholder}
                style={props.formMessages?.email && { border: '1px solid red' }}
            />
            {props.formMessages?.email && <span className="os-form-messages">{props.formMessages.email}</span>}
        </div>
    );
};
