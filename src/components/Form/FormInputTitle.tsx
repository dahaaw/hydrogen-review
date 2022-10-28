import React from 'react';

export interface IFormInputTitle {
    label?: any;
    placeholder?: any;
}

export const FormInputTitle: React.FunctionComponent<IFormInputTitle> = (props) => {
    return (
        <div className="os-review-form__input-title os-review-form__input-field">
            {props.label && <label>{props.label}</label>}
            <input type="text" name="title" placeholder={props.placeholder} />
        </div>
    );
};
