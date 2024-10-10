import "../App.css";
import React, { useState, useEffect } from 'react';
import { db } from "../Firebase";
import { collection, addDoc, getDocs , deleteDoc , doc ,updateDoc} from "firebase/firestore";


const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [editid , setEditid] = useState(null);

    const addTodo = async (e) => {
        e.preventDefault();  

        if(editid){
            const tododata = doc(db,"todos" , editid);
              console.log(tododata)
              await updateDoc (tododata,{todo : todo})

                setTodos(todos.map((item)=>{
                  if(item.id === editid){
                    return {...item,todo}
                  } 
                  return item
                }))

                setEditid(null);
                alert("Data updated successfully")
        }
        else{
            try {
                const docRef = await addDoc(collection(db, "todos"), {
                    todo: todo,    
                });
                getData()
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }

        setTodo("");
    }

    const getData = async () => {
        await getDocs(collection(db, "todos"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setTodos(newData);                
                console.log(todos, newData);
            });
    }

    const handleDelete = async(id)=>{
        const data = doc(db,"todos",id)
        await  deleteDoc(data);
          let deletedata = todos.filter((item) => item.id != id);
          getData();
          setTodo(deletedata);
    }

    const handleUpdate = async(item)=>{
        setEditid(item.id)
        setTodo(item.todo)
    }

    useEffect(()=>{
        getData();
    }, [])


    return (
            <div className="todo">
                <h1 className="header">Todo-App</h1>
                <div>
                    <input value={todo} type="text" placeholder="Enter Your Todo" onChange={(e)=>setTodo(e.target.value)}/>
                    <button type="submit" className="btn" onClick={addTodo}>{editid ? "Update" : "Add"}</button>
                </div>
            
                <div className="todo-content">
                    {
                        todos.map((item,i)=>{
                            return <div key={item.id}>
                                    <h2>{item.todo}</h2>
                                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                                    <button onClick={()=>handleUpdate(item)}>Update</button>
                                </div>
                            })
                    }
                </div>
            </div>
    )
}

export default Todo