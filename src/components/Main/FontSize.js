import React, {useState} from "react";
import './style.css';

function FontSize (){
    const [fontSize, setFontSize] = useState(15);

    return (
        <div className="usual">
            <p>Alice in Wonderland</p>
            <button onClick={() => setFontSize(fontSize + 1)}>
                Eat me
            </button>
            <button onClick={() => setFontSize(fontSize - 1)}>
                Drink me
            </button>
        <p style={{fontSize: `${fontSize}px`}}>
        “And the moral of that is—'Be what you would seem to be'—or, if you'd like it put more simply—'Never imagine yourself not to be otherwise than what it might appear to others that what you were or might have been was not otherwise than what you had been would have appeared to them to be otherwise. '”
        </p>

        </div>

    );
}

export default FontSize;