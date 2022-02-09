import React from "react";
import CardElement from "./CardElement";

function Board(props){
    return(
        <div id="board" >
            { props.cards.map( (card, index) => <CardElement onHandleFlip={props.onHandleFlip} key={index} card={card}></CardElement> ) }
        </div>
    );
}

export default Board;