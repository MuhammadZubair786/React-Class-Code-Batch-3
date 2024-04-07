import React,{ useState,useEffect } from "react"

import  axios  from "axios"

function CallingApi(){
    let [count,setCount]=useState(0)
    let [item,setItem] = useState([])
    let [cat,setCat] = useState()
    let [product,setProduct]=useState([])
    console.log("first run 1")

    // useEffect(()=>{
    //     console.log("Run one Time")

    // },[])

    // useEffect(()=>{
    //     console.log("Run every update state")
    // },)

    // useEffect(()=>{
    //     console.log("Run every update state")
    // },[count])
    // console.log("first run 2")

    useEffect(()=>{
      if(cat!=null || cat!=""){
        console.log(cat)
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `https://fakestoreapi.com/products/category/${cat}`,
          headers: { }
        };
        
        axios.request(config)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.log(error);
        });


      }

    },[cat])

    useEffect(()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://fakestoreapi.com/products/categories',
            headers: { }
          };
          axios.request(config)
          .then((response) => {
            setItem(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    },[])


    return(
        
        <>
        <h1>ECOM WEBSITE</h1>
        {
          item.map((v,i)=>{
            return(
              <button key={i} onClick={()=>setCat(v)} style={{margin:2}}>{v}</button>
            )
          })
        }
        <br/>
        <br/>

<div style={{
   display:"flex",
   justifyContent:"center",
   flexWrap:"wrap"
   
}}>

        {
        
          product.map((v,i)=>{
            return(
            
             <div style={{
              width:200+'px',
              height: '200px',
             
              border:"2px solid red",
              margin:"2px"
             }}>
              <h4>{v.title.toString().substring(0,20)}</h4>
              <img src={v.image} style={{width:100+"%",height:"150px"}}/>
             </div>
            )
          
          })
        }
        {/* <h1 style={{textAlign:"center"}}>{count}</h1> */}
        {/* <div style={{textAlign:"center"}} >
        <button onClick={()=>setCount(++count)}>inc</button>
        <button onClick={()=>setCount(--count)}>dec</button>
        </div> */}
        {

        }
       
</div>
        
        </>
        
    )
}
export default CallingApi