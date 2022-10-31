import React from 'react';

export interface IFormInputName {
    formValues: any;
    setFormValue: any;
    formMessages: any;
    label?: String;
    placeholder?: any;
}

export const FormInputName: React.FunctionComponent<IFormInputName> = (props) => {
    return (
        <div className="os-review-form__input-name os-review-form__input-field">
            {props.label && <label>{props.label}</label>}
            <input
                type="text"
                name="name"
                placeholder={props.placeholder}
                value={props.formValues.name || ''}
                onChange={(e) => props.setFormValue('name', e.target.value)}
                style={props.formMessages?.name && { border: '1px solid red' }}
            />
            {props.formMessages?.name && <span className="os-form-messages">{props.formMessages.name}</span>}
        </div>
    );
};
