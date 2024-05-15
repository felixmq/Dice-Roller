import images1 from './images/Dice1.png'
import images2 from './images/Dice2.png'
import images3 from './images/Dice3.png'
import images4 from './images/Dice4.png'
import images5 from './images/Dice5.png'
import images6 from './images/Dice6.png'
import { useState } from 'react'

type DiceImages = {
    images1: string;
    images2: string;
    images3: string;
    images4: string;
    images5: string;
    images6: string;
}

const Dice = () => {

    const diceImages: DiceImages = {
        images1,
        images2,
        images3,
        images4,
        images5,
        images6
    }

    // Los valores posibles son las claves de diceImages, por lo tanto deben ser strings
    const diceKeys = Object.keys(diceImages) as (keyof DiceImages)[];

    const [dice, setDice] = useState<string>(diceImages[diceKeys[0]]);
    const [dice1, setDice1] = useState<string>(diceImages[diceKeys[0]]);

    const rollDice = () => {
        let randomNum1 = Math.floor(Math.random() * 6);
        let randomNum2 = Math.floor(Math.random() * 6);
        setDice(diceImages[diceKeys[randomNum1]]);
        setDice1(diceImages[diceKeys[randomNum2]]);
    }

    return (
        <div>
            <div className='py-9'>
                <h1 className="text-center">Dice Roller</h1>
                <div className='flex justify-center items-center'>
                    <img src={dice} alt="" className="h-[300px] w-[300px] bg-black" />
                    <img src={dice1} alt="" className="h-[300px] w-[300px] bg-white p-1" />
                </div>
            </div>
            <button onClick={rollDice} className='text-white bg-black rounded flex p-2 mx-auto'>Dice Roll</button>
        </div>
    )
}

export default Dice