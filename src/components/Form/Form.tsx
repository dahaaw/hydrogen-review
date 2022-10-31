import React, { useState } from 'react';
import './Form.css';

export interface IFormProps {
    children?: JSX.Element;
}

export interface IFormValues {
    rating?: number;
    name?: string;
    email?: string;
    title?: string;
    review?: string;
}

export const Form: React.FunctionComponent<IFormProps> = (props) => {
    const [formValues, setFormValues] = useState<IFormValues>({});
    const [formMessages, setFormMessages] = useState({});

    const setFormValue = (key: string, value: any) => {
        setFormValues({ ...formValues, [key]: value });
    };

    const submitForm = (e: any) => {
        e.preventDefault();

        const messages: IFormValues = {};
        if (!formValues.rating) messages.rating = 1;
        if (!formValues.name) messages.name = 'required';
        if (!formValues.email) messages.email = 'required';
        if (!formValues.review) messages.review = 'required';

        setFormMessages(messages);
    };
    return (
        <form onSubmit={submitForm}>
            <div className="os-review-form">{React.Children.map(props.children, (child: any) => React.cloneElement(child, { formValues, setFormValue, formMessages }))}</div>
        </form>
    );
};
