import React, { useState } from "react";
import Todoitems from "./todoitems";
import InputArea from "./inputArea";

function App() {
    const [listArray, setlistArray] = useState([]);

    function handleClick(newlist) {
        setlistArray((prevValue) => {
            return [...prevValue, newlist];
        });
        // setnewlist("");
    }

    function deleteitems(id) {
        setlistArray((prevValue) => {
            return prevValue.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea additem={handleClick} />
            <div>
                <ul>
                    {listArray.map((todolist, index) => (
                        <Todoitems
                            key={index}
                            id={index}
                            onChecked={deleteitems}
                            text={todolist}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
