import React, {useState, useEffect} from "react";
import "../styles/randomEmoji.css";

function randomEmoji() {

    const [generateEmoji, setGenerateEmoji] = useState("😀");

    useEffect(() => {
        const sampleEmojis = ["😀", "😂", "😍", "😎", "😭", "😡"];
        const randomIndex = Math.floor(Math.random() * sampleEmojis.length);
        setGenerateEmoji(sampleEmojis[randomIndex]);
    }, []);
   
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

        </div>

        </>

    )

}

export default randomEmoji;
