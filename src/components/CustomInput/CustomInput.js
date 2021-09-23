import React from 'react';

const CustomInput = ({field, form, ...rest}) => {
    const {name} = field;
    return (
        <div>
            <input {...rest} {...field}/>
            {form.touched[name] && form.errors[name] && (
                <div>{form.errors[name]}</div>
            )}
        </div>
    )
};

export default CustomInput;