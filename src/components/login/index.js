import React from "react";
import "./style.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors }, //propiedad que muestra cual es el error en el formulario
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="Form">
      <h2>Serendipia!</h2>
      {/* evento submit  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="UserName"
            {...register("Name", { required: true, maxLength: 20 })}
            // campo obligatorio
          />
          {errors.Name?.type === "required" && ( //error muestra al user que el campo necesario es el username
            <p>The Field Username is required</p>
          )}
        </div>
        <div>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="mail@mail.com"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p>the Fiel email is required</p>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Passowrd"
            {...register("password")}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
