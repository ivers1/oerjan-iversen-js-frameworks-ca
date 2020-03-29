import React from "react";
import { useForm } from "react-hook-form"; 
import * as yup from "yup"; 


const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    message: yup.string().required("Some information is needed")
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
