import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, GET_TODO, EDIT_TODO, DELETE_TODO } from '../Redux/ActionType';

export default function Home() {
    const [name, setName] = useState("");
    const [todo, setTodo] = useState("");
    const [editId, setEditId] = useState(null);
    const tododata = useSelector((state) => state.todo); 
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:8000/todo")
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: GET_TODO, payload: data });
                console.log(data);
            });
    }, [dispatch]);

    const handleTodo = (e) => {
        e.preventDefault();

        if (editId) {
            fetch(`http://localhost:8000/todo/${editId}`, {
                method: "PUT",
                body: JSON.stringify({name,todo}),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: EDIT_TODO, payload: data });
                console.log("Data Updated Successfully", data);
                setEditId(null);
            })
            .catch((err) => console.log("Something went wrong", err));
        } 
        else {
            fetch("http://localhost:8000/todo", {
                method: "POST",
                body: JSON.stringify({name,todo}),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: ADD_TODO, payload: data });
                console.log("Data Added Successfully", data);
            })
            .catch((err) => console.log("Something went wrong", err));
        }
        setName("");
        setTodo("");
    }

    const handleEdit = (item) => {
        setName(item.name);
        setTodo(item.todo);
        setEditId(item.id);
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:8000/todo/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            dispatch({ type: DELETE_TODO, payload: id });
            console.log("Todo deleted successfully");
        })
        .catch((err) => console.log("Something went wrong", err));
    }

    return (
        <div className="container">
            <div>
                <form onSubmit={handleTodo}>
                    <label>Name: </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Enter Your Name' />
                    <label>Todo: </label>
                    <input value={todo} onChange={(e) => setTodo(e.target.value)} type='text' placeholder='Enter Your Todo' />
                    <button className={editId ? 'update-button' : 'add-button'}>{editId ? 'Update' : 'Add'}</button>
                </form>
            </div>

            <div>
                {
                    tododata.map((item) => (
                        <div key={item.id} className="todo-item">
                            <h2 style={{color:'#414115'}}>Name Is:- {item.name}</h2>
                            <h3 style={{color:'#537e52'}}>Task Is:- {item.todo}</h3>
                            <button onClick={() => handleEdit(item)}>Edit</button>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
