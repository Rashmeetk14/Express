import React from 'react'
import Card from './Card';

const Tours = ({tours}) => {
  return (
    <div>
        <div>Plan With Love</div>
        <div>
            {
                tours.map( (tour)=>{
                    return (<Card {...tour}></Card>)

                })

                
            }
        </div>
    </div>
  )
}

export default Tours