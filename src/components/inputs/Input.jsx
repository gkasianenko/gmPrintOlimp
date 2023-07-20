import classes from "./Input.module.css";
import redArrow from "../../assets/arrow-red.svg"
import { useState } from "react";

const Input = (props) => {

    const [optionsList, setOptionsList] = useState([{name: "90x50 мм"}, {name: "siska"}]);

    const [selectedOption, setSelectedOption] = useState(optionsList[0].name)

    const currentOptionStyle =  [classes.current_input_option, classes.input_option].join(" ");


return(<div>
    <div className={classes.input_header}>
        <p>{props.title}</p>
    </div>
    <div className={classes.input_wrap}>
        <span className={classes.input_selected}>{selectedOption}
        </span>
        <span className={classes.input_icon}>
            <img className={classes.input_arrow} src={redArrow}></img>
        </span>
    </div>
    <div>
        <ul>
            <li className={currentOptionStyle}>300 г/м2 картон глянц.</li>
        </ul>
    </div>
</div>

)
}


export default Input;