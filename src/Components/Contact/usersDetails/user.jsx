import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
function UserDetails(){
    let {id} = useParams()
    let [userData,SetUserData] =useState([])

    useEffect(()=>{
        getUser()
    },[])
    const getUser=async () => {
            let reqOptions = {
                url: `https://jsonplaceholder.typicode.com/users/${id}`,
                method: "GET",
            }

            let response = await axios.request(reqOptions);
            console.log(response.data);
            SetUserData([response.data])
        
        }
    
   
    return(
        <>
        <h1>User Details</h1>
        {
            userData.map((v,i)=>{
                return(
                    <>
                    <h1>{v.username}</h1>
                    <h1>{v.website}</h1>
                    <h1>{v.email}</h1>
                    <h1>{v.address.street}</h1>
                    <Link to={"/contact/1/12"}>
                        Click
                    </Link>
                    </>
                )
            })
        }
        </>

    )
}
export default UserDetails