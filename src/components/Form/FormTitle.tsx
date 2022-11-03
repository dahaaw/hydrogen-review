import React from 'react';

export interface IFormTitle {
    text: string;
}

const FormTitle: React.FunctionComponent<IFormTitle> = (props) => {
    return (
        <div className="os-review-form__title">
            <h3>{props.text || 'Write a Review'}</h3>
        </div>
    );
};

export default FormTitle;
