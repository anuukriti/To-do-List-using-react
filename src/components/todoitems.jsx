import React from "react";

function Todoitems(props) {
    // const [isClicked, setClicked] = useState(false);

    // function handleClick() {
    // setClicked((prevValue) => {
    //     return !prevValue;
    // });
    // }

    function checked() {
        props.onChecked(props.id);
    }

    return (
        <div onClick={checked}>
            <li>{props.text}</li>
        </div>
    );
}

export default Todoitems;
