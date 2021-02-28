import React from 'react';
import c from './formControl.module.css';
import { Field } from 'redux-form';

export const FormControl = ({input, meta: {touched, error} , children, ...props}) => {
    const hasError = error && touched;
    return <div>
        <div className={hasError && c.formControl}>
        {children}
        </div>
        {hasError && <span className={c.errorMessage}>{error}</span>}
        </div>
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}


export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}></input></FormControl>
}

export const createField = (component, name, type, validate = [], placeholder, text = '') => {
    return <div>
        <Field component={component} name={name} type={type} 
        placeholder={placeholder} validate={validate} />{text}
    </div>
}