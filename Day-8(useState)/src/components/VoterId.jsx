import React from 'react'

const VoterId = (props) => {
    return (
        <div style={props.age >= 18 ? { backgroundColor: "lightblue" } : {
            backgroundColor: "red", color: "white"
        }} className="h-28 w-fit px-10 text-6xl flex items-center justify-center rounded-lg">
            {props.age >= 18 ? "He is eligible to vote !" : "He is not eligible to vote !"}
        </div>
    )
}

export default VoterId