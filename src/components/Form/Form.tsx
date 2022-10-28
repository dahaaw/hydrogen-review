import React, { useState } from 'react';
import './Form.css';

export interface IFormProps {
    children?: JSX.Element;
}
export const Form: React.FunctionComponent<IFormProps> = (props) => {
    const [formValues, setFormValues] = useState({});

    const setFormValue = (key: string, value: any) => {
        setFormValues({ ...formValues, [key]: value });
    };
    return <div className="os-review-form">{React.Children.map(props.children, (child: any) => React.cloneElement(child, { formValues, setFormValue }))}</div>;
};
