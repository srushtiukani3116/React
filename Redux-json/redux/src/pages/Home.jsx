import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADDTODODATA, GETTODODATA } from '../Redux/ActionType';

export default function Home() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const todoData = useSelector((store) => store.todo);
    console.log(todoData);

    const fetchdata = ()=>{
        fetch("http://localhost:8000/task")
            .then((res) => res.json())
            .then((data)=>{
                console.log(data);
                dispatch({type:GETTODODATA, payload : data})
            })
            .catch((err) => console.log("Something is wrong",err))
    }
    

    useEffect(()=>{
        fetchdata();
    },[])

    const handleAddTask = () => {
        dispatch({ type: ADDTODODATA, payload: todo });
        setTodo("");
        fetchdata();
    }

    return (
        <>
            <div className='main'>
                <h1>Todo App with Redux</h1>
                <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='Enter Your Task' /><br/><br/>
                <button onClick={handleAddTask} value={todo}>Add</button>


                <div>
                    {todoData.map((item) =>
                        {return <div key={item.id}>
                                <p>{`Id is :- ${item.id}`}</p>
                                <h2>{`Todo Task is :- ${item.todo}`}</h2>
                            </div>
                        })}
                </div>
            </div>
        </>
    )
}