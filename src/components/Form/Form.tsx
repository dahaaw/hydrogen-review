import React, { useState } from 'react';
import FormTitle, { IFormTitle } from './FormTitle';
import FormInputRating, { IFormInputRating } from './FormInputRating';
import FormInputTitle, { IFormInputTitle } from './FormInputTitle';
import FormInputReview, { IFormInputReview } from './FormInputReview';
import FormInputName, { IFormInputName } from './FormInputName';
import FormInputEmail, { IFormInputEmail } from './FormInputEmail';
import FormAction, { IFormAction } from './FormAction';

import './Form.css';
import cfg from '../../config';

type FormType = React.FunctionComponent<IFormProps> & {
    Title: React.FC<IFormTitle>;
    InputRating: React.FC<IFormInputRating>;
    InputTitle: React.FC<IFormInputTitle>;
    InputReview: React.FC<IFormInputReview>;
    InputName: React.FC<IFormInputName>;
    InputEmail: React.FC<IFormInputEmail>;
    Action: React.FC<IFormAction>;
};

export interface IFormProps {
    children?: JSX.Element;
    osToken: string;
    id: string;
    productId: string;
    fillReviewWidget: any;
}

export interface IFormValues {
    rating?: number;
    name?: string;
    email?: string;
    title?: string;
    review?: string;
}

export const Form: FormType = (props) => {
    const [formValues, setFormValues] = useState<IFormValues>({
        rating: 5
    });
    const [formMessages, setFormMessages] = useState({});

    const setFormValue = (key: string, value: any) => {
        setFormValues({ ...formValues, [key]: value });
    };

    const submitForm = async (e: any) => {
        e.preventDefault();

        const messages: IFormValues = {};
        if (!formValues.name) messages.name = 'required';
        if (!formValues.email) messages.email = 'required';
        if (!formValues.review) messages.review = 'required';
        setFormMessages(messages);
        if (Object.keys(messages).length > 0) return;

        // submit action
        const reqBody = {
            product_id: props.productId,
            user_name: formValues.name,
            user_email: formValues.email,
            rating: formValues.rating,
            title: formValues.title,
            review: formValues.review
        };
        console.log({ reqBody });
        let response: any = await fetch(`${cfg.APP_URL}/review/${props.osToken}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        });

        if (response) props.fillReviewWidget();
        setFormValues({ rating: 5 });
        console.log(await response.json());
    };
    return (
        <form onSubmit={submitForm}>
            <div className="os-review-form">{React.Children.map(props.children, (child: any) => React.cloneElement(child, { formValues, setFormValue, formMessages }))}</div>
        </form>
    );
};

Form.Title = FormTitle;
Form.InputRating = FormInputRating;
Form.InputTitle = FormInputTitle;
Form.InputReview = FormInputReview;
Form.InputName = FormInputName;
Form.InputEmail = FormInputEmail;
Form.Action = FormAction;
