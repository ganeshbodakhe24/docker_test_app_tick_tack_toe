import logo from './logo.svg';
import { useCallback, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Borders from './Components/Border';
import Player_info from './Components/Player_info';
import { createContext } from 'react';
export const GlobalData=createContext();
function App() {
  const[player1score,setPlayer1Score]=useState(0);
  const[player2score,setPlayer2Score]=useState(0);
  const[Tie,setTie]=useState(0);

  const setPlayer1ScoreFun=useCallback((flag)=>{
    if(flag===1){
          setPlayer1Score(player1score+10);
        }
  })

  const setPlayer2ScoreFun=useCallback((flag)=>{
    if(flag===1){
      setPlayer2Score(player2score+10);
    }
  })

  const TieFun=useCallback((flag)=>{
    if(flag===1){
      setTie(Tie+1);
    }
  })

  // function setPlayer1ScoreFun(flag){
  //   if(flag===1){
  //     setPlayer1Score(player1score+10);
  //   }
    
  // }
  // function setPlayer2ScoreFun(flag){
  //   if(flag===1){
  //     setPlayer2Score(player2score+10);
  //   }
  // }
  // function TieFun(flag){
  //   setTie(Tie+1);
  // }
  return (
    <>
    <GlobalData.Provider value={{player1score:player1score,player2score:player2score,Tie:Tie ,setPlayer1ScoreFun:setPlayer1ScoreFun,setPlayer2ScoreFun:setPlayer2ScoreFun,TieFun:TieFun}}>
    <Header></Header>
    <Borders></Borders>
    <Player_info></Player_info>
    </GlobalData.Provider>
    </>
  );
}

export default App;
