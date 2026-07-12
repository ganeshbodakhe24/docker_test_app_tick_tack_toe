import { useContext, useEffect } from "react";
import { GlobalData } from "../App";
import { useState } from "react";

function Player_info() {
    const { player1score, player2score, Tie } = useContext(GlobalData);
    const [player1_win, setPlayer1_win] = useState("");//css class
    const [player2_win, setPlayer2_win] = useState("");//css class
    const [tie, setTie] = useState("tie");
  
    //audio
    const[winAutio,setWinAudio]=useState(0);
    const[tieAutio,setTieAudio]=useState(0);

    useEffect(() => {
        setPlayer1_win("player1_win");
        setWinAudio(1);
        // console.log("  match player1 win");
        const timeoutId = setTimeout(() => {
            setPlayer1_win("");//clear css of player first
            setWinAudio(0);
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [player1score]);


    useEffect(() => {
        setPlayer2_win("player2_win");
        setWinAudio(1);
        // console.log("  match  player2 win");

        const timeoutId = setTimeout(() => {
            setPlayer2_win("");//clear css of player second
            setWinAudio(0);
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [player2score]);


    useEffect(() => {
        setTie("tie");
        setTieAudio(1);
        // console.log(" match tie ");

        const timeoutId = setTimeout(() => {
            setTie("");//clear css of tie 
            setTieAudio(0);
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [Tie]);
    return (
        <>
          {
                winAutio ===1 ? <audio
                src="win.wav"
                // controls
                autoPlay={true}
                loop={false}
              /> : ""
            }
            {
                tieAutio ===1 ? <audio
                src="lose.wav"
                // controls
                autoPlay={true}
                loop={false}
              /> : ""
            }
            <div className="player_info">
                <div className={player1_win}>
                    <p>player 1 :</p>
                    <p>{player1score}</p>
                </div>
                <div className={tie}>
                    <p>Tie:</p>
                    <p>{Tie}</p>
                </div>
                <div className={player2_win}>
                    <p>player 2 :</p>
                    <p>{player2score}</p>
                </div>
            </div>
            <div className="footer_text">
            <p>Developer : Ganesh Bodakhe</p>
            </div>
        </>
    )
}
export default Player_info;