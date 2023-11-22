// import React, { useEffect } from 'react'
import { useState,useEffect } from 'react'
import dice1 from './Photos/dice1.png'
import dice2 from './Photos/dice2.png'
import dice3 from './Photos/dice3.png'
import dice4 from './Photos/dice4.png'
import dice5 from './Photos/dice5.png'
import dice6 from './Photos/dice6.png'
import './Dice.css'
function Dice() {
    const  myArray1=[dice1,dice2,dice3,dice4,dice5,dice6
    ]
    const  myArray2=[dice1,dice2,dice3,dice4,dice5,dice6
    ]
    const getRandomIndex=()=>Math.floor(Math.random()*myArray1.length)
    const [img1, setImg1]=useState(myArray1[0]);
    const [img2,setImg2]=useState(myArray2[0])
    
    const changeDice1 = ()=>{
        // let leftNumber=Math.floor(Math.random()*myArray1.length);
        setImg1(myArray1[getRandomIndex()]);
    }
    const changeDice2 = ()=>{
        // let rightNumber=Math.floor(Math.random()*myArray2.length);
    setImg2(myArray2[getRandomIndex()]);
    }

    useEffect (()=>{
        setImg1(myArray1[getRandomIndex()]);
        setImg2(myArray2[getRandomIndex()]);


        // changeDice1();
        // changeDice2();
    }, [])
  return (
    <div className='container'>

            <h2>Dice Roller</h2>
            <div className='main'>
                <div className='left'>
                 <img src={img1} onClick={changeDice1} alt="random"  />
                </div>
                <div className='right'>
<img src={img2} alt="random" onClick={changeDice2}/>
                </div>
            </div>
               

        </div>
  )
}

export default Dice