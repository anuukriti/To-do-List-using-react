import React, { useState } from "react";

function InputArea(props) {
    const [newlist, setnewlist] = useState("");

    function handleChange(events) {
        const newValue = events.target.value;
        setnewlist(newValue);
        // console.log(newValue);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={newlist} />
            <button
                onClick={() => {
                    props.additem(newlist);
                    setnewlist("");
                }}
            >
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;
