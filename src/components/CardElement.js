import React from "react";


function CardElement(props){

    return(
        <div onClick={() => {props.onHandleFlip(props.card)}} className={`card ${props.card.flipped? "flip": ""}`}id={props.card.id}>
            <div className="front">
                <img className="icon" src={`assets/img/${props.card.icon}.png`} alt={props.card.icon}></img>
            </div>
            <div className="back">
                <img src="assets/img/desc.png" alt="desc"></img>
            </div>
        </div>
    )

}

export default CardElement;