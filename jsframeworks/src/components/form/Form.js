import React from "react";
import { useForm } from "react-hook-form"; 
import * as yup from "yup"; 


const schema = yup.object().shape({
    firstName: yup
    .string()
    .label('firstName')
    .min(2, `Not long enough!`)
    .required("First name is required"),
    lastName: yup
    .string()
    .label('lastName')
    .min(2, `Not long enough!`)
    .required("Last name is required"),
    email: yup
        .string()
        .label('Email')
        .email("Invalid Email")
        .required("Email is required"),
    message: yup
    .string()
    .label('Message')
    .min(10, `Require some information!`)
    .required(), 
});

function Form() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="firstName" placeholder="First name" ref={register()} />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <input name="lastName" placeholder="Last name" ref={register()} />
            {errors.lastName && <p>{errors.lastName.message}</p>}

            <input name="email" placeholder="Email" ref={register()} />
            {errors.email && <p>{errors.email.message}</p>}

            <input name="message" placeholder="Message" ref={register()} />
            {errors.message && <p>{errors.message.message}</p>}

            <input type="submit" />
        </form>
    );
}

export default Form;
