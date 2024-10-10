import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [name, setName] = useState("");
    const [todo, setTodo] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        dataFetching();
    }, []);

    const handleForm = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/todo', { name, todo })
            .then(response => {
                setData(prevData => [...prevData, response.data]);
                console.log('Data added successfully!', response.data);
            })
            .catch((error) => {
                console.error('Error adding data:', error);
            });

        setName("");
        setTodo("");
    };

    const dataFetching = () => {
        axios.get('http://localhost:8000/todo')
            .then(response => {
                setData(response.data);
            })
            .catch((err) => {
                console.error("Something went wrong:", err);
            });
    };

    const handledeleteData = (id) => {
        axios.delete(`http://localhost:8000/todo/${id}`)
            .then(() => {
                setData(prevData => prevData.filter(item => item.id !== id));
            })
            .catch((error) => {
                console.error('Error deleting data:', error);
            });
    };

    return (
        <div>
            <h1>Todo with Axios:-</h1>
            <form onSubmit={handleForm}>
                <label>Name:-</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' /><br /><br />
                <label>Todo:-</label>
                <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter Your Todo' /><br /><br />
                <button className='btn'>Add</button>
            </form>

            <div>
                {data.map((item) => (
                    <div key={item.id} className="todo-item">
                        <p>{`NAME: ${item.name}`}</p>
                        <h2>{`TODO: ${item.todo}`}</h2>
                        <button className="delete-button" onClick={() => handledeleteData(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
