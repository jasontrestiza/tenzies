import React from "react"
import Die from "./components/Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App(){
    
    const [dice,setDice] = React.useState(allnewDice())
    const [tenzies,setTenzies] = React.useState(false)

    React.useEffect(() => {
        const allHeld = dice.every(held => held.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(sameValue => sameValue.value === firstValue)

        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log("Congrats! You won!")
        }
    }, [dice])

    
 

    function generateNewDice(){

        return {
            value: Math.ceil(Math.random() * 6), 
            isHeld:false,
            diceid:nanoid()

        }
    }

    function allnewDice(){

        const newArray = []

        for(let i = 0; i < 10; i++){
            newArray.push(generateNewDice())
        }
        return newArray
    }

   

    function rollDice(){

        if(!tenzies){
            setDice(oldDice => oldDice.map(newDice => {
                return newDice.isHeld 
                ? newDice
                : generateNewDice()
                
            }))
        }
        else{
            setTenzies(false)
            setDice(allnewDice())
        }

    }

    function holdDice(id){
        setDice(oldDice => oldDice.map(newDice => {
            return newDice.diceid === id 
            ? {
                ...newDice,
                isHeld: !newDice.isHeld
            }
            : newDice
        }))
    }

    const diceElements = dice.map(die => 
        <Die  key = {die.diceid} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.diceid)}/>
    )

    return (
        <main>
            {tenzies && <Confetti/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button onClick={rollDice} className="roll-dice">{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}