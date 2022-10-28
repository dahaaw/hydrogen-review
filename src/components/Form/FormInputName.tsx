import React from 'react';

export interface IFormInputName {
    label?: String;
    placeholder?: any;
}

export const FormInputName: React.FunctionComponent<IFormInputName> = (props) => {
    return (
        <div className="os-review-form__input-name os-review-form__input-field">
            {props.label && <label>{props.label}</label>}
            <input type="text" name="name" placeholder={props.placeholder} />
        </div>
    );
};
