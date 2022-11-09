import React from 'react';

export interface IFormInputImages {}

const FormInputImages: React.FunctionComponent<IFormInputImages> = (props) => {
    return (
        <div className="os-review-form__input-images">
            <label for="imagee" className="os-review-form__input-image"></label>
            <input id="imagee" type="file" accept="image/*" />
        </div>
    );
};

export default FormInputImages;
