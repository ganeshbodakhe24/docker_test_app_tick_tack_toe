import O_print from "./O_print";
import X_print from "./X_print";
import React from 'react';
import { useState, useEffect, useContext, } from "react";
import { GlobalData } from "../App";
function Borders() {
    const { setPlayer1ScoreFun, setPlayer2ScoreFun, TieFun } = useContext(GlobalData);
    // use state
    //cohice 0 for O and 1 for x and -1 for on fill box
    const [choice, setChoice] = useState(0);
    const [box1, setBox1] = useState(-1);
    const [box2, setBox2] = useState(-1);
    const [box3, setBox3] = useState(-1);
    const [box4, setBox4] = useState(-1);
    const [box5, setBox5] = useState(-1);
    const [box6, setBox6] = useState(-1);
    const [box7, setBox7] = useState(-1);
    const [box8, setBox8] = useState(-1);
    const [box9, setBox9] = useState(-1);
    const [reset, setReset] = useState(0);//default no reset
    const [toggler,setToggler]=useState(false);//use to call use effect on condition onlny to call use effect when on click box
    useEffect(() => {
        if (reset === 1) {
            console.log("reset");
            //reset fields
            setReset(0);
            setBox1(-1);
            setBox2(-1);
            setBox3(-1);
            setBox4(-1);
            setBox5(-1);
            setBox6(-1);
            setBox7(-1);
            setBox8(-1);
            setBox9(-1);
            
            return;
        }
        if ((box1 === 1 && box2 === 1 && box3 === 1) ||
            (box4 === 1 && box5 === 1 && box6 === 1) ||
            (box7 === 1 && box8 === 1 && box9 === 1) ||
            (box1 === 1 && box4 === 1 && box7 === 1) ||
            (box2 === 1 && box5 === 1 && box8 === 1) ||
            (box3 === 1 && box6 === 1 && box9 === 1) ||
            (box1 === 1 && box5 === 1 && box9 === 1) ||
            (box3 === 1 && box5 === 1 && box7 === 1)
        ) {
            // console.log("x win");
            setPlayer1ScoreFun(1);//to increase number pass flag =1
            setReset(1);
          
        }
        else
            if ((box1 === 0 && box2 === 0 && box3 === 0) ||
                (box4 === 0 && box5 === 0 && box6 === 0) ||
                (box7 === 0 && box8 === 0 && box9 === 0) ||
                (box1 === 0 && box4 === 0 && box7 === 0) ||
                (box2 === 0 && box5 === 0 && box8 === 0) ||
                (box3 == 0 && box6 === 0 && box9 === 0) ||
                (box1 === 0 && box5 === 0 && box9 === 0) ||
                (box3 === 0 && box5 === 0 && box7 === 0)
            ) {
                // console.log("O win");
                setPlayer2ScoreFun(1);//to increase number pass flag =1
                setReset(1);
               
            }
            else if ((box1 !== -1 && box2 !== -1 && box3 !== -1 && box4 !== -1 && box5 !== -1 && box6 !== -1 && box7 !== -1
                && box7 !== -1 && box8 !== -1 && box9 !== -1)
            ) {
                // console.log("Tie")
                TieFun(1);//to increase number pass flag =1
                setReset(1);
             
            }
    }, [toggler]
    );
    function box_1_Handler() {
        if (box1 === -1 && choice === 0) {
            setBox1(0);
            setChoice(1);
        }
        else if (box1 === -1 && choice === 1) {
            setBox1(1);
            setChoice(0);
        }
        setToggler(!toggler);
    }

    function box_2_Handler() {
        if (box2 === -1 && choice === 0) {
            setBox2(0);
            setChoice(1);
        }
        else if (box2 === -1 && choice === 1) {
            setBox2(1);
            setChoice(0);
        }
        setToggler(!toggler);
    }

    function box_3_Handler() {
        if (box3 === -1 && choice === 0) {
            setBox3(0);
            setChoice(1);
        }
        else if (box3 === -1 && choice === 1) {
            setBox3(1);
            setChoice(0);
        }
        setToggler(!toggler);
    }

    function box_4_Handler() {
        if (box4 === -1 && choice === 0) {
            setBox4(0);
            setChoice(1);
        }
        else if (box4 === -1 && choice === 1) {
            setBox4(1);
            setChoice(0);
        }
        setToggler(!toggler);
    }

    function box_5_Handler() {
        if (box5 === -1 && choice === 0) {
            setBox5(0);
            setChoice(1);
        }
        else if (box5 === -1 && choice === 1) {
            setBox5(1);
            setChoice(0);
        }
        setToggler(!toggler);
    }

    function box_6_Handler() {
        if (box6 === -1 && choice === 0) {
            setBox6(0);
            setChoice(1);
        }
        else if (box6 === -1 && choice === 1) {
            setBox6(1);
            setChoice(0);
        }
        setToggler(!toggler);
    }

    function box_7_Handler() {
        if (box7 === -1 && choice === 0) {
            setBox7(0);
            setChoice(1);
        }
        else if (box7 === -1 && choice === 1) {
            setBox7(1);
            setChoice(0);
        }
        setToggler(!toggler);

    }

    function box_8_Handler() {
        if (box8 === -1 && choice === 0) {
            setBox8(0);
            setChoice(1);
        }
        else if (box8 === -1 && choice === 1) {
            setBox8(1);
            setChoice(0);
        }
        setToggler(!toggler);

    }

    function box_9_Handler() {
        if (box9 === -1 && choice === 0) {
            setBox9(0);
            setChoice(1);
        }
        else if (box9 === -1 && choice === 1) {
            setBox9(1);
            setChoice(0);
        }
        setToggler(!toggler);
    }

    return (
        <>
            
            <div className='border_outer'>
                {/* box */}
                <div className="border1 border" onClick={box_1_Handler}>
                    {box1 === 1 ? <X_print></X_print> : box1 === 0 ? <O_print></O_print> : ""}
                </div>

                {/* box */}
                <div className="border2 border" onClick={box_2_Handler}>
                    {box2 === 1 ? <X_print></X_print> : box2 === 0 ? <O_print></O_print> : ""}
                </div>

                {/* box */}
                <div className="border3 border" onClick={box_3_Handler}>
                    {box3 === 1 ? <X_print></X_print> : box3 === 0 ? <O_print></O_print> : ""}
                </div>

                {/* box */}
                <div className="border4 border" onClick={box_4_Handler}>
                    {box4 === 1 ? <X_print></X_print> : box4 === 0 ? <O_print></O_print> : ""}
                </div>

                {/* box */}
                <div className="border5 border" onClick={box_5_Handler}>
                    {box5 === 1 ? <X_print></X_print> : box5 === 0 ? <O_print></O_print> : ""}
                </div>

                {/* box */}
                <div className="border6 border" onClick={box_6_Handler}>
                    {box6 === 1 ? <X_print></X_print> : box6 === 0 ? <O_print></O_print> : ""}
                </div>

                {/* box */}
                <div className="border7 border" onClick={box_7_Handler}>
                    {box7 === 1 ? <X_print></X_print> : box7 === 0 ? <O_print></O_print> : ""}
                </div>

                {/* box */}
                <div className="border8 border" onClick={box_8_Handler}>
                    {box8 === 1 ? <X_print></X_print> : box8 === 0 ? <O_print></O_print> : ""}
                </div>

                {/* box */}
                <div className="border9 border" onClick={box_9_Handler}>
                    {box9 === 1 ? <X_print></X_print> : box9 === 0 ? <O_print></O_print> : ""}
                </div>

            </div>
        </>

    )
}
export default Borders;