import React from 'react';

export interface IFormTitle {
    text: string;
}

export const FormTitle: React.FunctionComponent<IFormTitle> = (props) => {
    return (
        <div className="os-review-form__title">
            <h3 style={{ fontSize: '150%', fontWeight: 'bold' }}>{props.text || 'Write a Review'}</h3>
        </div>
    );
};
