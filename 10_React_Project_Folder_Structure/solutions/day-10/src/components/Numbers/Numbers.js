import React from 'react'
import '../../styles/Numbers.scss'

function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0) return false
    }
    return num > 1
}

let prime = true

const NumberGenerator = ({numbers}) => {
    const numberList = numbers.map((number, index) => (
        <div className='box' key={index} 
            style={
                isPrime(number) === prime ? {backgroundColor: 'hsl(4, 98%, 66%)'} : 
                isPrime(number) !== prime && number % 2 === 0 ? {backgroundColor: 'hsl(151, 71%, 44%)'} : 
                isPrime(number) !== prime && number % 2 !== 0 ? {backgroundColor: 'hsl(50, 98%, 61%)'} : 
                {backgroundColor: 'transparent'}
        }>
            <p className='number'>{number}</p>
        </div>))
    return numberList
}

const Numbers = () => {
    const numbers = [
        0,1,2,3,4,5,6,
        7,8,9,10,11,12,
        13,14,15,16,17,
        18,19,20,21,22,
        23,24,25,26,27,
        28,29,30,31
    ]

  return (
    <div className='container'>
       <h1 className='heading'>number generator</h1> 
       <p className='text'>number palette</p>
       <div className='number--generator'>
            <NumberGenerator numbers={numbers}/>
       </div>
    </div>
  )
}

export default Numbers