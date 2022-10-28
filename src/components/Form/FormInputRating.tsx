import React from 'react';
import { Rating } from '@smastrom/react-rating';

export interface IFormInputRating {
    formValues: any;
    setFormValue: any;
    label?: string;
}

export const FormInputRating: React.FunctionComponent<IFormInputRating> = (props) => {
    return (
        <div className="os-review-form__input-rating os-review-form__input-field">
            {props.label && <label>{props.label}</label>}
            <Rating value={props.formValues.rating || 0} onChange={(v: number) => props.setFormValue('rating', v)} style={{ maxWidth: 130, margin: 'auto' }} />
        </div>
    );
};
