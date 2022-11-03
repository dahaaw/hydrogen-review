import React from 'react';

export interface IFormActionCancel {
    text?: String;
}

const FormActionCancel: React.FunctionComponent<IFormActionCancel> = (props) => {
    return (
        <div className="os-review-form__action os-review-form__action-submit">
            <button className="os-btn os-btn-cancel">{props.text || 'cancel'}</button>
        </div>
    );
};

export default FormActionCancel;
