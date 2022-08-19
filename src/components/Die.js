import React from "react"

export default function Die(props){

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "antiquewhite "
        
    }
    
    const theDices = () => {
        if(props.value == 6){
            return <>
                <span className="die-num"></span>
                <span className="die-num"></span>
                <span className="die-num"></span>
                <span className="die-num"></span>
                <span className="die-num"></span>
                <span className="die-num"></span>
            </>
        }
        else if(props.value == 5){
            return <>
                <span className="die-num"></span>
                <span className="die-num"></span>
                <span className="die-num"></span>
                <span className="die-num"></span>
                <span className="die-num"></span>
            </>
        }
        else if (props.value == 4){
            return <>
                <span className="die-num"></span>
                <span className="die-num"></span>
                <span className="die-num"></span>
                <span className="die-num"></span>
            </>
        }
        else if (props.value == 3){
            return <>
                <span className="die-num"></span>
                <span className="die-num"></span>
                <span className="die-num"></span>
            </>
        }
        else if (props.value == 2){
            return <>
                <span className="die-num"></span>
                <span className="die-num"></span>
            </>
        }
        else{
            return <>
                <span className="die-num"></span>
            </>
        }
    }

    return(
        <div className="die-face" style={styles} onClick={props.holdDice}>
            {theDices()}
           
        </div>
    )
}