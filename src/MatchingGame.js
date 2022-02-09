import React, { useEffect, useState } from "react";
import GameOver from "./components/GameOver";
import Board from "./components/Board";
import game from "./game/game"
import MoveCount from "./components/MoveCount";

function MatchingGame() {

    const [Cards, setCards] = useState([]);
    const [Go, setGo] = useState(false);
    const [Cont, setCont] = useState(0);

    useEffect(() => {
        setCards(game.createCard());
    }, []);

    function onHandleFlip(card) {
            game.flipCards(card.id,
            ()=>{
                setGo(true);
            }, 
            ()=>{
                setCards([...game.cards]);
            }, move);
        setCards([...game.cards]);
    }

    function restart() {
        game.clear();
        setCards(game.createCard());
        setGo(false);
        setCont(0);
    }

    function move(){
        setCont(Cont + 1);
    }

    return (
        <div className="container">
            <div className="inicio">
                <p>Crypto Matching</p>
            </div>
            <br />
            <div className="box">
                <Board onHandleFlip={onHandleFlip} cards={Cards}></Board>
            </div>
            <GameOver show={Go} restart={restart}></GameOver>
            <MoveCount cont={Cont}></MoveCount>
            <div className="foot">
                <a href="https://github.com/natha6dev" class="link">Developed by natha6Dev</a>
            </div>
        </div>
    );
}


export default MatchingGame;