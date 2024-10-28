import {useState} from "react";
import {useForm} from "react-hook-form";

interface IFormData {
    errors: {
        email: {message: string}
    };
    email: string;
    toDo: string;
    password1: string;
    password2: string;

}

function ToDoList() {
    const { register, handleSubmit, formState: {errors}, setError, setValue } = useForm<IFormData>({
        defaultValues: {email: "@naver.com"}
    });
    const onValid = (data:IFormData) => {
        if( data.password1 !== data.password2){
            setError("password1", {message : "Password are not the same"}, {shouldFocus: true});
        }
        else{
            setValue("password1", "")
        }
    };


    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
                <input {...register("toDo",{required: true, minLength:
                        { value: 2, message: "too short"},
                        validate: (value) => value.includes("nico") ? "no nico allowed": true})}
                       placeholder="Write a to do"
                />
                <span>{errors?.toDo?.message}</span>
                <input {...register("email",
                    {pattern :{
                            value:  /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com"
                        }})} placeholder="Email" />
                <span>{errors?.email?.message}</span>
                <input {...register("password1")} placeholder="password1" />
                <input {...register("password2")} placeholder="password2" />
                <span>{errors?.password1?.message}</span>
                <button>Add</button>
            </form>
        </div>
    )
}
export default ToDoList;