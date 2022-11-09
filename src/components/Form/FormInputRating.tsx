import React from 'react';
import Star from '../Atoms/Star';

export interface IFormInputRating {
    formValues: any;
    setFormValue: any;
    label?: string;
}

const FormInputRating: React.FunctionComponent<IFormInputRating> = (props) => {
    const setRating = (rating: number) => {
        props.setFormValue('rating', rating);
    };
    return (
        <div className="os-review-form__input-rating os-review-form__input-field">
            {props.label && <label>{props.label}</label>}
            <Star rating={props.formValues.rating || 5} setRating={setRating} />
        </div>
    );
};

export default FormInputRating;
