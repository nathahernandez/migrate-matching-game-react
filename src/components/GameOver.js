import React, { Fragment } from "react";


function GameOver(props){
        return(props.show?
            <div id="gameOver">
                <div class="msgfinal">
                    Congratulations, you won the game!
                </div>
                <button id="restart" onClick={props.restart}>
                    Play again
                </button>
            </div> : <Fragment/>
        );
}


export default GameOver;