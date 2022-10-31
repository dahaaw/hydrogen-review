import React from 'react';

export interface IFormInputTitle {
    formValues: any;
    setFormValue: any;
    formMessages: any;
    label?: any;
    placeholder?: any;
}

export const FormInputTitle: React.FunctionComponent<IFormInputTitle> = (props) => {
    return (
        <div className="os-review-form__input-title os-review-form__input-field">
            {props.label && <label>{props.label}</label>}
            <input
                type="text"
                name="title"
                placeholder={props.placeholder}
                value={props.formValues.title || ''}
                onChange={(e) => props.setFormValue('title', e.target.value)}
                style={props.formMessages?.title && { border: '1px solid red' }}
            />
            {props.formMessages?.title && <span className="os-form-messages">{props.formMessages.title}</span>}
        </div>
    );
};
