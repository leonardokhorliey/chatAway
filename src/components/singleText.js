import { useState } from "react";

const SingleText = ({message, isUserText, date}) => {
    let k = new Date(date);

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const [time, setTime] = useState(k.getDate() + " " + month[k.getMonth()] + " " + k.getFullYear() + " " + date.substring(11, 16))

    return (
        <div className= "text-area">
            <div className= {isUserText ? "text-box user-text" : "text-box"}>
                <p>{message}</p>
                <p style= {{fontSize: "0.75rem", color: "gray"}}>{time}</p>
            </div>
        </div>
    )
}

export default SingleText