import React from 'react';

export interface IFormInputEmail {
    formValues: any;
    setFormValue: any;
    formMessages: any;
    label?: String;
    placeholder?: any;
}

const FormInputEmail: React.FunctionComponent<IFormInputEmail> = (props) => {
    return (
        <div className="os-review-form__input-email os-review-form__input-field">
            {props.label && <label>{props.label}</label>}
            <input
                type="email"
                value={props.formValues.email || ''}
                onChange={(e) => props.setFormValue('email', e.target.value)}
                name="email"
                placeholder={props.placeholder}
                className={props.formMessages?.email && 'os-form-input-fail'}
            />
            {props.formMessages?.email && <span className="os-form-messages">{props.formMessages.email}</span>}
        </div>
    );
};

export default FormInputEmail;
