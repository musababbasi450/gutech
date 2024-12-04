import React from "react";
import "../App.css";

function Messages ({ message }) 
{
    return (
        <div class="messages">
            <p>1. {message.message1}</p>
            <p>2. {message.message2}</p>
            <p>3.{message.message3}</p>
        </div>

    )
}

export default Messages;