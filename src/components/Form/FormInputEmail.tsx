import React from 'react';

export interface IFormInputEmail {
    label?: String;
    placeholder?: any;
}

export const FormInputEmail: React.FunctionComponent<IFormInputEmail> = (props) => {
    return (
        <div className="os-review-form__input-email os-review-form__input-field">
            {props.label && <label>{props.label}</label>}
            <input type="email" name="email" placeholder={props.placeholder} />
        </div>
    );
};
