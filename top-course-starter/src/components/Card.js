import React from 'react'
import { filterData } from '../data';

const Card = ({id, title, description, image}) => {
    const handler = ()=>{
        
    }
    const info= `${description.substring(0, 200)}...`
  return (
    <div>
        <div>
            <img src={image}></img>
        </div>
        <div>
            <h3>{title}</h3>
        </div>
        <div onClick={handler}>
            <p>{info}</p>
        </div>
        <div>
            <button>Not Interested</button>
        </div>
    </div>
  )
}

export default Card