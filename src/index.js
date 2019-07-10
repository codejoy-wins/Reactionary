import React from 'react';
import ReactDom from 'react-dom';

function MyInfo(){
    const MyStyle = {
        color: "gold",
    }
    return (
        <div>
            <h1 style={MyStyle}>Max Jann</h1>
            <p>I like coding and chess.  I like going to the beach and playing football and basketball.  My favorite shows are Game of Thrones, Stranger Things, and Ozark. Here are the top 3 places I want to visit.</p>
            <ol>
                <li>Maui</li>
                <li>Jerusalem</li>
                <li>Paris</li>
            </ol>
        </div>
    )
}

ReactDom.render(< MyInfo />,document.getElementById("root"));
