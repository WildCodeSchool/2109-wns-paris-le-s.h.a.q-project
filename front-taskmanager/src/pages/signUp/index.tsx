import React from 'react';
import { useForm } from 'react-hook-form';
import "../../style/signUp.css"; 

interface ISignUnInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }


const SignUp = () => {
      const { register, handleSubmit, watch, formState: { errors } } = useForm<ISignUnInput>({
        mode: 'onChange',
      });

      const submitForm = async (dataForm: ISignUnInput) => {
        alert(JSON.stringify(dataForm));
      };// form submit function which will invoke after successful validation
      console.log(watch("firstName", "lastName")); // watch input value by passing the name of it
      console.log(errors);

    return(
        <>
        <h1>Sign Up page</h1>
        <form onSubmit={handleSubmit(submitForm)} autoComplete="off" >
        <section>
        <label>First Name</label>
            <input
                {...register("firstName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
                })}
            />
         {errors?.firstName?.type === "required" && <p>This field is required</p>}
            {errors?.firstName?.type === "maxLength" && (
                <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.firstName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
            )}    
  
        <label>Last Name</label>
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
        )}

        <label htmlFor="email">email</label>
        <input
          id="email"
          defaultValue=""
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: "required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            }
          })}
          type="email"
          placeholder="example@mail.com"
        />

        <label htmlFor="password">password</label>
        <input
          id="password"
          defaultValue=""
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password", {
            required: "required",
            minLength: {
              value: 5,
              message: "min length is 5"
            }
          })}
          type="password"
          placeholder="password"
        />
        </section>
        <button type="submit">
              REGISTER
        </button>
    </form>
    </>
    )
}

export default SignUp;