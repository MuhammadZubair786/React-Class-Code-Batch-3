import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

function Todo() {
    let [item, setItem] = useState(["test"])
    let [inputData, setinputData] = useState()

    const AddTodo = () => {

        // ... spread op 

        console.log(inputData)

        setItem([...item, inputData])

        setinputData("")

    }

    const deletItem =(ind)=>{
        console.log(ind)


       item.splice(ind,1)
        setItem([...item])

        // Pop() 
        // .filter(): 1000
        // .remove()
        // splice (index,)

        // .splice(startindex,count,newvalue)


    }

    return (
        <div>
            <div style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>

                <input type="text" placeholder="Enter Todo"
                    value={inputData || ""}
                    onChange={(e) => setinputData(e.target.value)}
                />

                <div style={{ display: "inline-block", }}>
                    <IoAddCircleSharp size={20} color="#0EEC0E" onClick={() => AddTodo()} />

                </div>

            </div>
            <div>
                {item.map((val, ind) => {
                    return (
                        <div style={{  textAlign: "center" }}>

                            <li style={{ display: "inline-block",textAlign:"left",overflow:"hidden" }} key={ind}>
                                <b style={{ width:200 + "px", display: "inline-block",overflow:"hidden" }}>{val}</b>
                                <BiSolidMessageSquareEdit style={{margin:2+"px",cursor:"pointer"}} color="blue" size={25}/>
                                <MdDelete color="red" size={25} style={{cursor:"pointer"}} onClick={()=>deletItem(ind)}/>
                            </li>
                           
                        </div>
                    )

                })}
            </div>
        </div>


    )
}
export default Todo