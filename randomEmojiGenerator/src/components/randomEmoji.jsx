import React, {useState} from "react";
import "../styles/randomEmoji.css";

function randomEmoji() {

    const [generateEmoji, setGenerateEmoji] = useState("😀");

    const generateRandomEmoji = () => {
        const sampleEmojis = ["😀", "😂", "😍", "😎", "😭", "😡"];
        const randomIndex = Math.floor(Math.random() * sampleEmojis.length);
        setGenerateEmoji(sampleEmojis[randomIndex]);
    }

   
    return (

        <>
        
        <div>

            {/* Title */}

            <h2 id="title">Random Emoji Generator</h2>

            {/* Random Emoji Generator */}

            <div className="container">

                <span className="emoji">{generateEmoji}</span>

            </div>

        </div>
        
        <div>
            
            <button id="generateEmoji" onClick={generateRandomEmoji}>Generate Emoji</button>

        </div>

        </>

    )

}

export default randomEmoji;
