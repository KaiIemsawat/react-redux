import "./AnimalShow.css";
import { useState } from "react";

import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
};

function AnimalShow({ type }) {
    const [clickCount, setClickCount] = useState(0);

    const clickHandler = () => {
        setClickCount(clickCount + 1);
    };

    return (
        <div className="animal-show" onClick={clickHandler}>
            <img className="animal" src={svgMap[type]} alt="animal" />
            <img
                className="heart"
                src={heart}
                alt="heart icon"
                style={{ width: 10 + 10 * clickCount + "px" }}
            />
        </div>
    );
}

export default AnimalShow;
