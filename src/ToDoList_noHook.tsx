import {useState} from "react";

function ToDoList() {
    const [ toDo, setTodo ] = useState("");
    const [ toDoError, setTodoError ] = useState("")
    const onChange = (event:React.FormEvent<HTMLInputElement>) => {
        const {currentTarget: {value}} =event;
        setTodoError("");
        setTodo(value);
    };
    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (toDo.length < 10) {
            return setTodoError("To Do should be longer");
        }
        console.log("submit");
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} placeholder="Write a to do" />
                <button>Add</button>
                {toDoError !== "" ? toDoError: null}
            </form>
        </div>
    );
}
