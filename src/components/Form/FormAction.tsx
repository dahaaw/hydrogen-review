import React from 'react';
import FormActionCancel, { IFormActionCancel } from './FormActionCancel';
import FormActionSubmit, { IFormActionSubmit } from './FormActionSubmit';

type FormActionType = React.FunctionComponent<IFormAction> & {
    Submit: React.FC<IFormActionSubmit>;
    Cancel: React.FC<IFormActionCancel>;
};
export interface IFormAction {
    children?: JSX.Element;
}

const FormAction: FormActionType = (props) => {
    return <div className="os-review-form__action-wrapper">{props.children}</div>;
};

FormAction.Submit = FormActionSubmit;
FormAction.Cancel = FormActionCancel;

export default FormAction;
