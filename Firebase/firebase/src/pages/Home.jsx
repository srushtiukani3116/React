import React, { useEffect, useState } from 'react'
import { db } from '../Firebase';
import {collection ,addDoc ,doc ,getDocs , deleteDoc, updateDoc } from "firebase/firestore"
// import { doc,  } from "firebase/firestore";

export default function Home() {
    const [todo,setTodo] = useState("");
    const todoCollection = collection(db, "todos");
    const [todos , setTodos] = useState([])
    const [IsEditid , setIsEditid] = useState(null);

    const handleTask = async (e)=> {
        e.preventDefault();
        
        try {
            if(IsEditid){

              const tododata = doc(db,"todos" , IsEditid);
              console.log(tododata)
              await updateDoc (tododata,{todo : todo})

                setTodos(todos.map((item)=>{
                  if(item.id === IsEditid){
                    return {...item,todo}
                  } 
                  return item
                }))

                setIsEditid(null);
                alert("Data updated successfully")
            }
            else{
              await addDoc(todoCollection, { todo : todo });
              console.log(addDoc);
              console.log("Data added successfully")
              GetData();
            }
            setTodo("");
        }
        catch(error){
          console.log("Something is wrong",error);
        }
    }

    // GetData
    async function GetData(){
      await getDocs(collection(db, "todos"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setTodos(newData);                
                console.log(todos, newData);
            })
    }
    GetData();

    // DELETE-DATA
    const handleDelete = async(id)=>{
      const data = doc(db,"todos",id)
      await  deleteDoc(data);
        let deletedata = todos.filter((item) => item.id !=id);
        setTodo(deletedata);
    }

    //Edit-data
    const handleEdit = (item)=>{
      setIsEditid (item.id)
      setTodo(item.todo)
    }


    useEffect(()=>{
      GetData();
    },[])

  return (
    <div>

      <form onSubmit={handleTask}>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder='Enter Task' />
        <button>{IsEditid ? "Update" : "Add"} </button>
      </form>

      <div>
        {
          todos.map((item)=>{
            return <div key={item.id}>
                <h2>Your Task Is :- {item.todo}</h2>
                <button onClick={()=>handleDelete(item.id)}>Delete</button>
                <button onClick={()=> handleEdit(item)}>Edit</button>
            </div>
          })
        }
      </div>
    </div>
  )
}