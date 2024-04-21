import { useEffect, useState } from "react"
import NavbarComp from "../../Widget/navbar"
import axios from "axios"
import { Link } from "react-router-dom"

function Contact() {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        getUser()
    }, [])
    const getUser =
        async () => {
            let reqOptions = {
                url: "https://jsonplaceholder.typicode.com/users",
                method: "GET",
            }

            let response = await axios.request(reqOptions);
            console.log(response.data);
            setUserList(response.data)
        }


    return (
        <>
            <NavbarComp />
            <h1>Contact List </h1>
            <div className="container">
                <div className="row">


                    {userList.map((v, i) => {
                        return (
                            <div className="col col-lg-4 p-4">
                                <div className="card" style={{ width: "18rem" }}>

                                    <div className="card-body">
                                        <h5 className="card-title">{v.name}</h5>
                                        <p className="card-text">
                                            {v.company.name}
                                        </p>
                                        <Link to={`/contact/${v.id}`} className="btn btn-primary">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>


                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Contact