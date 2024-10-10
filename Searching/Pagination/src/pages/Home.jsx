import React, { useEffect, useState } from 'react'

export default function Home() {

    const [product , setproduct] = useState([]);
    const [inputdata , setinputdata] = useState("");
    const [page , setpage] = useState(1);

    let total = 20;

    useEffect(()=>{
        fetch(`http://localhost:8000/products?_limit=3&q=${inputdata}&_page=${page}`)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                setproduct(data); 
            })
            .catch(err => console.log("something is wrong",err))

    },[inputdata , page])

    const handleLToH = () => {
        const sortedData = product.sort((a, b) => a.price - b.price)
        console.log(sortedData)
        setproduct([...product], sortedData)
    }

    const handleHToL = () => {
        const sortedData = product.sort((a, b) => b.price - a.price)
        console.log(sortedData)
        setproduct([...product], sortedData)
    }

  return (
    <div>
        <div>
            <input type='text' value={inputdata} onChange={(e) =>setinputdata(e.target.value)} placeholder='Search Here....'/><br/><br/>
        </div>
        <div>
            <button disabled={page <= 1} onClick={() => setpage(page - 1)}>Prev</button>
            <button>{page}</button>
            <button disabled={page == Math.ceil((total) / 3)} onClick={() => setpage(page + 1)}>Next</button><br/><br/>
        </div>

        <div>
            <button onClick={handleLToH}>LowToHigh</button>
            <button onClick={handleHToL}>HighToLow</button>
        </div>
        
        <div>
            {
                product.map((item) => {
                    return <div key={item.id} style={{ border: "1px solid black", margin: "10px" }}>
                            <img src={item.image} width='200px'/>
                            <h2>{item.title}</h2>
                            <h3>{item.category}</h3>
                            <h4>{item.price}</h4>
                            <p>{item.description}</p>
                            <p>{item.rating.rate}</p>
                            <p>{item.rating.count}</p>
                        </div>
                })
            }
        </div>

    </div>
  )
}
