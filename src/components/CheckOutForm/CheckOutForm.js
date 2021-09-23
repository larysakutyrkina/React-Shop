import React from 'react';
import styles from './CheckOutForm.module.scss'
import {Formik, Form, Field} from "formik";
import CustomInput from '../CustomInput/CustomInput';
import * as yup from 'yup';
import {useDispatch} from "react-redux";
import {emptyCart} from "../../store/products/actions";

const CheckOutForm = () => {

    const isRequired = <p className={styles.error}>Required field</p>
    const dispatch = useDispatch()

    const schema = yup.object().shape({
        name: yup.string().required(isRequired).min(2, <p className={styles.error}>Must be at least 2 characters
            long!</p>),
        lastName: yup.string().required(isRequired).min(3, <p className={styles.error}>Must be at least 3 characters
            long!</p>),
        age: yup.number().required(isRequired),
        deliveryAddress: yup.string().required(isRequired),
        phoneNumber: yup.number().required(isRequired).typeError(),
    })

    return (
        <Formik
            initialValues={
                {
                    name: '',
                    lastName: '',
                    age: '',
                    deliveryAddress: '',
                    phoneNumber: ''
                }
            }
            onSubmit={(values, {resetForm}) => {
                console.log('Customer info: ', values)
                localStorage.removeItem('cart')
                dispatch(emptyCart())
                resetForm({values: ''})
            }}
            validationSchema={schema}
        >
            {(formikProps) => {
                return (
                    <Form className={styles.form}>
                        <h1 className={styles.title}> Checkout Form </h1>
                        <div>
                            <Field
                                className={styles.field}
                                component={CustomInput}
                                name='name'
                                type='text'
                                placeholder='Name'
                            />

                        </div>
                        <div>
                            <Field
                                className={styles.field}
                                component={CustomInput}
                                name='lastName'
                                type='text'
                                placeholder='Last Name'/>
                        </div>
                        <div>
                            <Field
                                className={styles.field}
                                component={CustomInput}
                                name='age'
                                type='number'
                                placeholder='Age'/>
                        </div>
                        <div>
                            <Field
                                className={styles.field}
                                component={CustomInput}
                                name='deliveryAddress'
                                type='text'
                                placeholder='Delivery Address'/>
                        </div>
                        <div>
                            <Field
                                className={styles.field}
                                component={CustomInput}
                                name='phoneNumber'
                                type='text'
                                placeholder='Phone Number'/>
                        </div>
                        <div>
                            <button
                                className={styles.btn}
                                type='submit'
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                )
            }}
        </Formik>)
}

export default CheckOutForm;